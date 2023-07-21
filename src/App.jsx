// import { useState } from "react";
import Subscriptions from "./components/subscriptions";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex-col font-chakra">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
