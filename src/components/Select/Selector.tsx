import { useState } from 'react'
import { token } from '../../config/asset'
import styled from 'styled-components'

const StyleSector = styled.select`
  position: absolute;
  width: 138px;
  height: 48px;
  right: 46px;
  top: 83px;
  padding: 10px 8px;

  color: #fff;
  display: flex;
  box-sizing: border-box;
  border: 1px solid transparent;
  backdrop-filter: blur(66px);
  border-radius: 8px;
  background: linear-gradient(to right, #48484f, #2b2c34),
    linear-gradient(
      90deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

interface SelectorProps {
  selectedToken: string
}

const assets = ['BNB', 'BUSD', 'USDT']

const Selector: React.FC<SelectorProps> = ({ selectedToken }) => {
  const [selectedAsset, setSelectAsset] = useState(selectedToken)
  return (
    <>
      <StyleSector
        key={selectedAsset}
        value={selectedAsset}
        onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
          setSelectAsset(ev.target.value)
        }
      >
        {assets.map((asset) => (
          <option value={asset}>{asset}</option>
        ))}
      </StyleSector>
    </>
  )
}

export default Selector
