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

  & span:nth-child(1) {
    font-weight: 700;
    font-size: 1.1em;
  }
`;

export const CardLastSupplyComponent = styled.div`
  display: flex;

  span {
    margin: 4px 0;
  }
`;

export const CardLastSupplyContainer = styled.div`
  & ${CardLastSupplyComponent}:nth-child(n+2) {
    margin-top: 8px;
    padding-top: 4px;
    border-top: 1px solid rgb(0 0 0 / 10%);
  }
`;

export const CardLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & span:nth-child(1) {
    font-weight: 700;
    font-size: 1.1em;
  }
`;

export const CardRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;

export const AverageKmDrivenTotal = styled.div`
  border-top: 1px solid var(--contrast-2-color);
  margin-top: 4px;
  padding-top: 4px;

  span {
    font-weight: 700;
  }
`;
