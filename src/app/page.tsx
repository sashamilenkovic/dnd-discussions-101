import { UseDragAndDropExample } from "./components/useDragAndDrop";
import { DragAndDropExample } from "./components/dragAndDrop";

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <DragAndDropExample />
      </div>
      <div>
        <UseDragAndDropExample />
      </div>
    </div>
  );
}
