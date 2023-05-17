import React, { useEffect } from 'react';

import { Message } from './Message';
import { Tournament } from '../../types/tournaments';
import TournamentItem from './TournamentItem';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  display: grid;
  gap: ${theme.spacing(4)};

  @media (min-width: ${theme.breakpoints.s}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.m}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TournamentList = ({ tournaments }: TournamentListProps) => {
  useEffect(() => {
    console.log(tournaments);
  }, [tournaments]);

  if (tournaments.length === 0) {
    return <Message>No tournaments found.</Message>;
  }

  return (
    <Container>
      {tournaments.map((tournament) => (
        <TournamentItem key={tournament.id} tournament={tournament} />
      ))}
    </Container>
  );
};

interface TournamentListProps {
  tournaments: Tournament[];
}

export default TournamentList;
