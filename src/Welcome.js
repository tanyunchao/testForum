import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Welcome = () => {
    return ( 
        <div style={{paddingBottom: "20px"}}>
            <div className="welcomeDiv" style={{paddingBottom: "15px"}}>
                <h1>Welcome to my forum</h1>
                <h2>It is your one-stop shop to discuss anything about school or life!</h2>
            </div>
                <Link to={'/home'}><Button variant="outline-primary">Get started</Button></Link>

        </div>
     );
}
 
export default Welcome
