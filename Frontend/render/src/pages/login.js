import "../styles/login.css"
import googleIcon from "../icons/google-icon.png"
import appleIcon from "../icons/apple-icon.png"
import metaIcon from "../icons/meta-icon.png"

function Login(){
    return(
        <div className="login-page all-center">
            <h1>Login To Render</h1>
            <div className="all-center">
                {/* lofin methods container */}
                <div className="login-methods-container login-box">
                    <div className="login-method-google login-methods all-center">
                        <div className="login-method-logo">
                            <img className="img100" src={googleIcon} alt="g-icon"></img>
                        </div>
                        <p>Continue with Google
                        </p>
                    </div>

                    <div className="login-method-appleu login-methods all-center">
                    <div className="login-method-logo">
                            <img className="img100" src={appleIcon} alt="a-icon"></img>
                        </div>
                        <p>Continue with Apple
                        </p>
                    </div>

                    <div className="login-method-meta login-methods all-center">
                    <div className="login-method-logo">
                            <img className="img100" src={metaIcon} alt="m-icon"></img>
                        </div>
                        <p>Continue with Meta
                        </p>
                    </div>
                </div>

                <div className="login-box-divider login-box all-center">
                    <hr></hr>
                    <p>or</p>
                    <hr></hr>
                </div>

                {/* manual login container */}
                <div className="login-manual login-box">
                    <div className="login-details-input">
                        <p>Email Address</p>
                        <input className="login-email-address" type="text" name="login-email-address" placeholder="example@gmail.com"/>
                    </div>

                    <div className="login-details-input">
                        <p>Password</p>
                        <input className="login-password" type="password" name="login-password" placeholder="password"/>
                    </div>

                    <button className="login-details-input login-btn">Login</button>
                </div>
            </div>

            <p className="sign-up-option-text">Don't have an account ? <a href="/signup" className="sign-up-btn">Sign Up</a></p>
            
        </div>
    )
}

export default Login;