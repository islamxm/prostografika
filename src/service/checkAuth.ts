import { Cookies } from "typescript-cookie";

const checkAuth = (res: Response) => {
    if(res?.status === 401) {
        Cookies.remove('prostografika-token')
        window.location.replace(window.location.origin + '/auth')
    } else {
        return res?.json()
    }
}


export default checkAuth;