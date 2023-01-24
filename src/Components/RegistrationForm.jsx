import { useState } from "react";
import { useEffect } from "react";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { registration_action } from "../Actions/dataActions";
import getId from "../Functions/getId";
import inputValidation from "../Functions/inputValidation";
import DataContext from "./DataContext";
import Notifications from "./Notifications";

function Registration() {
    const { data, dispachData } = useContext(DataContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsCheched] = useState(false);

    const [notificationsList, setNotificationsList] = useState([]);

    const registration = (e) => {
        e.preventDefault();
        setNotificationsList([]);

        const name = inputValidation('name', nameRef.current.value);
        const email = inputValidation('email', emailRef.current.value);
        const pass = inputValidation('pass', passRef.current.value);

        const isName = !name.error;
        const isEmail = !email.error;
        const isPass = !pass.error;

        if (isName && isEmail && isPass && isChecked) {
            dispachData(
                registration_action({
                    id: getId(),
                    name: name.value,
                    email: email.value,
                    pass: pass.value
                })
            );

            nameRef.current.value = "";
            emailRef.current.value = "";
            passRef.current.value = "";
            setIsCheched(false);

        } else {
            if (!isName) {
                setNotificationsList(n => [...n, name.notification])
            }
            if (!isEmail) {
                setNotificationsList(n => [...n, email.notification])
            }
            if (!isPass) {
                setNotificationsList(n => [...n, pass.notification])
            }
            if (!isChecked) {
                setNotificationsList(n => [...n, 'Ihardcodintas eroooor -> varna spaudziam.'])
            }
        }
    }

    useEffect(() => {
        if (data) {
            const notifications = data[1];
            setNotificationsList(notifications);
        }
    }, [data]);

    return (
        <>
            <h1>Registration</h1>
            {notificationsList.length ? <Notifications notificationsList={notificationsList} /> : null}
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
                    <Link to='/login'>Sign in</Link>
                    <br></br>
                    <Link to='/'>Home</Link>
                </article>
            </form>
        </>
    )
}

export default Registration;