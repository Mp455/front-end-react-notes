import { Container } from "./style";

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {Array.isArray(children) ? (
        children.map((child, index) => <div key={index}>{child}</div>)
      ) : (
        <div>{children}</div>
      )}
    </Container>
  );
}
