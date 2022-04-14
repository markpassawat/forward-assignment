import Modal from './Modal'
import styled from 'styled-components'
import { LendButton } from '../Button/LendButton'
import Tooltip from '../Tooltip/Tooltip'
import { useEffect, useState } from 'react'
import Selector from '../Select/Selector'

interface BaseModalWrapperProps {
  isModalVisible: boolean
  selectedToken: string
  balance: string
  onClose: () => void
}

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  width: 726px;
  height: 556px;
  border-radius: 20px;
  box-sizing: border-box;

  border: 1px solid #fff;
  backdrop-filter: blur(66px);
  background: rgba(47, 50, 65, 0.6);

  /* border: 1px solid transparent;
  background: linear-gradient(#22242d, #22242d),
    linear-gradient(
      180deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    ); */
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 30px;
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
  font-weight: 500;
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
      rgba(30, 33, 43, 0.3) 0%,
      rgba(93, 101, 136, 1) 45%,
      rgba(30, 33, 43, 0.3) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

const LendInput = styled.input.attrs({
  type: 'number',
})`
  width: 512px;
  height: 72px;

  display: flex;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0px;

  color: #fff;
  font-weight: 600;
  font-size: 39px;
  line-height: 149%;
  outline: none;
  align-items: center;

  background: #2f3241;
  border: 2px solid #34384c;
  box-sizing: border-box;
  border-radius: 12px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const Percent = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 40px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;

  background: ${({ active }) =>
    active
      ? 'linear-gradient(89.39deg,#a64690 0.9%,#f97082 46.32%, #ff6666 99.99%)'
      : 'linear-gradient(to right, #48484f, #2b2c34), linear-gradient( 90deg,rgba(101, 103, 112, 1) 0%, rgba(255, 255, 255, 1) 45%,rgba(101, 103, 112, 1) 100% )'};

  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  border-radius: 69px;
`

const Flex = styled.div<{
  direction?: string
  justifyContent?: string
  alignItems?: string
  rowGap?: string
  colGap?: string
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ colGap }) => colGap};
`

const Typo = styled.div<{
  fs?: string
  fw?: string
  cl?: string
  lh?: string
  ml?: string
  mr?: string
}>`
  font-size: ${({ fs }) => (fs ? fs : '18px')};
  font-weight: ${({ fw }) => (fw ? fw : '600')};
  color: ${({ cl }) => (cl ? cl : '#a5adcf')};
  line-height: ${({ lh }) => (lh ? lh : '149%')};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
`

const lend = [25, 50, 75, 100]

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onClose,
  isModalVisible,
  balance,
  selectedToken,
}) => {
  const [inputValue, setInputValue] = useState<string>('0')
  const [selectedPercent, setSelectedPercent] = useState<string>('0')

  const setPercent = (percent: any) => {
    let value: any = balance.replaceAll(',', '')
    value = parseInt(value, 10) * percent * 0.01

    setInputValue(value)
    setSelectedPercent(percent)
  }

  if (!isModalVisible) return null

  return (
    <Modal>
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
          <img
            src="/images/Close.svg"
            alt="colorful-bg"
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '7px',
              top: '16px',
              // right: '367px',
              // top: '189px',
              cursor: 'pointer',
            }}
          />

          <Flex direction="column" rowGap="12px">
            How much do you want to lend?
            <LendInput
              id="lend-value"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setInputValue(e.target.value)
              }
            />
            <Selector selectedToken={selectedToken} />
            <Flex justifyContent="flex-end">
              <Typo fs="16px" fw="500">
                Balance: &nbsp;
              </Typo>
              <Typo cl="#fff" fw="500">
                {balance} {selectedToken}
              </Typo>
            </Flex>
            <Flex justifyContent="space-evenly">
              {lend.map((item) => (
                <Percent
                  key={item}
                  active={selectedPercent === `${item}`}
                  onClick={() => setPercent(`${item}`)}
                >
                  {item}%
                </Percent>
              ))}
            </Flex>
          </Flex>
          <Flex colGap="70px">
            <Flex direction="column" rowGap="20px">
              <div>
                <Typo fw="300">Collateralized</Typo>
                <Typo fw="600" fs="31px" cl="#fff">
                  150%
                </Typo>
              </div>
              <div>
                <Typo fw="300">Asset</Typo>
                <Typo fw="600" fs="31px" cl="#fff">
                  {selectedToken}
                </Typo>
              </div>
            </Flex>
            <div>
              <Typo fw="300">Gas fee</Typo>
              <Typo cl="#FB3A70" fw="500">
                insufficient fund for gas
              </Typo>
            </div>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Typo cl="#30E0A1" fw="500" mr="-35px">
              You will recieve i{selectedToken}
            </Typo>
            <Tooltip
              content=" iTokens are minted when you deposit corresponding assets. They
            increase in value and are worth more than the underlying asset!"
            >
              <img src="/images/tooltip.svg" alt="tooltip" />
            </Tooltip>

            <LendButton w="241px" m="0">
              Lend
            </LendButton>
          </Flex>
        </ContentWrapper>
      </ContentContainer>
    </Modal>
  )
}

export default BaseModalWrapper
