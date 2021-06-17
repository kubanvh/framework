import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import { SingleEntity } from '../Entities/SingleEntity';

import { IState } from '../../reducers';
import { IUsersReducers } from '../../reducers/usersReducers';
import { IPhotosReducers } from '../../reducers/photosReducers';
import { ITodosReducers } from '../../reducers/todosReducers'

import { useSelector } from 'react-redux';

const EntitiesWrapper = styled.div`
    border: 4px solid ${Colors.Independence};
    border-radius:6px;
    height:auto;
    width:1300px;
    margin-top:150px;
    margin-left:500px;
    background-color:${Colors.Timberwolrd};
`;
const EntitiesTop = styled.div`
    padding:15px;
    padding-bottom:0px;
    height:40px;
    
`;
const Text = styled.div`
    float:left;
    font-size:22px;
    
`;
const Icon = styled.img`
    float:left;
    margin-left:20px;
`;
const Mosaicbox = styled.div`
    float:right;
`;
const MosaicIcon = styled.img`
    float:left;
    height:20px;
    padding:2px;
`;
const Mosaic = styled.button`
    float:left;
    background-color:${Colors.SilverPink};
    border: 4px solid ${Colors.Independence};
    margin-right:20px;
    margin-top:-5px;
`;
const MosaicText = styled.div`
    float:left;
    margin-left:15px;
    margin-right:15px;
    font-size:20px;
`;
const Icon1 = styled.img`
    height:18px;
    float:left;
`;
const EntitiesTop2 = styled.div`
    height:40px;
    padding-left:15px;
    padding-bottom:30px;
    
`;

const EntitiesBox = styled.div`
    border: 4px solid ${Colors.Independence};
    float:left;
`;
const Text1 = styled.div`
    float:left;
    margin-left:10px;
    margin-right:10px;
    padding-top:8px;
`;
const EntitiesBoxItems = styled.div`
    padding:5px;
    background-color:${Colors.EnglishLavender};
`;
const Icon2 = styled.img`
    float:left;
    height:20px;
`;
const Icon3 = styled.img`
`;

const Icon4 = styled.img`
    float:left;
    height:20px;
    padding-left:15px;
    padding-top:8px;
    padding-right:15px;
`;
const EntitiesRight = styled.div`
    float:right;
    padding-right:15px;
`;
const SearchBar = styled.div`
    float:left;
    padding-right:40px;
    padding-top:8px;
`;
const InputSearchBar = styled.input`
    position: relative;
`;
const SearchIcon = styled.img`
    position: absolute;
`;
const TextBox = styled.div`
    float:left;
    margin-left:10px;
    margin-right:10px;
`;
const ShareBox = styled.button``;
// const name = ["ABC generic company", "World company SAS", "Subsid Corp Ltd"]
// const name = "ABC generic company";
// const adress = " Caracas 1050, Distrito Capital, Venezuela";

export const Entities: FC = (props) => {
    const { usersList, photosList, todosList } = useSelector<IState, IUsersReducers & IPhotosReducers & ITodosReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.todos
    }));
    const [layout, setLayout] = useState(false);
    const handleClick = () => {
        setLayout(current => !current);
    }
    console.log(layout)
    // const [text, setText] = useState("mosaic")
    // const onClick = () => {
    //     setText("list")

    // }
    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
    const entity = [
        {name : "ABC generic company",
        address : "Caracas 1050, Distrito Capital, Venezuela",
        url:"./media/icons/logo.png",
        },
        {name : "ABC generic company",
        address : "Caracas 1050, Distrito Capital, Venezuela",
        url:"./media/icons/logo.png",
        },
        {name : "ABC generic company",
        address : "Caracas 1050, Distrito Capital, Venezuela",
        url:"./media/icons/logo.png",
        },
        {name : "ABC generic company",
        address : "Caracas 1050, Distrito Capital, Venezuela",
        url:"./media/icons/logo.png",
    }]
    for(let i=0; i <20; i++)
    {
     entity.push({name: "World company SAS", address: "Caracas 1050, Distrito Capital, Venezuela", url: photosList[Math.floor(Math.random() * photosList.length)]?.url})
    }
    return (
        <EntitiesWrapper >
            <EntitiesTop>
                <Text>Entities</Text>
                <Icon src="./media/icons/settings.png"/>
                <Mosaicbox>
                    <Mosaic onClick={handleClick}>
                        <MosaicIcon src="./media/icons/mosaic.png"/>
                        <MosaicText>{layout?"List":"Mosaic"}</MosaicText>
                    </Mosaic>
                    <Icon1 src="./media/icons/lines.png"/>
                </Mosaicbox>
            </EntitiesTop>
            <EntitiesTop2>
                <EntitiesBox>
                    <EntitiesBoxItems>
                    <Icon2 src="./media/icons/rec.png"/>
                    <TextBox>All</TextBox>
                    <Icon3 src="./media/icons/arrow-down.png"/>
                    </EntitiesBoxItems>
                </EntitiesBox>
                    <Icon4 src="./media/icons/more.png"/>
                    <Icon4 src="./media/icons/sort.png"/>
                    <Text1>Sort</Text1>
                    <Icon4 src="./media/icons/filter.png"/>
                    <Text1>Filter</Text1>
                    <Icon4 src="./media/icons/expand.png"/>
                    <ShareBox onClick={copy}>
                        <Icon4 src="./media/icons/share.png"/>
                        <Text1>Share</Text1>
                    </ShareBox>
                    <EntitiesRight>
                    <SearchBar>
                        <InputSearchBar type="search"placeholder="Filter..." src ="./media/icons/search.png"  alt=""/>
                        <SearchIcon src ="./media/icons/search.png"  alt=""/>
                    </SearchBar>
                    <EntitiesBox>
                    <EntitiesBoxItems>
                    <Icon2 src="./media/icons/antenna.png"/>
                    <TextBox>Followed</TextBox>
                    <Icon3 src="./media/icons/arrow-down.png"/>
                    </EntitiesBoxItems>
                </EntitiesBox>
                    </EntitiesRight>
            </EntitiesTop2>
            {entity.map(entity =>(
                <SingleEntity name={entity.name} address={entity.address} url={entity.url} layout={layout}/>
            ))} 
        </EntitiesWrapper>
    )
}