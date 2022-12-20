import { useState } from "react";
import { useContext, useRef } from "react";
import { addNewAcc_action } from "../Actions/dataActions";
import getId from "../Functions/getId";
import DataContext from "./DataContext";

function RegistrationForm() {
    const { dispachData } = useContext(DataContext);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const passConfirmRef = useRef();
    const [isCheck, setIsCheck] = useState(false);


    const addNewAcc = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const passConfirm = passConfirmRef.current.value;

        // if (name && email && pass && passConfirm && checkbox) {
        //     dispachData(
        //         addNewAcc_action({
        //             id: getId(),
        //             name,
        //             email,
        //             pass,
        //             passConfirm,
        //             deleted: false,
        //             check: false,
        //         })
        //     );
        // }

        nameRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";
        passConfirmRef.current.value = "";
        setIsCheck(false);
    }

    return (
        <>
            <h1>Sing up!</h1>
            <form onSubmit={e => addNewAcc(e)}>
                <label>
                    <input ref={nameRef} type="text" placeholder="Name" />
                </label>

                <label>
                    <input ref={emailRef} type="email" placeholder="Email" />
                </label>

                <label>
                    <input ref={passRef} type="password" id="pass" name="password" placeholder="Password" />
                </label>

                <label>
                    <input ref={passConfirmRef} type="password" placeholder="Confirm Password" />
                </label>

                <label>
                    <span>I understand that this is a DEMO app and all data is public.</span>
                    <input type="checkbox" onChange={e => setIsCheck(e.target.checked)} checked={isCheck} />
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

export default RegistrationForm;