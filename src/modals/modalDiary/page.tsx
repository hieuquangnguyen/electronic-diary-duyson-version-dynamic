import React, { ReactNode, MouseEvent, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import css from "@/styles/modalDiary.module.css";
interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const ModalDiary: React.FC<ModalProps> = ({ onClose, children, title }) => {
  const handleCloseClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const modalContent = (
    <div className={css.modal_overlay} onClick={handleOverlayClick}>
      <div className={css.modal_wrapper}>
        <div className={css.modal}>
          <div className={css.modal_header}>
            <Row className={css.coverheader}>
              <div className={css.coverTitle}>
                <Col sm="11" className={css.title}>
                  <b>NHẬT KÍ ĐIỆN TỬ THANH NIÊN</b>
                </Col>
                <Col sm="1">
                  <a href="#" className={css.close} onClick={handleCloseClick}>
                    <b>X</b>
                  </a>
                </Col>
              </div>
            </Row>
          </div>
          <div className={css.modal_body}>{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default ModalDiary;
