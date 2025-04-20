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

function CertificateImages({ certificate }) {
  const { certificateImages, name } = certificate;
  return (
    <StyledCertificateImages>
      <ImageContainer>
        <img src={certificateImages} alt={`${name} certificate image`} />
      </ImageContainer>
    </StyledCertificateImages>
  );
}

export default CertificateImages;
