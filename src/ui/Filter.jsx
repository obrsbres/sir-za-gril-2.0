import { useSearchParams } from 'react-router-dom';

import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || 'all';
  function handleFilterChange(filter) {
    if (searchParams.get('page')) searchParams.set('page', 1);
    searchParams.set(filterField, filter);
    setSearchParams(searchParams);
  }
  const elements = [
    { description: 'dostava1', criteria: '1' },
    { description: 'dostava2', criteria: '2' },
    { description: 'dostava3', criteria: '3' },
  ];
  return (
    <StyledFilter>
      {elements?.map((element) => (
        <FilterButton
          key={element.criteria}
          onClick={() => handleFilterChange(element.criteria)}
          active={currentFilter === element.criteria}
          disabled={currentFilter === element.criteria}
        >
          {element.description}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
