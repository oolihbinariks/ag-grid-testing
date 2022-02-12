import React from 'react';

export const CustomContext = React.createContext()
const ProviderContext =({children})=>{
    const [clickedRow, setClickedRow] = React.useState({ clickedIndexRow:null})
    const value ={
        value: clickedRow,
        setValue: setClickedRow
    }
    return(
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    )
}

export default ProviderContext
