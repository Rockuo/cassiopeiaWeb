/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import {connect} from 'react-redux';
import {Form, Textarea} from 'react-form';


const mapStateToProps = (state) => {
    return state.pageData;
};
const areaStyle = {
    display: 'none',
};

class ContactEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactAttributes: props.contact ? props.contact.contactAttributes : ''
        };

        this.handleQuillChange = this.handleQuillChange.bind(this);
    }

    handleQuillChange(value) {
        this.setState({ contactAttributes: value })
    }

    render() {
        let quill = <div/>;
        if (global.isFrontend) {
            const ReactQuill = require('react-quill');
            quill = <ReactQuill value={this.state.contactAttributes}
                                onChange={this.handleQuillChange} />;
        }
        return <Form
            defaultValues={{
                contactAttributes: this.state.contactAttributes,
            }}
        >
            {({values}) => {
                return <form action={this.props.action} method="POST">
                    <h6>Obsah</h6>
                    <Textarea field='contactAttributes'  name="contactAttributes"  style={areaStyle}/>
                    {quill}
                    <button type="submit">Uložit</button>
                </form>;
            }}
        </Form>;
    }
}
export default connect(mapStateToProps)(ContactEdit);
