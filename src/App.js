import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Books from './components/Books/Books';
import Question from './components/Question/Question';

function App() {
  return (
    <div className='container'>
      <Books></Books>
      <Question></Question>
    </div>
  );
}

export default App;
