import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: honeydew;
  height: 100vh;

  table{
    height: 200px;
    border-collapse: collapse;
    background-color: #fff;
    min-width: 600px;
    margin-top: 30px;
    text-align: center;

    thead{
      background-color: gainsboro;
    }
    th {
      border: solid 2px #000;
      padding: 10px;
    }
    td {
      border: solid 2px #000;
      padding: 10px;
    }
    tr:nth-child(even){
      background-color: seashell;
    }
  }

`;
