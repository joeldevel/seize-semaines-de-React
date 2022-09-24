import { Outlet, NavLink } from "react-router-dom";

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
        <NavLink to="/invoices" className={(navData) => (navData.isActive ? 'button is-primary' : 'button is-secondary')}>Invoices</NavLink> {" "}
        <NavLink to="/create" className={(navData) => (navData.isActive ? 'button is-primary' : 'button is-secondary')}>create invoice</NavLink> {" "}
        <NavLink to="/expenses" className={(navData) => (navData.isActive ? 'button is-primary' : 'button is-secondary')}>Expenses</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
}
