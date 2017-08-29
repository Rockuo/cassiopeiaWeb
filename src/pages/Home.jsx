/**
 * Created by rockuo on 29.5.17.
 */

import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {title: 'pepa', user: state.user};
};

const Home = (props) => {
    return <div>
        <h1>{props.title}</h1>
    </div>;
};

export default connect(mapStateToProps)(Home);
