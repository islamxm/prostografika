import pebBgThemesType from "../models/pebBgThemesType";
import endpoints from "./endpoints";

const headers = {
  "Content-Type": "application/json",
};


class PebApi {

  // getCredits = async (token: string) => {
  //     try {
  //         let res = await fetch(endpoints.pebGetCredits, {
  //             headers: {
  //                 "X-Pebblely-Access-Token": `${token}`
  //             }
  //         })
  //         return await res?.json()
  //     } catch(err) {
  //         console.log(err)
  //     }
  // }

  // createBg = async (body: {
  //     image?: string,
  //     theme?: string | pebBgThemesType,
  //     description?: string,
  // }, token: string) => {
  //     try {
  //         let res = await fetch(endpoints.pebCreateBg, {
  //             method: 'POST',
  //             headers: {
  //                 ...headers,
  //                 "X-Pebblely-Access-Token": `${token}`
  //             },
  //             body: JSON.stringify(body)
  //         })

  //         return await res?.json()
  //     } catch(err) {
  //         console.log(err)
  //     }
  // }

  // removeBg = async (body: {
  //     image: string
  // }, token: string) => {
  //     try {
  //         let res = await fetch(endpoints.pebRemoveBg, {
  //             // credentials: 'include',
  //             method: 'POST',
  //             headers: {
  //                 ...headers,
  //                 "X-Pebblely-Access-Token": `${token}`
  //             },
  //             body: JSON.stringify(body)
  //         })
  //         return await res?.json()
  //     } catch(err) {
  //         console.log(err)
  //     }
  // }
}

export default PebApi;