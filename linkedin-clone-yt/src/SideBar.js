import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"

function SideBar() {

const recentItem = (topic)=> (
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
)

    return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://images8.alphacoders.com/105/1054256.jpg" alt="" />
            <Avatar className/>
            <h2>sehla Amin</h2>
            <h4>sidjojf@mail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>who viewed you </p>
                <div className="sidebar_statNumber">2,455</div>
            </div>
            <div className="sidebar_stat">
            <p>View on post</p>
                <div className="sidebar_statNumber">2,455</div>
            </div>
        </div>
        <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('Java')}
                {recentItem('Course')}
                {recentItem('Covid19')}
            </div>
    </div>
    )
}

export default SideBar
