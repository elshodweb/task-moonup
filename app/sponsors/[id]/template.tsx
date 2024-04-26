"use client";
import React from "react";
import Header from "../../components/header";

interface TemplateProps {
  children: React.ReactNode;
}
const template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default template;
