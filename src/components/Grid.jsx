import React from 'react';


const Grid = ({columns, rows}) => {
    let grid = <div/>;
    if (global.isFrontend) {

        let rowGetter = (i) => rows[i];
        const ReactDataGrid = require('react-data-grid');
        grid = <ReactDataGrid
            columns={columns}
            rowGetter={rowGetter}
            rowsCount={rows.length}
            minHeight={700}
        />;
    }
    return <div width="80%">{grid}</div>;
};

export default Grid;