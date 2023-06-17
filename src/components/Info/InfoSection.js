import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import infos from '../../data/info';
import '../../components/Info/infoSection.css';


export default function InfoSection() {
    return (
        <section>
            <ul className="info-list-container">
                {infos.map(info => (
                    <li key={info.url} className="container info-item">
                        <div className='info-row'>
                            <FontAwesomeIcon className="info-icon" icon={info.icon}/>
                            <h3 className="info-title">{info.text}</h3>
                        </div>
                            <p className="info-description">{info.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}