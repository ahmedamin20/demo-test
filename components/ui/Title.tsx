import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-4xl font-bold text-[#FFE90B] mb-12 text-center">
      {title}
    </h2>
  );
};

export default Title;
