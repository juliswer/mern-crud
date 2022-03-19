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
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import es from 'javascript-time-ago/locale/es'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(es)

ReactDOM.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>,
  document.getElementById("root")
);
