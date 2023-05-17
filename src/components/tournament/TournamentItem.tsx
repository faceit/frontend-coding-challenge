import Button from '../Button';
import H6 from '../H6';
import React from 'react';
import { Tournament } from '../../types';
import styled from 'styled-components';
import theme from '../../theme';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${theme.spacing(4)};
  background-color: ${theme.palette.background.base};
  border-radius: ${theme.borderRadius};
`;

const Actions = styled.div`
  display: flex;
  margin-top: ${theme.spacing(2)};
  alignitems: center;
  gap: ${theme.spacing(2)};
`;

const formatDateTime = (dateTime: Date) => {
  const year = dateTime.getFullYear(),
    month = dateTime.getMonth(),
    day = dateTime.getDate(),
    hour = dateTime.getHours(),
    minute = dateTime.getMinutes(),
    second = dateTime.getSeconds();
  return `${day}/${month}/${year}, ${hour}:${minute}:${second}`;
};

const TournamentItem = ({ tournament }: TournamentItemProps) => {
  return (
    <Card>
      <H6>{tournament.name}</H6>
      <div>
        <div>Organizer: {tournament.organizer}</div>
        <div>Game: {tournament.game}</div>
        <div>Participants: {tournament.participants.current}</div>
        <div>Start: {formatDateTime(new Date(tournament.startDate))}</div>
      </div>
      <Actions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Actions>
    </Card>
  );
};

interface TournamentItemProps {
  tournament: Tournament;
}

export default TournamentItem;
