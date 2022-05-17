import "../styles/globals.css";
import "../styles/Home.module.css";
import { Provider, useStore } from "react-redux";
import { wrapper } from "../redux/store";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "../Components/ContactUs/WhatsAppButton";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <StateContext>
      <Provider store={store}>
        <Toaster />
        <WhatsAppButton />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default wrapper.withRedux(MyApp);
