import React from 'react'
import style from './events.css';
import eventimage from '../../assets/event photo.png'
function Events() {
    return (
        <>
            <div className="container-fluid eventsWrapper">

                <div className="container eventsBox py-3 px-3">

                    <div className="container eventImage">
                        <img src={eventimage} alt="eventImage" />

                    </div>

                    <div className="container eventDescription">
                        <div className="container eventHeadings">
                            <h2>Events</h2>
                            <h6><small className='text-muted'>see all</small></h6>
                        </div>

                        <p className='my-3'>The is not just a institute for prayers rather it is a community center for all. The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a compre-hensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad S.A.W</p>


                        <div class="card  eventCard mb-3">
                            <div class="row g-0 ">
                                <div class="col-md-2">
                                    <div className='card-body'>
                                    <p>MAR</p>
                                    <p id='eventDate'>04</p>
                                    </div>
                                    
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">ramadhan workshop</h5>
                                        <p class="p1">Lorem ipsum dolor sit amet consectetur. Hac.</p>

                                        <p class="p2">10:00 Pm - 4:00 Am</p>

                                        <p class="p1">Lorem ipsum dolor sit amet consectetur. Egestas netus tristique urna sem ipsum volutpat. Vitae.</p>

                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        <hr />

                                         <button className='btn btn-lg btn-outline-secondary'>view event details</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


              <div className="container-fluid eventCharts">
                
                <p>Alhamdulillah <label className='eventChartsHeading'>We Have Reached Over</label></p>
                
                     <div className="container eventInstructions">
                        
                        
                          <div className="container eventItems shadow  mb-5 bg-body rounded">
                                <h6>students</h6>                                             
                                  <h3>20K+</h3>
                          </div>

                          <div className="container eventItems shadow  mb-5 bg-body rounded">
                                <h6>instructors</h6>                                             
                                  <h3>12+</h3>
                          </div>
                          <div className="container eventItems shadow  mb-5 bg-body rounded">
                                <h6>courses</h6>                                             
                                  <h3>18+</h3>
                          </div>
                          <div className="container eventItems shadow  mb-5 bg-body rounded">
                                <h6>positive reviews</h6>                                             
                                  <h3>5K+</h3>
                          </div>


                        
                        
                        </div>       
                
                
                </div>  


            </div>
        </>
    )
}

export default Events;