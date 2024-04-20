import './App.css';
import NEws from './Component/NEws';
import Navbar from './Component/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import { useState } from 'react';


const App =()=> {
  const [progress,setProgress]=useState(0);
  
    return(
    <>
    <BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<NEws setProgress={setProgress}   key="general" pageSize={20} country={"in"} category={"general"}/>}/>
      <Route exact path='/technology' element={<NEws setProgress={setProgress}   key="technology" pageSize={20} country={"in"} category={"technology"}/>}/>
      <Route exact path='/business' element={<NEws setProgress={setProgress}   key="business" pageSize={20} country={"in"} category={"business"}/>}/>
      <Route exact path='/entertainment' element={<NEws setProgress={setProgress}   key="entertainment" pageSize={20} country={"in"} category={"entertainment"}/>}/>
      <Route exact path='/sports' element={<NEws setProgress={setProgress}   key="sports" pageSize={20} country={"in"} category={"sports"}/>}/>
      <Route exact path='/health' element={<NEws setProgress={setProgress}   key="health" pageSize={20} country={"in"} category={"health"}/>}/>
      <Route exact path='/science' element={<NEws setProgress={setProgress}   key="science" pageSize={10} country={"in"} category={"science"}/>}/>

    </Routes> 
    </BrowserRouter>

   
    </>
    )
  }
  export default App;



