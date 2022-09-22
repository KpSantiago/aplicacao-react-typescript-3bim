import { About } from "./components/layout/About";
import { Contact } from "./components/layout/Contact";
import { Creator } from "./components/layout/Creator";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Home } from "./components/layout/Home";
import { Models } from "./components/layout/Models";
import { Services } from "./components/layout/Services";

function App(){
    fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log('DEU CERTO'))
    .catch(() => console.log('DEU ERRADO'))

    return (
        <div> 
            <Header />
            <Home />
            <Models />
            <Creator />
            <Services />
            <About />
            <Contact />
            <Footer />            
        </div>
    )
}

export default  App;