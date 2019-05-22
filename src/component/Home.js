import React, { Component } from 'react';
import Navbar from '../component/Navbar'
import SectionFirst from '../component/SectionFirst/SectionFirst'
import SectionSecond from '../component/SectionSecond/SectionSecond'
import HomeStageSectionThree from '../component/HomeStageSectionThree/HomeStageSectionThree'
import SectionFifth from '../component/SectionFifth/SectionFifth'
import SectionFourth from '../component/SectionFourth/SectionFourth'
import HomeStageSectionSix from '../component/HomeStageSectionSix/HomeStageSectionSix'
import SectionSeventh from '../component/SectionSeventh/SectionSeventh'
//import Footer from '../component/Footer/Footer'
export default class Home extends Component {
render()
{
return(
<div>
<Navbar/>
<SectionFirst/>
<SectionSecond/>
<HomeStageSectionThree/>
<SectionFourth/>
<SectionFifth/>
<HomeStageSectionSix/>
<SectionSeventh/>

</div>
)
}
}