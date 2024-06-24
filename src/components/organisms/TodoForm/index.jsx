import InputForm from "@/components/molecules/InputForm/index.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function TodoForm({
  addTodo,
  editingTodo,
  updateTodo,
  editingIndex,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (editingTodo !== null) {
          updateTodo(editingIndex, e.target.elements.todo.value);
        } else {
          addTodo(e.target.elements.todo.value);
        }
        e.target.reset();
      }}
    >
      <InputForm
        htmlFor={"todo"}
        label={"Input"}
        name={"todo"}
        type={"text"}
        id={"todo"}
        placeholder={"Input"}
        defaultValue={editingTodo}
      />
      <Button type="submit" className="w-full my-5">
        {editingTodo ? "Update Todo" : "Add Todo"}
      </Button>
    </form>
  );
}
