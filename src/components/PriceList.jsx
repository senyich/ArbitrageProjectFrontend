import LinkedButton from "./LinkedButton";
import React from "react";

export default function PriceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      {/* Базовый тариф */}
      <div className="
        bg-green-950/80
        rounded-2xl
        shadow-neon
        p-8
        flex flex-col
        items-center
        text-center
        border border-green-800
        hover:shadow-[0_0_32px_8px_#22f57b]
        transition
      ">
        <h3 className="text-2xl font-bold text-neon-green mb-2 drop-shadow-[0_0_8px_#22f57b]">
          Базовый тариф
        </h3>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-3xl font-extrabold text-lime-300 drop-shadow-[0_0_6px_#22f57b]">100$</span>
          <span className="text-lime-200 text-lg font-medium">/месяц</span>
        </div>
        <ul className="text-lime-200 text-base mb-6 space-y-1">
          <li>✓ 10 CEX бирж</li>
          <li>✓ Лимит 15 связок/день</li>
        </ul>
        <LinkedButton content={"Приобрести"} path={"/auth"} />
      </div>
      {/* Продвинутый тариф */}
      <div className="
        bg-green-950/80
        rounded-2xl
        shadow-neon
        p-8
        flex flex-col
        items-center
        text-center
        border border-green-800
        hover:shadow-[0_0_32px_8px_#22f57b]
        transition
      ">
        <h3 className="text-2xl font-bold text-neon-green mb-2 drop-shadow-[0_0_8px_#22f57b]">
          Продвинутый тариф
        </h3>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-3xl font-extrabold text-lime-300 drop-shadow-[0_0_6px_#22f57b]">200$</span>
          <span className="text-lime-200 text-lg font-medium">/месяц</span>
        </div>
        <ul className="text-lime-200 text-base mb-6 space-y-1">
          <li>✓ 10 CEX бирж</li>
          <li>✓ Безлимитные связки</li>
          <li>✓ Связки с хэджированием</li>
          <li>✓ Фильтрация связок</li>
        </ul>
        <LinkedButton content={"Приобрести"} path={"/auth"} />
      </div>
    </div>
  );
}
