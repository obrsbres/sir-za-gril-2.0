import styled from 'styled-components';
import { StyledCheeseImageContainer } from './Goods';
import { GiDeliveryDrone, GiModernCity } from 'react-icons/gi';
import { PiCheeseBold } from 'react-icons/pi';
import { IoIosContact, IoIosContacts } from 'react-icons/io';
export const Stat = styled.div`
  background-color: #f3ecda;
  border: solid 4px #1f1f1f;
  border-radius: 8px;
  width: auto;
  max-height: 50%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledIcons = styled.span`
  font-size: 25pt;
`;
const StyledNums = styled.p`
  font-size: 20pt;
  font-weight: 700;
`;
function DashStats() {
  return (
    <StyledCheeseImageContainer>
      <Stat>
        <StyledIcons>
          <GiModernCity />
        </StyledIcons>
        <p>Достава у </p>
        <StyledNums>7</StyledNums>
        <p>градова</p>
      </Stat>
      <Stat>
        <StyledIcons>
          <PiCheeseBold />
        </StyledIcons>
        <p>Производимо</p>
        <StyledNums>3</StyledNums>
        <p>врсте сира</p>
      </Stat>
      <Stat>
        <StyledIcons>
          <IoIosContacts />
        </StyledIcons>
        <p>Преко</p>
        <StyledNums>1000</StyledNums>
        <p>клијената</p>
      </Stat>
      <Stat>
        <StyledIcons>
          <GiDeliveryDrone />
        </StyledIcons>

        <p>достава</p>
        <p>по вашој</p>
        <p> мери</p>
      </Stat>
    </StyledCheeseImageContainer>
  );
}

export default DashStats;
