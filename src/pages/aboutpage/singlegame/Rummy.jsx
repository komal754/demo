import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import RummyBreadcrumb from '../upcoming/RummyBreadCrumb';
import RummySingleArea from './RummySingleArea';
import RummyReleasedGame from './RummyReleasedGame';


function Rummy() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<RummyBreadcrumb/>
	<RummySingleArea/>
	<RummyReleasedGame/>
	</main>
	<Footer/>
	</>
  )
}

export default Rummy