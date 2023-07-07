import React from "react";
import { Link, LinkProps } from "react-router-dom";
interface RedirectLinkProps extends LinkProps {
  text: string;
}
function RedirectLink({ to, text }: RedirectLinkProps) {
  return (
    <Link style={{ textDecoration: "none", color: "black" }} to={to}>
      {text}
    </Link>
  );
}

export default RedirectLink;
