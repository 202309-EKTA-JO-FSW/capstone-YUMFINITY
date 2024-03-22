"use client";
import React, { useEffect, useState } from "react";

const Hello = () => {
  const [testResult, setTestResult] = useState("");

  useEffect(() => {
    fetch("https://capstone-room-5.onrender.com/test")
      .then((res) => res.json())
      .then((data) => {
        setTestResult(data);
      });
  }, []);

  return <div>{testResult}</div>;
};

export default Hello;
