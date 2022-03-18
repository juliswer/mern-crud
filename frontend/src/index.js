import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "./UI/Layout";
import "./css/global.css";
import "animate.css";

ReactDOM.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>,
  document.getElementById("root")
);
