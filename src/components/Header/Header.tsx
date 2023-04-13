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
    <AppBar style={{ zIndex: 100 }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={""}
              alt="PANGYU MATDORI"
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
                width: "150px",
              }}
              onClick={() => setOpen(false)}
            >
              <Link preventScrollReset={true} to="/">
                <MenuListItem style={{ cursor: "pointer" }}>
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>{" "}
                  Roulette
                </MenuListItem>
              </Link>
              <Link preventScrollReset={true} to="/List">
                <MenuListItem style={{ cursor: "pointer" }}>
                  <span role="img" aria-label="📁">
                    📁
                  </span>{" "}
                  My List
                </MenuListItem>
              </Link>
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
  );
}

export default Header;
