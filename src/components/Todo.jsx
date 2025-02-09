import api from "./TodoApi";
import { useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import "../todo.css";

export default function Todo({ apiData, setApiData }) {
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await api();
      if (data !== "error") {
        setApiData(data);
      }
    }
    fetchData();
  }, []);

  function handleEdit(elem) {
    setEditId(elem.id);
    setNewTitle(elem.title);
    setNewBody(elem.body);
  }

  function handleDelete(elem) {
    const newdata = apiData.filter((data) => data.id !== elem.id);
    setApiData(newdata);
  }

  function handleSave(elem) {
    const newData = apiData.map((data) =>
      data.id === elem.id ? { ...data, title: newTitle, body: newBody } : data
    );
    setApiData(newData);
    setEditId(null);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = apiData.findIndex((item) => item.id === active.id);
    const newIndex = apiData.findIndex((item) => item.id === over.id);

    setApiData(arrayMove(apiData, oldIndex, newIndex));
  }

  // Improve touch responsiveness
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={apiData} strategy={rectSortingStrategy}>
        <section className="list-section">
          <ul className="list">
            {apiData.map((elem, index) => (
              <SortableItem key={elem.id} id={elem.id}>
                <li className="list-item">
                  <div className="list-item-content">
                    <p className="list-item-index">{index + 1}</p>

                    {editId !== elem.id ? (
                      <>
                        <p className="list-item-title">{elem.title}</p>
                        <p className="list-item-body">{elem.body}</p>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          className="edit-input"
                          value={newTitle}
                          onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <input
                          type="text"
                          className="edit-input"
                          value={newBody}
                          onChange={(e) => setNewBody(e.target.value)}
                        />
                      </>
                    )}
                  </div>
                  <div className="list-item-buttons">
                    {editId !== elem.id ? (
                      <>
                        <button className="btn-edit group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-45 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg" onClick={() => handleEdit(elem)}>
                          Edit
                        </button>
                        <button className="btn-delete group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-45 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg" onClick={() => handleDelete(elem)}>
                          Delete
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn-cancel group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-45 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg" onClick={() => setEditId(null)}>
                          Cancel
                        </button>
                        <button className="btn-save group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-12 w-45 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg" onClick={() => handleSave(elem)}>
                          Save
                        </button>
                      </>
                    )}
                  </div>
                </li>
              </SortableItem>
            ))}
          </ul>
        </section>
      </SortableContext>
    </DndContext>
  );
}
