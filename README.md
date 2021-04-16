# React, JSX, & Ant Design :ant:

Github Dashboard web app with React and Ant Design 

- This is a really fun project! I was able to add my Github profile, followers, following, all of my repos and projects to a dashboard. 
- It's dynamic so if a user searches for an owner of a Github profile, they can also see the profile, followers, following, and all their repos and projects.  

### Languages and Tools:

<hr>
    <img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
    <img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
    <img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
    <img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
    <img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />    
    <img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />    
    <img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />  
    <img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" /> 
    <img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />
    
</hr>

<br/>
<br/>

## :ant: Ant Design Update: 

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
