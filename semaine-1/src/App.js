import { Outlet, Link } from "react-router-dom";

import 'bulma/css/bulma.min.css';

export default function App() {
  return (
    <div>
      <h1 className="title is-1">Bookkeeper</h1>
      <nav
        className="navbar"
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices" className="button is-primary is-light">Invoices</Link> {" "}
        <Link to="/expenses"className="button is-secondary">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
