import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const registerUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseJSON = await response.json();
      const token = responseJSON.token;
      console.log(responseJSON);
      setToken(token);

    } catch(e: any){
      alert(e.message)
    }
  };

  return (
    <>
      <h2>Please Register Below</h2>
      {token ? (
        <p>Thank you for registering. please click <Link to="/login">here</Link> to login.</p>
      ) : (
      <form onSubmit={registerUser}>
        <input
        type= "email"
        placeholder= "Enter email address"
        required
        value = {email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <input 
        type= "password"
        placeholder= "Enter password"
        required
        value = {password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <button type= "submit">Register</button>
      </form>
      )}
    </>
  )
}

export default Register;