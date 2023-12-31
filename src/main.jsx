import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./store";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Render the application into the root element
const rootElement = document.getElementById("root");
const app = (
  <Provider store={appStore}>
    <App />
  </Provider>
);

// Create a root for concurrent mode and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(app);
