import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")
  const [token, setToken] = useState<string>("");

  const logInUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/login", ({
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        email: email,
        password: password
      }),
    }));

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const responseJSON = await response.json();
    console.log(responseJSON);
    const token = responseJSON.token;
    setToken(token);
  };

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