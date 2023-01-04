import { useState } from "react";
import { useContext, useRef } from "react";
import { addNewAcc_action } from "../Actions/dataActions";
import getId from "../Functions/getId";
import inputValidation from "../Functions/inputValidation";
import DataContext from "./DataContext";

function Registration() {
    const { dispachData } = useContext(DataContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsCheched] = useState(false);

    // const [alert, setAlert] = useState(false);
    // const [notification, setNotification] = useState('');


    const registration = (e) => {
        e.preventDefault();
        const name = inputValidation('name', nameRef.current.value);
        const email = inputValidation('email', emailRef.current.value);
        const pass = inputValidation('pass', passRef.current.value);

        if (name && email && pass && isChecked) {
            dispachData(
                addNewAcc_action({
                    id: getId(),
                    name,
                    email,
                    pass,
                    deleted: false,
                    check: false,
                })
            );

            nameRef.current.value = "";
            emailRef.current.value = "";
            passRef.current.value = "";
            setIsCheched(false);
        }
    }

    return (
        <>
            {/* <div>{notification}</div> */}

            <h1>Registration</h1>
            <form onSubmit={e => registration(e)} className="form">
                <label>
                    <input ref={nameRef} type="text" placeholder="Name" />
                </label>
                <label>
                    <input ref={emailRef} type="email" placeholder="Email" />
                </label>
                <label>
                    <input ref={passRef} type={type} placeholder="Password" />
                    <button type='button' onClick={() => setType(t => t === 'password' ? 'text' : 'password')}>
                        {type === 'password' ? 'Show' : 'Hide'}
                    </button>
                </label>

                <label>
                    <span>I understand that this is a DEMO app and all data is public.</span>
                    <input type="checkbox" onChange={e => setIsCheched(e.target.checked)} checked={isChecked} />
                </label>

                <button type="submit">Sign up</button>

                <article>
                    <h2>Have acc?</h2>
                    <button>Sign in</button>
                </article>
            </form>
        </>
    )
}

export default Registration;