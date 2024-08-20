
import { Alert} from "react-bootstrap";

const Welcome = function () {
  return (
    <div className="mt-4 text-center">
      <Alert variant="none">
        <h1>Welcome to MyBookStore</h1>
        <p>Your one-stop shop for the best books online!</p>
      </Alert>
    </div>
  );
};
export default Welcome;
