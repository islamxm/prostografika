export const PATH_PEBBLELY = 'https://api.pebblely.com/';
export const PATH_MAIN_API = 'http://vsegdaprosto1.fvds.ru/api/'



const endpoints = {
    // optional
    pebGetCredits: `${PATH_PEBBLELY}credits/v1/`,



    pebCreateBg: `${PATH_PEBBLELY}create-background/v1/`,
    pebRemoveBg: `${PATH_PEBBLELY}remove-background/v1/`,




    //main api endpoints

    fileToBase64: `${PATH_MAIN_API}utility/2b64/`,
    auth: `${PATH_MAIN_API}auth/`,
    join: `${PATH_MAIN_API}users/`
}

export default endpoints;