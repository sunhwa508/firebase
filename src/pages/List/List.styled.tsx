import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
  font-family: "DungGeunMo", serif;
`;
