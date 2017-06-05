/**
 * Created by rockuo on 3.6.17.
 */

import React from 'react';


export const menuItem = ({href, icon = '', title}) => <li><a href={href}><i className={icon}/>{title}</a></li>;
