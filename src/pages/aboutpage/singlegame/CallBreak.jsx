import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import SingleArea from './SingleArea';
import CallBreakBreadcrumb from '../upcoming/CallBreakBreadcrumb';
import CallBreakSingleArea from './CallBreakSingleArea';
import CallBreakReleasedGame from './CallBreakReleasedGame';


function CallBreak() {
  return (
	<>
	<HeaderTwo/>
	<main>
	<CallBreakBreadcrumb/>
	<CallBreakSingleArea/>
	<CallBreakReleasedGame/>
	</main>
	<Footer/>
	</>
  )
}

export default CallBreak