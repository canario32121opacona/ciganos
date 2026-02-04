import { BrowserRouter } from "react-router-dom";
import AppRouting from "./AppRouting.jsx";
import Navbar from "./components/navbar/navbar.jsx";
function App() {

  return (
  <BrowserRouter>
  <Navbar/>
    <AppRouting/>
  </BrowserRouter>    
  );
}
export default App;
