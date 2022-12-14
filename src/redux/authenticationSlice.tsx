import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import {
  createUser,
  firebaseAppAuth,
  signInUser,
  signOutUser,
} from "../config/firebase/firebase";

export const signUp = createAsyncThunk(
  "authentication/signUp",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await createUser(firebaseAppAuth, email, password);

    return user.user;
  }
);

export const signIn = createAsyncThunk(
  "authentication/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    const user = await signInUser(firebaseAppAuth, email, password);

    return user.user;
  }
);

export const signOut = createAsyncThunk("authentication/signOut", async () => {
  await signOutUser(firebaseAppAuth);
});

export interface AuthenticationState {
  isLogedIn: boolean;
  isLoading: boolean;
}

const initialState: AuthenticationState = {
  isLogedIn: false,
  isLoading: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state) => {
      state.isLogedIn = true;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.isLogedIn = true;
      state.isLoading = false;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.isLogedIn = false;
      state.isLoading = false;
    });
    builder.addCase(signOut.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default authenticationSlice.reducer;
