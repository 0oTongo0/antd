import React, { Component } from 'react';
import { connect  } from 'dva';
import { Input } from 'antd';
import sty from  '../index.less';
const { Search } = Input;
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            name :''
        }
    }
    componentDidMount(){

    }
    fn(e){
        this.setState({
            name:e
        },()=>{
            const {dispatch} = this.props;
            dispatch({
                type :'test/fetch',
                payload:this.state.name
            })
        })  
    }
    render(){
        let author = this.props.mun.test.data.result;
        console.log( author,"this.props.test")
        return(
            <div className={sty['supplier-top']}>
                <div className={sty['search-box']}>
                    <Search
                        placeholder="请大佬搜索"
                        onSearch={this.fn.bind(this)}
                        style={{ width: 200 }}
                    />
                </div>
                <div className={sty['mun-box']}>
                {
                    (author || []).map((item :any,i:any) =>{
                        return(
                            <div key={i} >
                                <p>{item.author}</p>
                                <div>
                                    <img src={item.pic} alt=""/>
                                </div>
                                <div>
                                    <audio controls >
                                        <source src={item.url}  type="audio/mpeg"/>
                                    </audio >
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default connect((test :any) => {
    console.log(test,"connect")
    return{
        mun:test
    }
})(Header);