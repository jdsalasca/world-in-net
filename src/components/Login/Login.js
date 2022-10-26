import React from "react";
import './css/login.scss';
import { loginImageAlt } from './../../utils/textForImages';
import { Controller, useForm } from "react-hook-form";
import Input from "antd/lib/input/Input";
import { Button, Checkbox, Form } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { IoLogoGoogle } from 'react-icons/io';
import { RiGithubLine } from 'react-icons/ri';


export const Login = () => {
    const defaultValues = {
        name: '',
        Password: ""
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data) => {

    };


    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    return (
        <>
            <div className="form-background">
                <section className="login-container">
                    <img className="login-image-container" alt={loginImageAlt}       ></img>
                    <Form id="login" className="form-login">
                        <Form.Item name={'userName'}>
                            <Input
                                placeholder="nickName"
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                className={"input-form-standar"}
                                rules={[{ required: true }]} />
                        </Form.Item>
                        <Form.Item name={'password'}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                className="input-form-standar"
                                type="password"
                                placeholder="Password"
                                rules={[{ required: true }]} />
                        </Form.Item>
                            <Form.Item name="remember" valuePropName="checked"  className="form-remember-me">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                        <Form.Item>
                            <a type="" className="login-form-button">
                                Log in
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <a className="" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Button shape="round" icon={<IoLogoGoogle />}>Ingresa con Google</Button>
                        <Button shape="round" icon={<RiGithubLine />}>Ingresa con Git hub</Button>
                        <a href="">register now!</a>
                        
                    </Form>
                </section>


            </div>
        </>
    )
} 