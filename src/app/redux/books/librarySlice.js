import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const FETCH_BOOKS_URL = 'http://localhost:3002/books';

// dispatch(fetchBooks())
export const fetchBooks = createAsyncThunk(
  'library/fetchBooks',
  async () => {
    // before making async call, automatically an action `fetchBooks.pending` will be sent to redux
    const { data: books } = await axios.get(FETCH_BOOKS_URL);
    return books;
  }
)

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    books: [],
    isBooksLoading: false,
    isBooksError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isBooksLoading = true;
      state.isBooksError = false;
    })
    .addCase(fetchBooks.rejected, (state) => {
      state.isBooksLoading = false;
      state.isBooksError = true;
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      const { payload } = action;
      state.books = payload;

      state.isBooksLoading = false;
      state.isBooksError = false;
    })
  }
});

export const { initBooks } = librarySlice.actions;

export default librarySlice.reducer;