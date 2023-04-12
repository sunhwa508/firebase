import React, { useState } from "react";

import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  Toolbar,
} from "react95";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={""}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                <Link preventScrollReset={true} to="/">
                  {" "}
                  Roulette
                </Link>
              </MenuListItem>
              <MenuListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                <Link preventScrollReset={true} to="/List">
                  {" "}
                  My List
                </Link>
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>
      </Toolbar>
    </AppBar>
    // <S.Wrapper>
    //     <h1><span>#</span> 점심메뉴<span>.</span>판교</h1>
    //     <div>
    //         <p><S.SNavLink preventScrollReset={true}
    //                     to="/">뽑기</S.SNavLink></p>
    //         <p><S.SNavLink preventScrollReset={true}
    //                     to="/list">목록</S.SNavLink></p>
    //     </div>
    // </S.Wrapper>
  );
}

export default Header;
