import { Cookies } from "typescript-cookie"

interface I {
    token: string | { [property: string]: string; } | null | undefined,
    isMenuOpen: boolean,
    isLoading: boolean,
    marketId?: number | string

}


const initState: I = {
    token: (Cookies?.get('prostografika-token') && typeof Cookies?.get('prostografika-token') === 'string') ? Cookies?.get('prostografika-token') : null,
    isMenuOpen: false,
    isLoading: false,
    marketId: undefined
}

export default initState;