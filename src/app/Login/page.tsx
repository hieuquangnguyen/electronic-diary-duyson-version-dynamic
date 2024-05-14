"use client";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Link from "next/link";
import css from "@/components/template/template.module.css";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <Image
              src="diary.png"
              className="img-fluid"
              rounded
              width={"150px"}
              height={"180px"}
            />
          </div>
          <h3 className="text-center">Đăng Nhập</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Mật Khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                <b>ĐĂNG NHẬP</b>
              </Button>
              <a href="#" className="align-self-center">
                Forgot password?
              </a>
            </div>
          </Form>
        </Col>
      </Row>
      <br />
      <br />
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

export default Page;
