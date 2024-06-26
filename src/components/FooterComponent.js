import React from 'react';
import {
  MDBFooter,
  MDBContainer
} from 'mdb-react-ui-kit';

function Footer(){
    return(
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a href = 'https://github.com/KalliGiannikoglou/RouteMappingProject' target="_blank"> Giannikoglou Kalliopi </a>
      </div>

    </MDBFooter>
  );
}

export default Footer;