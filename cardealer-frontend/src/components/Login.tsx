import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")
  const [token, setToken] = useState<string>("");

  const logInUser = async () => {

  }

  return (
    <>
     <form onSubmit={logInUser}>
      <input 
      type="email"
      placeholder="Enter email address"
      required
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      />
      <input 
      type="password"
      placeholder="Enter password"
      required
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Log In</button>
     </form>
    </>
  )
}

export default Login;