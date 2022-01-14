import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(
    100% - (var(--navgar-mobile-height) + var(--header-mobile-height))
  );
  overflow-y: auto;

  @media (min-width: 800px) {
    margin-top: var(--navbar-height);
    height: calc(100% - (var(--navbar-height) + var(--header-height)));
  }
`;

export const CardListContainer = styled.div`
  width: 100%;

  h3 {
    color: var(--contrast-1-color);
    margin-top: 8px;
  }
`;

export const CardListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const CardOpenSupplyComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
