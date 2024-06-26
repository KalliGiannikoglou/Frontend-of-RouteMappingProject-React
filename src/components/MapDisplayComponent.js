import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MapDisplay() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch when component mounts
        fetch('http://localhost:8080/maps')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            })
            .catch(error => console.error('Error fetching images:', error));
    }, []);


    return(
        <React.Fragment>
            <h3 style={{float: 'center', textAlign: 'center', marginBottom: '25px', marginTop: '25px'}}>
                Here are the final routes for every agent. Slide to see all the maps. 
            </h3>

            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                <div className="slide">
                    <img src={URL} key={index} style={{width: '35%'}} />
                </div>
                ))}
            </Carousel>
        </React.Fragment>  
          
    )
}

export default MapDisplay;