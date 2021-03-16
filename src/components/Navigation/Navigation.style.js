import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  & ul {
    li {
      display: inline;
      margin-right: 2em;
      a {
        font-weight: 400;
        text-decoration: none;
        color: var(--text-base);
        cursor: pointer;
        /* color: var(--hotels-primary); */

        &:hover {
          /* font-weight: 600; */
          color: var(--primary);
        }
      }
    }
  }
`;