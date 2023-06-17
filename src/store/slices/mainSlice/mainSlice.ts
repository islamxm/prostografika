import {createSlice} from '@reduxjs/toolkit';
import initState from '../../initState';


const mainSlice = createSlice({
    name: 'main',
    initialState: initState,
    reducers: {
        main_updateToken: (state, action) => {state.token = action.payload},
        main_deleteToken: state => {state.token = null},
        main_menuClose: state => {state.isMenuOpen = false},
        main_menuOpen: state  => {state.isMenuOpen = true},
        main_updateLoading: (state, action) => {state.isLoading = action.payload},
        main_updateMarketId: (state, action) => {state.marketId = action.payload}
    }
});


const {actions, reducer} = mainSlice;

export default reducer;
export const {
    main_deleteToken,
    main_updateToken,
    main_menuClose,
    main_menuOpen,
    main_updateLoading,
    main_updateMarketId
} = actions

