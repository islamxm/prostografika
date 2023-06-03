import endpoints from "./endpoints";

const headers = {
    "Content-Type": "application/json",
}

class MainApi {


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
            return await res?.json()
        } catch(err) {
            console.log(err)
        }
    }
}

export default MainApi