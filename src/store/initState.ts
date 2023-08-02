import { Cookies } from "typescript-cookie";

interface I {
  token: string | { [property: string]: string; } | null | undefined,
  isMenuOpen: boolean,
  isLoading: boolean,
  marketId?: number | string,
  currentCanvas: any
  markets: IMarket[]
  selectedMarket: IMarket | null
}

interface IMarket {
  color: string
  id: number
  size_x: number
  size_y: number
  title: string
}

const initState: I = {
  token: (Cookies?.get('prostografika-token') && typeof Cookies?.get('prostografika-token') === 'string') ? Cookies?.get('prostografika-token') : null,
  isMenuOpen: false,
  isLoading: false,
  marketId: undefined,
  currentCanvas: null,
  markets: [],
  selectedMarket: null
};

export default initState;