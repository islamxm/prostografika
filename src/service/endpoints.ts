export const PATH_PEBBLELY = 'https://api.pebblely.com/';
export const PATH_MAIN_API = 'https://vsegdaprosto1.fvds.ru/api/'



const endpoints = {
    // optional
    // pebGetCredits: `${PATH_PEBBLELY}credits/v1/`,



    // pebCreateBg: `${PATH_PEBBLELY}create-background/v1/`,
    // pebRemoveBg: `${PATH_PEBBLELY}remove-background/v1/`,




    //main api endpoints

    

    // AUTH
    auth: `${PATH_MAIN_API}auth/`,
    join: `${PATH_MAIN_API}users/`,


    // MARKETPLACES
    markets: `${PATH_MAIN_API}marketplaces/`
}

export default endpoints;