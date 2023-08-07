import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import MainApi from '@service/MainApi';
import { RootState } from '@store/store';

import initState, { TTemplate } from '../../initState';

const service = new MainApi();

export const fetchMarkets = createAsyncThunk(
  'main/fetchMarkets',
  async (token: string, { dispatch }) => {
    dispatch(main_updateLoading(true));
    return (await service.getMarkets(token)).results;
  }
);

export const fetchPremadeTemplates = createAsyncThunk(
  'main/fetchPremadeTemplates',
  async (someParams, { dispatch, getState }) => {
    const { mainReducer } = getState() as RootState;
    dispatch(main_updateLoading(true));
    return await service.getPremadeTemplates(mainReducer.token as string);
  }
);

export const fetchGeneratingTemplates = createAsyncThunk(
  'main/fetchGeneratingTemplates',
  async function (someParams, { dispatch, getState }) {
    const { mainReducer } = getState() as RootState;
    dispatch(main_updateLoading(true));
    return await service.getGeneratingTemplates(mainReducer.token as string);
  }
);

export const fetchGradients = createAsyncThunk(
  'main/fetchGradients',
  async function (someParams, { dispatch, getState }) {
    const { mainReducer } = getState() as RootState;
    dispatch(main_updateLoading(true));
    return await service.getGradients(mainReducer.token as string);
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
    main_updateCurrentCanvas: (state, action) => { state.currentCanvas = action.payload; },
    setSelectedTemplate(state, action: PayloadAction<TTemplate>) {
      state.selectedTemplate = action.payload;
    },
    setCardSize(state, action: PayloadAction<{ width: number, height: number }>) {
      state.cardSize = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.isLoading = false;
    }).addCase(fetchPremadeTemplates.fulfilled, (state, action) => {
      state.premadeTemplates = action.payload;
      state.isLoading = false;
    }).addCase(fetchGeneratingTemplates.fulfilled, (state, action) => {
      state.generatedTemplates = action.payload;
      state.isLoading = false;
    }).addCase(fetchGradients.fulfilled, (state, action) => {
      state.gradients = action.payload;
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
  setSelectedTemplate,
  setCardSize
} = actions;

