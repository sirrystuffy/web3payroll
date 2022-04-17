import Navbar from "./Navbar";
import Home from "./Home";
import Account from "./Account";
import Timecards from "./Timecards";
import Employees from "./Employees";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="timecards" element={<Timecards />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;