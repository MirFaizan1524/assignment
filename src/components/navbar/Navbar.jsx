import React from 'react'
import style from './navbar.css';
function Navbar() {
    return (
        <div className="container-fluid Navbar shadow p-3 mb-5 bg-body rounded" >

            <ul className='navList'>

                <li><a href=""><label className='navBrand'>LOGO</label></a></li>
                <li><div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle navCourseBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Courses
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </div></li>
                <li><input type="text" placeholder='search' className='form-control searchBar' /></li> 
                <li><a href="" className='navlelems'>Contact Us</a></li>
                <li><a href="" className='navlelems'>Events</a></li>
                <li><a href="" className='navlelems'>Login</a></li>
                <li><a href="" className='btn btn-lg signinBtn py-1'>Sign in</a></li>
                



            </ul>





        </div>
    )
}

export default Navbar