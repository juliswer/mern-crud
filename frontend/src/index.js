import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "./UI/Layout";

ReactDOM.render(
  <Layout>
    <Router>
      <App />
    </Router>
  </Layout>,
  document.getElementById("root")
);
