import { useRef } from "react";
import DropdownMenu from "./DropdownMenuDinamis";

export default function CardMenu() {
  const wrapperRef = useRef(null); // Referensi elemen pembungkus
  const coba = "overflow-hidden";

  return (
    <div
      ref={wrapperRef}
      className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md {coba}"
    >
      {/* Header Card */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
        <DropdownMenu position="left" wrapperRef={wrapperRef} />
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Card Header</h3>
        <DropdownMenu position="right" wrapperRef={wrapperRef} />
      </div>

      {/* Isi Card */}
      <div className="p-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          This is the content of the card. You can add more details here.
        </p>
      </div>
    </div>
  );
}

