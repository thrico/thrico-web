import React from "react";
import { getCurrency } from "../../../graphql/actions/organization";

const Currency = () => {
  const { data, loading } = getCurrency();
  return data?.getCurrency?.symbol;
};

export default Currency;
