import React from "react";
//https://material.io/tools/icons/?icon=alarm_add&style=round
export const IconInfo = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>;
};

export const IconWarning = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>;
};

export const IconError = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
  </svg>;
};

export const IconOk = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>

    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
  </svg>;
};

export const IconClear2 = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 512 512" style={props.style}>
    <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
  </svg>;
};

export const IconClear = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
    <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
};

export const IconArrowLeft = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
  </svg>;
};

export const IconArrowRight = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>;
};

export const IconArrowDown = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>

    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  </svg>;
};

//wrong
export const IconStar = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
  </svg>;
};

export const IconStarBorder = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
  </svg>;
};

export const IconStarHalf = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
  </svg>;
};

export const IconChecked = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>

  </svg>;
};

export const IconUnChecked = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </svg>;
};

export const IconRadioUnChecked = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>;
};

export const IconRadioChecked = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    <circle
        cx="12" cy="12" r="5"/>
  </svg>;
};

export const IconList = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              aria-hidden="true"
              viewBox="0 0 24 24" style={props.style}>
    <path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
  </svg>;
};

export const IconSearch = (props) => {
  return <svg className="svg icon" xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              aria-hidden="true"
              viewBox="0 0 24 24" style={props.style}>
    <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>;
};



