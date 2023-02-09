import { Routes, Route } from "react-router-dom"
import DashboardPage from "./components/DashboardPage";
import StartingPage from "./components/StartingPage";

function App() {
  return (
    <Routes>
      <Route path='/dashboard/overview' element={<DashboardPage />}></Route>
      <Route exact path='/' element={<StartingPage />}></Route>
    </Routes>
  );
}

export default App;
