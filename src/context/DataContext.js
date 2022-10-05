import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {


    
    const [currentPage, setCurrentPage] = useState("Homepage");
    return(
        <DataContext.Provider value={{ currentPage, setCurrentPage}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;