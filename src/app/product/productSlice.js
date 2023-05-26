import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addTaskAsync.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(addTaskAsync.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.tasks.push(action.payload);
  //     });
  // },
});

export const { addTask } = productSlice.actions;
export const selectProduct = (state) => state.products;
export default productSlice.reducer;
