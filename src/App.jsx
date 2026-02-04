import { BrowserRouter } from "react-router-dom";
import AppRouting from "./AppRouting.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {

  return (
  <BrowserRouter>
  <Navbar/>
    <AppRouting/>
    <Footer/>
  </BrowserRouter>    
  );
}
export default App;
