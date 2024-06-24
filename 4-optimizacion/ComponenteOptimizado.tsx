import React, { useMemo } from "react";

const ExpensiveComponent: React.FC<{ data: any }> = ({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);

  return (
    <div>
      {processedData.map((item: any, index: number) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

const processData = (data: any) => {
  return data.map((item: any) => ({ ...item, processed: true }));
};
