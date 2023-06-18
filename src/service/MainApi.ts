import endpoints from "./endpoints";
import checkAuth from "./checkAuth";

const headers = {
    "Content-Type": "application/json",
}

class MainApi {
    peb_credits = async (token: any) => {
        try {
            let res = await fetch(endpoints.peb_credits, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }


    peb_removeBg = async (token:any, body: {image: string}) => {
        try {
            let res = await fetch(endpoints.peb_removeBg, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`
                },
                body: JSON.stringify(body)
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }

    peb_createBg = async (token: any) => {
        try {
            let res = await fetch(endpoints.peb_createBg, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }

    getBase64 = async (token: any, body: FormData) => {
        try {
            let res = await fetch(endpoints.file2b64, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`
                },
                body
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }

    auth = async (body: {password: string, phone: string}) => {
        try {
            let res = await fetch(endpoints.auth, {
                method: 'POST',
                headers,
                body: JSON.stringify(body)
            })

            return await res?.json()
        } catch(err) {
            console.log(err)
        }
    }

    join = async (body: {
        password: string,
        last_login: string,
        is_superuser: boolean,
        phone: string,
        email: string,
        username: string,
        is_active: boolean,
        is_staff: boolean,
        date_joined: string,
        ref_id: string,
        subscription_is_active_until: string,
        generates: string,
        groups: any,
        user_permissions: any
    }) => {
        try {
            let res = await fetch(endpoints.join, {
                method: 'POST',
                headers,
                body:JSON.stringify(body)
            }) 
            return await res?.json()
        } catch(err) {
            console.log(err)
        }
    }


    getUserData = async () => {
        try {
            let res = await fetch(endpoints.join, {
                method: 'POST',
                headers,
                
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }


    getMarkets = async (
        token: any, 
        {
            limit, 
            offset
        }: 
        {
            limit: 10, 
            offset: 0
        } = 
        {
            limit: 10, 
            offset: 0
        }) => {
        try {
            let res = await fetch(endpoints.markets + `?limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }


    getMarket = async (id: number | string, token?: any) => {
        try {
            let res = await fetch(endpoints.markets + id, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }


    getPlans = async (
        token: any,
        {
            limit, 
            offset
        }: 
        {
            limit: 10, 
            offset: 0
        } = 
        {
            limit: 10, 
            offset: 0
        }
    ) => {
        try {
            let res = await fetch(endpoints.tarif + `?limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }


    getCards = async (
        token: any,
        {
            limit, 
            offset
        }: 
        {
            limit: 10, 
            offset: 0
        } = 
        {
            limit: 10, 
            offset: 0
        }
    ) => {
        try {
            let res = await fetch(endpoints.cards + `?limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: {
                    ...headers,
                    'Authorization': `Token ${token}`
                },
            })
            const r = await checkAuth(res)
            return await r
        } catch(err) {
            console.log(err)
        }
    }

}

export default MainApi