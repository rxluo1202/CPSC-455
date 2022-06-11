import Navbar from './Navbar';
import Content from './Content';
import About from './About';
import Footer from './Footer';
import Details from './Details';

import { useState } from 'react';
import { connect } from 'react-redux';

function App() {

  const [activePage, setActivePage] = useState(1);
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div id='body'>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Details 
        activePage={activePage}
        title={title} 
        instructions={instructions} 
        showModal={showModal}
        setShowModal={setShowModal} />
      <Content 
        activePage={activePage}
        setTitle={setTitle}
        setInstructions={setInstructions}
        setShowModal={setShowModal} />
      <About activePage={activePage} />
      <Footer />
    </div>
  );
}

export default connect()(App);
