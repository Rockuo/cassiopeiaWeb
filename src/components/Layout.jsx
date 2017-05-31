/**
 * Created by rockuo on 30.5.17.
 */

import React from 'react';
import _ from 'lodash';

const containerStyle = {
    minHeight: 800 + 'px',
};

class Home extends React.Component {
    render() {

        let menuItems = _.map(
            this.props.menuItems,
            item => <li><a href={item.href}><i className={item.icon}/>{item.title}</a></li>
            ),
            topMenuItems = _.map(this.props.topMenuItems, item => <li><a href={item.href}>{item.title}</a></li>);

        return <div className="templatemo-flex-row">
            <div className="templatemo-sidebar">
                <header className="templatemo-site-header">
                    <h1>{this.props.mainHeader}</h1>
                </header>
                <div className="profile-photo-container">
                    {this.props.icon}
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

Home.defaultProps = {
    mainHeader: 'Cassiopeia Pardubice',
    icon: <img src="/images/SKAUT_logo_obrys_bily.png" alt="Profile Photo" className="img-responsive"/>,
    menuItems: [{href: 'index.html', icon: 'fa fa-home fa-fw', title: 'Dashboard'}],
    toMenuItems: [{href: '#', title: 'something'}]
};
export default Home;
