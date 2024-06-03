import React from 'react';
import Footer from '../../footer/Footer';
import HeaderTwo from '../../header/HeaderTwo';
import SliderTwo from './SliderTwo';
import NewGamesArea from './NewGamesArea'
import GamesAreatwo from './GamesAreatwo'
import GamesArea from './GamesArea'
import CtaArea from './CtaArea'
import ShopAreaTwo from './ShopAreaTwo'
import BlogArea from './BlogArea'
import AboutArea from '../indexthree/AboutArea';
import TeamArea from '../indexthree/TeamArea';
import TeamMem from '../../../pages/aboutpage/aboutuspage/TeamMem';
import AboutInner from '../../../pages/aboutpage/aboutuspage/AboutInner';


function IndexTwo(){
	return(

   
    

        <>
         {/* header-area */}
          <HeaderTwo/>
       
      
        {/* main-area */}
        <main>
          {/* slider-area */}
          <SliderTwo/>
          
          {/* slider-area-end */}
          {/* new-games-area */}
          <NewGamesArea/>
          {/* new-games-area-end */}
          {/* gamers-area */}
          {/* <GamesAreatwo/> */}
          {/* gamers-area-end */}
          {/* featured-game-area */}
         {/* <GamesArea/> */}
          {/* featured-game-area-end */}
          {/* cta-area */}
          <CtaArea/>
          {/* cta-area-end */}
          {/* shop-area */}
          {/* <TeamMem/> */}
          <AboutInner/>
          <AboutArea/>
          {/* <TeamArea/> */}
         {/* <ShopAreaTwo/> */}
          {/* shop-area-end */}
          {/* blog-area */}
          <BlogArea/>
          {/* blog-area-end */}
        </main>
        {/* main-area-end */}
        <Footer/>
        </>
	)
}
	
export default IndexTwo