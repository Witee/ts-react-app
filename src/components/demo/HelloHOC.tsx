/**
 * 具有类型约束的高阶组件
 *
 * @author Witee<github.com/Witee>
 * @date 2020-04-14
 */

import React, { Component, ComponentType } from "react";

import HelloClass from "./HelloClass";

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComponent: ComponentType<P>) {
  return class extends Component<P & Loading> {
    // & 表示交叉类型, 让被包装的组件同时拥有 loading 属性
    render() {
      const { loading, ...props } = this.props;

      return loading ? (
        <div>Loading...</div>
      ) : (
        <WrappedComponent {...(props as P)} />
      );
    }
  };
}

export default HelloHOC(HelloClass);
