import { Link } from "react-router-dom";

function LoginForm() {

    return (
        <>
            <h1>Login</h1>
            <form className="form">
                <label>
                    <input type="email" placeholder="Email" />
                </label>
                <label>
                    <input type="password" placeholder="Password" />
                    <button type='button' onClick={() => { }}>X</button>
                </label>
                <label>

                </label>

                <button type="submit">Sign in</button>

                <article>
                    <h2>Don't have acc?</h2>
                    <Link to='/registration'>Sign up</Link>
                    <br></br>
                    <Link to='/'>Home</Link>
                </article>
            </form>
        </>
    )
}

export default LoginForm;