import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './components/Cards/Cards';
import Question from './components/Question/Question';

function App() {
  return (
    <div className='container'>
      <Cards></Cards>
      <Question></Question>
    </div>
  );
}

export default App;
