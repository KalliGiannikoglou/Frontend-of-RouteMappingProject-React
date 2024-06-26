import React, { useState, useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import MapInteraction from './MapInteraction'


function Packages(){
    // Save the locations returned from MapInteraction Component
    const [locations, setLocations] = useState([]); 

    const handleButton = async (event) =>{
        // to get sent locations
        event.preventDefault();
        console.log(locations);
        await fetch('http://localhost:8080/packages', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(locations)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
        
        // redirect
        window.location.href = "/maps";
    }
  

  
    return (
        <div className='container' style={{marginTop: '5%'}}>
           <Row>
                <Col> 
                    <MapInteraction setLocations={setLocations}/>
                </Col>
                <Col style={{width: '60%', float: 'right', textAlign: 'right'}}>
                    <h1>
                        Select package locations!
                    </h1>
                    <h6 style={{marginTop: '10%'}}>
                        Use the Search Box to locate the addresses.
                        All the locations are saved in pairs.  
                    </h6>
                    <Button variant="primary" size="lg" 
                        onClick={handleButton}
                        style={{ marginTop: '38%', backgroundColor: '#7AA5F0'}}>
                        Continue
                    </Button>{' '}
                </Col>
                
            </Row>
        </div>
    );
}

export default Packages;