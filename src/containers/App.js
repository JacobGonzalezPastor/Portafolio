import React, { useState, useEffect } from 'react';
import "../Styles/App.css"
import Cover from '../components/Cover'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import About from '../components/About';
import Info from '../components/Info';
import Projects from '../components/Projects';


function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Header isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Info />
      <Projects/>

    </div>
  );
}

export default App;
