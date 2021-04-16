# React, JSX, & Ant Design :ant:

Github Dashboard web app with React and Ant Design.

- This is a really fun project! I was able to add my Github profile, followers, following, all of my repos and projects.
- I also made it dynamic so that if a user searches for an owner of a Github profile, they can also see that owner's profile, followers, following, and all of their repos and projects.  


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
