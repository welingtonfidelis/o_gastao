import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 40px;

  & svg {
    font-size: 1.6rem;
    margin-left: 8px;
    color: var(--contrast-1-color);
  }
`;

export const TextComponent = styled.span`
  color: var(--text-1-color);
`
