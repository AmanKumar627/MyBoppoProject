import logo from './logo.svg';
import './App.css';
import MultipleInputs from './Components/forms/multipleinputs';
import Loginform from './Components/forms/loginPage';
import Header from './Components/forms/header';
import MainContent from './Components/forms/mainContent';
import Footer from './Components/forms/footer';

const App=()=> {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
      
    </div>
  );
}

export default App;
