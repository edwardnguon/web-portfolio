import "./App.scss"
import Header from "./components/header/Header";

const App = () => {
  return <div>
    <section id="Home"><Header /></section>
    <section>Hero</section>
    <section id="About Me">Parallax</section>
    <section>About Me</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
