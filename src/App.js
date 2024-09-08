
import DisplayPage from "./components/Display";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import "./App.css"




function App() {

  const apikey=process.env.REACT_APP_API_KEY;
 
  return (
    <div className="App">
        
          
                <BrowserRouter>
                     <DisplayPage apikey={apikey} />
            
          
               </BrowserRouter>
         
    </div>
  );
}

export default App;
