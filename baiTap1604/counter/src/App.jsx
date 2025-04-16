import { Outlet } from "react-router-dom";
import "./App.css";
import CounterReducer from "./components/CounterReducer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div class="h-screen flex items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </>
  );
}

export default App;
