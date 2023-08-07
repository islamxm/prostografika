import { Cookies } from "typescript-cookie";

interface I {
  token: string | { [property: string]: string; } | null | undefined,
  isMenuOpen: boolean,
  isLoading: boolean,
  marketId?: number | string,
  currentCanvas: ICanvasJSON | null
  markets: IMarket[]
  selectedMarket: IMarket | null
  selectedTemplate: TTemplate | null
  premadeTemplates: TPremadeTemplate[]
  generatedTemplates: TGeneratedTemplate[]
  cardSize: { width: number, height: number }
}

export interface IMarket {
  color: string
  id: number
  size_x: number
  size_y: number
  title: string
}

interface IColorTemplate {
  type: "color"
}

interface IImageTemplate {
  type: "image",
  image: string
}

export type TGeneratedTemplate = {
  type: "generated"
  name: string,
  value: string,
  image: string
}

export type TPremadeTemplate = IColorTemplate | IImageTemplate
export type TTemplate = TGeneratedTemplate | TPremadeTemplate

interface ICanvasJSON {
  version: string,
  objects: fabric.Object[]
}

const initState: I = {
  token: (Cookies?.get('prostografika-token') && typeof Cookies?.get('prostografika-token') === 'string') ? Cookies?.get('prostografika-token') : null,
  isMenuOpen: false,
  isLoading: false,
  marketId: undefined,
  currentCanvas: null,
  markets: [],
  selectedMarket: null,
  selectedTemplate: null,
  premadeTemplates: [],
  generatedTemplates: [],
  cardSize: { width: 0, height: 0 }
};

export default initState;