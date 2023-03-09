import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { lightMode, darkMode } from './features/modeSlice'
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'

function App() {
  // Import useSelector anywhere you want access to the store (hint: any component you want styled by your themes will need access to global state!).
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  // create a toggle function for the button
  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
      <Nav />
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
