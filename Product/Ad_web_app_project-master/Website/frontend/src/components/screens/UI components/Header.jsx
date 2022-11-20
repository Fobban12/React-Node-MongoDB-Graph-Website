import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutFunction } from '../../../store/actions/AuthActions';
//Set main page
function Header({openModal}) {
    //Set dispatch
    let dispatch = useDispatch();

    // Set navigate 
    let navigate = useNavigate();

    //Set open for navbar
    const handleClick = () => {
        openModal();
    }

    //Go to main page

    const goToMainPage = () => {
        navigate("/");  
    };

    //Log out

    const handleLogout = () => {
      dispatch(logoutFunction());
      navigate("/login");
  }

    //To Profile Page
    const toProfilePage = () => {
      navigate("/userprofile");
  };

    //Get global state from redux for auth

    let {user} = useSelector(state => state.auth);

  return (
    <div className='bg-purple-200 p-5'>
        
        <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center justify-center '>
        <GiHamburgerMenu className='inline-block left-5 top-6 cursor-pointer' size={30} onClick={handleClick}/>
        <h1 className='text-center text-3xl font-bold px-5 cursor-pointer text-black' onClick={goToMainPage}> Data Visualization Application </h1>
        </div>
        <div>
          {user.username && (
            <div className='flex'>
            <div className='p-4 bg-emerald-500 text-black font-bold mr-10 shadow-lg rounded-lg cursor-pointer flex align-center justify-center' onClick={toProfilePage}> Hello {user.username} </div>
            <div className='p-4 bg-amber-500 text-black font-bold shadow-lg rounded-lg cursor-pointer flex align-center justify-center' onClick={handleLogout}> Log Out </div>
            </div>
          )}
        </div>

        </div>
    </div>
  )
}

export default Header