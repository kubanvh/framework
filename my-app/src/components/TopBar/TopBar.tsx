import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import {ExpandedMenu} from '../TopBar/ExpandedMenu';

import useDropdown from 'react-dropdown-hook';

import {
    Link
} from "react-router-dom";

const InnerWrapper = styled.div`
    width: 1920px;
    /* background: ${Colors.white}; */
    background-color: ${Colors.Independence};
    height:50px;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.OldLavender};
    height: 40px;
    margin:5px;
`;
const LogoIcon = styled.img`
    width: 20,6px;
    height: 25px;

`;
const HomeIcon = styled.img`
    width: 24px;
    height: 25px;
`;
const LeftIcons = styled.div`
    margin-left:30px;
    display: flex;
    justify-content: space-between;
    column-gap:20px;
`;

const SearchBar = styled.div`
    /* display: flex;
    justify-content: space-between;
    column-gap:10px; */
`;
const RightIcons = styled.div`
    float: right;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    column-gap:20px;
`;

const InputSearchBar = styled.input`
    width: 350px;
    position: relative;
`;
const SearchIcon = styled.img`
    margin-left:5px;
    position: absolute;
`;
const ExpandedIcon = styled.img`
    margin-left:200px;
`;

export const TopBar: FC =  () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return (
        <Wrapper>
            <InnerWrapper>
                <InputWrapper>
                    <LeftIcons>
                        <LogoIcon  src="./media/icons/logo.png" alt=""/>
                        <Link to="/mainPage">
                        <HomeIcon src="./media/icons/house2.png" alt=""/>
                        </Link>
                            <div ref={wrapperRef}>
                                <div onClick={toggleDropdown}>
                                   <ExpandedIcon src="./media/icons/arrow-down.png" alt=""/>
                                </div>
                                    {dropdownOpen &&
                                        <>
                                            <ExpandedMenu>
                                            </ExpandedMenu>
                                        </> 
                                    }
                                </div>
                            <div onClick={closeDropdown}></div>
                    </LeftIcons>
                    {/* <SearchBar>
                            <input type="search"> </input>
                            <img src="./media/icons/search.png" alt=""/>
                    </SearchBar> */}
                    <SearchBar>
                        <InputSearchBar type="search" placeholder="Filter..."/>
                        <SearchIcon src ="./media/icons/search.png"  alt=""/>
                    </SearchBar>
                    <RightIcons>
                        <img src="./media/icons/house.png" alt=""/>
                        <img src="./media/icons/comments.png" alt="" />
                        <img src="./media/icons/bell.png" alt=""/>
                    </RightIcons>
                </InputWrapper>
            </InnerWrapper>
        </Wrapper>
    );
};