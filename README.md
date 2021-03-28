# Awesome course re: React, JSX, Material UI, & Ant Design on Udemy called "Complete React Course for Creating Amazing UI". I highly recommend it!



## Ant Design Update: 

1. One of the major breaking changes have been that Icon is no longer exported from antd package.

    Instead of having string based icon references like:

    // Before
    <Icon type="smile" />


    In v4:

    import { UserAddOutlined } from '@ant-design/icons';

    <UserAddOutlined />



2. In v4, the icons are a default export, so do

    import Icon from '@ant-design/icons';

    instead of

    import {Icon} from 'antd';

    You might also need to do npm install @ant-design/icons --save-dev
