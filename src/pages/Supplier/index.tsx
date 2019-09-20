import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout'; 
import Header from './components/Header';
import  './index.less';
class Supplier extends Component {
    render() {
        return (
            <PageHeaderWrapper title="">  
                    <Header/>
                    <div>
                        HELLO WORD!
                    </div>          
            </PageHeaderWrapper>
        )
    }
}
export default Supplier;