export default function TypographyText({ children, className, ...props }) {
  return (
    <p className={`text-base leading-7 ${className}`} {...props}>
      {children}
    </p>
  );
}
