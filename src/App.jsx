import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <MySkills />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default App;
