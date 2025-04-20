import styled from "styled-components";

const StyledIcon = styled.div`
  width: 100%;
  max-width: 98px;
  background-color: #1b2c44;
  padding: 0.5em;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 126px;
  }
`;

function Icons({ icon }) {
  const { image, name } = icon;

  return (
    <StyledIcon>
      <img src={image} alt={`${name} image`} />
    </StyledIcon>
  );
}

export default Icons;
