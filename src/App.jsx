//import {Route} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
//pages
import HomePage from "./pages/Home.page";

export default function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    </>
  )
}
