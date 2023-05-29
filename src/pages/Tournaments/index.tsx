import React, { FC } from 'react';
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
  const name = prompt('Enter the name:') ?? '';

  if (isValidName(name)) return name;
  return '';
}

const TournamentsList: FC = () => {
  const dispatch = useDispatch();
  const tournamentsList: Tournament[] = useSelector(getTournaments);

  const createTournamentHandler = () => {
    const name = openCreateTournamentNameDialog();

    if (name && name !== '') {
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

export default TournamentsList;
