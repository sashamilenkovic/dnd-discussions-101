"use client";

import { useState, useEffect, useRef } from "react";
import { dragAndDrop } from "@formkit/drag-and-drop/react";
import { animations, multiDrag } from "@formkit/drag-and-drop";

export function DragAndDropExample() {
  const [values, setValues] = useState<string[]>(["foo", "bar", "foobar"]);

  const parent = useRef(null);

  useEffect(() => {
    dragAndDrop({
      parent,
      state: [values, setValues],
      plugins: [animations(), multiDrag({})],
    });
  }, [values]);

  return (
    <div>
      <h1>Drag and drop hook</h1>
      <div ref={parent}>
        {values.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <button
        onClick={() => {
          setValues([...values, "new item!"]);
        }}
      >
        ADD NEW ITEM
      </button>
    </div>
  );
}
