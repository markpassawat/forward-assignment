import { Children, useState } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Connector from '../Wallet/Connector'

import { link } from '../../config/link'

const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`

const Menu = styled.div`
  display: flex;
  column-gap: 50px;
  margin-left: 90px;
  color: #5d6588;
`

const NavLinkActive = styled(NavLink)<{ active?: string }>`
  color: ${({ active }) => (active ? '#FFF' : '#5D6588')};
`

const Active = styled.div`
  color: white;
  position: absolute;
  border-radius: 100px 100px 0px 0px;
  background: linear-gradient(
    85.7deg,
    #aa448f 0%,
    #ff1665 54.13%,
    #fa6c81 101.89%
  );

  width: 54px;
  height: 3px;
  left: 402px;
  top: 56px;
`

const Metamask = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 352px;
`

const Navbar: React.FC = ({ children }) => {
  const [active, setactive] = useState<boolean>(false)
  const { pathname } = useLocation()

  return (
    <>
      <Container>
        <NavLink to="/">
          <img src="/logo.svg" alt="Forward" />
        </NavLink>
        <Menu>
          {link.map((item) => {
            let active = undefined
            if (pathname.includes(item.href)) {
              active = true
            }

            return (
              <div key={item.href}>
                <NavLinkActive
                  active={active ? 'true' : undefined}
                  to={item.href}
                >
                  {item.label}
                </NavLinkActive>
                {active && <Active />}
              </div>
            )
          })}
        </Menu>

        <Metamask>
          <Connector />
          <div style={{ paddingLeft: '155px' }}>
            <img src="/images/moon-stars.svg" alt="moon-stars" />
          </div>
        </Metamask>
      </Container>
      <Outlet />
    </>
  )
}

export default Navbar
