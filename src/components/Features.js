import React from 'react'
import "../style/features.css"
import featuresdata from "../data/features.json"

export default function Features() {
  return (
    <div>
      <div className="features-container">
       
        {featuresdata.features.map((feat,index)=>
        {
            return (
                <div className="feature-item-container" key={index}>

             <div className="feature-icon"><i className={`${feat.featureIcon}`+" feature-icon"}></i></div>
            <div className="feature-desc">
                <div className="feature-name">{feat.featureName}</div>
             <div className="feature-condition">{feat.featureConditions}</div>
             </div> 
             </div>
                )
        })}
        
        
      </div>

    </div>
  )
}
