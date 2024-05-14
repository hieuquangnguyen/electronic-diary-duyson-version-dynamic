import React from "react";
import css from "@/styles/customTable.module.css";
import { Button } from "react-bootstrap";
function DataTable() {
  return (
    <table className={css.custom_table}>
      <thead>
        <tr>
          <th style={{ width: "5%" }}>Nhật Ký Số</th>
          <th style={{ width: "500px" }}>Tiêu Đề</th>
          <th style={{ width: "10%" }}>Ngày</th>
          <th style={{ width: "15%" }}>Tác Giả</th>
          <th style={{ width: "15%" }}>Xem Chi Tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr className={css.custom_tr}>
          <td>1</td>
          <td>
            <div className={css.custom_td}>
              Việc Tốt Việc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc Tốt Việc Tốt Việc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc Tốt Việc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc Tốt Việc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              Tốt Việc Tốt Việc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc Tốt Việc Tốt Việc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc Tốt Việc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc Tốt Việc TốtViệc TốtViệc
              TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc TốtViệc
              Tốt
            </div>
          </td>
          <td>01/10/2022</td>
          <td>Quang hiếu</td>
          <td>
            <Button variant="primary">
              <b>Xem Chi Tiết</b>
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default DataTable;
