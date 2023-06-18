import { Cookies } from "typescript-cookie";

const checkAuth = (res: Response) => {
    if(res?.status === 401) {
        Cookies.remove('prostografika-token')
    } else {
        return res?.json()
    }
}


export default checkAuth;