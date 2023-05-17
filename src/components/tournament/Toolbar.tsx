import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';

import Button from '../Button';
import SearchInput from './SearchInput';
import { filterTournaments } from '../../actions/tournaments';
import styled from 'styled-components';
import theme from '../../theme';
import { useTournamentDispatch } from '../../selectors/tournaments';

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(2)};
  flex-wrap: wrap;
`;

const Toolbar = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useTournamentDispatch();

  const onFilterChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setFilter(e.target.value);
  };

  const onCreateClick: MouseEventHandler = (
    e: MouseEvent<HTMLInputElement>
  ) => {};

  useEffect(() => {
    dispatch(filterTournaments(filter));
  }, [dispatch, filter]);

  return (
    <ToolbarContainer>
      <SearchInput value={filter} onChange={onFilterChange} />
      <Button onClick={onCreateClick}>Create Tournament</Button>
    </ToolbarContainer>
  );
};

export default Toolbar;
