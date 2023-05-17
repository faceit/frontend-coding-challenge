import React, { useEffect, useState } from 'react';
import {
  useTournamentDispatch,
  useTournamentSelector,
} from '../../selectors/tournaments';

import { AnyAction } from 'redux';
import Error from '../../components/tournament/Error';
import Loading from '../../components/tournament/Loading';
import { ThunkDispatch } from 'redux-thunk';
import Toolbar from '../../components/tournament/Toolbar';
import TournamentList from '../../components/tournament/TournamentList';
import { fetchTournaments } from '../../actions/tournaments';

const Page = () => {
  const [filter, setFilter] = useState('');
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useTournamentDispatch();
  const { tournaments, status } = useTournamentSelector();

  useEffect(() => {
    dispatch(fetchTournaments());
  }, [dispatch]);

  return (
    <>
      <Toolbar filter={filter} setFilter={setFilter} />
      {status === 'pending' ? (
        <Loading />
      ) : status === 'rejected' ? (
        <Error />
      ) : (
        <TournamentList tournaments={tournaments} />
      )}
    </>
  );
};

export default Page;
