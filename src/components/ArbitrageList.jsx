import ArbitrageOpportunity from "./ArbitrageOpportunity";
import React from "react";

export default function ArbitrageList({ data, hasSearched }) {
  if (!hasSearched) {
    return null;
  }

  if (data.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-8 italic font-medium">
        Нет арбитражных ситуаций для выбранной пары.
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      {data.map((item, idx) => (
        <ArbitrageOpportunity key={idx} opportunity={item} />
      ))}
    </div>
  );
}
