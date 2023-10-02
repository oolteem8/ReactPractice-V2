import { StrictMode } from "react"
import { React } from "react"
import { createRoot } from "react-dom/client"
import Navbar from "./Navbar"
import Header from "./Header"
import MainContent from "./MainContent"
import "./style.css"
// import "./style.css"
// import ReactLogo from "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <div>
            <Navbar />
            <Header />
            <MainContent />
        </div>
    </StrictMode>
);