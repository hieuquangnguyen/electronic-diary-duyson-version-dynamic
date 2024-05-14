"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import { Form, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import css from "@/styles/Admin.module.css";

import DataTable from "@/components/tableDiary/page";

const DiaryForm = () => {
  return (
    <Container>
      {/* title quản lí nhật kí */}
      <br />
      <Row className={css.title}>QUẢN LÍ NHẬT KÍ ĐIỆN TỬ</Row>
      {/* tab row */}
      <br />
      <Row>
        <Tabs defaultActiveKey="add" id="quanlitabs" className="mb-3">
          <Tab eventKey="add" title="Tạo Nhật Kí Mới">
            <Container>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Thể Loại Nhật Kí</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option disabled>Chọn Thể Loại Nhật Kí</option>
                    <option value="1">Nhật Kí Thanh Niên Tình Nguyện</option>
                    <option value="2">
                      Nhật Kí Thanh Niên Làm Theo Lời Bác
                    </option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nhật Kí Số</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Nhập số thứ tự nhật kí"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tên nhật ký</Form.Label>
                  <Form.Control type="text" placeholder="Nhập tên nhật ký" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Ngày</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tác giả</Form.Label>
                  <Form.Control type="text" placeholder="Nhập tên tác giả" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Địa chỉ</Form.Label>
                  <Form.Control type="text" placeholder="Nhập địa chỉ" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mục đích</Form.Label>
                  <Form.Control type="text" placeholder="Nhập mục đích" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nội dung</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Nhập nội dung"
                  />
                </Form.Group>

                <div className={css.btnThem}>
                  <Button variant="primary" type="submit">
                    <b>THÊM MỚI NHẬT KÍ</b>
                  </Button>
                </div>
              </Form>
            </Container>
          </Tab>

          <Tab
            eventKey="update"
            title="Quản Lí Nhật Kí"
            className={css.tabheight}
          >
            {/* data table */}
            <DataTable />
          </Tab>
        </Tabs>
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
                <Link href="/NKTNLamTheoLoiBac" className={css.menuF}>
                  Thanh Niên Làm Theo Lời Bác
                </Link>
              </div>
              <div className={css.contentMenuFooter}>
                <Link href="/NKTNTinhNguyen" className={css.menuF}>
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
    </Container>
  );
};

export default DiaryForm;
