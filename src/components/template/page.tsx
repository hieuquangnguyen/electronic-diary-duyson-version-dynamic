"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import css from "./template.module.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
// import { useCommonStore } from "@/stores/common";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // const { search } = useCommonStore();
  // console.log("pathname", pathname);

  return (
    <Container className={css.container}>
      {/* ảnh Nhat ki va Nhat Ki Thanh Nien Duy Son */}
      <Row className={css.rowOne}>
        <Col className={css.sonhatki} sm lg={4}>
          <Image src="diary.png" rounded width={"150px"} height={"180px"} />
        </Col>
        <Col className={css.coverTitle} sm lg={8}>
          <div className={css.titleNKTN}>
            <Row>
              <h3>NHẬT KÝ ĐIỆN TỬ</h3>
            </Row>
            <Row>
              <h4>Thanh Niên Tình Nguyện</h4>
            </Row>
            <Row>
              <h4>Thanh Niên Làm Theo Lời Bác</h4>
            </Row>
            <Row>
              <h5>Xã Duy Sơn - Huyện Duy Xuyên - Tỉnh Quảng Nam.</h5>
            </Row>
          </div>
        </Col>
      </Row>

      {/* menu */}
      <Row className={css.CustomMenu}>
        <>
          {["xl"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="mb-3"
              style={{ marginBottom: "0px" }}
              bg="dark"
              data-bs-theme="dark"
            >
              <Container fluid>
                <Navbar.Brand href="#">
                  <div className={css.hast}>
                    <b>Enjoy Your Stay Here!</b>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  bg="dark"
                  data-bs-theme="dark"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                      style={{ textAlign: "center" }}
                    >
                      NHẬT KÍ THANH NIÊN
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Link
                        style={{
                          color: pathname === "/" ? "red" : "white",
                        }}
                        href="/"
                        className={css.NavMenuCustom}
                      >
                        Trang Chủ
                      </Link>
                      <Link
                        style={{
                          color:
                            pathname === "/TNLamTheoLoiBac" ? "red" : "white",
                        }}
                        href="/TNLamTheoLoiBac"
                        className={css.NavMenuCustom}
                      >
                        Thanh Niên Làm Theo Lời Bác
                      </Link>
                      <Link
                        style={{
                          color: pathname === "/TNTinhNguyen" ? "red" : "white",
                        }}
                        href="/TNTinhNguyen"
                        className={css.NavMenuCustom}
                      >
                        Thanh Niên Tình Nguyện
                      </Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      </Row>

      {/* row content */}
      <Row className={css.rowContent}>
        {children}
        {/* hiển thị nội dung của các page ở đây */}
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
            <Link href="/login" className={css.btnLogin}>
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
}
