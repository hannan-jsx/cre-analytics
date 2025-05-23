import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  isLogin: false,
  user: null,
  isSidebarCollapsed: false,
  fcmToken: "abc",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  //   reducer needs a map
  reducers: {
    SaveFcmToken(state, action) {
      state.fcmToken = action.payload.fcmToken;
    },
    saveLoginUserData(state, action) {
      state.user = action.payload?.data?.user;
      state.isLogin = true;
      state.access_token = action.payload?.data?.token;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    signOutRequest(state) {
      state.access_token = "";
      state.isLogin = false;
      state.user = null;
    },
    ToggleDrawer(state, action) {
      state.isSidebarCollapsed = action.payload;
    },
    updateToken(state, action) {
      state.access_token = action.payload;
    },
    setSideBarCollapsed(state, action) {
      state.isSidebarCollapsed = action.payload;
    },
  },
});

export const {
  SaveFcmToken,
  saveLoginUserData,
  signOutRequest,
  ToggleDrawer,
  updateUser,
  updateToken,
  setSideBarCollapsed,
} = authSlice.actions;

export default authSlice.reducer;
