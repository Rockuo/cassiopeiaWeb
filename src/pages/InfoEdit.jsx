/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Form, Text, Textarea} from 'react-form';


const mapStateToProps = (state) => {
    return state.pageData;
};
const areaStyle = {
    display: 'none',
};

class InfoEdit extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            text: this.props.info ? this.props.info.text : '',
            date: this.props.info ? new Date(this.props.info.date) : new Date(),
            title: this.props.info ? this.props.info.title : '',
            type: this.props.info ? this.props.info.type : '',
            section: this.props.info ? this.props.info.section: '',
        };
        this.handleQuillChange = this.handleQuillChange.bind(this);
    }



    handleQuillChange(value) {
        this.setState({ text: value })
    }

    handleInputChange(newState) {
        if(newState.title === this.state.title &&
            newState.type === this.state.type &&
            newState.section === this.state.section
        ) {
            return;
        }
        this.setState(newState);
    }

    render() {
        let quill = <div/>;
        if (global.isFrontend) {
            const ReactQuill = require('react-quill');
            quill = <ReactQuill value={this.state.text}
                                onChange={this.handleQuillChange} />;
        }
        return <Form
            defaultValues={{
                title: this.state.title,
                text: this.state.text,
                type: this.state.type,
                section: this.state.section,
            }}
        >
            {({values}) => {
                setTimeout(this.handleInputChange.bind(this,values), 0);
                return <form action={this.props.action} method="POST">
                    <h6>Titulek</h6>
                    <Text field='title' name="title"/>
                    <h6>Typ</h6>
                    <Text field='type' name="type"/>
                    <h6>Sekce</h6>
                    <Text field='section' name="section"/> (pokud použijete CAMP, přiřadí se info do táborů)
                    <h6>Text:</h6>
                    <Textarea field='text' name="text" style={areaStyle}/>
                    {quill}
                    <button type="submit">Uložit</button>
                </form>
                    ;
            }}
        </Form>;
    }
};

export default connect(mapStateToProps)(InfoEdit);
