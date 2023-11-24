import { Outlet } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-Roboto">
    <HeaderNav/>
    <div className="min-h-[calc(100vh-288px)]">
    <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
