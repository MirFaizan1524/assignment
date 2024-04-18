import React from 'react'
import style from './landingpage.css';

function LandingPage() {
  return (
    <>
     <div className="container-fluid landingWrapper ">

           <div className="container-fluid leftrightimages">
            
           <div className="container-fluid left-img"> 
            </div>  
            <div className="container-fluid right-img"> 
            </div>
            </div>

             {/* <div className="container middleItems "> */}

             <div className="container landingText ">
                
                <p className='maintext'>gaining </p>
               <p className='maintext'> knowledge is an</p> <p className='maintext'><label> active part of faith</label></p>
                <p className='colorText'> Our programs are all personally developed in a way students can getaccess to our classical Islamic texts</p>
                  <button className=' landingBtn mb-5'>Courses</button>
          
              </div>

            <div className="container middle-images">
                <div className="container middle-top">
                    
                </div>        
                <div className="container middle-bottom">
                    
                    </div>
                            
              </div>
                                
                </div>  
               

          
        
        
        
        
        {/* </div>  */}
    
    
    </>
  )
}

export default LandingPage;