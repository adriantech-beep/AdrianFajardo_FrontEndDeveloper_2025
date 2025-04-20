import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  list-style-type: none;

  &:hover {
    color: #833ab4;
  }
`;

export default StyledNavLink;
