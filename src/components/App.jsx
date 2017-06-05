/**
 * Created by rockuo on 3.6.17.
 */

import React from 'react';
import Layout from './Layout.jsx';
import menuItems from '../../server/menu';

class App  extends React.Component{
    render(){
        return <Layout menuItems={menuItems}>{this.props.children}</Layout>;
    }
}
export default App;