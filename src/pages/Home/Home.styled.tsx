import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.desktopBackground};
  margin-top: 45px;

  > button {
    border-radius: 8px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  > div {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
`;
