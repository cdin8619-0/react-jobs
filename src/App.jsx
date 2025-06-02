import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";

const names = ['Chanuka', 'Dinuwan', 'Dinesh', 'Dilshan', 'Dulaj', 'Hiruni', 'Kavindu', 'Lakindu', 'Lahiru', 'Lahiru Dilshan', 'Lahiru Dilshan Perera', 'Lahiru Dilshan Perera Bandara'];

const loggedIn = true;

const styles = {
  color: 'red',
  fontSize: '24px'
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero title = 'This is the title' subtitle = 'This is the sub title'/>
      <HomeCard />
    </div>
  );
}

export default App;