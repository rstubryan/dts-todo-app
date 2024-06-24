export default function HeadingText({ children, className, ...props }) {
  return (
    <h1
      className={`scroll-m-20 text-primary font-bold tracking-tight text-3xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}
