import { FC } from "react";
import { Form, Stack } from "react-bootstrap";

export interface FilterI {
  sort: string;
  query: string;
}

interface PostFilterProp {
  filter: FilterI;
  setFilter: React.Dispatch<React.SetStateAction<FilterI>>;
}

const PostFilter: FC<PostFilterProp> = ({ filter, setFilter }) => {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex justify-content-between"
    >
      <Form.Select
        style={{ width: "150px" }}
        value={filter.sort}
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
      >
        <option value="">Sorting by</option>
        <option value="title">Title</option>
        <option value="body">Description</option>
      </Form.Select>

      <Form className="d-flex align-items-center " style={{ width: "400px" }}>
        <Form.Control
          type="search"
          placeholder="Find a post by title"
          aria-label="Search"
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        />
      </Form>
    </Stack>
  );
};

export default PostFilter;
