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
  margin-top: 12px;

  h3 {
    color: var(--contrast-1-color);
    margin-bottom: 0;
    flex: 3;
    max-width: 65%;
  }

  button {
    flex: 1;
    max-width: 150px;
  }
`;

export const CardListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const CardItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  
  span {
    margin: 4px 0;
  }
`;

export const CardItemLeftDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardItemRightDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const KmDriven = styled.span`
  font-weight: 700;
`;

export const KmDrivenOpen = styled.span`
  font-weight: 700;
  color: var(--error-color);
`;