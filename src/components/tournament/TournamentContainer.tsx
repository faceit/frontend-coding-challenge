import styled from 'styled-components';
import theme from '../../theme';

const TournamentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(4)}
  flex-wrap: wrap;
`;
export default TournamentContainer;
