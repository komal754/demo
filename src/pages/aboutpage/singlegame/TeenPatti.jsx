import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import TeenPattiBreadCrumb from '../upcoming/TeenPattiBreadcrumb';
import TeenPattiSingleArea from './TeenPattiSingleArea';
import TeenPattiReleasedGame from './TeenPattiReleasedGame';


function TeenPatti() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<TeenPattiBreadCrumb/>
	<TeenPattiSingleArea/>
	<TeenPattiReleasedGame/>
	</main>
	<Footer/>
	</>
  )
}

export default TeenPatti