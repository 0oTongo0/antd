import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; 
import {
    Card,//卡片
    Button,//按钮
    Divider,//分割线
} from 'antd';
class One extends Component {
    render() {
        return (
            <PageHeaderWrapper title="">  
                <Card bordered={false}>
                    <div>
                        HELLO WORD!
                    </div>               
                </Card>
            </PageHeaderWrapper>
        )
    }
}

export default One;