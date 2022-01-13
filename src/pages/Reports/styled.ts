import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #f3f3f3;
  height: calc(100% - (var(--navgar-mobile-height) + var(--header-mobile-height)));

  @media (min-width: 800px) {
    margin-top: var(--navbar-height);
    height: calc(100% - (var(--navbar-height) + var(--header-height)));

  }
`;
