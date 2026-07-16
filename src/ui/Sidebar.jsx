import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Logo from './Logo';
import MainNav from './MainNav';
import Button from './Button';

import { hide } from '../features/customer/customerSlice';
import useEscForClose from '../hooks/useEscForClose';
import useCloseOutsideClick from '../hooks/useCloseOutsideClick';
import { HiXMark } from 'react-icons/hi2';

const StyledSidebar = styled.aside`
  position: fixed;
  top: 8vh;
  left: 0;
  width: 20vw;
  height: 85vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;

  align-self: flex-start;

  margin-right: 5px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 3px solid var(--color-green-700);
  border-top: 3px solid var(--color-green-700);
  border-bottom: 3px solid var(--color-green-700);
  border-radius: 8px;
  transition: 1s ease-in-out;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  width: 3vw;
  height: 3vw;
  background-color: var(--color-indigo-700);
  backdrop-filter: blur(4px);
  font-size: large;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem;
`;
function Sidebar() {
  const dispatch = useDispatch();
  function handleEvent() {
    dispatch(hide());
  }
  const ref = useCloseOutsideClick(handleEvent, true);
  useEscForClose('Escape', handleEvent);
  return (
    <StyledSidebar ref={ref}>
      <StyledButton onClick={handleEvent}>
        <HiXMark />
      </StyledButton>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
