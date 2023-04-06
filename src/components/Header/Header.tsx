import React from 'react';

import * as S from './Header.styled';


function Header() {
    return (
        <S.Wrapper>
            <h1><span>#</span> 점심메뉴<span>.</span>판교</h1>
            <div>
                <p><S.SNavLink preventScrollReset={true}
                            to="/">뽑기</S.SNavLink></p>
                <p><S.SNavLink preventScrollReset={true}
                            to="/list">목록</S.SNavLink></p>
            </div>
        </S.Wrapper>
    );
}

export default Header;
