"use client";

import { colorToCssColor } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const colors = [
  { r: 255, g: 255, b: 255 },
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 87, b: 217 },
  { r: 0, g: 200, b: 100 },
  { r: 255, g: 255, b: 0 },
  { r: 100, g: 32, b: 240 },
  { r: 255, g: 12, b: 203 },
];

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      {colors.map((color, i) => (
        <ColorButton key={i} onClick={onChange} color={color} />
      ))}
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{
          background: colorToCssColor(color),
        }}
      />
    </button>
  );
};
