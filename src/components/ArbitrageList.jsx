import ArbitrageOpportunity from "./ArbitrageOpportunity";
import React from "react";

export default function ArbitrageList({ data }) {
  if (!data.length) {
    return (
      <div className="text-gray-400 text-center mt-8">
        Нет арбитражных ситуаций для выбранной пары.
      </div>
    );
  }
  return (
    <div className="mt-8">
      {data.map((item, idx) => (
        <ArbitrageOpportunity key={idx} opportunity={item} />
      ))}
    </div>
  );
}
