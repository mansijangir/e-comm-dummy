import React from "react";
import "../style/bestpicks.css";
import bestpickData from "../data/bestpicks.json";


export default function Bestpicks() {
   
  return (
    <div>
      <div className="bestpicks-container">
        <div className="bestpicks-text-container">
          <h6 className="heading-small">NEW COLLECTION</h6>
          <h2 className="heading-big">Best Picks 2022</h2>
          <p className="bestpick-desc">
            Appear, dry there darkness they're seas, dry waters thing fly midst.
            Beast, above fly brought Very green.
          </p>
        </div>
        <div className="bestpicks-box">
          <div className="bestpicks-top">
            {bestpickData.top.map((bestpick,index) => {
              return (
                <div className="img-cont" key={index}>
                <div className="bestpick-img-container" style={{backgroundImage:`url(${bestpick.collectionImg})`,  backgroundPosition: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                  
                  <div className={bestpick.small ? "bestpick-text" : "bestpick-text1"}>
                    <h4 className="bestpick-name">
                      {bestpick.collectionName}
                    </h4>
                    <a className="bestpick-link">
                      Shop Now<i className="fa fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
          <div className="bestpicks-bottom">
            {bestpickData.bottom.map((bestpickbtm,index) => {
              return (
                
                <div className="bestpick-img-container" style={{backgroundImage:`url(${bestpickbtm.collectionImg})`,  backgroundPosition: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} key={index}>
                  
                  <div className={bestpickbtm.small ? "bestpick-text" : "bestpick-text1"}>
                    <h4 className="bestpick-name">
                      {bestpickbtm.collectionName}
                    </h4>
                    <a className="bestpick-link">
                      Shop Now<i className="fa fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
