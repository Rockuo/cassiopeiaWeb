import React from 'react';
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import * as pages from './pages';

export default  (store) => () => {
    const Page = pages[store.getState().page];
    return <Provider store={store}><App><Page/></App></Provider>;
};