import MainLayout from "@layouts/MainLayout";
import SignupForm from "@components/SignupForm";
import { Col, Row } from "antd";
export default function Signup() {
  return (
    <MainLayout>
      <Row justify={'center'}>
        <Col span={8}>
          <h1>Signup</h1>
          <SignupForm />
        </Col>
      </Row>
    </MainLayout>
  );
}