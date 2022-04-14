import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Connector from '../Wallet/Connector'

import { link } from '../../config/link'
import Switch from '../Button/Switch'

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
  width: 50%;
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
  top: 56px;
`

const Metamask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`

// const Switch = styled.div`
//   width: 122px;
//   height: 40px;
//   left: calc(50% - 72px / 2);
//   top: calc(50% - 32px / 2);
//   border-radius: 62px;
//   border: 1px solid transparent;
//   background: linear-gradient(#22242d, #22242d),
//     linear-gradient(
//       90deg,
//       rgba(101, 103, 112, 1) 0%,
//       rgba(255, 255, 255, 1) 45%,
//       rgba(101, 103, 112, 1) 100%
//     );
//   background-clip: padding-box, border-box;
//   background-origin: padding-box, border-box;
// `

const Navbar: React.FC = () => {
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

          <div
            style={{
              display: 'flex',
            }}
          >
            <Switch />
          </div>
        </Metamask>
      </Container>
      <Outlet />
    </>
  )
}

export default Navbar
