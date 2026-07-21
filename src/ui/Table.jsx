import { createContext, useContext } from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: auto;
`;

const CommonRow = styled.header`
  display: grid;
  grid-template-columns: ${(props) => {
    return props.$columns;
  }};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
  overflow-y: auto;
  overflow-x: auto;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  color: var(--color-indigo-700);
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;
const TableContext = createContext();

function Table({ $columns, children }) {
  return (
    <TableContext.Provider value={{ $columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { $columns } = useContext(TableContext);
  return (
    <StyledHeader as='header' role='row' $columns={$columns}>
      {children}
    </StyledHeader>
  );
}
function Body({ data, render }) {
  return <StyledBody>{data?.map(render)}</StyledBody>;
}
function Row({ children }) {
  const { $columns } = useContext(TableContext);
  return (
    <StyledRow role='row' $columns={$columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
