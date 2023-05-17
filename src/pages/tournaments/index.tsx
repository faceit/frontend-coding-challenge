import React, { useEffect } from 'react';
import {
  useTournamentDispatch,
  useTournamentSelector,
} from '../../selectors/tournaments';

import Error from '../../components/tournament/Error';
import Loading from '../../components/tournament/Loading';
import Toolbar from '../../components/tournament/Toolbar';
import TournamentList from '../../components/tournament/TournamentList';
import { fetchTournaments } from '../../actions/tournaments';
import styled from 'styled-components';
import theme from '../../theme';

const TournamentWrapper = styled.div`
  margin-top: ${theme.spacing(4)};
`;

const Page = () => {
  const dispatch = useTournamentDispatch();
  const { tournaments, status } = useTournamentSelector();

  useEffect(() => {
    dispatch(fetchTournaments());
  }, [dispatch]);

  return (
    <>
      <Toolbar />
      <TournamentWrapper>
        {status === 'pending' ? (
          <Loading />
        ) : status === 'rejected' ? (
          <Error />
        ) : (
          <TournamentList tournaments={tournaments} />
        )}
      </TournamentWrapper>
    </>
  );
};

export default Page;
