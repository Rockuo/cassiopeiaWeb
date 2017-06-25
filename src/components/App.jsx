/**
 * Created by rockuo on 3.6.17.
 */

import React from 'react';
import Layout from './Layout.jsx';

class App  extends React.Component{
    render(){
        return <Layout {...this.props}>{this.props.children}</Layout>;
    }
}
export default App;