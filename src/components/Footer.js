import React from 'react'
import '../style/footer.css'
import FooterData from '../data/footer.json'
export default function Footer() {
    const handleSubmit=(e)=>
    {
        e.preventDefault();
    }
  return (
    <div className='footer-box'>
      <div className="footer-container">
        <div className="form-container">
            <h3 className="footer-form-heading">Want style Ideas and Treats?</h3>
            <form action="" className="footer-form" onSubmit={handleSubmit}>
               <div className="form-flex"><input className='form-input' placeholder='Enter Email *'></input>
               <a className='form-btn'href="a.html">Subscribe</a></div> 
            </form>
        </div>
   <div className="footer-main">
    <div className="footer-icon-container">
      <h4 className="footer-icon">Shopper.</h4>
      <ul className='icon-list'>
     {
        FooterData.footer.footerSocialIcons.map((social)=>
        {
          return ( <li><i className={`${social} icon-list-item`}></i></li>)
        })
     }
      </ul>
     </div>
     <div className="footer-content-container">
     <div className="footer-content">
     <h6 className='footer-content-heading'>SUPPORT</h6>
     {
        FooterData.footer.support.map((supp,index)=>
        {
          return ( 
            
            
          <ul key={index}>
            <li style={{color: "#a6a6a6"}}>{supp}</li>
          </ul>
          
          )
        })
     }
    </div> 
    <div className="footer-content">
    <h6 className='footer-content-heading'>shop</h6>
     {
        FooterData.footer.shop.map((shop,index)=>
        {
          return ( 
          <ul key={index}>
            <li style={{color: "#a6a6a6"}}>{shop}</li>
          </ul>
          )
        })
     }
    </div> 
    <div className="footer-content">
    <h6 className='footer-content-heading'>company</h6>
     {
        FooterData.footer.company.map((company,index)=>
        {
          return ( 
          <ul key={index}>
            <li style={{color: "#a6a6a6"}}>{company}</li>
          </ul>
          )
        })
     }
    </div>
    <div className="footer-content">
    <h6 className='footer-content-heading'>contact</h6>
     {
        FooterData.footer.contact.map((contact,index)=>
        {
          return ( 
          <ul key={index}>
            <li style={{color: "#a6a6a6"}}>{contact}</li>
          </ul>
          )
        })
     }
    </div> 
    </div>
      </div>
      </div>
    </div>
  )
}
