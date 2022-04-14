import { useState, useEffect, useMemo, useCallback } from 'react'
import { ethers } from 'ethers'

import { token } from '../config/asset'

const useTokenBalance = (tokenName: string) => {
  const [data, setData] = useState('')

  const tokenAddress = useMemo(() => {
    if (tokenName === '') return token['BUSD']

    return token[tokenName.toUpperCase()]
  }, [tokenName])

  const loadData = useCallback(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    provider.on('network', (newNetwork: any, oldNetwork: any) => {
      if (oldNetwork) {
        window.location.reload()
      }
    })
    await provider.send('eth_requestAccounts', [])

    const signer = provider.getSigner()
    const myAddress = await signer.getAddress()

    const ABI = [
      'function name() external view returns (string)',
      'function symbol() view returns (string)',
      'function balanceOf(address) view returns (uint)',
    ]

    const tokenContract = new ethers.Contract(tokenAddress, ABI, provider)

    const binaceHotwallet = '0x8894e0a0c962cb723c1976a4421c95949be2d4e3'
    const balanceBignumber = await tokenContract.balanceOf(binaceHotwallet)

    const Balance = new Intl.NumberFormat().format(
      Math.trunc(parseInt(ethers.utils.formatEther(balanceBignumber)))
    )

    setData(Balance)
  }, [tokenAddress])

  useEffect(() => {
    loadData()
  }, [loadData])

  return data
}

export default useTokenBalance
