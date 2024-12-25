import { useRef } from "react";
import DropdownDynamic from "@c/DropdownDynamic";

export default function CardMenuDynamic() {
  const wrapperRef = useRef(null);

  return (
    <div ref={wrapperRef} className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header Card */}
      <div className="flex items-center justify-between p-4">
        <DropdownDynamic position="left" wrapperRef={wrapperRef} />
        <h3 className="text-lg font-bold text-gray-900">Card Header</h3>
        <DropdownDynamic position="right" wrapperRef={wrapperRef} />
      </div>

      {/* Divider */}
      <div className="divider" />
      <div className="w-1/2 divider" />
      <div className="w-1/3 divider" />
      <div className="w-1/4 divider" />
      <div className="w-1/2 center divider" />

      {/* Isi Card */}
      <div className="p-4">
        <p className="text-sm text-gray-700">
          This is the content of the card. You can add more details here.
          komponen menggunankan class .divider
        </p>
      </div>
    </div>
  );
}

