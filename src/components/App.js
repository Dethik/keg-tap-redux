import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import { MDBContainer, MDBCol } from 'mdbreact';
import './../styles/App.css'

function App() {
  return (
    <>
      <Header />
      <MDBContainer>
        <MDBCol>
          <KegControl />
        </MDBCol>
      </MDBContainer>
    </>
  );
}

export default App;