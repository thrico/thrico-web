"use client";

import React from "react";
import { Skeleton, Card } from "antd";

const { Meta } = Card;

export default function LoadingProfileSkeleton() {
  return (
    <Card
      style={{
        width: "90%",
        marginBottom: 20,
      }}
      cover={
        <div
          style={{ position: "relative", height: 80, background: "#f0f0f0" }}
        >
          <Skeleton.Avatar
            active={true}
            size={96}
            style={{
              position: "absolute",
              left: "50%",
              bottom: -48,
              transform: "translateX(-50%)",
              border: "4px solid #fff",
              borderRadius: "50%",
            }}
          />
        </div>
      }
    >
      <div style={{ marginTop: 48, textAlign: "center" }}>
        <Skeleton active paragraph={false} />
        <Skeleton.Input
          style={{ width: "100%", marginTop: 16 }}
          active
          size="small"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Skeleton.Avatar active size="small" style={{ marginRight: 8 }} />
          <Skeleton.Input style={{ width: "100%" }} active size="small" />
        </div>

        <Skeleton.Button
          active
          size="large"
          style={{ width: "100%", marginTop: 16, borderRadius: 20 }}
        />
      </div>
    </Card>
  );
}
