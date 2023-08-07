export const PATH_PEBBLELY = 'https://api.pebblely.com/';
export const PATH_MAIN_API = 'https://vsegdaprosto1.fvds.ru/api/';

const endpoints = {
  //main api endpoints
  // AUTH
  auth: `${PATH_MAIN_API}auth/`,
  join: `${PATH_MAIN_API}users/`,

  // MARKETPLACES
  markets: `${PATH_MAIN_API}marketplaces/`,

  //TARIFF
  tarif: `${PATH_MAIN_API}tariff/`,

  //CARDS
  cards: `${PATH_MAIN_API}cart/`,

  peb_credits: `${PATH_MAIN_API}api_proxy/credits/`,
  peb_removeBg: `${PATH_MAIN_API}api_proxy/remove-background/`,
  peb_createBg: `${PATH_MAIN_API}api_proxy/create-background/`,

  file2b64: `${PATH_MAIN_API}utility/file2b64/`,
  templates: (type: 'premade' | 'generating') => `${PATH_MAIN_API}templates/${type}/`,
  gradients: `${PATH_MAIN_API}gradients`
};




export default endpoints;