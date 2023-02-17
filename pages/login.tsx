import MainLayout from "@layouts/MainLayout";
import LoginForm from "@components/LoginForm";
import { Col, Row } from "antd";
export default function Login() {
  return (
    <MainLayout>
      <Row justify={'center'}>
        <Col span={8}>
          <h1>Login</h1>
          <LoginForm />
        </Col>
      </Row>
    </MainLayout>
  );
}