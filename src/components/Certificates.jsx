import styled from "styled-components";
import { RevealGrid } from "./RevealGrid";
import { certificates } from "../data/projects";
import CertificateImages from "./CertificateImages";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const StyledCertificates = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1em;
  align-self: end;
  margin-bottom: 1.5rem;
  padding: 0.8em 1.2em;
  cursor: pointer;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.95);
  }
`;

function Certificates() {
  const navigate = useNavigate();
  return (
    <StyledCertificates>
      <StyledButton onClick={() => navigate("/")}>
        <IoIosArrowBack />
        <span>back</span>
      </StyledButton>
      <RevealGrid>
        {certificates.map((certificate) => (
          <CertificateImages certificate={certificate} key={certificate.name} />
        ))}
      </RevealGrid>
    </StyledCertificates>
  );
}

export default Certificates;
