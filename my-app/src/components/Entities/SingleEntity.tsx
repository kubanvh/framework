import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const SingleEntityWrapper = styled.div`
`;
const SingleEntityBox = styled.div`
    border: 2px solid ${Colors.Independence};
    margin-left:18px;
    margin-top:20px;
    float:left;
    background-color:${Colors.EnglishLavender};
`;
const SingleEntityPicture = styled.img`
    height:130px;
    float:left;
    width:130px;
    padding:10px;
`;
const SingleEntityName = styled.div`
    color:${Colors.Independence };
    margin-top:20px;
    margin-left:160px;
`;
const SingleEntityAddress = styled.div`
    margin-left:160px;
    margin-top:28px;
`;

interface ISingleEntity{
    name: string;
    address: string;
    url: string;
    layout:boolean;
}
export const SingleEntity: FC<ISingleEntity> = (props) => {
    return (
        <SingleEntityWrapper>
                {props.layout}
            <SingleEntityBox style={{width:`${props.layout?'300px':'1260px'} `}} >
                <SingleEntityPicture src={props.url}/>
                <SingleEntityName style={{fontSize:`${props.layout?'22px':'36px'}`,marginTop:`${props.layout?'20px':'40px'}`}}>
                    {props.name}
                </SingleEntityName>
                <SingleEntityAddress style={{marginTop:`${props.layout?'28px':'40px'}`}}>
                    {props.address}
                </SingleEntityAddress>
            </SingleEntityBox>
        </SingleEntityWrapper>
    );
};
