import { Rating } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
function Card({basket, setBasket, price, rating, description, img}) {
    
    const addtobasket = () =>{
        setBasket([...basket,{img,description,price,rating}]);
    };
  
    return (
    <Container>
        <Image>
        <img src={img} alt="" />
        </Image>
        <Description>
            <h5>{description}</h5>
            <Rating name="read-only" value={rating} readOnly />
            <p>₹ {price}</p>
            <button onClick={addtobasket}>Add to Cart</button>
        </Description>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 150px;
    height: 120px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card
