import React from 'react'
import style from './testomonials.css'
import c1 from '../../assets/Component 21.png'
import c2 from '../../assets/Component 22.png'
import star1 from '../../assets/star (2).png'
import star2 from '../../assets/star (1).png'

function testomonials() {
    return (
        <>
            <div className="container-fluid testomonialWrapper">

                <h2 className='testHeading'>testomonials</h2>

                <div className="container-fluid testCards">

                    <div class="card testItems mb-3">
                        <div class="row g-0">
                            <div className="col-md-4">
                                <div className="card-body " style={{height:"244px"}}>
                                <img src={c1} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div class="card-body" style={{height:"244px"}}>
                                    <p className='px-3 text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                     
                                     <h6 className='mt-4 text-end stars'>
                                        <img src={star1} alt="" /><img src={star1} alt="" /><img src={star1} alt="" /><img src={star2} alt="" />
                                     </h6>
                                     <p className='testName'>ali hamam</p>
                                     <p className='testDesig text-muted'>student</p>


                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card testItems mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div className="card-body " style={{height:"244px"}}>
                                <img src={c2} class="img-fluid rounded-start" alt="..." />

                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body" style={{height:"244px"}}>
                                    <p className='px-3 text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                                     
                                     <h6 className='mt-4 text-end stars'>
                                        <img src={star1} alt="" /><img src={star1} alt="" /><img src={star1} alt="" /><img src={star2} alt="" />
                                     </h6>
                                     <p className='testName'>ali hamam</p>
                                     <p className='testDesig text-muted'>student</p>


                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>




        </>
    )
}

export default testomonials;