import React from 'react'
import style from './banner.css'
import b1 from '../../assets/banner1.png';
import b2 from '../../assets/banner2.png';
import t from '../../assets/banner bism-img1-1 2.png';
function Banner() {
  return (
    <>
     
      <div className="container-fluid bannerWrapper">
             {/* first row */}
         <div className="container bannerBox1">            
              <div className="container bannerImage">
                       <img src={b1} alt="" className='img-fluid'/>         
                </div>
                <div className="container bannerText">
                        <img src={t} alt="" className='img-fluid my-2'/>
                        <p className='my-2'>The is not just a institute for prayers rather it is a community center for all. The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a compre-hensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad S.A.W</p>                  
                </div>       
            </div>   

   
                  {/* secondRow */}

                   <div className="container bannerBox2">
                    
                       <div className="container bannerQuote my-5">
                         <p className='largeBanner'>Blossoming in the</p>
                         <p className='largeBanner'>Garden <label htmlFor="" className='bannerColor'>of </label></p> 
                         <p className='largeBanner'><label className='bannerColor'>Islamic Knowledge </label></p> 
                        <label htmlFor="" className='bannerColor'> <p className='smallBanner'>ETHICAL & MORAL BELIEFS THAT GUIDES</p></label>

                       </div>
                       
                        <div className="container bannerImage2 "></div>

                               <img src={b2} alt=""  className='img-fluid' />           
                    
                     
                           </div>   


                     <button className='btn btn-lg btn-success'>learn more</button>
 

      </div>
    
    
    </>
  )
}

export default Banner;