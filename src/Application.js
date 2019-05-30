import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/AboutPage/About'
export default class Firstsec extends Component {
    render() {
        return (
		<div>
		<Router>
		<Route path="/" exact component={Home}/>
		<Route path="/about" exact component={About}/>
		</Router>
		
		</div>
		)
	}
}