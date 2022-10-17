import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./layouts/Shop";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Shop />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
