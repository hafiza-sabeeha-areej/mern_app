import logo from "./logo.svg";
import "./App.css";

import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
import "./fonts/linearicons-v1.0.0/icon-font.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/animsition/css/animsition.min.css";
import "./vendor/select2/select2.min.css";
import "./vendor/daterangepicker/daterangepicker.css";
import "./vendor/slick/slick.css";
import "./vendor/MagnificPopup/magnific-popup.css";
import "./vendor/perfect-scrollbar/perfect-scrollbar.css";
import "./css/util.css";
import "./css/main.css";
import ProductList from "./Container/ProductList";
import CartItem from "./components/CartItem";
import CartPanel from "./components/CartPanel";
import CustomHeader from "./components/CustomHeader";
import Story from "./components/Story";
import aboutImage from "./images/about-01.jpg";
function App() {
  return (
    <div className="App">
      {/* <ProductList />
      <CartItem />
      <CartPanel /> 
      <CustomHeader name="About" />
      <Story
        name="First Story"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit."
        image={aboutImage}
      />*/}
    </div>
  );
}

export default App;
