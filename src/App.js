import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./layouts/Shop";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
