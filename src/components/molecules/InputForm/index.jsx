import Label from "../../atoms/Label/index.jsx";
import Input from "../../atoms/Input/index.jsx";

export default function InputForm({
  htmlFor,
  label,
  type,
  name,
  placeholder,
  defaultValue,
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={htmlFor}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
