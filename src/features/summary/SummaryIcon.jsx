import styled from 'styled-components';

const StyledImgBox = styled.div`
  height: 95%;
  width: 100%;
  align-self: center;
  justify-self: center;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-yellow-700);
  border-left: none;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  grid-column: 2/2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 4% 4% 0px 0px;
  overflow: hidden;
`;
const StyledImg = styled.img`
  height: 15vh;
  width: auto;
  border: solid 5px var(--color-indigo-700);
  border-radius: 4px;
`;
function SummaryIcon({ src, alt }) {
  return (
    <StyledImgBox>
      <StyledImg src={src} alt={alt} />
    </StyledImgBox>
  );
}

export default SummaryIcon;
