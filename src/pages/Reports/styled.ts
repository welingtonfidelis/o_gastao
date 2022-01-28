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

export const FormContent = styled.div`
  form {
    margin-top: 12px;

    button {
      margin-top: 24px;
    }
  }
`;

export const CardListHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  /* span:nth-child(2) {
    font-weight: 700;
    font-size: 1.1em;
  } */
`;

export const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;

  h3 {
    color: var(--contrast-1-color);
    margin-bottom: 0;
    flex: 3;
    max-width: 65%;
  }

  button {
    max-width: 150px;
  }
`;

export const CardListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  margin-top: 8px;
`;

export const CardContent = styled.div`
  display: flex;
`;

export const CardLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
`;
