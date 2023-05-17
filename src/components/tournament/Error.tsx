import { AnyAction } from 'redux';
import Button from '../Button';
import { Message } from './Message';
import React from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { fetchTournaments } from '../../actions/tournaments';
import styled from 'styled-components';
import theme from '../../theme';
import { useTournamentDispatch } from '../../selectors/tournaments';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  alignitems: center;
  gap: ${theme.spacing(4)};
`;

const Error = () => {
  const dispatch: ThunkDispatch<void, {}, AnyAction> = useTournamentDispatch();
  const onRetryClick = () => {
    dispatch(fetchTournaments());
  };

  return (
    <Wrapper>
      <Message>Something went wrong.</Message>
      <Button onClick={onRetryClick}>RETRY</Button>
    </Wrapper>
  );
};

export default Error;
