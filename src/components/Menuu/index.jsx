import React, { useState } from 'react';
import './Menu.scss';

import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Menuu() {

  const [animar, setAnimar] = useState(false);

  return (
    <>
      <section className='mb-3'>
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              className='first-button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setAnimar(!animar)}
            >
              <div className={`icone-animado ${animar && 'abrir'}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={animar}>
          <div className='#19202C shadow-3 p-1'>
            <MDBBtn block className='none m-0' color='link' style={{color: '#00B8C4'}}>
              Home
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#00B8C4'}}>
              Pousadas
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#00B8C4'}}>
              Quartos
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#00B8C4'}}>
              Serviços
            </MDBBtn>
            <MDBBtn block className='none m-0' color='link' style={{color: '#00B8C4'}}>
              Sobre Nós
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}