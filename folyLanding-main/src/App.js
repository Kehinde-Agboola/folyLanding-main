import { Navbar, Purpose, Product, Testimony, Cta, Footer } from "./components";
import { Header } from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Purpose />
        <Product />
        <Testimony />
        <Cta />
        <Footer />
      </div>
    </div>
  );
};

export default App;
