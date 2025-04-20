import styled from "styled-components";
import Certificates from "../components/Certificates";

const StyledCertificate = styled.div`
  background-color: #061427;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  text-align: center;
`;
function Certificate() {
  return (
    <StyledCertificate>
      <Certificates />
    </StyledCertificate>
  );
}

export default Certificate;
