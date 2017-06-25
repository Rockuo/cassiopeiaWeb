/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {title: 'pepa', user: state.user};
};

const Home = (props) => {
    console.log(props.user);
    return <div>Hello {props.title}</div>;
};

export default connect(mapStateToProps)(Home);
