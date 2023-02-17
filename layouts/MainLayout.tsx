import Footer from "@components/footer"
import SiteNavbar from "@components/SiteNavbar";
import type { FC, ReactNode } from "react"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Row } from "antd";
import Nav from "@components/Nav";
import { AnyObject } from "@core/types";
import Authorized from "@components/Authorized";

const { Header, Content, Sider } = Layout;

interface MainLayoutProps {
  params?: AnyObject;
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({
  params,
  children
}) => {
  return (
    <>
      <Layout>
        <Header className="header">
          <Row>
            <Col span={2}>
              <div className="logo" />
            </Col>
            <Col span={22}>
              <SiteNavbar/>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Authorized>
            <Sider width={200}>
              <Nav/>
            </Sider>
          </Authorized>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Authorized>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </Authorized>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
};

export default MainLayout;