import React from "react";
import { Select, Avatar, Typography, Row, Col, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 20,
  });
  // if (isFetching) "loading...";
  console.log(data);
  return <div>News</div>;
};

export default News;
