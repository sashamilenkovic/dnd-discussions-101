"use client";

import { useState } from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations, multiDrag } from "@formkit/drag-and-drop";

export function UseDragAndDropExample() {
  const [items] = useState<string[]>(["foo", "bar", "foobar"]);

  // Get back `updateItems`
  const [parent, itemsDND, updateItems] = useDragAndDrop<
    HTMLDivElement,
    string
  >(items, {
    plugins: [animations(), multiDrag({})],
  });

  return (
    <div>
      <h1>useDragAndDrop hook</h1>
      <div ref={parent}>
        {itemsDND.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <button
        onClick={() => {
          updateItems([...items, "new item!"]);
        }}
      >
        ADD NEW ITEM
      </button>
    </div>
  );
}
