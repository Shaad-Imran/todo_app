import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Render the application into the root element
const rootElement = document.getElementById("root");
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

// Create a root for concurrent mode and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(app);
