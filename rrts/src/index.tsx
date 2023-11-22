import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { App } from "./components/App";


// const store = createStore(reducers, applyMiddleware(thunk));
const store = configureStore({
  reducer: {
    counter: () => 1
  },
  middleware: [thunk]
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector("#root")  
);
