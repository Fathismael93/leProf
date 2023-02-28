// features/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (draft, action) => {
      draft.user = action.payload;
    },
    logout: (draft) => {
      draft.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
