import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  
  function handleSubmission(event) {
    event.preventDefault();
    
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    
    console.log(enteredEmail, enteredPassword);
  }

  
  return (
    <form onSubmit={handleSubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
