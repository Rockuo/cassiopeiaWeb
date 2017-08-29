/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Form, Text, Textarea} from 'react-form';


const mapStateToProps = (state) => {
    return state.pageData;
};
// const areaStyle = {
//     display: 'none',
// };
//
// let areaVal = '';
// function handleChange(value) {
//     console.log(value);
//     areaVal = value;
//     document.getElementById('eventText').text = value;
//     document.getElementById('eventText').value = value;
// }

const EventEdit = (props) => {
    // let quill = <div/>;
    // if (global.isFrontend) {
    //     const ReactQuill = require('react-quill');
    //     quill = <ReactQuill value={areaVal}
    //                 onChange={handleChange} />;
    // }

    return <Form
        defaultValues={props.event ? {
            title: props.event.title,
            text: props.event.text,
            type: props.event.type,
            section: props.event.section,
        } : {}}
    >
        {({values}) => {
            return <form action={props.action} method="POST">
                <h6>Titulek</h6>
                <Text field='title' name="title"/>
                <h6>Typ</h6>
                <Text field='type' name="type"/>
                <h6>Sekce</h6>
                <Text field='section' name="section"/>
                <h6>Text:</h6>
                <Textarea field='text' id="eventText" name="text" /*style={areaStyle}*//>

                <button type="submit">Uložit</button>
            </form>
                ;
        }}
    </Form>;
};

export default connect(mapStateToProps)(EventEdit);
