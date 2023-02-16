import MainLayout from "@layouts/MainLayout";
import LoginForm from "@components/LoginForm";
export default function Login() {
  return (
    <MainLayout>
      <Row className="h-50 justify-content-center">
        <Col lg={6} className="my-auto">
          <h1>Login</h1>
          <LoginForm />
        </Col>
      </Row>
    </MainLayout>
  );
}