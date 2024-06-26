import React, { useState, useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import MapInteraction from './MapInteraction';
import NumericInput from 'react-numeric-input';


function AgentLocation(){
    const [isActive, setIsActive] = useState(true);
    const classes = useMemo(() => `${!isActive ? 'closed' : ''} card-body px-0`, [isActive]);
    // State to hold the agent locations from MapInteraction
    const [locations, setLocations] = useState([]); 
    const [maxCapacity, setMaxCapacity] = useState(1);

    const handleButton = async (event) =>{
        
        event.preventDefault();
        await fetch('http://localhost:8080/agents', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"agentsLocations": locations, "maxCapacity": maxCapacity})
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
        
        // redirect
        window.location.href = "/packages";
    }
  
    return (
        <div className='container' style={{marginTop: '5%'}}>
           <Row>
                <Col> 
                    {/* Instantiate MapInteraction Component and get setLocation from it*/}
                    <MapInteraction setLocations={setLocations}/>
                </Col>
                <Col style={{width: '60%', float: 'right', textAlign: 'right'}}>
                    {/* Text */}
                    <h1>
                        Select the initial position for the delivery agents!
                    </h1>
                    <h6 style={{marginTop: '10%'}}>
                        Use the Search Box to locate the addresses.
                    </h6>

                    {/* Number of agents */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10%'}}>
                        <span>Select the maximum packages a delivery agent can carry:  </span>
                        <NumericInput type="number" name="capacityNum" precision={0} step={1} min={1}
                        onChange={value => setMaxCapacity(value)}
                        style={{
                            input: {
                                width: '100px', // Adjust the width here
                                marginLeft: '20px'
                            }
                    }}  />
                    </div>

                    {/* Button */}
                    <Button variant="primary" size="lg" 
                        onClick={handleButton}
                        style={{ marginTop: '20%', backgroundColor: '#7AA5F0'}}>
                        Continue
                    </Button>{' '}
                </Col>
                
            </Row>
        </div>
    );
}

export default AgentLocation;