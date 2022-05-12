import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import user from "./userSlice";
import uiSlice from "./uiSlice";

const rootReducer = combineReducers({
  user,
  uiSlice,
});
const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore({
      reducer: rootReducer,
    });
  } else {
    const persistConfig = {
      key: "root",
      version: 1,
      whitelist: ["user"],
      blacklist: [],
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    });
    store.__presistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
