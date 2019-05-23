import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './SectionThird.css';
import Slideimg1 from '../../images/Homestagesec3.jpg';
import Slideimg2 from '../../images/Homestagesec3a.jpg';
import Slideimg3 from '../../images/Homestagesec3b.jpg';

export default class Homestagesectiontop extends Component {
render() {
return (
<div>
<div className="top-bg-slide">
<Carousel>
<Carousel.Item>
<img className="d-block w-100 h-100" src={Slideimg1} alt="First slide"/>
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100 h-100" src={Slideimg2} alt="Third slide"/>
</Carousel.Item>
<Carousel.Item>
<img className="d-block w-100 h-100" src={Slideimg3} alt="Third slide"/>
</Carousel.Item>
</Carousel>
<div className="top-silde-item">
<small className="text-white">ARCHITECTURE</small>
<h1 className="pt-4 text-white">Isolated Post<br/>Modern Prefab</h1>
<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> 
incididunt ut labore det dolore magna aliqua. Ut enim ad minim veniam,<br/> 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>
</div>
</div>
)
}
}
