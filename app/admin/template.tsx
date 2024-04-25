import React from "react";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
interface TemplateProps {
  children: React.ReactNode;
}
const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <SubHeader />
      {children}
    </div>
  );
};

export default Template;
