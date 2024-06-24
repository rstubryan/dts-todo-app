export default function Label({ htmlFor, children, className, ...props }) {
  return (
    <label htmlFor={htmlFor} className={`text-md font-semibold ${className}`}>
      {children}
    </label>
  );
}
