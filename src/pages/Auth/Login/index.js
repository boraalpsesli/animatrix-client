import React, { useCallback } from "react";
import { Form, Input, Icon, Button, Row, Col, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { tryLogin } from "../../../redux/auth/api";
import "../styles.css";

function Login({ form }) {
  const { getFieldDecorator } = form;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    e => {
      e.preventDefault();

      form.validateFields(async (err, values) => {
        if (!err) {
          try {
            await dispatch(tryLogin(values));
            history.push("/");
          } catch (error) {
            message.error(error.message);
          }
        }
      });
    },
    [form, dispatch, history]
  );

  return (
    <>
      <div className="auth-background-image"></div>
      <div className="curtain"></div>

      <div className="auth-container">
        <p className="logo">Animatrix</p>

        <Form onSubmit={handleLogin}>
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                className="auth-input"
                prefix={<Icon className="auth-input-icon" type="user" />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                className="auth-input"
                prefix={<Icon className="auth-input-icon" type="lock" />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Row type="flex" justify="center">
              <Col span={20}>
                <Button className="auth-button" htmlType="submit">
                  Log in
                </Button>
              </Col>
              <Col span={20} className="auth-forward-link-col">
                <a href="/register">or register</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Form.create("loginForm")(Login);
