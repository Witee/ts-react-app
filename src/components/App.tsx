import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Employee from './employee';
// import Setting from "./setting";

import style from './style.module.css';

const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  let defaultKey = match.url.replace('/', '') || 'employee';

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultKey]} className={style.munu}>
          <Menu.Item key="employee">
            <Link to="/employee">员工管理</Link>
          </Menu.Item>
          <Menu.Item key="setting">
            <Link to="/setting">系统设置</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className={style.contentWrap}>
        <div className={style.content}>
          <Route path="/" exact component={Employee} />
          <Route path="/employee" exact component={Employee} />
          {/* <Route path="/setting" exact component={Setting} /> */}
        </div>
      </Content>

      <Footer className={style.footer}>TypeScript in Action</Footer>
    </Layout>
  );
};

export default App;
