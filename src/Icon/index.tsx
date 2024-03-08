import React, { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & { listener?: () => void };

export const ArchiveIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        //   onClick={() => listener()}
      >
        <g>
          <path d="M5.5,12h22.9v15.2c0,2.1-1.7,3.8-3.8,3.8H9.4c-2.1,0-3.8-1.7-3.8-3.8V12z" />
          <path
            d="M6.8,3h20.4C29.3,3,31,4.7,31,6.8v3.9c0,0.7-0.6,1.2-1.2,1.2H4.2C3.6,12,3,11.4,3,10.7V6.8C3,4.7,4.7,3,6.8,3z
            "
          />
          <line x1="12.9" y1="17.8" x2="21.1" y2="17.8" />
        </g>
      </svg>
    );
  };

  export const BackArrowIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        onClick={listener}
      >
        <g>
          <path d="M9.9,9l-6.1,6.1c-1.1,1-1.1,2.8-0.1,3.9L9.9,25" />
          <line x1="31" y1="17" x2="3" y2="17" />
        </g>
      </svg>
    );
  };

  export const BlockIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        //   onClick={() => listener()}
      >
        <g>
          <circle cx="17" cy="17" r="14" />
          <line x1="11.5" y1="11.5" x2="22.5" y2="22.5" />
          <line x1="22.5" y1="11.5" x2="11.5" y2="22.5" />
        </g>
      </svg>
    );
  };

  export const DropIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        //   onClick={() => listener()}
      >
        <polyline points="26,12.5 17,21.5 8,12.5 " />
      </svg>
    );
  };
  export const EditIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        //   onClick={() => listener()}
      >
        <g>
          <path d="M6.8,31H3v-3.8l14.3-14.3c1-1,2.7-1,3.8,0l0,0c1,1,1,2.7,0,3.8L6.8,31z" />
          <line x1="14.6" y1="15.6" x2="18.4" y2="19.4" />
          <path d="M26.8,3l-0.6,2.2c-0.2,0.6-0.7,1.1-1.3,1.3l-2.2,0.6" />
          <path d="M22.7,7.2l2.2,0.6C25.5,8,26,8.5,26.2,9.1l0.6,2.2" />
          <path d="M26.8,11.3l0.6-2.2c0.2-0.6,0.7-1.1,1.3-1.3L31,7.2" />
          <path d="M31,7.2l-2.2-0.6c-0.6-0.2-1.1-0.7-1.3-1.3L26.8,3" />
          <path d="M26.8,17.4l-0.6,2.2c-0.2,0.6-0.7,1.1-1.3,1.3l-2.2,0.6" />
          <path d="M22.7,21.6l2.2,0.6c0.6,0.2,1.1,0.7,1.3,1.3l0.6,2.2" />
          <path d="M26.8,25.7l0.6-2.2c0.2-0.6,0.7-1.1,1.3-1.3l2.2-0.6" />
          <path d="M31,21.6l-2.2-0.6c-0.6-0.2-1.1-0.7-1.3-1.3l-0.6-2.2" />
          <path d="M12.4,3l-0.6,2.2c-0.2,0.6-0.7,1.1-1.3,1.3L8.3,7.2" />
          <path d="M8.3,7.2l2.2,0.6c0.6,0.2,1.1,0.7,1.3,1.3l0.6,2.2" />
          <path d="M12.4,11.3l0.6-2.2c0.2-0.6,0.7-1.1,1.3-1.3l2.2-0.6" />
          <path d="M16.6,7.2l-2.2-0.6c-0.6-0.2-1.1-0.7-1.3-1.3L12.4,3" />
        </g>
      </svg>
    );
  };

  export const EditIcon2 = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        onClick={listener}
      >
        <g>
          <path
            d="M31,14.3v7.5c0,1.1-0.4,2.2-1.2,3l-5,5c-0.8,0.8-1.9,1.2-3,1.2H8.3C5.4,31,3,28.6,3,25.7V8.3
            C3,5.4,5.4,3,8.3,3H20"
          />
          <path d="M20.9,31v-7.3c0-1.5,1.3-2.8,2.8-2.8H31" />
          <path d="M10.3,20.4L27,3.7c0.9-0.9,2.4-0.9,3.3,0l0,0c0.9,0.9,0.9,2.4,0,3.3L13.6,23.7" />
          <polyline points="13.6,23.7 10.3,23.7 10.3,20.4 	" />
        </g>
      </svg>
    );
  };

  export const UserIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <circle cx="17" cy="9" r="6" />
          <ellipse cx="17" cy="25" rx="10" ry="6" />
        </g>
      </svg>
    );
  };

  export const PaperIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path
            d="M11.1,3h6.8c1.1,0,2.2,0.5,3.1,1.3l6.7,6.7c0.8,0.8,1.3,1.9,1.3,3.1v11.1c0,3.2-2.6,5.9-5.9,5.9H11.1
          c-3.2,0-5.9-2.6-5.9-5.9V8.9C5.2,5.6,7.8,3,11.1,3z"
          />
          <line x1="22.4" y1="19.5" x2="11.6" y2="19.5" />
          <line x1="18.3" y1="23.9" x2="11.6" y2="23.9" />
          <path d="M17.9,3v8.5c0,1.3,1.1,2.4,2.4,2.4h8.5" />
        </g>
      </svg>
    );
  };
  export const UserMinusIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path d="M3,31v-1.7c0-4.8,3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7V31" />
          <circle cx="11.7" cy="13" r="5.3" />
          <circle cx="24.6" cy="9.4" r="6.4" />
          <line x1="21.1" y1="9.4" x2="28.1" y2="9.4" />
        </g>
      </svg>
    );
  };

  export const UsersArchiveIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path d="M3,31l0-1.4c0-4.6,3.5-8.7,8.1-9c5.1-0.3,9.3,3.7,9.3,8.7V31" />
          <circle cx="11.7" cy="13" r="5.3" />
          <g>
            <g>
              <path d="M20.4,6.7h9.5v5.9c0,1.1-0.9,2-2,2h-5.5c-1.1,0-2-0.9-2-2V6.7z" />
              <path
                d="M22.2,3h6C29.7,3,31,4.3,31,5.8v0c0,0.5-0.4,0.9-0.9,0.9h-9.8c-0.5,0-0.9-0.4-0.9-0.9v0
              C19.3,4.3,20.6,3,22.2,3z"
              />
              <line x1="23.5" y1="9.2" x2="26.9" y2="9.2" />
            </g>
          </g>
        </g>
      </svg>
    );
  };

  export const UsersBlockIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path d="M3,31v-1.7c0-4.8,3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7V31" />
          <circle cx="11.7" cy="13" r="5.3" />
          <circle cx="24.6" cy="9.4" r="6.4" />
          <line x1="22.1" y1="6.9" x2="27.1" y2="11.9" />
          <line x1="27.1" y1="6.9" x2="22.1" y2="11.9" />
        </g>
      </svg>
    );
  };

  export const UsersIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path d="M3,31v-1.7c0-4.8,3.9-8.7,8.7-8.7s8.7,3.9,8.7,8.7V31" />
          <circle cx="11.7" cy="13" r="5.3" />
          <path d="M17.5,17c1.4-1.6,3.5-2.7,5.8-2.7c4.2,0,7.7,3.4,7.7,7.7" />
          <circle cx="23.3" cy="7.6" r="4.6" />
        </g>
      </svg>
    );
  };

  export const EyeIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
        onClick={listener}
      >
        <g>
          <path
            d="M30.8,16.1c0.2,0.6,0.2,1.2,0,1.8c-1.9,5-7.4,8.7-13.9,8.7c-6.4,0-11.8-3.5-13.8-8.4c-0.3-0.7-0.3-1.5,0-2.3
          C5.2,11,10.6,7.5,17,7.5C23.5,7.5,29,11.1,30.8,16.1z"
          />
          <circle cx="17" cy="17" r="3.8" />
        </g>
      </svg>
    );
  };
  export const UserNameIcon = ({ color, width, height, className, listener }: Props) => {
    const st0 = {
      fill: "none",
      stroke: "#21163A",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
    };
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path
            d="M31,16c0,1.3-1,2.4-2.3,2.4c-1.4,5.1-6.1,8.8-11.7,8.8c-5.6,0-10.2-3.7-11.7-8.8C4,18.4,3,17.3,3,16
          c0-1.2,0.9-2.2,2-2.3C5.7,7.7,10.8,3,17,3c6.2,0,11.3,4.7,12,10.7C30.2,13.9,31,14.9,31,16z"
          />
          <line x1="13.3" y1="31" x2="13.3" y2="26.6" />
          <line x1="20.7" y1="31" x2="20.7" y2="26.6" />
          <line  x1="12.4" y1="16" x2="12.4" y2="16" />
          <line x1="21.6" y1="16" x2="21.6" y2="16" />
          <path d="M15.7,7.2c-2.4,3.2-6.2,5.3-10.5,5.3" />
          <path d="M28.7,11.8c-1.4,0.6-2.9,0.9-4.6,0.9c-3.8,0-7.1-1.8-9.3-4.5" />
        </g>
      </svg>
    );
  };

  export const PhoneIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <path
          d="M28.8,20.3l-4-1.6c-1.2-0.5-2.6-0.3-3.5,0.5l-1,0.9c-0.5,0.4-1,0.6-1.6,0.6c-0.7,0-1.3-0.3-1.8-0.8L14,17.1
        c-0.9-0.9-1-2.4-0.1-3.4l0.9-1c0.8-1,1-2.3,0.5-3.5l-1.6-3.9C13.2,3.9,11.9,3,10.5,3H6.3C4.5,3,3,4.5,3,6.3C3,19.9,14.1,31,27.7,31
        c1.8,0,3.3-1.5,3.3-3.3v-4.2C31,22.1,30.1,20.8,28.8,20.3z"
        />
      </svg>
    );
  };

  export const MailIcon = ({ color, width, height, className, listener }: Props) => {
    const st0 = {
      fill: "none",
      stroke: "#21163A",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
    };
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <path d="M28.2,13.8l-9.8,3.6c-0.9,0.3-1.9,0.3-2.7,0l-10-3.6" />
          <path
            d="M27,7H7c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h20c2.2,0,4-1.8,4-4V11C31,8.8,29.2,7,27,7z"
          />
        </g>
      </svg>
    );
  };

  export const GenderIcon = ({ color, width, height, className, listener }: Props) => {
    const st0 = {
      fill: "none",
      stroke: "#21163A",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
    };
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <polyline points="31,11.6 31,3 22.4,3 	" />
          <circle cx="10.5" cy="14.8" r="7.5" />
          <circle cx="19.2" cy="14.8" r="7.5" />
          <line x1="10.5" y1="31" x2="10.5" y2="22.3" />
          <line x1="6.2" y1="26.7" x2="14.9" y2="26.7" />
          <line x1="31" y1="3" x2="24.5" y2="9.5" />
        </g>
      </svg>
    );
  };

  export const BioIcon = ({ color, width, height, className, listener }: Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <polygon points="28.3,14.8 18.4,24.8 18.4,27.5 21,27.5 31,17.5 	" />
          <line x1="31" y1="31" x2="17.3" y2="31" />
          <circle cx="13" cy="9" r="6" />
          <path d="M19,20.2c-1.7-0.7-3.7-1.2-6-1.2c-5.5,0-10,2.7-10,6c0,3.3,4.5,6,10,6" />
        </g>
      </svg>
    );
  };

  export const DateIcon = ({ color, width, height, className, listener }: Props) => {
    const st0 = {
      fill: "none",
      // stroke: "#21163A",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 10,
    };
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        // space="preserve"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <line x1="9.5" y1="8" x2="9.5" y2="3" />
          <line x1="24.5" y1="8" x2="24.5" y2="3" />
          <g>
            <line   x1="10.3" y1="26.5" x2="10.3" y2="26.5" />
            <line   x1="14.8" y1="26.5" x2="14.8" y2="26.5" />
            <line   x1="19.2" y1="26.5" x2="19.2" y2="26.5" />
            <line   x1="23.7" y1="26.5" x2="23.7" y2="26.5" />
            <line   x1="10.3" y1="22.3" x2="10.3" y2="22.3" />
            <line   x1="14.8" y1="22.3" x2="14.8" y2="22.3" />
            <line   x1="19.2" y1="22.3" x2="19.2" y2="22.3" />
            <line   x1="23.7" y1="22.3" x2="23.7" y2="22.3" />
            <line   x1="10.3" y1="18.1" x2="10.3" y2="18.1" />
            <line   x1="14.8" y1="18.1" x2="14.8" y2="18.1" />
            <line   x1="19.2" y1="18.1" x2="19.2" y2="18.1" />
            <line   x1="23.7" y1="18.1" x2="23.7" y2="18.1" />
          </g>
          <path
            d="M26.5,31h-19c-1.7,0-3-1.3-3-3V11c0-1.7,1.3-3,3-3h19c1.7,0,3,1.3,3,3v17C29.5,29.7,28.2,31,26.5,31z"
          />
          <line   x1="4.5" y1="13.6" x2="29.5" y2="13.6" />
        </g>
      </svg>
    );
  };


  export const SearchIcon = ({ color, width, height, className, listener }:Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        onClick={listener}
      >
        <g>
          <circle cx="15.4" cy="15.4" r="12.4" />
          <line x1="31" y1="31" x2="24.2" y2="24.2" />
        </g>
      </svg>
    );
  };

  export const NotificationIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }:Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        x
        <g>
          <path d="M11,26.3c0.7,2.7,3.1,4.7,6,4.7c2.9,0,5.4-2,6-4.7" />
          <path
            d="M25.3,26.1c-0.1,0-0.1,0-0.2,0l-0.4,0l0,0c-5.1,0.4-10.2,0.4-15.3,0h0l-0.4,0c-0.1,0-0.1,0-0.2,0
                  c-2.9-0.5-4.8-3.1-4.5-6l0-0.2l0.9-6l0,0C5.7,7.7,10.8,3,17,3h0c6.2,0,11.3,4.7,11.8,10.9l0,0l0.9,6l0,0.2
                  C30.1,23,28.2,25.6,25.3,26.1z"
          />
        </g>
      </svg>
    );
  };


  export const BrandIcon = ({ width, height, className, listener }:Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 344 64"
        // style={{ enableBackground: "new 0 0 344 64" }}
        // space="preserve"
        width={width}
        height={height}
        className={className}
      //   onClick={() => listener()}
      >
        <g>
          <g>
            <circle fill="#00A184" cx="32" cy="32" r="30" />
            <path
              fill="white"
              d="M42.2,9.7l-2.8,4.7c6.9,2.9,11.7,9.7,11.7,17.6c0,5.2-2,9.8-5.4,13.3c-0.8,0.8-2.1,0.6-2.7-0.3l-3.9-6.5
            c-0.4-0.7-0.4-1.6,0-2.3c0.8-1.4,1.2-3.1,1.1-4.9c-0.4-4.2-4-7.4-8.1-7.4c-0.1,0-0.3,0-0.4,0c-0.8,0-1.6-0.4-2-1.1l-4-6.6
            c-2.4-4-7.9-4.7-11.2-1.4C10.1,19.2,7.5,25.3,7.5,32c0,9.9,5.9,18.4,14.3,22.3l2.8-4.7c-6.9-2.9-11.7-9.7-11.7-17.6
            c0-5.2,2-9.8,5.4-13.3c0.8-0.8,2.1-0.6,2.7,0.3l3.9,6.5c0.4,0.7,0.4,1.6,0,2.3c-0.8,1.4-1.2,3.1-1.1,4.9c0.4,4.1,4,7.4,8.1,7.4
            c0.1,0,0.3,0,0.4,0c0.8,0,1.6,0.4,2,1.1l4,6.6c2.4,4,7.9,4.7,11.1,1.4c4.4-4.4,7-10.5,7-17.2C56.5,22.1,50.7,13.6,42.2,9.7z
             M32,34.7c-1.5,0-2.7-1.2-2.7-2.7s1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7S33.5,34.7,32,34.7z"
            />
          </g>
          <g>
            <path
              fill="#21163A"
              d="M84.3,54.2c-0.6-0.2-1.2-0.5-1.8-1c-0.5-0.4-0.9-0.9-1.2-1.5L81,51.2c0-5.3,0.1-11.1,0.3-17.4
            c0.2-6.2,0.3-11.3,0.4-15.2c0-1.2,0-2.7,0.1-4.6c0-1,0.1-1.7,0.2-2.2c0.1-0.4,0.3-0.7,0.5-0.8c0.2-0.1,0.5-0.1,0.8-0.1H84
            c1,0,1.9,0.4,2.6,1.2c0.8,0.9,1.7,2.8,2.6,5.9c1,3.1,2.3,7.8,4,14.3c1.1,4.1,2.1,7.5,3,10.2c0.9,2.7,1.5,4.1,1.7,4.2
            c0.4-0.1,0.7-1.5,0.9-4.3c0.2-2.8,0.3-5.3,0.4-7.7c0-2.4,0-3.7,0-4c0-4.1-0.1-8.4-0.3-13c-0.1-1.9-0.1-3.3-0.1-4.4
            c0-1.7,0.1-2.6,0.4-2.9c0.3-0.3,0.6-0.4,1-0.4l0.4,0c1.3,0.1,2.3,0.6,2.9,1.6c0.6,0.9,1,2.4,1.1,4.3c0.4,7.2,0.6,13.4,0.6,18.4
            c0,7.2-0.5,12.3-1.4,15.3c-0.8,2.5-2,3.7-3.5,3.7H100c-2.4,0-4.5-1.4-6.3-4.1c-1.8-2.7-3.5-7.1-5.2-13.3l-1.3-4.9l-0.1,1.5
            c-0.1,1.1-0.1,2.8-0.2,5.2c-0.1,2.4-0.2,4.7-0.3,7.1c-0.1,2.4-0.1,4.1-0.2,5.2c0,2-0.1,3.2-0.4,3.7c-0.2,0.4-0.6,0.7-1,0.7
            C84.9,54.4,84.6,54.3,84.3,54.2z"
            />
            <path
              fill="#21163A"
              d="M132.8,53.6c-0.5-0.2-1-0.6-1.5-1.2c-0.6-0.6-1-1.3-1.2-2.2l-0.1-0.3l-0.2,0.1c-0.2,0.1-0.3,0.3-0.5,0.5
            c-2.1,2-4.1,2.9-6.1,2.9c-1.7,0-3.3-0.7-4.8-2.2c-1.2-1.2-2.2-2.5-2.7-3.9c-0.6-1.4-0.9-2.9-0.9-4.3c0-3.4,1-6.3,3-8.7
            c1.8-2.2,4-3.3,6.6-3.5c1.8,0,3.7,0.7,5.5,2.2c0.4,0.3,0.6,0.5,0.7,0.5c0.1,0,0.1-0.2,0.1-0.5c0-0.7,0.1-1.1,0.4-1.4
            s0.6-0.4,1-0.4l0.3,0c1,0.2,1.9,1,2.7,2.5l0.4,0.8l-0.1,3.7c-0.1,1.9-0.2,3.7-0.2,5.4l-0.1,3.6c0,3-0.1,4.8-0.3,5.3
            c-0.2,0.6-0.5,0.9-1,0.9C133.3,53.7,133,53.7,132.8,53.6z M122,46.9c1-0.4,2-1.2,3.2-2.3c1.2-1.1,2.2-2.3,2.9-3.4
            c0.7-1.1,1.1-1.9,1.1-2.4c0-0.1,0-0.2,0-0.3c-0.6-1.1-1.4-1.7-2.4-1.7c-0.2,0-0.4,0-0.7,0.1c-1.3,0.3-2.6,1.1-3.7,2.5
            c-1.5,1.7-2.3,3.8-2.4,6.2c0,0.8,0.1,1.3,0.3,1.4c0.2,0.1,0.4,0.2,0.5,0.2C121.1,47.2,121.5,47.1,122,46.9z"
            />
            <path
              fill="#21163A"
              d="M147.8,53.5c-0.5-0.3-1-0.7-1.4-1.3c-0.4-0.6-0.8-1.3-1-2c-0.1-0.5-0.2-2.7-0.3-6.6
            c-0.1-3.9-0.2-8.3-0.2-13.3c-0.1-5.2-0.1-10.3-0.1-15.3c0-2.5,0-4,0.1-4.3c0.2-0.6,0.6-1,1.2-1l0.2,0c0.6,0.1,1.2,0.5,1.8,1.2
            c0.6,0.7,1,1.5,1.2,2.6c0,0.3,0.1,1.3,0.2,3.1c0.1,1.8,0.1,4,0.2,6.5c0.1,2.5,0.1,4.6,0.2,6.4c0.1,1.8,0.1,2.7,0.1,2.9
            c0,0.2,0.1,0.4,0.1,0.5l1-0.8c2.1-1.6,4.1-2.4,6.1-2.4c3,0,5.3,1.7,7,5c1,2.1,1.5,4.2,1.5,6.2c0,3.1-0.8,5.8-2.3,8
            c-0.9,1.3-1.9,2.4-3.1,3.1c-1.2,0.7-2.4,1.1-3.8,1.1c-2,0-4-1.2-5.8-3.5l-0.3-0.3l-0.1,1.6c0,2-0.5,2.9-1.5,2.9
            C148.5,53.8,148.2,53.7,147.8,53.5z M156.2,45.8c3-1.6,4.5-4.2,4.5-7.7c-0.1-1.4-0.8-2-2-2c-1.1,0-2.4,0.5-3.8,1.4
            c-1.4,0.9-2.6,2.2-3.7,3.8c-0.2,0.4-0.4,0.6-0.4,0.8c0,0.2,0.1,0.3,0.2,0.5c0.1,0.2,0.5,0.7,1,1.4c0.9,1.2,1.6,1.9,1.9,2.1
            c0.3,0.1,0.6,0.2,0.8,0.2C155.1,46.2,155.6,46.1,156.2,45.8z"
            />
            <path
              fill="#21163A"
              d="M177.6,53.9c-0.6-0.3-1.2-0.9-1.8-1.6c-0.5-0.8-0.9-1.6-1-2.4c-0.2-1.7-0.4-8.4-0.5-20c0-3.6-0.1-6.9-0.1-9.8
            c0-5.6,0-8.7,0.1-9.4c0.2-0.7,0.4-1,0.7-1h0.5c0.6,0,1.1,0.2,1.7,0.7c0.6,0.5,1.1,1.2,1.4,2.1c0.1,0.3,0.2,0.6,0.3,0.9
            c0.2,1,0.2,4.1,0.2,9.4c0,5.1,0,8.2,0.1,9.3l0.1,1.1l0.7-0.9c1.7-2,3.5-3,5.5-3c2.2,0,4.2,1.1,6,3.2c1.9,2.4,3.1,5.6,3.5,9.6
            c0.2,2,0.3,3.6,0.3,4.9c0,1,0,2-0.1,3c-0.2,2.1-0.6,3.3-1.3,3.7c-0.3,0.1-0.6,0.2-0.8,0.2c-0.5,0-0.9-0.2-1.3-0.5
            c-0.6-0.5-1.2-1.3-1.5-2.4c-0.5-1.2-0.7-2.7-0.7-4.3c0-0.5,0-1,0.1-1.6c0.1-1.3,0.2-2.4,0.2-3.5c0-1.3-0.1-2.3-0.3-3.2
            c-0.3-1.6-0.9-2.4-1.7-2.4c-1.8,0.2-3.4,1.7-4.8,4.7c-1.4,3-2.4,6.7-2.8,11.2c-0.1,1.5-0.6,2.3-1.5,2.3
            C178.4,54.2,178.1,54.1,177.6,53.9z"
            />
            <path
              fill="#21163A"
              d="M210.2,53.1c-2.3-0.9-4-2.4-5.3-4.7c-1.2-2.3-1.8-4.8-1.8-7.7c0-1.8,0.3-3.6,0.9-5.4c0.6-1.8,1.5-3.4,2.7-4.8
            c0.7-0.9,1.7-1.3,3-1.3c1.3,0,2.9,0.5,4.9,1.4c1.7,0.9,3.1,2.1,4,3.7c1.2,2.2,1.7,4.6,1.7,7.1c0,0.8-0.1,1.6-0.2,2.4
            c-0.4,3.1-1.5,5.6-3.1,7.5c-0.9,0.9-1.7,1.5-2.5,1.8c-0.8,0.2-1.5,0.4-2,0.4C211.7,53.5,211,53.4,210.2,53.1z M211.6,46.4
            c1-0.6,1.9-1.8,2.7-3.3c0.7-1.6,1.1-3.2,1.1-4.9v-0.3c0-0.3,0-0.6-0.1-0.8c-0.1-0.2-0.3-0.4-0.7-0.6c-0.4-0.2-1-0.4-1.8-0.6
            l-1.7-0.5l-0.3,0.4c-0.9,1.1-1.6,2.3-2,3.5c-0.5,1.4-0.7,2.7-0.7,3.8c0,1.4,0.3,2.5,0.9,3.2c0.3,0.4,0.7,0.6,1.2,0.6
            C210.5,46.8,211,46.7,211.6,46.4z"
            />
            <path
              fill="#21163A"
              d="M232.3,54.1c-0.7-0.3-1.3-0.8-1.9-1.6c-0.6-0.8-0.9-1.6-1.1-2.5c0-0.4-0.1-1.6-0.1-3.6c0-2-0.1-3.9-0.1-5.8
            c0-1.9,0-3.4,0-4.5c0-3.9,0-6,0.1-6.2c0.3-0.6,0.7-0.9,1.2-0.9c0.3,0,0.6,0.1,1,0.3c1,0.6,1.9,1.6,2.4,3c0,0.1,0,0.1,0.1,0.1
            c0.1,0,0.3-0.2,0.8-0.6c1.4-1.2,2.7-1.8,3.9-1.8c1.2,0,2.5,0.6,3.6,1.8c1,1.1,1.7,2,1.9,2.8c0.2,0.8,0.4,1.4,0.4,1.9
            c0,0.4-0.1,0.8-0.2,1.1c-0.2,0.5-0.6,0.7-1.1,0.7c-0.5,0-1.2-0.4-2.1-1.1l-0.7-0.6c-3.6,2.3-5.5,7-5.8,14.3c0,1.7-0.2,2.7-0.4,3.1
            c-0.3,0.4-0.6,0.5-0.9,0.5C233,54.3,232.7,54.3,232.3,54.1z"
            />
            <path
              fill="#21163A"
              d="M260.2,54c-1.7-0.4-3.2-1.1-4.4-2.1c-1.8-1.5-3-3.5-3.7-5.8c-0.3-1.2-0.5-2.5-0.5-3.7c0-2,0.4-4,1.3-6
            c1.1-2.5,3-4.5,5.6-5.9c1.4-0.7,2.6-1,3.8-1c0.3,0,0.6,0,0.8,0.1c1.5,0.2,2.7,0.7,3.8,1.6c1.8,1.6,2.7,3.5,2.7,5.8l0,0.9
            c-0.2,2-1.4,3.8-3.6,5.3c-1.5,1-2.8,1.5-3.9,1.6c-1,0.1-1.7,0.2-2.1,0.2c-1.3,0-2.3-0.3-3.1-0.8l-0.4-0.3
            c-0.1,0.6-0.1,1.1-0.1,1.4c0,1.7,0.8,2.5,2.4,2.5c1.3,0,3-0.5,5.2-1.6c1.5-0.8,2.4-1.1,2.7-1.1h0.5c0.6,0,1.2,0.3,1.8,1
            c0.9,1,1.3,1.9,1.3,2.8c0,0.7-0.3,1.4-0.9,2c-2.5,2.4-5,3.6-7.4,3.6C261.4,54.2,260.8,54.1,260.2,54z M259.9,39.4
            c1-0.3,2-0.7,2.8-1.4c0.9-0.6,1.5-1.3,1.9-2l0.1-0.1c0.2-0.3,0.3-0.6,0.3-0.7c0-0.1-0.1-0.1-0.4-0.1c-1,0-2.1,0.3-3.2,1
            c-1.1,0.7-2.1,1.6-2.9,2.7c-0.3,0.4-0.4,0.6-0.4,0.7c0,0.1,0.1,0.1,0.2,0.1C258.6,39.8,259.1,39.7,259.9,39.4z"
            />
            <path
              fill="#21163A"
              d="M282.2,53.6c-1.1-0.7-1.8-1.8-2.2-3.3c-0.2-0.9-0.3-3.2-0.5-7c-0.1-3.8-0.2-7.4-0.2-10.7
            c0-3.3-0.1-5.8-0.1-7.6c0-8.2,0.1-12.8,0.4-14c0.3-0.8,0.7-1.3,1.3-1.3c0.2,0,0.5,0.1,0.8,0.2c0.9,0.5,1.6,1.5,2.1,3.1
            c0.2,1,0.4,3.4,0.5,7.1c0.2,3.7,0.3,7.9,0.4,12.6c0.1,4.6,0.2,8.8,0.2,12.5s-0.1,6.1-0.2,7c-0.2,1-0.7,1.5-1.4,1.5
            C282.9,53.9,282.6,53.8,282.2,53.6z"
            />
            <path
              fill="#21163A"
              d="M312,53.6c-0.5-0.2-1-0.6-1.5-1.2c-0.6-0.6-1-1.3-1.2-2.2l-0.1-0.3l-0.2,0.1c-0.2,0.1-0.3,0.3-0.5,0.5
            c-2.1,2-4.1,2.9-6.1,2.9c-1.7,0-3.3-0.7-4.8-2.2c-1.2-1.2-2.2-2.5-2.7-3.9c-0.6-1.4-0.9-2.9-0.9-4.3c0-3.4,1-6.3,3-8.7
            c1.8-2.2,4-3.3,6.6-3.5c1.8,0,3.7,0.7,5.5,2.2c0.4,0.3,0.6,0.5,0.7,0.5c0.1,0,0.1-0.2,0.1-0.5c0-0.7,0.1-1.1,0.4-1.4
            s0.6-0.4,1-0.4l0.3,0c1,0.2,1.9,1,2.7,2.5l0.4,0.8l-0.1,3.7c-0.1,1.9-0.2,3.7-0.2,5.4l-0.1,3.6c0,3-0.1,4.8-0.3,5.3
            c-0.2,0.6-0.5,0.9-1,0.9C312.5,53.7,312.2,53.7,312,53.6z M301.2,46.9c1-0.4,2-1.2,3.2-2.3c1.2-1.1,2.2-2.3,2.9-3.4
            c0.7-1.1,1.1-1.9,1.1-2.4c0-0.1,0-0.2,0-0.3c-0.6-1.1-1.4-1.7-2.4-1.7c-0.2,0-0.4,0-0.7,0.1c-1.3,0.3-2.6,1.1-3.7,2.5
            c-1.5,1.7-2.3,3.8-2.4,6.2c0,0.8,0.1,1.3,0.3,1.4c0.2,0.1,0.4,0.2,0.5,0.2C300.3,47.2,300.7,47.1,301.2,46.9z"
            />
            <path
              fill="#21163A"
              d="M339.1,53.8c-0.9-0.5-1.6-1.3-2.2-2.4l-0.5-0.9c-0.1-7-0.2-10.8-0.3-11.3c-0.1-0.6-0.2-1.1-0.3-1.4
            c-0.1-0.3-0.2-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.5,0.2c-1.6,0.8-2.8,2.3-3.7,4.4c-0.9,2.2-1.4,4.8-1.5,7.8c0,1.8-0.2,2.9-0.5,3.3
            c-0.3,0.4-0.6,0.6-0.9,0.6c-0.3,0-0.8-0.1-1.3-0.4c-0.9-0.4-1.6-1-2-1.7c-0.4-0.8-0.8-2.1-1-4.1c-0.2-2-0.4-4.9-0.5-8.9
            c-0.1-1.5-0.1-2.8-0.1-3.8c0-1,0-1.7-0.1-2.1c0-0.4,0-0.7,0-1c0-0.6,0-1,0.1-1.1c0-0.1,0.1-0.2,0.1-0.3c0.3-0.4,0.6-0.5,1.1-0.5
            c0.2,0,0.3,0,0.5,0.1c0.6,0.2,1.3,0.5,1.9,1.1c0.6,0.6,1,1.3,1.2,2.1c0.1,0.3,0.1,0.5,0.2,0.5h0.1c0.1,0,0.2-0.1,0.4-0.3
            c1.5-1.6,3.1-2.3,4.6-2.3c0.2,0,0.4,0,0.6,0.1c2.4,0.4,4.3,2.2,5.8,5.4c1.4,2.9,2,6.5,2,10.8c0,3.4-0.2,5.5-0.5,6.2
            c-0.3,0.7-0.7,1-1.1,1C340,54.2,339.5,54.1,339.1,53.8z"
            />
          </g>
        </g>
      </svg>
    );
  };

  export const DashboardIcon = ({
    color,
    width,
    height,
    className,
    listener,
  }:Props) => {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 34 34"
        fill={color}
        width={width}
        height={height}
        className={className}
        onClick={listener}
      >
        <g>
          <path d="M13.1,11.3H4c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h9.1c0.6,0,1,0.4,1,1v6.3C14.1,10.8,13.7,11.3,13.1,11.3z" />
          <path d="M30,18.9H19.1c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1H30c0.6,0,1,0.4,1,1v13.9C31,18.5,30.6,18.9,30,18.9z" />
          <path d="M30,31H19.1c-0.6,0-1-0.4-1-1v-6.3c0-0.6,0.4-1,1-1H30c0.6,0,1,0.4,1,1V30C31,30.6,30.6,31,30,31z" />
          <path d="M13.1,31H4c-0.6,0-1-0.4-1-1V16.1c0-0.6,0.4-1,1-1h9.1c0.6,0,1,0.4,1,1V30C14.1,30.6,13.7,31,13.1,31z" />
        </g>
      </svg>
    );
  };
