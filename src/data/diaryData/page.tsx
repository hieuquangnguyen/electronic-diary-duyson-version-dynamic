"use client";
import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css1 from "@/styles/diaryData.module.css";
import css2 from "@/styles/modalDetail.module.css";
import ModalDiary from "@/modals/modalDiary/page";
interface DiaryProps {
  IdDiary: string;
  DiaryName: string;
  Date: string;
  Author: string;
  Address: string;
  Purpose: string;
  Content: string;
}

const DiaryItem: React.FC<DiaryProps> = ({
  IdDiary,
  DiaryName,
  Date,
  Author,
  Address,
  Purpose,
  Content,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={css1.coverItem}>
        <Row>
          <Col>
            <div className={css1.STT}>
              <b>Nhật Kí Số:</b> {IdDiary}
            </div>
          </Col>
          <Col>
            <div className={css1.dateShare}>
              <b>Ngày chia sẻ:</b> {Date}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={css1.title}>
              <b>Tiêu đề:</b> {DiaryName}
            </div>
          </Col>
          <Col>
            <div className={css1.author}>
              <b>Tác giả:</b> {Author}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={css1.address}>
              <b>Địa chỉ:</b> {Address}
            </div>
          </Col>
        </Row>
        <Row>
          <div className={css1.purposeDiary}>
            <b>Mục tiêu, ý nghĩa nhật kí:</b> {Purpose}
          </div>
        </Row>
        <div>
          <Row className={css1.buttonTimHieu}>
            <button
              className={css1.detailProduct}
              onClick={() => setShowModal(true)}
            >
              <b>Đọc Nhật Kí</b>
            </button>
          </Row>
          {showModal && (
            // hiển thị modal chi tiết sản phẩm
            <ModalDiary onClose={() => setShowModal(false)}>
              <div className={css2.coverContentModalDetail}>
                <div className={css2.STT}>
                  <b>Nhật Kí Số:</b> {IdDiary}
                </div>
                <div className={css2.title}>
                  <b>Tiêu đề:</b> {DiaryName}
                </div>
                <div className={css2.dateShare}>
                  <b>Ngày chia sẻ:</b> {Date}
                </div>
                <div className={css2.author}>
                  <b>Tác giả:</b> {Author}
                </div>
                <div className={css2.author}>
                  <b>Địa chỉ:</b> {Address}
                </div>
                <div className={css2.content}>{Content}</div>
              </div>
            </ModalDiary>
          )}
        </div>
      </div>
    </>
  );
};

export default DiaryItem;
