import { Dispatch, FormEvent, SetStateAction, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  token: string;
  setToken: Dispatch<SetStateAction<string>>
  setUserID: Dispatch<SetStateAction<number>>
  setIsSuperUser: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ token, setToken, setUserID, setIsSuperUser }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")

  const navigate = useNavigate();

  const logInUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
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
      const token = responseJSON.token;
      setIsSuperUser(responseJSON.isSuperUser);
      setToken(token);
      setUserID(responseJSON.id)

    } catch(e: any) {
      alert(e.message || "Something has gone wrong. Please try again later.");
    }
  };

  useEffect(() => {
    if (token) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [token])

  return (
    <div id="login-block">
    <h2>Please Login Below</h2>
      {token ? (
      <p>Thank you for logging in, you will be redirected shortly.</p>
      ) : (
      <form onSubmit={logInUser}>
        <input
        name="email" 
        type="email"
        placeholder="Enter email address"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <input
        name="password" 
        type="password"
        placeholder="Enter password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      )} 
    </div>
  )
}

export default Login;