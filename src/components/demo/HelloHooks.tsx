import React, { useEffect, useState } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setText("Have a rest.");
    }
  }, [count]);

  return (
    <>
      <p>
        You clicked {count} times {text}
      </p>
      <Button onClick={() => setCount(count + 1)}>Hello {props.name}</Button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: "",
};

export default HelloHooks;
