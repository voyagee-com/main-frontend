import styled from 'styled-components'

export const BgHeader = styled.div``

export const StyledHeader = styled.div`
  padding-top: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--primary);

  & .container {
    display: grid;
    grid-template-columns: 15% 65% 20%;
    align-items: center;
  }
`
export const StyledHelp = styled.aside`
  padding: 16px 0;
  border-bottom: 1px solid var(--base);
  text-align: right;
  font-size: 12px;
  color: var(--text-dark);
`
export const StyledSign = styled.ul`
  text-align: right;

  & li {
    display: inline;
    margin-left: 1.2em;
    & a {
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      color: var(--text-base);
    }
    &:first-child {
      a {
        color: var(--primary)
      }
    }

    /* & a {
      padding: 12px 24px;
      text-align: center;
      text-transform: uppercase;
      border: medium solid var(--primary);
      background-color: transparent;
      border-radius: 9px;
    } */
  }
`