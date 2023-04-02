import React from 'react';

import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 86px;
  width : 100vw;
  background-color: #eaeaea;
  border-bottom: 2.5px solid #000;
  font-size: 1em;
  
  h1 {
    flex-grow: 1.5;
    line-height: 86px;
    height: inherit;
    padding: 0 30px;
    font-size: 2em;
        > span {
          color: darkslategrey;
        }
    }
  div{
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 20px;
    right: 50px;
    > p {
      border: 2px solid #000;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      font-size: 1.5em;
      flex-grow: 0.5;
      line-height: 40px;
      background-color: honeydew;
      :nth-of-type(1){
        border-right: 1px solid #000;
        background-color: lavenderblush;
      }

      > a {
        color: #000;
        padding: 0 15px;
      }
    }
  }
  
`;

function Header() {
    return (
        <Wrapper>
            <h1><span>#</span> 점심메뉴<span>.</span>판교</h1>
            <div>
                <p><NavLink style={({ isActive }) => ({ borderBottom: isActive && '9px solid lavenderblush'  })} preventScrollReset={true} to="/">뽑기</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ borderBottom: isActive && '9px solid honeydew' })} preventScrollReset={true} to="/list">목록</NavLink></p>
            </div>
        </Wrapper>
    );
}

export default Header;
