import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ethers } from 'ethers'

const Button = styled.div`
  color: #fff;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;

  background: linear-gradient(to right, #292a2e, #151619),
    linear-gradient(
      90deg,
      rgba(101, 103, 112, 1) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(101, 103, 112, 1) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

const Connector = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [data, setData] = useState('')

  const loadData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    provider.on('network', (newNetwork: any, oldNetwork: any) => {
      if (oldNetwork) {
        window.location.reload()
      }
    })

    // check if metamask connected
    const isMetaMaskConnected = async () => {
      const accounts = await provider.listAccounts()
      return accounts.length > 0
    }

    await isMetaMaskConnected().then(async (connected) => {
      await provider.send('eth_requestAccounts', [])

      if (connected) {
        setIsLogin(true)
        const signer = provider.getSigner()
        const myAddress = await signer.getAddress()

        const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
        const busdAbi = [
          'function name() external view returns (string)',
          'function symbol() view returns (string)',
          'function balanceOf(address) view returns (uint)',
        ]
        const busdContract = new ethers.Contract(busdAddress, busdAbi, provider)

        const busdSymbol = await busdContract.symbol()
        const binaceHotwallet = '0x8894e0a0c962cb723c1976a4421c95949be2d4e3'
        const balance = await busdContract.balanceOf(binaceHotwallet)

        const busdBalance = Intl.NumberFormat().format(
          Math.trunc(parseInt(ethers.utils.formatEther(balance)))
        )
        setData(busdBalance + ' ' + busdSymbol)
      }
    })
  }

  const accountChanged = () => {
    window.ethereum.on('accountsChanged', (accounts: any) => {
      if (accounts.length > 0) {
        setIsLogin(true)
        loadData()
      } else {
        setIsLogin(false)
      }
    })
  }

  useEffect(() => {
    accountChanged()
  }, [window.ethereum])

  useEffect(() => {
    loadData()
  }, [])

  const connected = (
    <>
      <img src="/images/Signal.svg" alt="Signal" />
      <img src="/images/Metamask.svg" alt="Metamask" />
      {data}
    </>
  )

  const notConnect = (
    <>
      <img src="/images/wallet.png" alt="wallet" width={'28px'} />
      <p>Connect Wallet</p>
    </>
  )

  return (
    <div>
      <Button onClick={loadData}>
        <div
          style={{
            height: '35px',
            display: 'flex',
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center',

            columnGap: '15px',
            padding: '10px 12px 10px 20px',
          }}
        >
          {isLogin ? connected : notConnect}
        </div>
      </Button>
    </div>
  )
}

export default Connector
