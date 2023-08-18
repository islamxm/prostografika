import { fabric } from 'fabric';
import { ICanvasOptions, Image } from 'fabric/fabric-impl';

class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
  debug: number;
  isInitial: boolean;

  constructor(value: T, prev: Node<T> | null = null, next: Node<T> | null = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.debug = 0;
    this.isInitial = false;
  }
}

class List<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private debugCount: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.debugCount = 0;
  }

  insert(value: T, isInit: boolean = false) {
    if (this.head === null || this.tail === null) {
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }

    const node = new Node(value, this.tail);
    node.isInitial = isInit;
    node.debug = ++this.debugCount;
    this.tail.next = node;
    this.tail = this.tail.next;
  }

  undo() {
    if (this.tail === null || this.tail.prev === null || this.tail.isInitial) {
      return null;
    }

    this.tail = this.tail.prev;
    return this.tail.value;
  }

  redo() {
    if (this.tail === null || this.tail.next === null) {
      return null;
    }

    this.tail = this.tail.next;
    return this.tail.value;
  }

  hasPrev() {
    return this.tail !== null && this.tail.prev !== null && !this.tail.isInitial;
  }

  hasNext() {
    return this.tail !== null && this.tail.next !== null;
  }
}

export class CustomCanvas extends fabric.Canvas {
  private history: List<string>;
  private historyProcessing: boolean;
  private forceRender: () => void;

  constructor(element: HTMLCanvasElement | string | null, forceRender: () => void, options?: ICanvasOptions) {
    super(element, options);

    this.history = new List();
    this.historyProcessing = false;
    this.forceRender = forceRender;

    this.on("object:added", this.historySaveAction);
    this.on("object:removed", this.historySaveAction);
    this.on("object:modified", this.historySaveAction);
    this.on('event:color:backGround', this.historySaveAction);
  }

  initHistory() {
    this.history.insert(this.historyNext(), true);
  }

  historyNext() {
    return JSON.stringify(this.toJSON(['backgroundImage', 'transparentCorners', 'cornerColor', 'cornerStyle']));
  }

  historySaveAction() {
    if (this.historyProcessing) {
      return;
    }

    this.history.insert(this.historyNext());
    this.forceRender();
  }

  undo() {
    const history = this.history.undo();

    if (history === null) {
      return;
    }

    this.historyProcessing = true;
    this.loadFromJSON(history, () => {
      if (!this.history.hasPrev()) {
        this._removeBlendFilter();
      }

      const filter = this._getBlendFilter();
      if (filter && !Object.hasOwn(filter, 'color')) {
        this._removeBlendFilter();
      }

      this.renderAll();
      this.historyProcessing = false;
      this.forceRender();
    });
  }

  redo() {
    const history = this.history.redo();

    if (history === null) {
      return;
    }

    this.historyProcessing = true;
    this.loadFromJSON(history, () => {
      if (!this.history.hasPrev()) {
        this._removeBlendFilter();
      }

      const filter = this._getBlendFilter();
      if (filter && !Object.hasOwn(filter, 'color')) {
        this._removeBlendFilter();
      }

      this.renderAll();
      this.historyProcessing = false;
      this.forceRender();
    });
  }

  hasNext() {
    return this.history.hasNext();
  }

  hasPrev() {
    return this.history.hasPrev();
  }

  private _getBlendFilter(): fabric.IBlendColorFilter | null {
    if (!this.backgroundImage) {
      return null;
    }

    const image = this.backgroundImage as Image;

    if (image.filters === undefined) {
      return null;
    }

    const filters = image.filters as fabric.IBlendColorFilter[];
    return filters[0];
  }

  private _removeBlendFilter() {
    if (this.backgroundImage) {
      const image = this.backgroundImage as Image;
      const filters = image.filters as fabric.IBlendColorFilter[];
      fabric.util.removeFromArray(filters, filters[0]);
      image.applyFilters();
    }
  }
}


export { };