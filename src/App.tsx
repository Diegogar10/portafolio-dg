import './App.scss'
import { AppContext } from './context/AppContext';
import { useInitialState } from './hooks/useInitialState';
import Home from './routes/Home';

function App() {
  const initialState = useInitialState();
  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <Home/>
      </AppContext.Provider>
    </div>
  )
}

export default App
