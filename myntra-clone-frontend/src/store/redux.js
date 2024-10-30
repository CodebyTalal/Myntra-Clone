import {configureStore, createSlice} from "@reduxjs/toolkit"

const BagSlice = createSlice({
  name:"bag",
  initialState: [],
  reducers:{
    addToBag: (state,action)=>{
        return [action.payload,...state]
    },
    removefromBag:(state,action)=>{
      return state.filter((i)=>i.id !==action.payload.id)    }
  }
})
const WishlistSlice = createSlice({
  name:"wishlist",
  initialState: [],
  reducers:{
    addToWishlist: (state,action)=>{
        return [action.payload,...state]
    },
    removefromWishlist:(state,action)=>{
      return state.filter((i)=>i.id !==action.payload.id)    }
  }
})
const summarySlice = createSlice({
  name:"summary",
  initialState: {totalMRP:0,totalDiscount:0,totalItem:0,finalPayment:0,CONVENIENCE_FEES:99},
  reducers:{
    addSummary: (state,action)=>{
      state.totalMRP += action.payload.original_price;
      state.totalDiscount += action.payload.original_price - action.payload.current_price;
      state.finalPayment = state.totalMRP - state.totalDiscount + state.CONVENIENCE_FEES;
  },
    removeSummary: (state,action)=>{ 
      state.totalMRP -= action.payload.original_price;
      state.totalDiscount -= action.payload.original_price - action.payload.current_price;
      state.finalPayment -= action.payload.current_price;
  }
}})
const itemsSlice = createSlice({
  name:"items",
  initialState: [],
  reducers:{
    addInitialItems: (state,action)=>{
     return action.payload;
  },
}})
const discountSlice = createSlice({
  name:"discount",
  initialState: 0,
  reducers:{
    setDiscount: (state,action)=>{
     return action.payload;
  },
}})

const filteredItemsSlice = createSlice({
  name: "filteredItems",
  initialState: [],
  reducers: {
    setFilteredItems: (state, action) => action.payload
  },
});
const categoryItemsSlice = createSlice({
  name:"categoryItems",
  initialState: "",
  reducers:{
    setCategory: (state,action)=>{
      localStorage.setItem("Category",action.payload)
  },
}})
const checkSlice = createSlice({
  name:"check",
  initialState: [],
  reducers:{
    setCheck: (state,action)=>{
      if(!state.includes(action.payload)){
        state.push(action.payload)
      }
  },
  removeCheck: (state,action)=>{
      let newState = state.filter(i=>i!==action.payload)
      return newState
  },
}})
const hoverSlice = createSlice({
  name:"hover",
  initialState: false,
  reducers:{
    setHover: (state)=>{
    return state = !state
  },
}})

const fetchStatusSlice = createSlice({
  name:"fetchStatus",
  initialState: {fetched:false,currentlyFetching:false},
  reducers:{
    markFetched: (state)=>{
     state.fetched =true
  },
    fetchStarted: (state)=>{
     state.currentlyFetching =true
  },
    fetchFinished: (state)=>{
     state.currentlyFetching =false
  }
}})




const ItemsStore = configureStore({reducer:{bag:BagSlice.reducer,summary:summarySlice.reducer,items:itemsSlice.reducer,fetchStatus:fetchStatusSlice.reducer,wishlist: WishlistSlice.reducer,hover:hoverSlice.reducer,categoryItems:categoryItemsSlice.reducer,check:checkSlice.reducer,filteredItems:filteredItemsSlice.reducer,discount:discountSlice.reducer}})

export default ItemsStore;
export const BagAction = BagSlice.actions;
export const summaryAction = summarySlice.actions;
export const itemsAction = itemsSlice.actions;
export const fetchStatusAction = fetchStatusSlice.actions;
export const wishlistAction = WishlistSlice.actions;
export const hoverAction = hoverSlice.actions;
export const categoryItemsAction = categoryItemsSlice.actions;
export const checkAction = checkSlice.actions;
export const filteredItemsAction = filteredItemsSlice.actions;
export const discountAction = discountSlice.actions;