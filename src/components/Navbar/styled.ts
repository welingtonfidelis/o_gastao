import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 24px);
  height: 50px;
  position: fixed;
  bottom: 12px;
  background: #E5E5E5;
  border-radius: 4px;
  padding: 2px;
  
  & ul {
    justify-content: center;
    width: 100%;
    margin-top: 8px;
    background: #E5E5E5;

    li.ant-menu-item {
      & svg {
        font-size: 1.5rem;
      }

    }

    span.ant-menu-title-content {
      display: none;
    }
  }

  @media (min-width: 800px) {
    top: 50px;
    border-top: none;

    ul {
      margin-bottom: 8px;

      li.ant-menu-item {
        display: flex;
        align-items: center;

        & svg {
          display: none;
        }
      }

      span.ant-menu-title-content {
        margin: 0;
        display: inline;
      }
    }
  }
`;
