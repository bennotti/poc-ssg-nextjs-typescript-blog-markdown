import { Menu } from 'antd';
import fs from "fs";
import React, { FC } from 'react';
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import ActiveLink from './ActiveLink';
import { NextPage } from 'next';
import { AnyObject } from '@core/types';

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const Nav: FC = () => (
  <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
    items={items2}
  />
);

export default Nav



// <nav>
// <style jsx>{`
//   .nav-link {
//     text-decoration: none;
//   }

//   .active:after {
//     content: ' (current page)';
//   }
// `}</style>
// <ul className="nav">
//   <li>
//     <ActiveLink activeClassName="active" className="nav-link" href="/">
//       Home
//     </ActiveLink>
//   </li>
//   <li>
//     <ActiveLink activeClassName="active" className="nav-link" href="/about">
//       About
//     </ActiveLink>
//   </li>
//   <li>
//     <ActiveLink activeClassName="active" className="nav-link" href="/blog">
//       Blog
//     </ActiveLink>
//   </li>
//   <li>
//     <ActiveLink
//       activeClassName="active"
//       className="nav-link"
//       href="/[slug]"
//       as="/dynamic-route"
//     >
//       Dynamic Route
//     </ActiveLink>
//   </li>
// </ul>
// </nav>