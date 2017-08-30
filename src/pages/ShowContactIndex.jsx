/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => {
    return state.pageData;
};

const ShowContactIndex = props => <div>{_.map(props.rows, row => <div><div dangerouslySetInnerHTML={{__html: row.contactAttributes}}/><hr/></div>)}</div>;


export default connect(mapStateToProps)(ShowContactIndex);