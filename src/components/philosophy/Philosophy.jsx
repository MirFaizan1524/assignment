import React from 'react'
import style from './philosophy.css';
import bigQuran from '../../assets/bigQuran.png';
import cresent from '../../assets/cresent.png';
import newNamaaz from '../../assets/newNamaaz.png';
import masjid from '../../assets/masjid.png';
import certificate from '../../assets/certificate.png'
import globe from '../../assets/Globe.png';

function Philosophy() {
    return (
        <>
            <div className="container-fluid philosophyWrapper py-2">

                <div className="container PhilosophyText ">
                    <h2 className='my-3 pt-5'> our <label htmlFor="" className='philosophyHeading '>philosophy</label> </h2>
                    <p>Journey to Enlightenment: Unraveling the Spiritual Tapestry of Islamic Philosophy.</p>

                </div>

                <div className="container-fluid philosophyCardWrapper">
 
                     <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
                          <div className="container philosophyLogo text-center">
                               <img src={bigQuran} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
                          </div>
                          <h4 className='mt-3 px-4'>Oline Learning</h4>
                          <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                                        
                     </div>

                     <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
                          <div className="container philosophyLogo text-center">
                               <img src={cresent} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
                          </div>
                          <h4 className='mt-3 px-4'>spritiuality</h4>
                          <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                                        
                     </div>

                     <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
                          <div className="container philosophyLogo text-center">
                               <img src={newNamaaz} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
                          </div>
                          <h4 className='mt-3 px-4'>service</h4>
                          <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                                        
                     </div>



                </div>



                <div className="container-fluid philosophyCardWrapper">
 
 <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
      <div className="container philosophyLogo text-center">
           <img src={masjid} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
      </div>
      <h4 className='mt-3 px-4'>community</h4>
      <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                    
 </div>

 <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
      <div className="container philosophyLogo text-center">
           <img src={certificate} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
      </div>
      <h4 className='mt-3 px-4'>certificate</h4>
      <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                    
 </div>

 <div className="container philosophyCard shadow p-3 mb-5 bg-body rounded">
      <div className="container philosophyLogo text-center">
           <img src={globe} alt="" className='img-fluid' style={{width:"59px",height:"56.84"}}/>     
      </div>
      <h4 className='mt-3 px-4'>learn from anywhere anytime</h4>
      <p className='mt-1 px-4'>Quran Facility refers to the memorization and recitation of the Quran. Which is the holy scripture of Islam.</p>
                    
 </div>



</div>



            </div>

        </>
    )
}

export default Philosophy;