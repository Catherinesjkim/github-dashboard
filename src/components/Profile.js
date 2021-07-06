import React, { Component } from 'react';
import { Card, Col, Row, List, Avatar, Spin, Anchor } from 'antd';

const { Link } = Anchor;

class Profile extends Component {

  render() {
    const { user_data, events_data, followers_data, following_data } = this.props;

    return (
      <div>

        {
          user_data ?
          <div>
            <div className='name-container'>
              <h1>{user_data.name}</h1>
              <Avatar src={user_data.avatar_url} shape="square" size="large" UserAddOutlined="user" />
            </div>
            <p>{user_data.bio}</p>
          </div>
         : 

          <div style={{textAlign: 'center', padding: '50px'}}>
            <Spin />
          </div>
        }

        <Anchor>
          <Link href="https://ckpy9zcaw1756547jwd2pfoeou-m7y3j0rz4-catherinesjkim.vercel.app/dcaa88fa-48dd-48c3-a6a6-d6946400a240" title="Video Chat with Me!" />
        </Anchor>


        <Row gutter={16}>
          <Col span={8}>
            <Card title="Recent Activities">
              <List
                itemLayout="horizontal"
                pagination={{pageSize: 5}}
                dataSource={events_data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.type}
                      description={item.repo.name}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Following">
              <List
                itemLayout="horizontal"
                pagination={{pageSize: 5}}
                dataSource={following_data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar_url} />}
                      title={<a href={item.html_url}>{item.login}</a>}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Followers">
              <List
                itemLayout="horizontal"
                pagination={{pageSize: 5}}
                dataSource={followers_data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar_url} />}
                      title={<a href={item.html_url}>{item.login}</a>}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}


export default Profile;