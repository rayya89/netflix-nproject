//NPM Packages
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Project files
import { readCollection } from "../scripts/fireStore";
import { onFail } from "../scripts/onFail";
import EmptyMessage from "../components/EmptyMessage";
import { useItems } from "../state/ItemsContext";
import { useModal } from "../state/ModalContext";
import AdminTitleCard from "../components/AdminTitleCard";
import CreateTitleForm from "../components/CreateTitleForm";

export default function AdminCategory() {
  const { items, setItems } = useItems();
  const { setModal } = useModal();

  //local state
  const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

  //Properties
  const { category } = useParams();
  const path = `titles/${category}/content`;

  // Method
  useEffect(() => {
    async function loadData() {
      const categoryData = await readCollection(path).catch(onLoadFail);
      if (categoryData) setItems(categoryData);
      setStatus(1);
    }
    loadData();
  }, []);

  function onLoadFail() {
    onFail();
    setStatus(2);
  }

  //Safeguard
  if (status === 0) return <p>Loading</p>;
  if (status === 2) return <p>error</p>;

  const Items = items.map((item) => (
    <AdminTitleCard key={item.id} item={item} category={category} />
  ));

  return (
    <div>
      <h2>Here are the current titles in the {category} category</h2>
      <div>
        {items.length === 0 && <EmptyMessage />}
        {items.length > 0 && Items}
        <button
          onClick={() => setModal(<CreateTitleForm category={category} />)}
        >
          Add new title
        </button>
      </div>
    </div>
  );
}
