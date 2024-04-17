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
                <div className="container-fluid footer-bottom text-center">

                    <div className="container footerLinks">

                        <ul className='ulist'>
                            <p className='link-heading'>regular courses</p>
                            <li><a href="" className='btn btn-md'>tarteel e quran qaida</a></li>
                            <li><a href="" className='btn btn-md'>learn Qirat</a></li>
                            <li><a href="" className='btn btn-md'>quran memorization</a></li>
                        </ul>

                        <ul className='ulist'>
                            <p className='link-heading'>Advanced courses</p>
                            <li><a href="" className='btn btn-md'>arabic language course</a></li>
                            <li><a href="" className='btn btn-md'>tafsir course</a></li>
                            <li><a href="" className='btn btn-md'>ijazah courses</a></li>
                        </ul>

                        <ul className='ulist'>
                            <p className='link-heading'>links</p>
                            <li><a href="" className='btn btn-md'>home</a></li>
                            <li><a href="" className='btn btn-md'>about</a></li>
                            <li><a href="" className='btn btn-md'>blogs</a></li>
                        </ul>
                    </div>

                   
                    <div className="container footer-icons">
                    <i className='fa fa-instagram'></i><i className='fa fa-linkedin'></i><i className='fa fa-twitter'></i>
                      <p>all rights reserved|2024 </p>
            
                    </div>

                </div>



            </div>

        </>
    )
}

export default Footer