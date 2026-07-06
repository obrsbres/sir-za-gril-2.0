import styled from 'styled-components';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StyledFirstBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  margin-left: 20vw;
  margin-top: 49vh;
  height: 20vh;
  width: 20vw;
  justify-items: start;
  align-items: start;
`;
const StyledHeader = styled.p`
  word-wrap: normal;
  font-weight: 600;
  font-size: 5rem;
  text-transform: uppercase;
  &:hover {
    background-color: #ebc971;
    border: solid 4px #1f1f1f;
    border-radius: 8px;
    text-align: center;
    transition-duration: 500ms;
  }
`;
function FirstBoxHeadline() {
  const navigate = useNavigate();

  return (
    <StyledFirstBox>
      <StyledHeader>Газдинство Митровић</StyledHeader>
      <ButtonGroup style={{ backdropFilter: 'blur(10px)' }}>
        <Button
          style={{
            color: '#f9f9f7',
            fontSize: '2rem',
            fontWeight: '600',
            border: 'solid 4px #1f1f1f',
            borderRadius: '8px',
          }}
          onClick={() => navigate('/customersData')}
        >
          Наручи сад
        </Button>
        <Button
          style={{
            color: '#f9f9f7',
            fontSize: '2rem',
            fontWeight: '600',
            border: 'solid 4px #1f1f1f',
            borderRadius: '8px',
          }}
        >
          Сазнај о сиру //треба да буде линк
        </Button>
      </ButtonGroup>
    </StyledFirstBox>
  );
}

export default FirstBoxHeadline;
