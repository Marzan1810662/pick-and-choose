import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';
import QuestionAnswer from './Components/QuestionAnswer/QuestionAnswer';

function App() {
  return (
    <div className='main-container'>
      <Header></Header>
      <Homepage></Homepage>
      <QuestionAnswer></QuestionAnswer>
      <Footer></Footer>
    </div>
  );
}

export default App;
