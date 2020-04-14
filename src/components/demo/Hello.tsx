/**
 * 函数组件
 *
 * @author Witee<github.com/Witee>
 * @date 2020-04-14
 */

import React, { FC } from "react";

interface Greeting {
  name: string;
  firstName: string;
}

const Hello: FC<Greeting> = ({ name }) => <h1>Hello {name}</h1>;

export default Hello;
