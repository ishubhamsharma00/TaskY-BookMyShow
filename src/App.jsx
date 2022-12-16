//import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import Temp from "./components/temp";

export default function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Temp} />
    </>
  )
}
