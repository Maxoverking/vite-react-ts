import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/storeStateInterface";
import { setTokenObject } from "../../types/user";
import { logInUser, logOut, refreshUser, registerUser } from "./authOperation";

export const initAuthState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogin: false,
  isLoginAlready: false,
  _persist: {
    version: 0,
    rehydrated: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    setToken: (state, { payload }: PayloadAction<setTokenObject>) => {
      state.token = payload.token;
      state.isLogin = payload.isHaveToken;
    },
    logoutUserAction: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = payload.isLogin;
      state.isLoginAlready = payload.isLoginAlready;
      state._persist = payload._persist;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoginAlready = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoginAlready = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLogin = false;
        state.isLoginAlready = false;
      })
      .addCase(logInUser.pending, (state) => {
        state.isLoginAlready = true;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoginAlready = false;
      })
      .addCase(logInUser.rejected, (state) => {
        state.isLogin = false;
        state.isLoginAlready = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoginAlready = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoginAlready = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLogin = false;
        state.isLoginAlready = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoginAlready = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
        state.isLoginAlready = false;
        state._persist = {
          version: 0,
          rehydrated: false,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
export const { setToken, logoutUserAction } = authSlice.actions;

// export const { authRegisterSliceAction, authLogoutSliceAction } =
//   authSlice.actions;

// export const authReducer = (
//   state = initAuthState,
//   { type, payload }: AnyAction
// ) => {
//   switch (type) {
//     case LOGIN:
//       return payload;
//     case LOGOUT:
//       return payload;
//     default:
//       return state;
//   }
// };

// reducers: {
//   authRegisterSliceAction: (state, { payload }) => (state = payload),
//   authLogoutSliceAction: (state, { payload }) => (state = payload),
// },

// builder.addCase(registerUser2.fulfilled, (state, action) => {
//   // Обновление состояния на основе полученных данных
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLogin = true;
// });

// export const logoutUser = async () => {
//   try {
//     const storedToken: string | null = await storage.getItem(
//       "persist:phoneBook"
//     );
//     const { token } = JSON.parse(storedToken as string);
//     const tokenWithoutQuotes = token.replace(/"/g, "");
//     axiosRequest.defaults.headers.common.Authorization = `Bearer ${tokenWithoutQuotes}`;
//     await axiosRequest.post("/users/logout");
//     axiosRequest.defaults.headers.common.Authorization = ``;
//   } catch (error) {
//     console.log("🚀  error:", error);
//   }
// };
