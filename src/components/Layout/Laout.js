import React from 'react';
import NavigationBar from '../Header/Nav';
import {Grid} from '@material-ui/core'; 
import {Outlet} from "react-router-dom"

const Layout =({children}) =>{
    return(
        <>
        <div>
            
                    <NavigationBar></NavigationBar>
                    <div style={{height: "1vh", backgroundColor: "white"}}></div>  
                
          </div>
        
        <main>{children}</main>
        <Outlet/>
        </>
    )
}

export default Layout;