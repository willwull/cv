import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";

library.add(fad);

ReactDOM.render(<Page />, document.getElementById("root"));
