import { Link } from "react-router-dom";

function PageNotFound () {
    return (
        <>
        <h1> Error 404 ! Page not found  </h1>
        <Link to="/">Go back to Home Page</Link>
        </>
    );
};

export default PageNotFound;