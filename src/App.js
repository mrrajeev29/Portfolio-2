import './App.css';
import Navbar from './component/NavBar/navbar';
import Intro from './component/Intro/intro';
import About from './component/About/about';
import Project from './component/Project/project';
import Clients from './component/Clients/clients';
import Contacts from './component/Contacts/contacts';
import Footer from './component/Footer/footer';
function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Project/>
    <Clients/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
