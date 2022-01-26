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

  form {
    margin-top: 12px;

    button {
      margin-top: 24px;
    }
  }
`;
