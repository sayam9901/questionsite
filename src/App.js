
import './App.css';
import Hero from './components/Hero';
import { MathJaxContext } from 'better-react-mathjax';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <MathJaxContext>
      <div className='App'>
      <Hero/>
      </div>
 

    </MathJaxContext>
    
  );
}

export default App;
