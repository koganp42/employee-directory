import React from "react";

function TableRow(props) {
  return <tr>
  <td>{props.user.name.first} {props.user.name.last}</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  </tr>;
}

export default TableRow;
