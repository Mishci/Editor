
import { useState } from "react";
import { NavLink } from "react-router-dom";


const SignInUP = (props) => {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div style={{paddingLeft: "5%", paddingRight: "5%", backgroundColor: "grey", 
      boxShadow: "rgba(103, 89, 234, 0.16), 10px 10px 10px", width: "40%", margin: "auto", position: "relative", zIndex: "10" }}> 
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
             <h3 className="text-center">Přihlašte se do účtu</h3> 
            <div className="text-center">
              Ještě nejste registrováni{" "}
              <span className="link-primary" style={{cursor: "pointer"}} onClick={changeAuthMode}>
                Založit účet
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Emailová adresa</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Heslo</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Odeslat
              </button>
            </div>
            <p className="text-center mt-2">
              Zapomněli jste <NavLink to="/Signup/passwordreq">heslo?</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
    )
  }

  return (
    <div style={{paddingLeft: "5%", paddingRight: "5%", backgroundColor: "grey", width: "40%", margin: "auto" }}>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="text-center">Založit účet</h3>
          <div className="text-center">
            Už máte účet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Přihlásit
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Jméno a přímění</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Emailová adresa</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Heslo</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Odeslat
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <NavLink to="/Signup/passwordreq">heslo?</NavLink>
          </p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignInUP