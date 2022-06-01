import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    background: 'linear-gradient(#6B1F80,#E68AFF)'
}

export default function Header () {
    return (
        <div style={styles}>
            <h1>SelfCareCentral</h1>
            < NavTabs />
        </div>
    )
}