import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  const [email, setEmail] = useState("emai@email.com");
  const [password, setPassword] = useState("123");

  const auth = useContext(AuthContext);
  const { signIn } = auth;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Sign In" /> <br />
        Need an account?: <Link to="/sign-up">Sign Up</Link>
      </form>
    </>
  );
};

export default SignIn;
