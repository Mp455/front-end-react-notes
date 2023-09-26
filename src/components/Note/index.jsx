import { Container } from "./style";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  // Problema a ser resolvido, não está puxando as tags
  // console.log("Data received in Note component:", data);
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={String(tag.id)} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
