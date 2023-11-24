import { Outlet } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";

function App() {
  return (
    <div className="font-Roboto">
    <HeaderNav/>
    <Outlet/>
    </div>
  )
}

export default App
