/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import {grid} from '../components/MiniItems.jsx';

const mapStateToProps = (state) => {
    return state.pageData;
};


const ShowEventShow = ({event}) => {
    let begin = new Date(event.begin),
        end = new Date(event.end);

    return <div>
        <h2 className="margin-bottom-10">{event.title}</h2>
        <span style={{fontSize: 15}}>Od:</span> <span>{`${begin.getDate()}.${begin.getMonth()}.${begin.getFullYear()} ${begin.getHours()}:${begin.getMinutes()}`}</span> <br/>
        <span style={{fontSize: 15}}>Do:</span> <span>{`${end.getDate()}.${end.getMonth()}.${end.getFullYear()} ${end.getHours()}:${end.getMinutes()}`}</span>
        <div dangerouslySetInnerHTML={{__html: event.text}}/>
    </div>;
};

export default connect(mapStateToProps)(ShowEventShow);
