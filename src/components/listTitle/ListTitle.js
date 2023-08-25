import React, { useState } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import { useValues } from "../../context/Context";

export default function ListTitle() {
  const { listTitleValues } = useValues();
  const color = ["success", "info", "warning", "danger"];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h4>List Title List</h4>
      <ListGroup>
        {listTitleValues.listTitle?.map((t) => (
          <ListGroupItem
            tag="a"
            href="#"
            action
            key={t.id}
            color={color[index]}
          >
            {t.listName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
