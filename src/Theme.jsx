import { React, useState, useContext, createContext } from 'react';
import './Theme.css'

const defaultState = {
    dark: false,
    toggleDark: () => {},
  }
  
  const ThemeContext = createContext(defaultState);
  
  const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(false);
    
    const toggleDark = (e, dark2) => {
      
        let dark = !dark2
        // localStorage.setItem("dark", JSON.stringify(dark))
        setDark(dark)
      
    }
    
    // useEffect(() => {
    //   const localStorageDark = JSON.parse(localStorage.getItem("dark"));
    //   if(localStorageDark){
    //     setDark(localStorageDark);
    //   }
    // },[])
    
    return (
      <ThemeContext.Provider value={{dark, toggleDark}}>
          {children}
      </ThemeContext.Provider>
    )
  }
  
  
  export const Theme = () => {
   
      return(
        <div className="app">
          <div className="app-center">
            <ThemeProvider>
              <Navbar>
                <Button/>
              </Navbar>
              <Content/>
              <Content/>
            </ThemeProvider>
          </div>
        </div>
      )
    
  }
  
  
  const Button = () => {
    
      const { dark, toggleDark} = useContext(ThemeContext);
    
      return(
        <button className="button" onClick={e => toggleDark(e,dark)}>
          Toggle Theme
        </button>
      )
    
  }
  
  const Navbar = ({children}) => {
    const {dark} = useContext(ThemeContext);
    return(
      <nav className={dark ? "navbar-dark" : "navbar"}>
        {children}
      </nav>
    )
  }
  
  const Content = () => {
     const {dark} = useContext(ThemeContext);
      return(
        <div className={dark ? "content-dark" : "content"}>
          <h1>Content</h1>
          <h4>Will Consume React Context</h4>
          <p>Once the toggle theme button is pressed, the theme value in the React Context object will change, and accordingly this content will change its theme</p>
        </div>
      )
  }
  