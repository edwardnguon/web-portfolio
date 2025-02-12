import "./App.scss"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/skills";

const App = () => {
  return <div>
    <section id="Home">
      <Header />
      <Hero />
    </section>
    <section id="About"><About/></section>
    <section id = "Skills"><Skills/></section>
    <section id="Projects"><Projects/></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
