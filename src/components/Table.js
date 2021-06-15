import React from 'react'
import { data } from '../data'
import './Table.css'
const Table = (props) => {
    return (
        <div className = "table">
        <h2>{props.data.title}</h2>
            <table>
            <tr>
            {
                props.data.headings.map(head => <th>{head}</th>)
            }
            </tr>
           
           { props.data.td.map(t =>  
           <tr>
                
                  <td>{t.Coloumn1}</td>
                  <td>{t.Coloumn2}</td>
                  <td>{t.Coloumn3}</td>
                  <td>{t.Coloumn4}</td>
                
                
            </tr>)
            }
                
            </table>
        </div>
    )
}

export default Table
