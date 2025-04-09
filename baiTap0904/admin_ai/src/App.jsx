import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid min-h-screen grid-cols-[264px_1fr]">
      <Sidebar />
      <main className="bg-gray-50">
        <Header />
        <div className="container mx-auto px-8 py-6"></div>
      </main>
    </div>
  );
}

export default App;
