import ListTodo from "@/components/organisms/ListTodo/index.jsx";
import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import useTodos from "@/hooks/useTodo.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function ListTodoPagesLayout() {
  const { todos, deleteTodo, updateTodo } = useTodos();

  return (
    <>
      <ContainerLayout className="flex flex-col h-screen justify-center items-center max-w-lg">
        <div className="w-full">
          <div className="flex justify-between items-center">
            {todos.length === 0 ? (
              <>
                <HeadingText className="mx-auto">List Todo</HeadingText>
              </>
            ) : (
              <>
                <HeadingText className="text-center">List Todo</HeadingText>
                <Link to={"/todo"}>
                  <Button>+</Button>
                </Link>
              </>
            )}
          </div>

          {todos.length === 0 ? (
            <div className="text-center">
              <TypographyText className="text-center my-5">
                No Todos
              </TypographyText>
              <Link to={"/todo"}>
                <Button>Click here to add Todo</Button>
              </Link>
            </div>
          ) : (
            <ListTodo
              todos={todos}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          )}
        </div>
      </ContainerLayout>
    </>
  );
}
