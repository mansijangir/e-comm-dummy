import React from 'react'
import brandData from '../data/brand.json'
import "../style/brand.css"

export default function Brand() {
  return (
    <div className="brand-box">
    <div className='brand-container'>
        <div className="brandbox-text"><h2 className="brandbox-heading">@shopper</h2>
        <p className="brandbox-para">Appear, dry there darkness they're seas, dry waters.</p>
        </div>
        <div className="brand-img-container">
      {
        brandData.brandImgData.map((brand,index) =>{
            return(
                <div className="brand-img-card" key={index}>
                    
                <img src={brand} className="brand-img"></img>
                </div>
            )
        })
      }
      </div>
      <div className="brand-logo-container">
      {
        brandData.brandLogoData.map((brand,index) =>{
            return(
                <div className="brand-logo-card" key={index}>
                <img src={brand} className="brand-logo"></img>
                </div>
            )
        })
      }
      </div>
    </div>
    </div>
  )
}
