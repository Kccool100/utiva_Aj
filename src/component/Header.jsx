import React from 'react'
import classes from "./Headerstyle.module.css"
import GlobalButton from './GlobalButton'
import {BiMenuAltRight} from 'react-icons/bi'
import {MdClear} from 'react-icons/md'
const Header = () => {
    const [toogle, setToogle]= React.useState(true)

    const handleToogle = ()=>{
        setToogle(!toogle)
    }
  return (
        <div className={classes.headcom}>
          <div className={classes.myhold}>
          
             <div className={classes.logoCon}>
             <div className={classes.firsticonHolder}>
                {
                    toogle ? (
                        <div 
                        onclick={handleToogle}
                        > <MdClear
            
             <BiMenuAltRight style={{
              fontSize:"40px",
              color:"blue",
              cursor:"pointer"
            }}/>
        </div>
     }
        </div>
            <span>Utiva</span>
            </div>
            
          <div className={classes.navigation}>
            <div className={classes.nav_link}>School</div>
            <div className={classes.nav_link}>Enterprise</div>
            <div className={classes.nav_link}>Company</div>
          </div>
          <div className={classes.butn}>
            <GlobalButton>Sign up</GlobalButton>
            <GlobalButton outline="true" varient="primary">Log in</GlobalButton>
          </div>
          <div className={classes.iconHolder}>
            {
                toogle ? (
                    <div
                       onclick={handleToogle}>
                    <BiMenuAltRight style={{
                        fontSize:"40px",
                        color:"blue",
                        cursor:"pointer"
                      }}/>
                       </div>) : (
                        <div onClick={handleToogle}>
                        <MdClear style={{
                            fontSize:"40px",
                            color:"blue",
                            cursor:"pointer"
                        }} 
                        />
                        </div>)
                      }
                
            
             <BiMenuAltRight style={{
              fontSize:"40px",
              color:"blue"
            }}/>
        </div>
          </div>
          
        </div>
  )
}

export default Header