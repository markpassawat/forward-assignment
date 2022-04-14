import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { LendButton } from '../Button/LendButton'

type CardProps = {
  title: string
  apr: string
  liquidity: string
  toggleModal: () => void
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  column-gap: 45px;
  align-items: center;
`
const Card = styled.div`
  width: 335px;
  height: auto;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 1px solid transparent;
  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      180deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(82, 82, 82, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  &:hover {
    margin: -2px;
    transform: translateY(-12px);
    transition: 0.2 s;
    background: linear-gradient(#000, #000),
      linear-gradient(
        90deg,
        #ff9f9f 0%,
        #fc5792 32.81%,
        #ffc657 70.31%,
        #95fe10 100%
      );
    border: 3px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
`

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  line-height: 0%;
  font-weight: 500;
  margin-bottom: 30px;
`
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #a5adcf;
  font-weight: 500;
  font-size: 16px;
  line-height: 5%;
`
const Data = styled.div`
  font-weight: 800;
  font-size: 31px;
  line-height: 149%;
  background-image: linear-gradient(90.04deg, #f2c94c 3.68%, #ebff00 54.19%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StyledCard: FC<CardProps> = ({
  title,
  apr,
  liquidity,
  toggleModal,
}) => {
  return (
    <Card>
      <CurrencyContainer>
        <p>{title}</p>
        <img src={`images/${title}.svg`} alt={title} />
      </CurrencyContainer>
      <Flex>
        <DetailWrapper>
          <p>Interest APR</p>
          <Data>{`${apr}%`}</Data>
        </DetailWrapper>
        <DetailWrapper>
          <p>Liquidity</p>
          <Data>{`${liquidity}k`}</Data>
        </DetailWrapper>
      </Flex>

      <LendButton onClick={toggleModal}>Lend</LendButton>
    </Card>
  )
}
