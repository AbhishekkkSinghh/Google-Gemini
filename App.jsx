import React from "react";
import { Sidebar } from "./components/SideBar/Sidebar";
import {Main} from "./components/Main/Mains"
import {GlobalProvider} from "./context/context"

function App () {
    return(
      <GlobalProvider>
          hii
          <Sidebar></Sidebar>
          <Main></Main>
      </GlobalProvider>
        
    )
}

export default App;
