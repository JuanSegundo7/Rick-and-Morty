import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header'
import Switch from './Components/Switch/Swtich'
import Footer from './Components/Footer/Footer';
import React, {useState} from 'react';

function App() {
  const [page, setPage] = useState(1)
  return (
    <Router>
      <Header page={page} setPage={setPage}/>
      <main>
        <Switch page={page} setPage={setPage} />
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
