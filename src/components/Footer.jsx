import styled from "styled-components";

const StyledFooter = styled.section`
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040d1b;
  gap: 1em;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy;Adrian Fajardo 2025</p>
    </StyledFooter>
  );
}

export default Footer;
