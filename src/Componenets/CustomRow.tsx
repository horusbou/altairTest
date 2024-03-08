import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  description: string;
  containerStyle: string;
  textStyle: string;
  listener: () => void;
  underStyle: string;
  underTitle: string;
}
function CustomRow({
  children,
  description,
  containerStyle,
  textStyle,
  listener,
  underTitle,
  underStyle,
}: Partial<Props>) {
  return (
    <div onClick={listener} className={`flex items-center ${containerStyle}`}>
      {children}
      <p className={textStyle}>
        {description}
        <br />
        {underTitle && <span className={underStyle}>{underTitle}</span>}
      </p>
    </div>
  );
}

export default CustomRow;
