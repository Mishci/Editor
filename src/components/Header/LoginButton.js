import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import SignInUP from '../Body/SingInUp';


const LoginButton = (props) => { 
    const [logCheck, setLoggedIn] = useState (false)
    

    const loginOnclickHandler = (event) => { 
        event.preventDefault()
        logCheck ===false? setLoggedIn (true)
                        : setLoggedIn (false)
        }

    return (
        <>

        <Button type="button" onClick={loginOnclickHandler} style={{ marginLeft: "7vh", verticalAlign: "center"}}></Button>{' '}
        
        
                
                {logCheck===true && 
                <div style={{width:"50%", backgroundColor:"white !important"}} > 
                    
                    <SignInUP style = {{marginTop: "center"}}
                    ></SignInUP> 
                </div>} 
            
 
       </>
    )
     
}
export default LoginButton
