import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #f0f0f0;
  width: calc(100% - 24px);
  height: 50px;
  position: fixed;
  bottom: 12px;
  
  & ul {
    justify-content: center;
    width: 100%;
    margin-top: 8px;

    li.ant-menu-item {
      & svg {
        font-size: 1.5rem;
      }

    }

    li.ant-menu-item-selected {
      color: red;
    }

    span.ant-menu-title-content {
      display: none;
    }
  }

  @media (min-width: 800px) {
    top: 40px;
    border-top: none;
    border-bottom: 1px solid #f0f0f0;

    ul {
      margin-bottom: 8px;

      li.ant-menu-item {
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
