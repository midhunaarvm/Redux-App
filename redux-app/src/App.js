
import './App.css';
import {Routes,Route} from "react-router-dom"
import Photos from './routes/Photos';
import PhotosBackup from './routes/PhotosBackup';
import { NavLink } from 'react-router-dom';

function App() {
  return (
   <div>
      <NavLink to ='/' ><span className="photos" >Photos</span></NavLink>
      <NavLink to ='/photosbackup' ><span className="photos" >Backup</span></NavLink>
     <Routes>
     <Route path='/' element={<Photos/>}/>
     <Route path='photosbackup' element={<PhotosBackup/>}/>
     </Routes>
   </div>
  );
}

export default App;
