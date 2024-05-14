"use client";
import React from "react";
import css from "@/styles/coverContentDiary.module.css";
import Template from "@/components/template/page";

export default function coverContentDiary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Template>
          <div className={css.coverContent}>{children}</div>
        </Template>
      </div>
    </>
  );
}
