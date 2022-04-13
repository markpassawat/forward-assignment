import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ethers } from 'ethers'

const Button = styled.div`
  color: #fff;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;

  background: linear-gradient(#22242d, #22242d),
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
    await provider.send('eth_requestAccounts', [])

    const signer = provider.getSigner()
    const myAddress = await signer.getAddress()
    // const myBalance = await signer.getBalance()

    const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    const busdAbi = [
      // Some details about the token
      'function name() external view returns (string)',
      'function symbol() view returns (string)',

      // Get the account balance
      'function balanceOf(address) view returns (uint)',

      // Send some of your tokens to someone else
      'function transfer(address to, uint amount)',

      // An event triggered whenever anyone transfers to someone else
      'event Transfer(address indexed from, address indexed to, uint amount)',
    ]

    const busdContract = new ethers.Contract(busdAddress, busdAbi, provider)

    const busdSymbol = await busdContract.symbol()
    const binaceHotwallet = '0x8894e0a0c962cb723c1976a4421c95949be2d4e3'
    const balance = await busdContract.balanceOf(binaceHotwallet)

    const busdBalance = new Intl.NumberFormat().format(
      Math.trunc(parseInt(ethers.utils.formatEther(balance)))
    )

    setData(busdBalance + ' ' + busdSymbol)

    // check if metamask connected
    const isMetaMaskConnected = async () => {
      const accounts = await provider.listAccounts()
      return accounts.length > 0
    }

    await isMetaMaskConnected().then((connected) => {
      if (connected) {
        setIsLogin(true)
      }
    })
  }

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
      <img src="/images/wallet.svg" alt="Signal" />
      <p>Connect Wallet</p>
    </>
  )

  return (
    <div>
      <Button onClick={loadData}>
        <div
          style={{
            display: 'flex',
            columnGap: '15px',
            padding: '10px 12px 10px 20px',
          }}
        >
          {isLogin ? connected : 'Connect Wallet'}
        </div>
      </Button>
    </div>
  )
}

export default Connector
