import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { BrowserRouter } from "react-router-dom";
import ReduxThunk from "redux-thunk";
import { Router } from "./routes/Routes";

//reducers
import UsersReducer from "./store/reducers/users";
import AuthReducer from "./store/reducers/auth";
//PERSIST
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedCombinedReducer = persistCombineReducers(persistConfig, {
  usersReducer: UsersReducer,
  authReducer: AuthReducer,
});

const reduxStore = createStore(
  persistedCombinedReducer,
  applyMiddleware(ReduxThunk)
);
const persistor = persistStore(reduxStore);
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
