import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  icon: ReactNode;
  path: string;
  target?: string;
  rel?: string;
}

const LinkButton = ({ icon, path, target, rel }: LinkButtonProps) => {
  return (
    <Link to={path} target={target} rel={rel}>
      {icon}
    </Link>
  );
};

export default LinkButton;
