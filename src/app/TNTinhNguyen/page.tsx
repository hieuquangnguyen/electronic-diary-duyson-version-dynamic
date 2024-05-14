"use client";

import Accordion from "react-bootstrap/Accordion";
import CoverContentDiary from "@/components/coverContentDiary/page";
import css from "@/styles/TNTinhNguyen.module.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DiaryItem from "@/data/diaryData/page";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCommonStore } from "@/stores/common";
import Form from "react-bootstrap/Form";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

// coppy link
import clipboardCopy from "clipboard-copy";
import Alert from "react-bootstrap/Alert";

import dataPosts from "@/data/diaryContent/postsTNTinhNguyen.json";
const NKTinhNguyen: React.FC = () => {
  // Khai báo state để lưu trạng thái hiển thị của Alert
  const [showAlert, setShowAlert] = useState(false);

  // xử lí search
  const pathname = usePathname();
  const { search } = useCommonStore();

  const searchParams = useSearchParams();

  // coppy link
  // Định nghĩa hàm copyLink để sao chép liên kết của bài viết
  const copyLink = (postId: string) => {
    const url = getPostUrl(postId); // Lấy liên kết của bài viết
    clipboardCopy(url) // Sao chép liên kết vào clipboard
      .then(() => {
        console.log("okk");
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Lỗi khi sao chép liên kết:", error);
        alert("Đã xảy ra lỗi khi sao chép liên kết!");
      });
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false); // Tắt thẻ Alert sau 5 giây
      }, 5000);

      // Xóa hẹn giờ khi component bị unmount hoặc showAlert thay đổi
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Tạo một state để lưu trữ postIdToOpen
  const [postIdToOpen, setPostIdToOpen] = useState<string>("1");
  const { keywords } = useCommonStore();

  useEffect(() => {
    const postId = searchParams.get("postId");
    if (postId) {
      setPostIdToOpen(postId);
    }
  }, []);

  useEffect(() => {
    document.getElementById(`post${postIdToOpen}`)?.scrollIntoView();
  }, [postIdToOpen]);

  // Thiết lập giá trị cho postIdToOpen, chẳng hạn khi người dùng chọn một bài viết cụ thể
  const handlePostClick = (postId: string) => {
    setPostIdToOpen(postId);
  };

  // tạo một mảng posts
  const posts = dataPosts;

  function getPostUrl(postId: string) {
    const baseUrl =
      "https://nhat-ki-dien-tu-thanh-nien.vercel.app/TNTinhNguyen";
    return `${baseUrl}?postId=${postId}`; // Append post ID to the URL
  }

  function shareToFacebook(postId: string) {
    const url = getPostUrl(postId); // Get the post URL
    const encodedUrl = encodeURIComponent(url); // Encode URL for safe sharing

    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    );

    // Update state to set the defaultActiveKey to the shared post ID
    setPostIdToOpen(postId);
  }
  // lọc search
  const filteredPosts = posts.filter((post) => post.title.includes(keywords));

  return (
    <>
      <CoverContentDiary>
        <>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
              className={css.customAlert}
            >
              <Alert.Heading>Thành Công</Alert.Heading>
              <p className="mb-0">
                <b>Bạn đã sao chép thành công.</b>
              </p>
            </Alert>
          )}
          <div className={css.coverNhatKiPage}>
            <div className={css.headerPage}>
              <h3>NHẬT KÍ THANH NIÊN TÌNH NGUYỆN</h3>
            </div>
            <div>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Tìm Kiếm Nhật Kí Theo Tên Tiêu Đề Tại Đây"
                  className="me-2"
                  aria-label="Search"
                  onChange={(event) => search(event.target.value)}
                />
              </Form>
            </div>

            <div className={css.coverListNhatKi}>
              <div id="modal-root">
                <Accordion key={postIdToOpen} defaultActiveKey={postIdToOpen}>
                  {filteredPosts.map((post) => (
                    // Nhật kí số 1
                    <Accordion.Item
                      eventKey={post.id}
                      id={`post${post.id}`}
                      key={post.id}
                      onClick={() => handlePostClick(post.id)} // Gọi hàm handlePostClick khi bài viết được click
                    >
                      <Accordion.Header>{post.title}</Accordion.Header>

                      <Accordion.Body>
                        <DiaryItem
                          IdDiary={post.content.IdDiary}
                          DiaryName={post.content.DiaryName}
                          Date={post.content.Date}
                          Author={post.content.Author}
                          Address={post.content.Address}
                          Purpose={post.content.Purpose}
                          Content={post.content.Content}
                        />

                        <div className={css.buttonShare}>
                          <ButtonGroup aria-label="Basic example">
                            <Button
                              variant="success"
                              style={{
                                width: "150px",
                                border: "solid 3px white",
                                borderRadius: "5px",
                              }}
                              onClick={() => shareToFacebook(post.id)}
                            >
                              <b>Share Facebook</b>
                            </Button>

                            <Button
                              variant="success"
                              style={{
                                width: "150px",
                                border: "solid 3px white",
                                borderRadius: "5px",
                              }}
                              onClick={() => copyLink(post.id)}
                            >
                              <b>Copy Link</b>
                            </Button>
                          </ButtonGroup>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </>
      </CoverContentDiary>
    </>
  );
};

const SuspenseWrappedNKTinhNguyen: React.FC = () => {
  return (
    <Suspense fallback={<div>Wait a minute...</div>}>
      <NKTinhNguyen />
    </Suspense>
  );
};
export default SuspenseWrappedNKTinhNguyen;
