import { RouteComponentProps } from "react-router-dom";
import { SignInStyledWrapper } from "./signIn.style";
import Form from "../Form";
import { blue } from "@mui/material/colors";
import { Typography } from "@mui/material";

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <SignInStyledWrapper>
      <Typography
        variant="h4"
        component="div"
        sx={{ mt: 5, mb: 5, color: blue[900] }}
      >
        Sign In
      </Typography>
      <Form history={history} />
    </SignInStyledWrapper>
  );
};

export default SignIn;
