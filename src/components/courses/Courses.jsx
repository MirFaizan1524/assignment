import React from 'react'
import style from './courses.css';
import course1 from '../../assets/course g.png';
import course2 from '../../assets/course boys.png';
import course3 from '../../assets/course quran.png';
import shahdah from '../../assets/shahadah.png';
import namaaz from '../../assets/namaaz.png';
import hajj from '../../assets/hajj.png';
import charity from '../../assets/charity.png';
import time from '../../assets/time.png';



function Courses() {
    return (
        <>
            <div className="container-fluid courseWrapper">
                <div className="container courseText my-5">
                    <h2> Courses <label htmlFor="" className='courseHeading text-warning'>offered</label> </h2>
                    <p>your best source of knowledge about skills and islamic values</p>
                </div>

                <div className="container-fluid courseCardWrapper">

                    <div class="card courseCard shadow p-3 mb-5 bg-body rounded">
                        <img src={course1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                   <h4>arabic teaching</h4>
                                <p class="card-text">Unlock the Beauty and Wisdom of the Quran</p>
                            </div>
                    </div>

                    <div class="card courseCard shadow p-3 mb-5 bg-body rounded">
                        <img src={course2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                   <h4>quran teaching</h4>
                                <p class="card-text">Unlock the Beauty and Wisdom of the Quran</p>
                            </div>
                    </div>
                    <div class="card courseCard shadow p-3 mb-5 bg-body rounded">
                        <img src={course3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                   <h4>islamic studies</h4>
                                <p class="card-text">Unlock the Beauty and Wisdom of the Quran</p>
                            </div>
                    </div>

                </div>


               <div className="container courseLogosWrapper ">
                
                 <div className="container courseLogo text-center ">

                       <div className="container bg-white logoContainer ">  
                        <img src={shahdah} alt="" />
                        </div> 
                           
                         <div className="container courseLogoText my-4">
                            <h6 className='my-2'>Swam</h6>
                            <p>to believe on no god but allah and that muhammad is his prophet </p>
                         </div>

                 </div>

                 <div className="container courseLogo text-center ">

                       <div className="container bg-white logoContainer ">  
                        <img src={namaaz} alt="" />
                        </div> 
                           
                         <div className="container courseLogoText my-4">
                            <h6 className='my-2'>Swam</h6>
                            <p>to believe on no god but allah and that muhammad is his prophet </p>
                         </div>

                 </div>


                 <div className="container courseLogo text-center ">

                       <div className="container bg-white logoContainer ">  
                        <img src={time} alt="" />
                        </div> 
                           
                         <div className="container courseLogoText my-4">
                            <h6 className='my-2'>Swam</h6>
                            <p>to believe on no god but allah and that muhammad is his prophet </p>
                         </div>

                 </div>

                 <div className="container courseLogo text-center ">

                       <div className="container bg-white logoContainer ">  
                        <img src={charity} alt="" />
                        </div> 
                           
                         <div className="container courseLogoText my-4">
                            <h6 className='my-2'>Swam</h6>
                            <p>to believe on no god but allah and that muhammad is his prophet </p>
                         </div>

                 </div>


                 <div className="container courseLogo text-center ">

                       <div className="container bg-white logoContainer ">  
                        <img src={hajj} alt="" />
                        </div> 
                           
                         <div className="container courseLogoText my-4">
                            <h6 className='my-2'>Swam</h6>
                            <p>to believe on no god but allah and that muhammad is his prophet </p>
                         </div>

                 </div>
                           

                
                
                </div> 






            </div>



        </>
    )
}

export default Courses