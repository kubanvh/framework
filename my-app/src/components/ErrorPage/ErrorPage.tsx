import React, { FC } from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import styled from "styled-components";

const ErrorPic = styled.img`
`;
const ErrorPageWrapper = styled.div`

`;

export const ErrorPage: FC = () => {
    return (
        <ErrorPageWrapper>
            <ErrorPic src="./media/icons/errorpic2.jpg" alt = ""/>
        </ErrorPageWrapper>
    );
}