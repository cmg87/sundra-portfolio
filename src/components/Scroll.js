import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import '../pages/Landing.css';
 

 

export default class Scroll extends React.Component{


   
     render(){

        let images = [
            '/assets/jon-sundra/1.JPG',
            '/assets/jon-sundra/2.jpg',
            '/assets/jon-sundra/3.jpg',
            '/assets/jon-sundra/4.JPG',
            '/assets/jon-sundra/5.JPG',
            '/assets/jon-sundra/6.JPG',
            '/assets/jon-sundra/7.jpg',
            '/assets/jon-sundra/8.jpg'
        ];

        let style={
            maxHeight: 640,
            maxWidth: 480
        }
        return (
         <Grid>
             <Row>
                 <Col>
                 <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} dynamicHeight>
                {images.map(images =>
                    <Image responsive src={images} alt="jonsundra" stlye={style}/>
                )}
            </Carousel>
                 </Col>
             </Row>
         </Grid>
           
        
            
        );
     }
        
}

