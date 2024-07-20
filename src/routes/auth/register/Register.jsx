import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
import { GoogleLogin } from "@react-oauth/google";

const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title className="text-center">Register</Title>
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[
          {
            required: true,
            message: "Please input your firstname!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Photo URL"
        name="photo_url"
        rules={[
          {
            required: true,
            message: "Please input your Photo URL!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        className="w-full"
        wrapperCol={{
          span: 24,
        }}
      >
        <Button className="w-full" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />

      <Text className="flex justify-center items-center">
        <span className="my-1">Already have an account?</span> <Link to={"/auth"}>Login</Link>
      </Text>
    </Form>
  );
};

export default Register;
