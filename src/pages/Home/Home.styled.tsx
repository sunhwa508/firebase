import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  > button {
   border-radius: 8px;
   padding: 0.6em 1.2em;
   font-size: 1em;
   font-weight: 500;
   font-family: inherit;
   cursor: pointer;
   transition: border-color 0.25s;
   :hover{
    border-color: #646cff;
   }
  }
 
  > div {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    input {
      height: 32px;
      font-size: 15px;
      border-radius: 5px;
      border: 2px solid #000;
      padding-left: 10px;
    }
`;
