import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import configStore from "./redux/index"
import { persistStore } from "redux-persist"
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"

const redux = configStore()
const persistor = persistStore(redux)

ReactDOM.render(
  <Provider store={redux}>
      <PersistGate persistor={persistor} loading={<div>loading..</div>}>
          <Routers />
      </PersistGate>
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
