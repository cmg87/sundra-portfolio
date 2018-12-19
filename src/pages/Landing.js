import React, { Component} from 'react';
import Example from '.././components/Navbar';
import Scroll from '../components/Scroll';
import './Landing.css';

class Landing extends Component {

    

    render(){
        return(
            <div>
                <Example/>
                <div className='wrapper'>
                <Scroll/>
                </div>
                
               
            </div>
        )
    }
}

export default Landing;