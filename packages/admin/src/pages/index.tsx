import React from "react";
import { Button, ButtonName } from "shared";
import Router from "next/router";

const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };
  return (
    <div className="titleWrapper">
      <div className="textStyle">Welcome to Admin</div>

      <Button onClick={handleClick} buttonType="next">
        {ButtonName}
      </Button>
      <style jsx>
        {`
          .titleWrapper {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 200px;
          }
          .textStyle {
            font-size: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
