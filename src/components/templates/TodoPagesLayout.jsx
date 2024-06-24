import ContainerLayout from "./ContainerLayout.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import TodoForm from "@/components/organisms/TodoForm/index.jsx";
import { Card } from "@/components/ui/card.jsx";
import ListTodo from "@/components/organisms/ListTodo/index.jsx";
import useTodos from "@/hooks/useTodo.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function TodoPagesLayout() {
  const { todos, addTodo, deleteTodo, updateTodo, editingTodo, editingIndex } =
    useTodos();

  return (
    <>
      <ContainerLayout className="flex flex-col h-screen justify-center items-center max-w-lg">
        <Card className={"w-full p-10 shadow-lg"}>
          <HeadingText className="text-center">Todo App</HeadingText>
          <div className="my-5">
            <TodoForm
              addTodo={addTodo}
              editingTodo={editingTodo}
              updateTodo={updateTodo}
              editingIndex={editingIndex}
            />
            <Link to={"/"}>
              <Button variant={"outline"} className="w-full">
                List Todo
              </Button>
            </Link>
          </div>
        </Card>
        <div className="w-full">
          <ListTodo
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </ContainerLayout>
    </>
  );
}
