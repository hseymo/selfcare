import React from 'react';
import NavTabs from './NavTabs';
import './index.css';

const styles = {
    background: 'linear-gradient(#6B1F80,#E68AFF)'
}

export default function Header () {
    return (
        <div className="Header">
            <h1>SelfCareCentral</h1>
            < NavTabs />
        </div>
    )
}