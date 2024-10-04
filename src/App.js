import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import Body from "./components/Body";
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);

  const handleDarkToggle = () => {
    darkToggle ? setDarkToggle(false) : setDarkToggle(true);
  };
  return (
    <>
      <Header darkToggle={darkToggle} handleDarkToggle={handleDarkToggle} />
      <Body darkToggle={darkToggle} handleDarkToggle={handleDarkToggle} />
      <Footer darkToggle={darkToggle} />
    </>
  );
};
export default App;
