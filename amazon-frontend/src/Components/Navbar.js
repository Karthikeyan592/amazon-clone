import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';

function Navbar() {

    const [{basket}] = useStateValue();

    const navigate = useNavigate();
  return (
    <Container>
        <Inner>
            <Logo>
                <img src="./amazon-white.png"></img>
            </Logo>
            <SearchBar>
                <input type="text" placeholder='Search...'></input>
                <SearchIcon>
                    <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"></img>
                </SearchIcon>
            </SearchBar>
            <RightContainer>
                <NavButton>
                    <p>Hello</p>
                    <p>Guest</p>
                </NavButton>
                <NavButton>
                    <p>Return</p>
                    <p>& Orders</p>
                </NavButton>
                <BasketButton onClick={() => navigate("/checkout")}>
                    <img src='https://www.freeiconspng.com/uploads/grocery-cart-icon-9.png'></img>
                    <p>{basket.length}</p>
                </BasketButton>
            </RightContainer>
        </Inner>
    </Container>
    
  )
}

const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: #131921;
    display: flex;
    align-items: center;
    position: relative;
`;
const Inner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
`;
const Logo = styled.div`
    margin-left: 20px;
    cursor: pointer;
    img{
        width: 100px;
        /* height: 90px; */
        margin-top: 20px;
    }
`;
const SearchBar = styled.div`
    align-items: center;
    margin: 0px 15px;
    height: 35px;
    flex: 1;
    display: flex;
    background-color: blue;
    input{
        height: 94%;
        width: 100%;
        /* flex: 1; */
        border: none;
        /* border-color: red; */
        border-radius: 5px 0px 0px 5px;
    }

`;
const SearchIcon = styled.div`
    background-color: #febd69;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 5px 5px 0px;
    img{
        width:22px;
    }
`;

const RightContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 5px 15px;
    width: fit-content;
`;
const NavButton = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    margin: 15px;
    height: 80%;
    p{
        margin: 0%;
        &:nth-child(1){
            font-size: 12px;
        }
        &:nth-child(2){
            font-size: 14px;
            font-weight: 600;
        }
    }
`;
const BasketButton = styled.div`
    display: flex;
    cursor: pointer;
    height: 100%;
    color: white;
    justify-content: center;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
    }
`;


export default Navbar;
