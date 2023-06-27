import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { getTournaments } from '../../selectors/tournaments';

import { TournamentListContainer } from './styles';
import TournamentView from '../../components/Tournament';
import { Tournament } from '../../components/Tournament/types';
import { isValidName } from '../../utils/validator';
import { createTournament } from '../../actions/tournaments';
import Button from '../../components/Button';
import FormattedMessage from '../../components/FormattedMessage';
import { API_TOURNAMENTS_URL } from '../../constants/api';

function openCreateTournamentNameDialog(): string {
  const name = prompt('Enter the name:') ?? 'Default';

  if (isValidName(name)) return name;
  throw new Error('Name could not be empty');
}

const Tournaments: FC = () => {
  const dispatch = useDispatch();
  const tournamentsList: Tournament[] = useSelector(getTournaments);

  useEffect(() => {
    if (tournamentsList.length === 0) {
      axios
        .post<any, AxiosResponse<Tournament>>(API_TOURNAMENTS_URL, {
          name: 'test',
        })
        .then(({ data }) => dispatch(createTournament(data)));
    }
  }, [tournamentsList]);

  const createTournamentHandler = () => {
    const name = openCreateTournamentNameDialog();
    if (name) {
      axios
        .post<any, AxiosResponse<Tournament>>(API_TOURNAMENTS_URL, { name })
        .then(({ data }) => dispatch(createTournament(data)));
    }
  };

  return (
    <>
      <Button onClick={createTournamentHandler}>
        <FormattedMessage>Create tournament</FormattedMessage>
      </Button>
      <TournamentListContainer>
        {tournamentsList.map((tournament) => (
          <TournamentView tournament={tournament} key={tournament.id} />
        ))}
      </TournamentListContainer>
    </>
  );
};

export default Tournaments;
