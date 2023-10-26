import {useState} from 'react';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function CreateAcc() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function CreateAccount(e){
        console.log("Noice try")
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <section className="sign-in-form">
            <h1>Create Account</h1>
            <form onSubmit={CreateAccount}>
                <label>email:
                    <input type="email" 
                            value={email} 
                            onChange={(e => setEmail(e.target.value))}
                            placeholder="enter your mail"></input>
                </label>
                <br></br>
                <label>password:
                    <input type="password" 
                            value={password} 
                            onChange={(e => setPassword(e.target.value))}
                            placeholder="enter your password"></input>
                </label>
                <br/>
                <button type='submit'>Create account</button>
            </form>
        </section>  
    )
}