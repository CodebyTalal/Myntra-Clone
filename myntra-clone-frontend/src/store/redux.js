import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Bag Slice
const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => [action.payload, ...state],
    removefromBag: (state, action) =>
      state.filter((i) => i.id !== action.payload.id),
  },
});

// Wishlist Slice
const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => [action.payload, ...state],
    removefromWishlist: (state, action) =>
      state.filter((i) => i.id !== action.payload.id),
  },
});

// Summary Slice
const summarySlice = createSlice({
  name: "summary",
  initialState: {
    totalMRP: 0,
    totalDiscount: 0,
    totalItem: 0,
    finalPayment: 0,
    CONVENIENCE_FEES: 99,
  },
  reducers: {
    addSummary: (state, action) => {
      state.totalMRP += action.payload.original_price;
      state.totalDiscount +=
        action.payload.original_price - action.payload.current_price;
      state.finalPayment =
        state.totalMRP - state.totalDiscount + state.CONVENIENCE_FEES;
    },
    removeSummary: (state, action) => {
      state.totalMRP -= action.payload.original_price;
      state.totalDiscount -=
        action.payload.original_price - action.payload.current_price;
      state.finalPayment -= action.payload.current_price;
    },
    resetItems: () => ({
      totalMRP: 0,
      totalDiscount: 0,
      totalItem: 0,
      finalPayment: 0,
      CONVENIENCE_FEES: 99,
    })
  },
});

// Items Slice
const itemsSlice = createSlice({
  name: "items",
  initialState: {},
  reducers: {
    addInitialItems: (state, action) => action.payload,
    resetItems: ()=>{}
  },
});

// Items Data Slice
const itemsdataSlice = createSlice({
  name: "itemsdata",
  initialState: [],
  reducers: {
    addCategoryItems: (state, action) => action.payload,
    resetItems: () =>[]
  },
});

// Category Items Slice
const categoryItemsSlice = createSlice({
  name: "categoryItems",
  initialState: "",
  reducers: {
    setCategory: (state, action) => action.payload,
  },
});

// Check Slice
const checkSlice = createSlice({
  name: "check",
  initialState: [],
  reducers: {
    setCheck: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeCheck: (state, action) => {
      return state.filter((i) => i !== action.payload);
    },
    resetItems:()=>[]
    },
});

// Hover Slice
const hoverSlice = createSlice({
  name: "hover",
  initialState: false,
  reducers: {
    setHover: (state) => !state,
  },
});

// Fetch Status Slice
const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetched: false, currentlyFetching: false },
  reducers: {
    markFetched: (state) => {
      state.fetched = true;
    },
    fetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    fetchFinished: (state) => {
      state.currentlyFetching = false;
    },
    resetItems:()=>[]
  },
});

// Discount Slice
const discountSlice = createSlice({
  name: "discount",
  initialState: 0,
  reducers: {
    setDiscount: (state, action) => action.payload,
    resetItems:()=>[]
  },
});

// Filtered Items Slice
const filteredItemsSlice = createSlice({
  name: "filteredItems",
  initialState: [],
  reducers: {
    setFilteredItems: (state, action) => action.payload,
    resetItems:()=>[]
  },
});
// Root Reducer
const rootReducer = combineReducers({
  bag: BagSlice.reducer,
  wishlist: WishlistSlice.reducer,
  summary: summarySlice.reducer,
  items: itemsSlice.reducer,
  itemsdata: itemsdataSlice.reducer,
  categoryItems: categoryItemsSlice.reducer,
  check: checkSlice.reducer,
  hover: hoverSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,
  discount: discountSlice.reducer,
  filteredItems: filteredItemsSlice.reducer,
});

// Persist Configuration
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["bag", "wishlist", "items", "itemsdata", "categoryItems", "fetchStatus", "discount", "filteredItems","hover", "check"], // Specify which slices to persist
  blacklist: [ "items","filteredItems","check","discount","fetchStatus"],
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store Configuration
export const ItemsStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(ItemsStore);

// Export Actions
export const BagAction = BagSlice.actions;
export const wishlistAction = WishlistSlice.actions;
export const summaryAction = summarySlice.actions;
export const itemsAction = itemsSlice.actions;
export const itemsdataAction = itemsdataSlice.actions;
export const categoryItemsAction = categoryItemsSlice.actions;
export const checkAction = checkSlice.actions;
export const hoverAction = hoverSlice.actions;
export const fetchStatusAction = fetchStatusSlice.actions;
export const discountAction = discountSlice.actions;
export const filteredItemsAction = filteredItemsSlice.actions;
