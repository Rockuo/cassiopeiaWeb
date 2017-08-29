/**
 * Created by rockuo on 3.6.17.
 */

import React from 'react';
import _ from 'lodash';

export const menuItem = ({href, icon = '', title}) => <li key={href}><a href={href}>{/*<i className={icon}/>*/}{title}</a></li>;

export const grid = (rows) => rows.length?_.map(rows, row => {
    return <li key={row.value}><a href={row.href}>{row.value}</a></li>
}): <p>no data</p>;