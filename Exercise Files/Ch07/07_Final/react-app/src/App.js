import "./App.css";
import {Link, Outlet} from "react-router-dom";

function Home() {
  return(
      <div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        <h1>Home</h1>
      </div>
  );
}

export function About() {
    return(
      <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        <h1>About Us</h1>
          <Outlet/>
      </div>
  );
}

export function Contact() {
    return(
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        <h1>Contact Us</h1>
      </div>
  );
}

export function OurHistory() {
    return(
        <div>
            <h1>Our History</h1>
        </div>
    );
}
export function App() {
  return <Home/>;
}

