import React from "react";

const List = ({
  items,
  onClick,
}: {
  items: string[];
  onClick: (text: string) => void;
}) => {
  return (
    <div>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default List;
