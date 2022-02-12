import React, { useContext, useState } from 'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CustomStatsToolPanel from './CustomStatsToolPanel';
import { CustomContext } from './CustomContext';

const TableAgGrid = () => {
    const {value, setValue} = useContext(CustomContext)
    const [gridApi, setGridApi] = useState(null)
    const [sideBar, setSideBar] = useState(null)
    
    const rowData = [
        {name: "Dan", age: 20,},
        {name: "Max", age: 23,},
        {name: "David", age: 24,},
        {name: "Dan", age: 27,},
    ]
    const columns=[
        {headerName:'Name', field:'name', },
        {headerName:'Age', field:'age',},
    ]
    const defaultColDef={
        sortable:true, 
        editable:true, 
        filter:true, 
        flex:1, 
        floatingFilter:true,
    }
    const frameworkComponents = { customStatsToolPanel: CustomStatsToolPanel }
    const onGridReady = (params)=>{
        setGridApi(params.api)
        setSideBar( {
            toolPanels: [
                {
                    id: 'customStats',
                    labelDefault: 'Custom Stats',
                    labelKey: 'customStats',
                    iconKey: 'custom-stats',
                    toolPanel: 'customStatsToolPanel',
                },
            ],
        })
    }
    const handleRowClick = (params)=>{
        gridApi.openToolPanel('customStats')
        const {rowIndex} = params
        setValue({...value, clickedIndexRow:rowIndex})
    }
    return (
        <div style={{textAlign:'center'}}>
        <h2>React AG Grid</h2>
            <div className="ag-theme-alpine" style={{height: 400, width: 1200, margin:'20px auto'}}>
                <AgGridReact
                    rowData={rowData} 
                    columnDefs={columns} 
                    defaultColDef={defaultColDef}
                    onGridReady={onGridReady}
                    rowSelection='multiple'
                    onRowClicked={ handleRowClick }
                    sideBar={sideBar}
                    frameworkComponents={frameworkComponents}
                />
            </div>
        </div>
    );
 
};

export default TableAgGrid;
