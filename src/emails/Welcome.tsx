// import * as React from 'react';
import { Html, Button } from "@react-email/components";

export default function Welcome(props: any) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button style ={{background: "#000", color: "#FFF", padding: "12px 20px"}} href={url}>Click me</Button>
    </Html>
  );
}
 