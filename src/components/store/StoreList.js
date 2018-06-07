import React from 'react';
import { connect } from 'react-redux';
import { asyncGetStore } from '../../actions';
class StoreList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="StoreList">
        <div className="container">
          <ul>
            {this.props.data.map(item => {
              return (
                <li key={item.id}>
                  <div className="list-img">
                    <div className="image" />
                    <div className="star" />
                  </div>
                  <div className="list-con">
                    <div className="title">{item.name}</div>
                    <div className="star">
                      <span>荣誉</span>
                      <span />
                    </div>
                    <div className="address">{item.address}</div>
                    <div className="server">
                      <span>累计服务客户数量：{item.userNum}</span>
                      <span>|</span>
                      <span>好评率：{item.userNum}</span>
                    </div>
                    <div className="make">
                      {item.mack.map((ele, index) => {
                        return <span key={index}>{ele}</span>;
                      })}
                    </div>
                    <div className="btn">进入店铺</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentWillReceiveProps() {
    console.log(this.props.data);
  }
  componentWillMount() {
    this.props.getStore();
  }
}
// 把state映射到app显示组件的内容上, 映射的属性名字就是传入ui组件的  props的属性名。
function mapStateToProps(state) {
  return { data: state.store };
}
// 映射方法到UI组件
function mapDispatchToProps(dispatch) {
  return {
    getStore: () => {
      dispatch(asyncGetStore());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreList);