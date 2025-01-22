import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./components/Search";
// import './index.css';
function App() {
  return (
    <div className="App">
      {/* //need to use navigation */}
      <BrowserRouter>
        <NavLink to={"/"}>
        {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/fitness-gym-yoga-spa/healthy-food-icon.png;"< */}
          <h1>TasteCraft</h1>
        </NavLink>
        <Search/>
        {/* <h1>TasteCraft</h1> */}
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
