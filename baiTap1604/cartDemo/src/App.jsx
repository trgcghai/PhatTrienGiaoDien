import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
