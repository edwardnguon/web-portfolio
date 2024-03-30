import "./App.scss"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

const App = () => {
  return <div>
    <section id="Home">
      <Header />
      <Hero />
    </section>
    <section id="About"><About/></section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
