/**
 * Context -->1
 * Provider --->2
 * -----Consumer !//removed and replaced with useContext as consumer was lengthy-----
 * useContext --->3
 */

import { createContext } from "react";

const appContext = createContext()

const appProvider = ({ children }) => {
    const userData = {
        name: "Niranjan",
        role: "Full Stack developer"
    }

    return (
        <appContext.Provider value={userData}>{children}</appContext.Provider>
    )
} 

export {appContext, appProvider} ;