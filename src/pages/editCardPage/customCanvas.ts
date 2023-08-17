import { fabric } from 'fabric';
import { ICanvasOptions } from 'fabric/fabric-impl';

export class CustomCanvas extends fabric.Canvas {
  private historyUndo: string[];
  private historyNextState: any;
  private historyProcessing: boolean;

  constructor(element: HTMLCanvasElement | string | null, options?: ICanvasOptions) {
    super(element, options);

    this.historyNextState = '';
    this.historyUndo = [];
    this.historyProcessing = false;

    this.on("object:added", this.historySaveAction);
    this.on("object:removed", this.historySaveAction);
    this.on("object:modified", this.historySaveAction);
    // this.on('bgChange', this.historySaveAction);
  }

  initHistory() {
    this.historyUndo = [];
    this.historyNextState = '';
    this.historySaveAction();
  }

  historyNext() {
    return JSON.stringify(this.toJSON(['filters', 'backgroundImage', 'transparentCorners', 'cornerColor', 'cornerStyle']));
  }

  historySaveAction() {
    if (this.historyProcessing) {
      return;
    }

    const json = this.historyNextState;
    this.historyUndo.push(json);
    this.historyNextState = this.historyNext();
    console.log(this.historyUndo);

  }

  undo() {
    if (this.historyUndo.length === 1) {
      return;
    }

    this.historyProcessing = true;
    const history = this.historyUndo.pop();

    if (history) {
      this.loadFromJSON(history, () => {
        this.renderAll();
        this.historyProcessing = false;
      });
    }
  }
}


export { };