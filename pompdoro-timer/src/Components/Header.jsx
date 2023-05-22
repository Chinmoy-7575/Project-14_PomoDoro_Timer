import React from 'react';
import '../App.css';
// Material UI
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import SettingsIcon from '@mui/icons-material/Settings';
export default function Header(props) {
  return (
    <div className='header'>
    <a href="/">
        <h1>
            PomoDoro
        </h1>
    </a>    
    <button id='header_setting' onClick={()=>{
      props.chngsetdis(); 
    }}>
    </button>
    </div>
  )
}

