"use client";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import css from "@/styles/Admin.module.css";
import { AdvanceTable } from "@/components/advance-table/advance-table";
import { LogRepository } from "@/repositories/log-repository";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/repositories/repository";
import { useRouter } from "next/navigation";

const logRepository = new LogRepository();

const DiaryForm = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        logRepository.read().then((response) => setLogs(response));
      } else {
        // User is signed out
        // ...
        router.push("/Login");
      }
    });
  }, []);

  const onRowAdd = (newData: any) => {
    return logRepository.add(newData).then((ref) =>
      setLogs([
        ...logs,
        {
          ...newData,
          id: ref?.id,
        },
      ])
    );
  };

  const onRowDelete = (oldData: any) => {
    return logRepository
      .remove(oldData.id)
      .then(() => setLogs(logs.filter((log) => log?.id !== oldData?.id)));
  };

  const onRowUpdate = (newData: any) => {
    return logRepository.update(newData?.id, newData).then(() => {
      logs[newData?.tableData?.id] = {
        ...logs?.[newData?.tableData?.id],
        ...newData,
      };
      setLogs([...logs]);
    });
  };

  return (
    <div className="container-fluid">
      {/* title quản lí nhật kí */}
      <br />
      <Row className={css.title}>QUẢN LÍ NHẬT KÍ ĐIỆN TỬ</Row>
      {/* tab row */}
      <br />
      <Row>
        <AdvanceTable
          columns={[
            { title: "Id", field: "id", editable: "never" },
            { title: "Nhật Kí Số", field: "postNo" },
            { title: "Tiêu Đề", field: "name" },
            { title: "Mục Tiêu", field: "purpose" },
            { title: "Nội Dung", field: "content" },
            { title: "Tác Giả", field: "author" },
            { title: "Địa Chỉ", field: "address" },
            { title: "Ngày Chia Sẻ", field: "created_date" },
          ]}
          initialData={logs}
          editable={{
            onRowAdd,
            onRowUpdate,
            onRowDelete,
          }}
        />
      </Row>

      {/* row footer */}
      <Row className={css.rowFooter}>
        {/* có 3 cột */}
        <>
          {/* cột đầu tiên social media */}
          <Col className={css.ColMangXaHoi}>
            <div className={css.titleFooter}>
              <b>MẠNG XÃ HỘI</b>
            </div>
            <Row className={css.iconFbYoutube}>
              <div className={css.contentFooter}>
                <Link href="#" className={css.socialFooter1}>
                  <Image
                    src="facebook.svg"
                    rounded
                    width={"50px"}
                    height={"50px"}
                  ></Image>
                </Link>
                <Link href="#" className={css.socialFooter2}>
                  <Image
                    src="youtube.svg"
                    rounded
                    width={"50px"}
                    height={"50px"}
                  ></Image>
                </Link>
              </div>
            </Row>
          </Col>
          {/* cột 2 là menu */}
          <Col className={css.ColMenuFooter}>
            <div className={css.titleFooter}>
              <b>MENU</b>
            </div>
            <Row>
              <div className={css.contentMenuFooter}>
                <Link href="/" className={css.menuF}>
                  Trang chủ
                </Link>
              </div>
              <div className={css.contentMenuFooter}>
                <Link href="/TNLamTheoLoiBac" className={css.menuF}>
                  Thanh Niên Làm Theo Lời Bác
                </Link>
              </div>
              <div className={css.contentMenuFooter}>
                <Link href="/TNTinhNguyen" className={css.menuF}>
                  Thanh Niên Tình Nguyện
                </Link>
              </div>
            </Row>
          </Col>
          {/* cột thông tin liên hệ */}
          <Col className={css.ColContactFooter}>
            <div className={css.titleFooter}>
              <b>THÔNG TIN LIÊN HỆ</b>
            </div>
            <Row>
              <div className={css.contentFooter}>
                <b>SĐT 1: </b>
                <a href="tel:0987285729" style={{ textDecoration: "none" }}>
                  <b> 0987 285 729 &#40;Nguyên&#41;</b>
                </a>
              </div>
            </Row>
            <Row>
              <div className={css.contentFooter}>
                <b>SĐT 2: </b>
                <a href="tel:0399280149" style={{ textDecoration: "none" }}>
                  {" "}
                  <b> 0399 280 149 &#40;Nhung&#41;</b>
                </a>
              </div>
            </Row>
            <Row>
              <div className={css.contentFooter}>
                <b>Email: </b>
                <a
                  href="mailto:dtnduyson@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <b> dtnduyson@gmail.com</b>
                </a>
              </div>
            </Row>
          </Col>
        </>

        {/* cột quản trị viên đăng nhập */}
        <Row>
          <div style={{ textAlign: "center" }}>
            <hr />
            <b>CHỨC NĂNG DÀNH CHO QUẢN TRỊ VIÊN: &nbsp;</b>
            <Link href="/Login" className={css.btnLogin}>
              <b>Login</b>
            </Link>{" "}
            <hr />
          </div>
        </Row>

        {/* cột thông tin coding by */}
        <Row>
          <div style={{ textAlign: "center" }}>
            <Link href="/#" style={{ textDecoration: "none" }}>
              ©Coppy right:
              <b>
                <i> Quang Hiếu - Harry</i>
              </b>
            </Link>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default DiaryForm;
