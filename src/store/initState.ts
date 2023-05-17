import { Cookies } from "typescript-cookie"

interface I {
    token: string | { [property: string]: string; } | null | undefined,
    isMenuOpen: boolean
}


const initState: I = {
    // token: (Cookies?.get('prostografika-token') && typeof Cookies?.get('prostografika-token') === 'string') ? Cookies?.get('prostografika-token') : null,
    token: 'token',
    isMenuOpen: false,

}

export default initState;