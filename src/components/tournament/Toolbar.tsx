import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';

import Button from '../Button';
import SearchInput from './SearchInput';
import styled from 'styled-components';
import theme from '../../theme';

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(2)};
  flex-wrap: wrap;
`;

const Toolbar = ({ filter, setFilter }: ToolbarProps) => {
  const onFilterChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFilter(e.target.value);
  };

  const onCreateClick: MouseEventHandler = (
    e: MouseEvent<HTMLInputElement>
  ) => {};

  return (
    <ToolbarContainer>
      <SearchInput value={filter} onChange={onFilterChange} />
      <Button onClick={onCreateClick}>Create Tournament</Button>
    </ToolbarContainer>
  );
};

interface ToolbarProps {
  filter: string;
  setFilter: Function;
}

export default Toolbar;
