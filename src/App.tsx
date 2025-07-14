import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contacts from "./Contacts";
import ClickSpark from "./lib/Animations/ClickSpark/ClickSpark";

function App() {
    return (
        <>
            <ClickSpark
                sparkColor="#4a044e"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                <div className="w-full overflow-hidden">
                    <Navbar />
                    <Hero />
                    <Projects />
                    <Contacts />
                </div>
            </ClickSpark>
        </>
    );
}

export default App;
