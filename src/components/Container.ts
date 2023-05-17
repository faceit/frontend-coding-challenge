import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${theme.spacing(4)};
  padding-inline: ${theme.spacing(2)};

  @media (min-width: ${theme.breakpoints.s}) {
    padding-inline: ${theme.spacing(2)};
  }

  @media (min-width: ${theme.breakpoints.m}) {
    padding-inline: ${theme.spacing(4)};
  }
`;

export default Container;
