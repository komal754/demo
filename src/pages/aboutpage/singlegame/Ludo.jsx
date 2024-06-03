import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import LudoBreadcrumb from '../upcoming/LudoBreadcrumb';
import LudoSingleArea from './LudoSingleArea';
import LudoReleasedGame from './LudoReleasedGame';


function Ludo() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<LudoBreadcrumb/>
	<LudoSingleArea/>
	<LudoReleasedGame/>
	</main>
	<Footer/>
	</>
  )
}

export default Ludo