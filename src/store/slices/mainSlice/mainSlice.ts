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

    // return [
    //   {
    //     "id": 1,
    //     "title": "Wildberries",
    //     "color": "#8343A3",
    //     "size_x": 900,
    //     "size_y": 1200
    //   },
    //   {
    //     "id": 2,
    //     "title": "Ozon",
    //     "color": "#51ABFF",
    //     "size_x": 900,
    //     "size_y": 1200
    //   },
    //   {
    //     "id": 3,
    //     "title": "Яндекс Маркет",
    //     "color": "#F5C400",
    //     "size_x": 300,
    //     "size_y": 300
    //   }
    // ];
  }
);

export const fetchPremadeTemplates = createAsyncThunk(
  'main/fetchPremadeTemplates',
  async (someParams, { dispatch, getState }) => {
    const { mainReducer } = getState() as RootState;
    dispatch(main_updateLoading(true));
    return await service.getPremadeTemplates(mainReducer.token as string);

    // const tempPremadeTemplates: any[] = [
    //   {
    //     id: 3,
    //     image: service.getTestBgBase641()
    //   },
    //   {
    //     id: 4,
    //     image: service.getTestBgBase642()
    //   },
    // ];

    // return tempPremadeTemplates;
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

    // const gradients = [
    //   {
    //     colors: [
    //       {
    //         color: "#00D1FF",
    //         offset: 0
    //       },
    //       {
    //         color: "#AD00FF",
    //         offset: 1
    //       },
    //     ],
    //     type: "linear" as const,
    //     angle: 139
    //   },
    //   {
    //     colors: [
    //       {
    //         color: "red",
    //         offset: 0.5
    //       },
    //       {
    //         color: "green",
    //         offset: 1
    //       },
    //     ],
    //     type: "linear" as const,
    //     angle: 45
    //   },
    //   {
    //     colors: [
    //       {
    //         color: "green",
    //         offset: 0.5
    //       },
    //       {
    //         color: "blue",
    //         offset: 1
    //       },
    //     ],
    //     type: "linear" as const,
    //     angle: 145
    //   },
    //   {
    //     colors: [
    //       {
    //         color: "purple",
    //         offset: 0
    //       },
    //       {
    //         color: "#AD00FF",
    //         offset: 1
    //       },
    //     ],
    //     type: "linear" as const,
    //     angle: 245
    //   }
    // ];

    // return gradients;
  }
);

export const fetchSvgs = createAsyncThunk(
  'main/fetchSvgs',
  async function (someParams, { dispatch, getState }) {
    const { mainReducer } = getState() as RootState;
    dispatch(main_updateLoading(true));
    return await service.getSvgs(mainReducer.token as string);
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
    }).addCase(fetchSvgs.fulfilled, (state, action) => {
      state.svgCollections = action.payload;
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

