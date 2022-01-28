import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100% - (var(--navgar-mobile-height) + var(--header-mobile-height)));
  align-items: center;

  @media (min-width: 800px) {
    margin-top: var(--navbar-height);
    height: calc(100% - (var(--navbar-height) + var(--header-height)));
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 32px;
  }

  span:nth-child(3) {
    font-weight: 700;
    font-size: 1.1em;
    margin-top: 32px;
    color: var(--contrast-1-color);
  }
`;