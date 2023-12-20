import "./App.css";
import Options from "./components/Options";

function App() {
  return (
    <main className="flex items-center gap-4 flex-col min-h-screen">
      <h1 className="text-3xl text-center font-bold underline">
      Tooltip using React & Tailwind CSS</h1>
      <Options className="h-screen w-screen"/>
      
    </main>
  );
}

export default App;
