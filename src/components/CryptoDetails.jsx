import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { MoneyCollectOutlined } from "@ant-design/icons/lib/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  console.log("coinId :>> ", coinId);
  return <div>CryptoDetails</div>;
};

export default CryptoDetails;
