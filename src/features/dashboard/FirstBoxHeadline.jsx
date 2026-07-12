import styled from 'styled-components';
import Button from '../../ui/Button';
import ButtonGroup from '../../ui/ButtonGroup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useScreenWidth from '../../hooks/useScreenWidth';

const StyledFirstBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  margin-left: ${(props) => (props.$displaySize === 'mobile' ? '2vw' : '20vw')};
  margin-top: ${(props) => (props.$displaySize === 'mobile' ? '4vh' : '49vh')};
  height: ${(props) => (props.$displaySize === 'mobile' ? '18vh' : '20vh')};
  width: ${(props) => (props.$displaySize === 'mobile' ? '18vw' : '20vw')};
  justify-items: start;
  align-items: start;
  font-weight: 600;
  font-size: ${(props) => (props.$displaySize === 'mobile' ? '2rem' : '5rem')};
`;
const StyledHeader = styled.p`
  word-wrap: normal;
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
  const displaySize = useScreenWidth();
  function goToSection(page, section) {
    navigate(page, { state: { targetId: section } });
  }
  return (
    <StyledFirstBox $displaySize={displaySize}>
      <StyledHeader>Газдинство Митровић</StyledHeader>
      <ButtonGroup
        style={{
          backdropFilter: 'blur(10px)',
        }}
      >
        <Button
          style={{
            color: '#f9f9f7',
            fontWeight: '600',
            fontSize: displaySize === 'mobile' ? '1.4rem' : '2rem',
            border: 'solid 4px #1f1f1f',
            borderRadius: '8px',
            backgroundColor:
              displaySize === 'mobile' ? 'var(--color-indigo-700)' : '',
          }}
          onClick={() => navigate('/customersData')}
        >
          Наручи сад
        </Button>
        <Button
          style={{
            color: '#f9f9f7',
            fontSize: displaySize === 'mobile' ? '1.4rem' : '2rem',
            fontWeight: '600',
            border: 'solid 4px #1f1f1f',
            borderRadius: '8px',
            backgroundColor:
              displaySize === 'mobile' ? 'var(--color-indigo-700)' : '',
            width: displaySize === 'mobile' ? '10rem' : '',
          }}
          onClick={() => goToSection('/dashboard', 'about')}
        >
          Сазнај о сиру
        </Button>
      </ButtonGroup>
    </StyledFirstBox>
  );
}

export default FirstBoxHeadline;
