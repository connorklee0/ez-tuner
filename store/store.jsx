import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import tuningReducer from "./tuningSlice";
import stringReducer from "./stringSlice";
import guitarReducer from "./guitarSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  tuning: tuningReducer,
  string: stringReducer,
  guitar: guitarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
