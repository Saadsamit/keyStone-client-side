import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { myAuthProvider } from "./provider/AuthProvider";

function App() {
  const { logoutUser } =useContext(myAuthProvider);
  return (
    <>
    <button onClick={logoutUser} className="btn">logout</button>
      <Outlet/>
    </>
  )
}

export default App
