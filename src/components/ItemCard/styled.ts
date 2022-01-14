import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--contrast-2-color);
  border-radius: 4px;
  padding: 4px;
`;

export const TitleComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--text-1-color);
    font-weight: 700;
    font-size: 1.2em;
  }
`;

export const ActionComponent = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.2rem;
    margin-left: 12px;
    transition: all.5s;
  }

  svg:hover {
    cursor: pointer;
    filter: brightness(.5);
  }

  svg#edit {
    color: var(--success-color);
  }

  svg#delete {
    color: var(--error-color);
  }
`;

export const ChildrenComponent = styled.span`
  border-top: 1px solid var(--contrast-2-color);
  margin-top: 4px;
  padding-top: 4px;
`;
