import React, { Component } from 'react';
import './SectionFifth.css'
import Background from '../../images/background.jpg'
export default class SectionFifth extends Component {
	state={
		realestate:[
		{id:1,title:"The Cliff Hanger",desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:Background},
		{id:2,title:"The Cliff Hanger",desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:Background},
		{id:3,title:"The Cliff Hanger",desc:"Some quick example text to build on the card title and make up the bulk of the card's content.",image:Background},
		]
	}
render()
{
return(
<div>
<div className="container">
  <div className="row">
  {this.state.realestate.map(rs=>{
	  return (
	  <div className="col-sm custom"key={rs.id}>
     <div className="card" >
  <img src={rs.image} className="card-img-top" />
  <div classNameName="seemore p-2">
  <h5>See More</h5>
  </div>
  <div className="card-body">
    <h5 className="card-title">{rs.title}</h5>
  <p className="card-text">{rs.desc}</p>
  </div>
</div>
    </div>
	  )
  })}
    

  </div>
</div>
</div>
)
}
}