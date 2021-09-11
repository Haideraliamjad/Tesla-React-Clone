import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg"; 
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'; 
import Accessories from './assets/Desktop-Accessories.jpg'
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Header />
      <Section
        image={ModelY}
        title="Model Y"
        desc="order online"
        btn1="Custom Order"
        btn2="Exsisting Inventory" 
        totalbtn = "2" 
      />
      <Section
        image={ModelX}
        title="Model X"
        desc="order online"
        btn1="Custom Order"
        btn2="Exsisting Inventory"
        totalbtn = "2" 
      />
      <Section
        image={ModelS}
        title="Model S"
        desc="order online"
        btn1="Custom Order"
        btn2="Exsisting Inventory"
        totalbtn = "2" 
      />
      <Section
        image={Model3}
        title="Model 3"
        desc="order online" 
        btn1="Custom Order"
        btn2="Exsisting Inventory"
        totalbtn = "2" 
      />
       <Section
        image={SolarRoof}
        title="Solar Roof"
        desc="Produced Clean Energy From Your Roof" 
        btn1="Buy Now"
        btn2 = "Learn More"
        totalbtn = "2" 
      />
      <Section
        image={Accessories}
        title="Accessories"
        desc="" 
        btn1="Shop Now"
        totalbtn = "1" 
      />
      <Footer/>
    </>
  );
}
export default App;
