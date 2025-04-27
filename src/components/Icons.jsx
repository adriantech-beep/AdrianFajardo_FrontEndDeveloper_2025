import styled from "styled-components";

const StyledIcon = styled.div`
  width: 100%;
  max-width: 105px;
  background-color: #1b2c44;
  padding: 0.5em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;

  img {
    width: 100%;
  }

  span {
    font-size: 0.8rem;
    color: white;
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
      <span>{name}</span>
    </StyledIcon>
  );
}

export default Icons;
