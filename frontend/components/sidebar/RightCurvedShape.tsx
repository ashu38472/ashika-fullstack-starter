export default function RightCorvedShape() {
  return (
    <span
      className="
                      absolute right-[-32px] top-0 h-full w-[32px]
                      bg-[#EEF7FF]
                      pointer-events-none
                    "
    >
      {/* ================= TOP INVERTED CURVE ================= */}
      <span
        className="
                        absolute -top-8 right-4
                        h-8 w-8
                        bg-[#EEF7FF]
                      "
      />
      {/* cover rectangle */}
      <span
        className="
                        absolute -top-8 right-4
                        h-8 w-8
                        bg-white
                        rounded-br-2xl
                      "
      />

      {/* ================= BOTTOM INVERTED CURVE ================= */}
      <span
        className="
                        absolute -bottom-8 right-4
                        h-8 w-8
                        bg-[#EEF7FF]
                      "
      />
      {/* cover rectangle */}
      <span
        className="
                        absolute -bottom-8 right-4
                        h-8 w-8
                        bg-white
                        rounded-tr-2xl
                      "
      />
    </span>
  );
}
