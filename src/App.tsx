import Header from "@/components/header";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Divider from "./components/divider";
// import { Svg3DAddHole } from "iconoir-react";  // https://iconoir.com/的icon图标库
export default function App() {
  return (
    <div className="main">
      <Divider />
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
