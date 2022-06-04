import React from 'react'

export default function DashboardCard(props) {

    return (
        <div className='dashboardCards'>
            <h3>Activity completed: {props.fitness}</h3>
        </div>
    )
}