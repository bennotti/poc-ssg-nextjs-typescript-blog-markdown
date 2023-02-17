import React from "react";
import { useAuth } from "@contexts/auth";
import ClientOnly from "./ClientOnly";
import Link from "next/link";
import ContentLoader from "react-content-loader";
import { Col, Menu, Row } from "antd";
import type { MenuProps } from 'antd';

const items1: MenuProps['items'] = [
  {
    key: 'inicio',
    label: (<Link href='/'>Inicio</Link>)
  },
  {
    key: 'dashboard',
    label: (<Link href='/dashboard'>Dashboard</Link>)
  },
  {
    key: 'about',
    label: (<Link href='/about'>About</Link>)
  }
];

const itemsUnathorized: MenuProps['items'] = [
  {
    key: 'signup',
    label: (<Link href='/signup'>Signup</Link>)
  },
  {
    key: 'login',
    label: (<Link href='/login'>Login</Link>)
  }
];

const itemsAthorized: MenuProps['items'] = [
  {
    key: 'logout',
    label: 'Logout'
  }
];

export default function SiteNavbar() {
  return (
    <Row>
      <Col span={20}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Col>
      <Col span={4}>
        <ClientOnly>
          <AuthDetails />
        </ClientOnly>
      </Col>
    </Row>
  );
}

function AuthDetails() {
  const { user, logout, isLoading } = useAuth();

  const onMenuAuthorizedClick: MenuProps['onClick'] = async e => {
      if (e.key === 'logout') {
        logout({ redirectLocation: "/" });
      }
  };

  if (isLoading)
    return (
      <ContentLoader uniqueKey="aUniqueKeyToMatchSSR" height="20">
        <rect rx="3" ry="3" width="1000" height="20" />
      </ContentLoader>
    );
  if (!user)
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={itemsUnathorized} />
    );
  return (
    <Menu onClick={onMenuAuthorizedClick} theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={itemsAthorized} />
  );
}