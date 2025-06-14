import styled from "styled-components";
import { ImageContainer } from "./RevealGrid";

const StyledCertificateImages = styled.li`
  width: 100%;
  display: flex;
  gap: 1em;
  background-color: #10233d;
  padding: 1em;
  border-radius: 5px;
`;

const StyledDescriptions = styled.div`
  padding: 2rem;
`;

function CertificateImages({ certificate }) {
  const { certificateImages, name, description } = certificate;
  return (
    <>
      <StyledCertificateImages>
        <ImageContainer>
          <img src={certificateImages} alt={`${name} certificate image`} />
        </ImageContainer>
      </StyledCertificateImages>
      <StyledDescriptions>
        <p>{description}</p>
      </StyledDescriptions>
    </>
  );
}

export default CertificateImages;
