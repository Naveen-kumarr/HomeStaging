import React, { Component } from 'react'
import Header from '../Navbar'
import ServiceSectionOne from './BannerSection/Banner'
import ServiceSectionTwo from './Latestprojects/LatestProjects'
import ServiceSectionThree from './ImageSection/ImageSection'
import Footer from '../SectionSeventh/SectionSeventh'
export default class Firstsec extends Component {
	state={
    bannerheader:"2 ROW 3 COLUMN WITH SLIDER",
    home:"HOME",
    protfolio:"PORTFOLIO",
    currentpage:"2 ROW 3 COLUMN WITH SLIDER",
    firstslideimages:[
      {
        id:1,
        para:'Interior Design',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
      {
        id:2,
        para:'Interior',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
      {
        id:3,
        para:'Design',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
      {
        id:4,
        para:'Interior Design',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
      {
        id:5,
        para:'Design',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
      {
        id:6,
        para:'Int Design',
        header:'Bloomfield St.',
        viewmore:'VIEW MORE',
        image:'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'
      },
    ]
  }
    render() {
        return (
		<div>
		<Header/>
		<ServiceSectionOne/>
		<ServiceSectionTwo/>
		<ServiceSectionThree firstslideimages={this.state.firstslideimages}/>
		 <Footer/>
		</div>
		)
	}
}