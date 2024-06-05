import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Blog1';  
import Blog1 from './Blog2';  
import Main from './Main'; 
import About from './About'; 
import Firebase from './firebaseauth';
import EcommerceTutorial from './furniture';
import FirestoreTutorial from './Firestore';
import ShoppingCart from './ShoppingCart';
import Pipeline from './Pipeline';
import DataCleaning from './DataCleaning';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Firebase" element={<Firebase />} />
        <Route path="/EcommerceTutorial" element={<EcommerceTutorial />} />
        <Route path="/FirestoreTutorial" element={<FirestoreTutorial />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path='/Pipeline' element={<Pipeline/>}/>
        <Route path='/DataCleaning' element={<DataCleaning/>}/>
        
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;