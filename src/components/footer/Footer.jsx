import React from 'react'
import style from './footer.css';
import piousName from "../../assets/prophetName.png"

function Footer() {
    return (
        <>
            <div className="container-fluid footerWrapper">

                <div className="container-fluid footer-top text-center">
                    <img src={piousName} alt="" />
                    <p className='text-center EnglishQuote my-3'>"When Allah wishes good for someone, He bestows upon him the</p>
                    <p className='text-center EnglishQuote'>Understanding of Deen"</p>
                    <p className='text-center arabicQuote'>"من يرد الله به خيرًا يفقه في الدين"</p>
                    <p className='text-center EnglishQuote'>Prophet Muhammad صلى الله عليه وعلى آله وسلم </p>
                </div>
                <div className="container-fluid footer-bottom ">

                    <div className="container footerLinks">

                    <ul className='ulist'>
                        
                            <p className='link-heading'>regular courses</p>
                            <li><button className='button'><a href="">tarteel e quran qaida</a></button></li>
                            <li><button className='button'><a href="">learn qirat</a></button></li>
                            <li><button className='button'><a href="">quran memorization</a></button></li>
                        </ul>

                        <ul className='ulist'>
                            <p className='link-heading'>Advanced courses</p>
                            <li><button className='button'><a href="">arabic language </a></button></li>
                            <li><button className='button'><a href="">tafsir course</a></button></li>
                            <li><button className='button'><a href="">ijazah courses</a></button></li>
                        </ul>

                        <ul className='ulist'>
                            <p className='link-heading'>links</p>
                            <li><button className='button'><a href="">home</a></button></li>
                            <li><button className='button'><a href="">about</a></button></li>
                            <li><button className='button'><a href="">blogs</a></button></li>
                        </ul>
                      
                    </div>
 
                      <br />                  
                    <div className="container-fluid footer-icons">
                    <i className='fa fa-instagram'></i><i className='fa fa-linkedin'></i><i className='fa fa-twitter'></i>
                      <p>all rights reserved|2024 </p>
            
                    </div>

                </div>



            </div>

        </>
    )
}

export default Footer