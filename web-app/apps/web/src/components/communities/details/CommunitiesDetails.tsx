"use client";
import React from "react";
import { Layout, Menu, Typography } from "antd";

import WebSiteContainer from "@/Layout/WebsiteContainer";

import { getCommunityDetails } from "@/graphql/actions/communities";
import HeroSection from "./HeroSection";
import { error } from "console";
import NotFound from "@/components/error/NoFound";
import CommunitiesMenu from "./Menu";

const { Content } = Layout;

export default function CommunityPage({ children, slug }) {
  const { data, error } = getCommunityDetails({
    variables: {
      input: {
        id: slug,
      },
    },
  });

  return (
    <WebSiteContainer>
      {error && !data?.getCommunityDetails && <NotFound />}
      {data?.getCommunityDetails && (
        <>
          <HeroSection data={data?.getCommunityDetails} slug={slug} />
          <Layout
            style={{
              background: "transparent",
              marginTop: "24px",
              position: "relative",
            }}
          >
            <CommunitiesMenu slug={slug} />

            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </>
      )}
    </WebSiteContainer>
  );
}
