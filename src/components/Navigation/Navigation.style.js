import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  background-color: transparent !important;
  & ul {
    li {
      display: inline;
      margin-right: 2em;
      a {
        font-weight: 400;
        text-decoration: none;
        color: var(--text-base);
        cursor: pointer;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }
`;