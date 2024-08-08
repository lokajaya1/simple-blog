import { Router } from "react-router-dom";
import "./App.css";
import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router";

function App() {
  const user = {
    username: "Lokajaya",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
