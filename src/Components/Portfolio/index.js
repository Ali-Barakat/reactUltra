/*jshint esversion: 6 */


import React, {useState, useEffect} from 'react';
import {PortfolioSection, PortfolioTitle, TitleSpan, PortfolioList, PortfolioItem, ImgWrapper, Overlay, Img, OverlaySpan} from './style.js';
import axios from 'axios';

const Portfolio = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)})
  }, [])
  

  const PortfolioImages = images.map((imgItem)=>{
    return(

    <ImgWrapper key={imgItem.id}>
      <Img src={imgItem.image} alt=""></Img>
      <Overlay>
        <OverlaySpan>Show Image</OverlaySpan>
      </Overlay>
    </ImgWrapper>
    )
  })

    return (
      <PortfolioSection>
              <PortfolioTitle><TitleSpan>My</TitleSpan> Portfolio</PortfolioTitle>
              <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
              </PortfolioList>

            <div className="box">
              {PortfolioImages}
            </div>
      </PortfolioSection>
    );
}

export default Portfolio;
