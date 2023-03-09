import React, { useContext } from "react";

function Container(props) {
  return (
    <main className={"bg-gray-100 dark:bg-[hsl(235,21%,11%)] h-full"}>
      {props.children}
    </main>
  );
}

export default Container;
