import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import './App.css'

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
