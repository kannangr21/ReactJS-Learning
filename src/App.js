import NavBar from './NavBar';
import Home from './Home';
import Enter from './EnterItem';
import useFetch from './UseFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayTask from './ShowTask';

function App() {
  const {data: list, loading, err} = useFetch('http://localhost:8000/tasks')
  
  return (
    <Router>
    <div className="App">
      <NavBar />
      <div className="content">
       <Routes > 
          <Route path='/' element={
            loading ?  <div>Loading...</div>
            :  <Home list={list} />
          } />
              
        <Route path='/create' element={<Enter />}/>

        <Route path='/task/:id' element={<DisplayTask />}/>
           
        </Routes>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
