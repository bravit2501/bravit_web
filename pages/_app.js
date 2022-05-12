import "../styles/globals.css";
import "../styles/Home.module.css";
import { PresistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { useStore } from "react-redux";
import { wrapper } from "../redux/store";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <StateContext>
      <Provider store={store}>
        {/* <PresistGate loading={null} persistor={store.__presistor}> */}
        <Toaster />
        <Component {...pageProps} />
        {/* </PresistGate> */}
      </Provider>
    </StateContext>
  );
}

export default wrapper.withRedux(MyApp);
