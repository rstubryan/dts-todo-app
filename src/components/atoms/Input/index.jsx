export default function Input({
  id,
  type,
  name,
  placeholder,
  className,
  ...props
}) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-sm text-base ${className}`}
      {...props}
    />
  );
}
