import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import { StyledCard } from '../components/Card/Card'
import BaseModalWrapper from '../components/Modal/BaseModalWrapper'
import useTokenBalance from '../hooks/useTokenBalance'

const Container = styled.div`
  margin: 0 auto;
  padding-top: 96px;
  width: 75%;
`

const CardWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`

const TextContainer = styled.div`
  display: flex;
  margin: 0;
  width: 95%;
  padding-bottom: 40px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 119%;
  margin: 0;
  flex-grow: 1;
  white-space: nowrap;
`

const Description = styled.div`
  display: block;
  width: 672px;
  word-wrap: break-word;
  margin-left: 106px;
  font-size: 18px;
  font-weight: 400;
  line-height: 149%;
`
const Colorize = styled.span`
  background-image: linear-gradient(
    85.23deg,
    #aa448f 0%,
    #ff1665 19.16%,
    #fa6c81 37.9%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Lending = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedToken, setSelectedToken] = useState('')
  const balance = useTokenBalance(selectedToken)

  const toggleModal = (tokenName: string) => {
    setSelectedToken(tokenName)
    setIsModalVisible((wasModalVisible) => !wasModalVisible)
  }

  return (
    <>
      <Container>
        <TextContainer>
          <Title>
            <Colorize>Lend</Colorize>
            <br /> to earn immediately <br /> returns
          </Title>
          <Description>
            Use your BSC tokens to lend from Forward. You have on demand
            liquidity with no trading fees, no slippage and directly on-chain.
          </Description>
        </TextContainer>

        <CardWrapper>
          <StyledCard
            toggleModal={() => toggleModal('BNB')}
            title="BNB"
            apr="7.00"
            liquidity="156.94"
          />
          <StyledCard
            toggleModal={() => toggleModal('BUSD')}
            title="BUSD"
            apr="7.00"
            liquidity="156.94"
          />
          <StyledCard
            toggleModal={() => toggleModal('USDT')}
            title="USDT"
            apr="7.00"
            liquidity="156.94"
          />
        </CardWrapper>

        <BaseModalWrapper
          balance={balance}
          selectedToken={selectedToken}
          isModalVisible={isModalVisible}
          onClose={() => toggleModal('')}
        />
      </Container>
    </>
  )
}

export default Lending
