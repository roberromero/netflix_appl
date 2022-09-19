import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {


    const [saludo, setSaludo] = useState(["hola", "hello", "bonyua", "salaMoalicum"]);
    const [num, setNum] = useState(0);

    return(
        <DataContext.Provider value={{ saludo, setSaludo, num, setNum}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;