import React from 'react'
import { Link } from 'react-router-dom';

export default function DashboardRow(props) {

    return (
        <tr>
            <td className="rowHeader">
                    { props.name === 'fitness' && (
                        "Did you workout today?"
                    )}
                    { props.name === 'mindful' && (
                        "Did you practice mindfulness today?"
                    )}
                    { props.name != 'fitness' && props.name != 'mindful' ? (
                    `Did you meet your ${props.name} goal today?`
                    ) : (
                        <></>
                    )
                }
            </td>
            {props.results.map((result) => 
            // link each box to respective update/add info 
                <td date={result.date}>{result.emoji}</td>
            )}
        </tr>
    )
}