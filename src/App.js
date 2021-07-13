import './App.css';
import LocationContainer from './component/LocationContainer';
import ResidentContainer from './component/ResidentContainer';
import { useState } from 'react';

function App() {
  const [urlsResidents, setUrlsResidents] = useState('')
  const getUrlApi = (url) =>{
    setUrlsResidents(url)
  }
  return (
    <div className="App">
      <LocationContainer getUrlApi={getUrlApi}></LocationContainer>
      <ResidentContainer urlsResidents={urlsResidents}></ResidentContainer>
    </div>
  );
}

export default App;
