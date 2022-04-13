import Modal from './Modal'
import styled from 'styled-components'
import { LendButton } from '../Button/LendButton'

interface BaseModalWrapperProps {
  isModalVisible: boolean
  selectedToken: string
  balance: string
  onBackdropClick: () => void
}

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  width: 726px;
  height: 556px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      180deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(82, 82, 82, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 30px;
  box-sizing: border-box;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  row-gap: 30px;
  width: 512px;
  font-weight: 300;
  font-size: 18px;
  line-height: 149%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 12px;
  width: 94px;
  height: 126px;
  z-index: 1;
  font-weight: 700;
  font-size: 36px;
  line-height: 149%;
`
const Divider = styled.div`
  border: 1px solid;

  display: flex;
  height: 100%;
  border: 1px solid transparent;
  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      180deg,
      rgba(30, 33, 43, 1) 0%,
      rgba(93, 101, 136, 0.5) 45%,
      rgba(30, 33, 43, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

const LendInput = styled.input`
  display: flex;
  align-items: center;
  width: 512px;
  height: 72px;
  background: #2f3241;
  border: 2px solid #34384c;
  box-sizing: border-box;
  border-radius: 12px;
`
const Percent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 40px;
  border-radius: 40px;
  font-weight: 600;
  border: 1px solid transparent;

  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      90deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  &:hover {
    background: linear-gradient(
      89.39deg,
      #a64690 0.9%,
      #f97082 46.32%,
      #ff6666 99.99%
    );
    border-radius: 69px;
  }
`

const Header = styled.div`
  color: #a5adcf;
`
const Data = styled.div`
  font-weight: 600;
  font-size: 31px;
  line-height: 149%;
`

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
  balance,
  selectedToken,
}) => {
  if (!isModalVisible) return null

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <ContentContainer>
        <img
          src="/images/bg-popup.svg"
          alt="colorful-bg"
          style={{ position: 'absolute', margin: '-19px' }}
        />
        <Wrapper>
          <img src={`/images/${selectedToken}.svg`} alt={selectedToken} />
          <div>{selectedToken}</div>
        </Wrapper>
        <Divider />
        <ContentWrapper>
          <div
            style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}
          >
            How much do you want to lend?
            <LendInput />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              Balance: {balance} {selectedToken}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Percent>25%</Percent>
              <Percent>50%</Percent>
              <Percent>75%</Percent>
              <Percent>100%</Percent>
            </div>
          </div>
          <div style={{ display: 'flex', columnGap: '70px' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
              }}
            >
              <div>
                <Header>Collateralized</Header>
                <Data>150%</Data>
              </div>
              <div>
                <Header>Asset</Header>
                <Data>{selectedToken}</Data>
              </div>
            </div>
            <div>
              <div>
                <Header>Gas fee</Header>
              </div>
              <div style={{ color: '#FB3A70', fontWeight: '500' }}>
                insufficient fund for gas
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ color: '#30E0A1' }}>
              You will recieve iBUSD
              <img
                src="/images/tooltip.svg"
                alt="tooltip"
                style={{ marginLeft: '16px' }}
              />
            </div>
            <LendButton w="241px" m="0">
              Lend
            </LendButton>
          </div>
        </ContentWrapper>
      </ContentContainer>
    </Modal>
  )
}

export default BaseModalWrapper
