import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";
import ResponsiveNav from "./components/Header/ResponsiveNav";
function App() {
  const [showResponsiveNav, setShowResponsiveNavn] = useState(false);

  function showResponsiveNavFunc() {
    setShowResponsiveNavn(!showResponsiveNav);
  }

  return (
    <div className="App">
      {showResponsiveNav && (
        <ResponsiveNav showResponsiveNavProp={showResponsiveNavFunc} />
      )}
      <Header showResponsiveNavProp={showResponsiveNavFunc} />
      <Body />
    </div>
  );
}

export default App;
