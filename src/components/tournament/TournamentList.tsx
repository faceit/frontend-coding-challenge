import React, { useEffect } from 'react';

import { Tournament } from '../../types/tournaments';
import TournamentItem from './TournamentItem';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  display: grid;
  margin-top: ${theme.spacing(4)};
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
  return (
    <Container>
      {tournaments.map((tournament) => (
        <TournamentItem tournament={tournament} />
      ))}
    </Container>
  );
};

interface TournamentListProps {
  tournaments: Tournament[];
}

export default TournamentList;
