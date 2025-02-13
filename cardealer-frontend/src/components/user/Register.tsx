import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [token, setToken] = useState<string>("");

  const registerUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === passwordConfirmation) {
      try {
        const newUserInfo: any = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
        };

        if (phoneNumber) {
          newUserInfo.phoneNumber = phoneNumber
        }

        console.log(newUserInfo)

        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newUserInfo),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const responseJSON = await response.json();
        const token = responseJSON.token;
        setToken(token);

      } catch(e: any){
        alert(e.message || "Something has gone wrong. Please try again later.")
      }
    } else {
      alert("Passwords do not match. Please re-enter.")
    }
  };

  return (
    <div id="register-block">
      <h2>Please Register Below</h2>
      {token ? (
        <p>Thank you for registering. please click <Link to="/login">here</Link> to login.</p>
      ) : (
      <form name="register-form" onSubmit={registerUser}>
        <label htmlFor="register-firstName-input">First Name:</label>
        <input 
        name="firstName"
        id="register-firstName-input"
        type="text"
        autoComplete="given-name"
        required
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="register-lastName-input">Last Name:</label>
        <input
        name="lastName"
        id="register-lastName-input"
        type="text"
        autoComplete="family-name"
        required
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="register-email-input">Email Address:</label>
        <input
        name= "email"
        id="register-email-input"
        type= "email"
        autoComplete="email"
        required
        value = {email}
        onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="register-phone-number-input">Phone Number &#40;opitonal&#41;:</label>
        <input
        name= "phoneNumber"
        id="register-phone-number-input"
        type= "tel"
        placeholder="optional"
        autoComplete="tel"
        value = {phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <label htmlFor="register-password-input">New Password:</label>
        <input 
        name= "password"
        id="register-password-input"
        type= "password"
        autoComplete="new-password"
        required
        value = {password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="register-confirm-password-input">Confirm Password:</label>
        <input 
        name= "confirm-password"
        id="register-confirm-password-input"
        type= "password"
        autoComplete="new-password"
        required
        value = {passwordConfirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <button type= "submit">Register</button>
      </form>
      )}
    </div>
  )
}

export default Register;