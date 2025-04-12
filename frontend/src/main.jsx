import { createRoot } from "react-dom/client";
import "./App.css";
import "./Global.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./Context/contextApi.jsx";

createRoot(document.getElementById("root")).render(
    <ContextApi>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextApi>
);
