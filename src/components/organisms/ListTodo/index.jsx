import { Card } from "@/components/ui/card.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";

export default function ListTodo({ todos, deleteTodo, updateTodo }) {
  const navigate = useNavigate();

  const handleUpdate = (index) => {
    updateTodo(index);
    navigate("/todo");
  };

  const handleDelete = (index) => {
    deleteTodo(index);
  };

  return (
    <>
      <div className="">
        {todos.map((todo, index) => (
          <>
            <div className="mt-5">
              <Card
                key={index}
                className="p-5 shadow-lg flex justify-between items-center w-full"
              >
                <TypographyText>{todo}</TypographyText>
                <div className="flex gap-2">
                  <Button onClick={() => handleUpdate(index)}>Update</Button>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </div>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
