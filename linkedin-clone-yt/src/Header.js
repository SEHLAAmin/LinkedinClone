import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon  from '@material-ui/icons/Home'
import  SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import  BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import  ChatIcon from '@material-ui/icons/Chat';
import  NotificationsIcon from '@material-ui/icons/Notifications';



export default function Header() {
    return (
        <div className="header">

        {/* header gauche */}
            <div className="header_left">
                <img src="https://www.icone-png.com/png/4/3963.png" alt="" />
                <div className= "header_search">
                {/*Search icon */ }
                <SearchIcon />
                    <input type="text" name="" id="" placeholder="rechercher..." />
                </div>
            </div>

                {/* header droit */}

            <div className="header_right">
            <HeaderOption Icon={HomeIcon} title = 'Home' />
            <HeaderOption  Icon={SupervisorAccount} title ='my network' />
            <HeaderOption  Icon={BusinessCenterIcon} title ='Jobs' />
            <HeaderOption  Icon={ChatIcon} title ='Messagerie' />
            <HeaderOption  Icon={NotificationsIcon} title ='Notification' />
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4D03AQHBOpazXt3meg/profile-displayphoto-shrink_800_800/0/1626553350818?e=1632355200&v=beta&t=oYK_2jlMdB8PvuPa_jfzI9zt4gsugXUZcV8wmEvM3xE" title ='Me' />

            </div>
        </div>
    )
}
