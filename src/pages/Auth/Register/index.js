import React, { useCallback } from "react"; 
import { Form, Input, Icon, Button, Row, Col, message } from "antd"; //An Open source React UI library for some components Ant Design

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { tryRegister, tryLogin } from "../../../redux/auth/api";

import "../styles.css";

function Register({ form }) {
  const { getFieldDecorator } = form;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = useCallback(
    e => {
      e.preventDefault();

      form.validateFields(async (err, values) => {
        if (!err) {
          try {
            await dispatch(tryRegister(values));

            await dispatch(
              tryLogin({
                email: values.email,
                password: values.password
              })
            );

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

        <Form onSubmit={handleRegister}>
          <Row gutter={32}>
            <Col span={12}>
              <Form.Item label="First Name">
                {getFieldDecorator("firstname", {
                  rules: [{ required: true, message: "Please input your first name!" }]
                })(
                  <Input
                    className="auth-input"
                    prefix={<Icon className="auth-input-icon" type="user" />}
                    placeholder="First Name"
                  />
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Last Name">
                {getFieldDecorator("lastname", {
                  rules: [{ required: true, message: "Please input your last name!" }]
                })(
                  <Input
                    className="auth-input"
                    prefix={<Icon className="auth-input-icon" type="user" />}
                    placeholder="Last Name"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>

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
                  Register
                </Button>
              </Col>

              <Col span={20} className="auth-forward-link-col">
                <a href="/login">or login</a>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Form.create("registerForm")(Register);
