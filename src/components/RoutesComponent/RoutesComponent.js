import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Films from '../films/Films';
import Header from '../header/Header';
import Heroes from '../heroes/Heroes';
import Planets from '../planets/Planets';
import Starships from '../starships/Starships';


function RoutesComponent() {
    return (
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Films />}/>
          <Route path='/films' element={<Films />}/>
          <Route path='/heroes' element={<Heroes />}/>
          <Route path='/starships' element={<Starships />}/>
           <Route path='/planets' element={<Planets />}/>
        </Routes>
      </div>
    </Router>
    )
}

export default RoutesComponent;