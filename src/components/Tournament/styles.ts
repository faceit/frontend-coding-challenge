import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

export const ERROR_ANIM_TIME = 800;

interface TournamentDataProps {
  doShake?: boolean;
}

const shake = keyframes`
  0% {
      transform: rotate(0deg) scale(1);
    }
    10% {
      transform: rotate(-10deg) scale(1.1);
    }
    20% {
      transform: rotate(10deg) scale(1.1);
    }
    30% {
      transform: rotate(-10deg) scale(1.1);
    }
    40% {
      transform: rotate(10deg) scale(1.1);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    100% {
      transform: rotate(0deg) scale(1);
    }
`;

export const TournamentDetails = styled.div<TournamentDataProps>`
  background: ${theme.palette.background.base};
  flex-basis: calc(50% - 12px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: ${theme.borderRadius};
  animation: ${({ doShake }) => (doShake ? shake : 'none')} ${ERROR_ANIM_TIME}ms;
  z-index: ${({ doShake }) => (doShake ? 9999 : 'auto')};
  will-change: transform;

  @media (min-width: ${theme.breakpoints.m}) {
    flex-basis: calc(33.33% - 16px);
  }

  @media (max-width: ${theme.breakpoints.s}) {
    flex-basis: 100%;
  }
`;

export const TournamentActions = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 8px;
  margin-top: auto;
`;
