import React, { Component } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

class SearchBox extends Component {

  render() {
    return (
      <Space direction="vertical">
        <Search
          style={{ 
            width: '300px',
            marginLeft: '20px',
            marginTop: '5px',
          }}
          placeholder="Github Username"
          onSearch={value => this.props.fetchData(value)}
          enterButton="Search"
          size="large"
        />
      </Space>
    );
  }

}

export default SearchBox;