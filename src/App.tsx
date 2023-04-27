import Header from "./components/layout/header/Header";
import Home from "./features/Home";
import Product from "./features/Product";

function App() {
  return (
    <div className="bg-[#fafafa] m-auto w-[1280px]">
      <Header />
      <Product image='' category="male" id='1' />
    </div>
  );
}

export default App;
