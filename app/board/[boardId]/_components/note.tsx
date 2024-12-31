import { Kalam } from "next/font/google";
import ComtentEditable, { ContentEditableEvent } from "react-contenteditable";

import { cn, colorToCssColor, getContrastingTextColor } from "@/lib/utils";
import { NoteLayer } from "@/types/canvas";
import { useMutation } from "@/liveblocks.config";

const font = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 60;
  const scaleFactor = 0.15;
  const fontsizeBasedOnHeight = height * scaleFactor;
  const fontsizeBasedOnWidth = width * scaleFactor;

  return Math.min(fontsizeBasedOnHeight, fontsizeBasedOnWidth, maxFontSize);
};

interface NoteProps {
  id: string;
  layer: NoteLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor?: string;
}

export const Note = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: NoteProps) => {
  const { x, y, width, height, fill, value } = layer;

  const updateValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value);
  };

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCssColor(fill) : "#FFEB3B", // Default sticky note yellow
        borderRadius: "8px", // Rounded corners
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for depth
        overflow: "hidden", // Prevent content overflow
        position: "relative", // For pseudo-element positioning
      }}
      className="sticky-note shadow-md drop-shadow-xl"
    >
      <ComtentEditable
        html={value || "Note"}
        onChange={handleContentChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center outline-none",
          font.className
        )}
        style={{
          color: fill ? getContrastingTextColor(fill) : "#000",
          fontSize: calculateFontSize(width, height),
          padding: "8px", // Inner padding for better appearance
          lineHeight: "1.5", // Spacing for text readability
        }}
      />
    </foreignObject>
  );
};
