import React,{Component} from "react";
import {Button,notification,Icon,Row,Col,Card,Input} from "antd";
import "./pages.css"
export class login extends Component{
    render() {
        return (
            <Row className="login" type="flex" align="center" >
                <Col span={6}>
                    <Card>
                        <Col type="flex" align="center">
                            {/*<Button disabled={true} shape="round" icon="user" size="large"  />*/}
                            <h1>login</h1>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                style={{"margin-bottom":"10%"}}
                            />
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                style={{"margin-bottom":"10%"}}
                            />
                            <Button type="primary" onClick={this.login_request}>登录</Button>
                        </Col>
                    </Card>
                </Col>
            </Row>
        );
    };
    //登录
    login_request=()=>{
        notification.success({message: '登录成功'});
    }
}
