export default function Card({ children, footer, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
}
