/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Form, Text, Textarea} from 'react-form';
import DateTime from 'react-datetime';


const mapStateToProps = (state) => {
    return state.pageData;
};
const areaStyle = {
    display: 'none',
};

class EventEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.event ? this.props.event.text : '',
            begin: this.props.event ? new Date(this.props.event.begin) : new Date(),
            end: this.props.event ? new Date(this.props.event.end) : new Date(),
            title: this.props.event ? this.props.event.title : '',
            type: this.props.event ? this.props.event.type : '',
            section: this.props.event ? this.props.event.section: '',
        };
        this.handleQuillChange = this.handleQuillChange.bind(this);
        this.handleBeginChange = this.handleBeginChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }


    handleQuillChange(value) {
        this.setState({ text: value })
    }

    handleBeginChange(value) {
        this.setState({ begin: value })
    }

    handleEndChange(value) {
        this.setState({ end: value })
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
                    <Text field='section' name="section"/> (pokud použijete CAMP, přiřadí se akce do táborů)
                    <h6>Začátek</h6>
                    <DateTime inputProps={{name: 'begin'}} value={this.state.begin} onChange={this.handleBeginChange}/>
                    <h6>Konec</h6>
                    <DateTime inputProps={{name: 'end'}} value={this.state.end} onChange={this.handleEndChange}/>
                    <h6>Text:</h6>
                    <Textarea field='text'  name="text" style={areaStyle}/>
                    {quill}
                    <button type="submit">Uložit</button>
                </form>;
            }}
        </Form>;
    }
}
export default connect(mapStateToProps)(EventEdit);
