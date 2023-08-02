import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MainApi from '@service/MainApi';

import initState from '../../initState';

const service = new MainApi();

export const fetchMarkets = createAsyncThunk(
  'main/fetchMarkets',
  async (token: string, { dispatch }) => {
    dispatch(main_updateLoading(true));
    const response = await service.getMarkets(token);
    return response.results;
  }
);

const mainSlice = createSlice({
  name: 'main',
  initialState: initState,
  reducers: {
    main_updateToken: (state, action) => { state.token = action.payload; },
    main_deleteToken: state => { state.token = null; },
    main_menuClose: state => { state.isMenuOpen = false; },
    main_menuOpen: state => { state.isMenuOpen = true; },
    main_updateLoading: (state, action) => { state.isLoading = action.payload; },
    main_updateMarketId: (state, action) => {
      state.marketId = action.payload;
      state.selectedMarket = state.markets.find((m) => m.id === action.payload) ?? null;
    },
    main_updateCurrentCanvas: (state, action) => { state.currentCanvas = action.payload; }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.isLoading = false;
    });
  }
});


const { actions, reducer } = mainSlice;

export default reducer;
export const {
  main_deleteToken,
  main_updateToken,
  main_menuClose,
  main_menuOpen,
  main_updateLoading,
  main_updateMarketId,
  main_updateCurrentCanvas,
} = actions;

