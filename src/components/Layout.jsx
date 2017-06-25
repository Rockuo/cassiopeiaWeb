/**
 * Created by rockuo on 30.5.17.
 */

import React from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';
import {menuItem} from './MiniItems.jsx';

const containerStyle = {
    minHeight: 800 + 'px',
};

class Layout extends React.Component {
    render() {
        if(typeof window !== 'undefined'){
            window.a =this;
        }
        let menuItems = _.map(this.props.menuItems, menuItem),
            topMenuItems = _.map(this.props.topMenuItems, menuItem);

        return <div className="templatemo-flex-row">
            <div className="templatemo-sidebar">
                <header className="templatemo-site-header">
                    <h1>{this.props.mainHeader}</h1>
                </header>
                <div className="profile-photo-container">
                    {this.props.logo}
                </div>
                <div className="mobile-menu-icon">
                    <i className="fa fa-bars"/>
                </div>
                <nav className="templatemo-left-nav">
                    <ul>{menuItems}</ul>
                </nav>
            </div>
            <div className="templatemo-content col-1 light-gray-bg">
                <div className="templatemo-top-nav-container">
                    <div className="row">
                        <nav className="templatemo-top-nav col-lg-12 col-md-12">
                            <ul className="text-uppercase">
                                {topMenuItems}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="templatemo-content-container">
                    <div style={containerStyle}>
                        {this.props.children}
                    </div>
                    <footer className="text-right">
                        <p>Copyright &copy; 2016 Rockuo
                            | Designed by <a href="http://www.templatemo.com" target="_parent">templatemo</a></p>
                    </footer>
                </div>
            </div>
        </div>;
    }
}
//
Layout.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.string,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired
};

Layout.defaultProps = {
    mainHeader: 'Cassiopeia Pardubice',
    logo: <img src="/images/SKAUT_logo_obrys_bily.png" alt="Profile Photo" className="img-responsive"/>,
    topMenuItems: [{href: '#', title: 'something'}],
    menuItems: [{href: '#', title: 'something'}]
};
export default Layout;
