import {useState} from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function SignIn(e){
        console.log("Noice try")
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        })
        //do sth
    }

    return (
        <section className="sign-in-form">
            <form onSubmit={SignIn}>
                <h1>Log In</h1>
                <label>email:
                    <input type="email" 
                            value={email} 
                            onChange={(e => setEmail(e.target.value))}
                            placeholder="yourmail@email.com"></input>
                </label>
                <br></br>
                <label>password:
                    <input type="password" 
                            value={password} 
                            onChange={(e => setPassword(e.target.value))}
                            placeholder="enter your password"></input>
                </label>
                <br/>
                <button type='submit'>Log In</button>
            </form>
        </section>  
    )
}