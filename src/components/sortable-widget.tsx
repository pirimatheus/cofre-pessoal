"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  id: string;
  editando: boolean;
  children: ReactNode;
};

export default function SortableWidget({ id, editando, children }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative h-full">
      {editando && (
        <button
          {...attributes}
          {...listeners}
          className="absolute top-1 right-1 z-10 cursor-grab active:cursor-grabbing rounded-full flex items-center justify-center border-none"
          style={{ width: 24, height: 24, background: "var(--color-accent-soft)" }}
        >
          <GripVertical size={14} color="var(--color-accent)" />
        </button>
      )}
      {children}
    </div>
  );
}