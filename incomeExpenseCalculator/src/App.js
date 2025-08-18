import logo from "./logo.svg";
import "./App.css";
import A from "./components/A";
import { createContext } from "react";
import BudgetTracker from "./components/BudgetTracker";

export const nameContext = createContext();
function App() {
  return (
    <>
      <BudgetTracker />
    </>
  );
}

export default App;
