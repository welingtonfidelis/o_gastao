import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Header = styled.div`
  height: 36px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  svg {
    color: var(--contrast-1-color);
    font-size: 1.2rem;
    transition: all.5s;
  }

  svg:hover {
    cursor: pointer;
    filter: brightness(.5);
  }

  span {
    font-weight: 700;
    font-size: 1.2em;
    text-align: center;
    flex: 1;
  }
`;

export const MainContent = styled.div`
  height: calc(100% - 92px);
  overflow-y: auto;
`;

export const Footer = styled.div`
  height: 40px;
  margin-top: 8px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;
