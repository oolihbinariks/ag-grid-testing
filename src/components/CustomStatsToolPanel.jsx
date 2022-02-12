import React, { useMemo } from 'react';
import { CustomContext } from './CustomContext';

const CustomStatsToolPanel = ({api}) => {
  const {value:{clickedIndexRow}} = React.useContext(CustomContext)
  const memoizedRow = useMemo(() => {
    if (clickedIndexRow || clickedIndexRow===0) {
      return api.getDisplayedRowAtIndex(clickedIndexRow)
    }
  }, [clickedIndexRow, api])
  
  return(
    <div className='customPanel'>
        <h1>Clicked row</h1>
        <li>
          {memoizedRow &&(
            <>  
              <span> {memoizedRow.data.name}</span> 
              <span> {memoizedRow.data.age}</span>
            </>
           ) 
          }
        </li>
    </div>
  )
};

export default CustomStatsToolPanel;
