import React, { Component } from 'react'
import './Form.css'
export default class header extends Component {
    render() {
        return (
            <div>
              <div className="conatiner">
                <div className="container" style={{paddingTop:"100px"}}>
                 
                    <div className="row">
                    <div className="col-md-1 vl ">
                      <div className="vertical-text">
                     Contact
                      </div>

</div>
                        <div className="col-md-2">
                        <p>"Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                         ut labore et dolore magna aliqua. 
                         Ut enim ad minim veniam, </p>
                          </div>
<div className="col-md-8 col-sm-12 signinparent">
<form>
                  
                    <div className="row">  
                    
                    <div className="col-6">
                    <input type="Text"  required autoComplete="off" />
                    <label>Name</label> 
                    </div>
                   
                    <div className="col-6">
                    <input type="email"  required autoComplete="off" />
                    <label>Email</label> 
                    </div>
                    
                    

                       <div className="col-12">  
                    <input type="text"  required autoComplete="off" />
                    <label>Message</label> 
                    </div>
                    </div>
                       
              
                    <button className="btn customname" type="submit">Send</button>
                    
                </form>
</div>
<div className=" col-md-1 col-sm-12 sidenav">
<a class="fa fa-facebook" ></a>
<a class="fa fa-instagram" aria-hidden="true"></a>
<a class="fa fa-twitter" ></a>
<a class="fa fa-linkedin" ></a>
</div>
</div>
</div>
</div>
</div>
        )
    }
}