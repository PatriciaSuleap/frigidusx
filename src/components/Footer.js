import React from "react";
import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        <CustomLink to="/terms">Terms and Coditions</CustomLink>
        <CustomLink to="/privacy">Privacy Policy</CustomLink>
        <CustomLink to=" ">Copyright {props.year} </CustomLink>
        <CustomLink to=" ">
          Find us here: 208 Stanly Ave, Statly, UK, ST1 1ST
        </CustomLink>
      </ul>
    </footer>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
