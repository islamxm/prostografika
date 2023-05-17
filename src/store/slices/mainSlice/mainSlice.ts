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
    }
});


const {actions, reducer} = mainSlice;

export default reducer;
export const {
    main_deleteToken,
    main_updateToken,
    main_menuClose,
    main_menuOpen
} = actions

