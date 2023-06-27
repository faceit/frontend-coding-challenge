import React, { FC, useEffect, useState } from 'react';
import {
  ERROR_ANIM_TIME,
  TournamentActions,
  TournamentDetails,
} from './styles';
import H6 from '../H6';
import Button from '../Button';
import { Tournament, TournamentConfig } from './types';
import FormattedMessage from '../FormattedMessage';

const TournamentView: FC<TournamentConfig> = ({ tournament }) => {
  const [shake, setShake] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShake(false);
    }, ERROR_ANIM_TIME);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [shake]);

  const delTournament = (tournament: Tournament) => {
    const confirmed = window.confirm('Sure?');

    if (confirmed) {
      // TODO: Implement logic here
    }
  };

  return (
    <TournamentDetails doShake={shake} key={tournament.id}>
      <H6>{tournament.name}</H6>
      <div>
        <FormattedMessage id="app.organizer" />
        Organizer: {tournament.organizer}
      </div>
      <div>
        <FormattedMessage id="app.game" />
        game: {tournament.game}
      </div>
      <div>
        <FormattedMessage id="app.participants" />
        {'Participants: '}
        {tournament.participants.current} /{tournament.participants.max}
      </div>
      <div>
        <FormattedMessage id="app.start" />
        Start: {tournament.startDate}
      </div>
      <TournamentActions>
        <Button
          onClick={() => {
            delTournament(tournament);
          }}
        >
          <FormattedMessage id="app.delete" />
          Delete
        </Button>
      </TournamentActions>
    </TournamentDetails>
  );
};

export default TournamentView;
