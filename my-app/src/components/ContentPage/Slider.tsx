import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import styled from "styled-components";

import {
  Link
} from "react-router-dom";


const SimpleSliderWrapper = styled.div`
  margin-left:500px;
`;
const Text = styled.div`
  font-size:22px;
  margin-bottom:15px;
  margin-left:15px;
  color:${Colors.Independence};
  font-weight: 700;
`;
const SliderPost = styled.div`
  max-width:300px;
  height:300px;
  background-color:${Colors.EnglishLavender};
  border: 4px solid ${Colors.Independence};
  border-radius:6px;
`;
const SliderImage = styled.img`
  width:300px;
  height:150px;
`;
const SliderIconDiv = styled.div`
  width:80px;
  height:80px;
  background-color:white;
  margin-left:30px;
  margin-top:-30px;
  position: absolute;
  border: 4px solid ${Colors.Independence};
  border-radius:6px;
`;
const SliderIcon = styled.img`
  width: 50px;
  height: auto;
  display: block;
  margin:auto;
  margin-top:15px;
`;
const SliderText = styled.div`
margin-left:120px;
margin-top:15px;
color:${Colors.black};
text-decoration: none;
`;
const SliderInfo = styled.div`
margin-top:30px;
`;
const SliderMiniIcon = styled.img`
float:left;
margin:15px;
`;
const SliderMiniText = styled.div`
float:left;
margin:15px;
color:${Colors.black};
`;
const Timeline = styled.div`
float:left;
color:${Colors.black};
`;
export  class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <SimpleSliderWrapper>
        <Text>Workspace</Text>
        <Slider {...settings}>
        <SliderPost>
          <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
            <SliderIcon src="./media/icons/contract.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Client Contract</SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/contract.png" alt =""/>
            <SliderMiniText>Contract</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>150 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
          </Link>
        </SliderPost>
        <SliderPost>
        <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
            <SliderIcon src="./media/icons/contract.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Supplier Contract</SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/contract.png" alt =""/>
            <SliderMiniText>Contract</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>50 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
        </Link>
        </SliderPost>
        <SliderPost>
        <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
            <SliderIcon src="./media/icons/entities.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Client Contract</SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/entities2.png" alt =""/>
            <SliderMiniText>Corporate</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>120 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
          </Link>
        </SliderPost>
        <SliderPost>
        <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
          <SliderIcon src="./media/icons/book.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Grop norms </SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/book.png" alt =""/>
            <SliderMiniText>Norms</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>150 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
          </Link>
        </SliderPost>
        <SliderPost>
        <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
            <SliderIcon src="./media/icons/contract.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Client Contract</SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/contract.png" alt =""/>
            <SliderMiniText>Contract</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>150 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
          </Link>
        </SliderPost>
        <SliderPost>
        <Link to={{
            pathname:'/workspace',
            
          }}>
          <SliderImage src="./media/icons/workspace.png" alt=""/>
          <SliderIconDiv>
            <SliderIcon src="./media/icons/contract.png" alt=""/>
          </SliderIconDiv>
          <SliderText>Client Contract</SliderText>
          <SliderInfo>
            <SliderMiniIcon src="./media/icons/contract.png" alt =""/>
            <SliderMiniText>Contract</SliderMiniText>
            <SliderMiniIcon src="./media/icons/people.png" alt =""/>
            <SliderMiniText>150 users</SliderMiniText>
          </SliderInfo>
          <Timeline>Latest update 2 days ago</Timeline>
          </Link>
        </SliderPost>
        </Slider>
      </SimpleSliderWrapper>
    );
  }
}