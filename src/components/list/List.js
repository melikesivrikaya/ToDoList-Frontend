import React from "react";

import { useValues } from "../../context/Context";
import { ListGroup, ListGroupItem } from "reactstrap";
export default function List() {
  const { listValues } = useValues();
  return (
    <div>
      <h4>List List</h4>
      <ListGroup>
        {listValues.list?.map((l) => (
          <ListGroupItem tag="a" href="#" action key={l.id} color="info">
            {l.task}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
