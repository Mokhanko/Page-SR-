import React from 'react'
import './styles.css'
import data from './propos.json';

const Proposition = () => (
    <ul className="header_propos">
        {data.map((el)=>(
            <li className="proposElement" key={el.id}>
                <div className="title text-center">{el.title}</div>
                <i class="fa fa-car text-center"></i>
                <div className="content text-center">{el.content}</div>
            </li>
        ))}
    </ul>
)

export default Proposition;