import React from 'react';
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import * as pages from './pages';

export default  (store) => (props) => {
    const state = store.getState(),
        Page = pages[state.page];
    console.log(`PAGE: ${state.page}`);
    return <Provider store={store}>
        <App {...props} menuItems={state.menuItems} topMenuItems={state.topMenuItems}>
            <Page/>
        </App>
    </Provider>;
};