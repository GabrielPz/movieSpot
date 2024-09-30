"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${16}px;
  }

  body{
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .swiper-button-next, .swiper-button-prev::prev {
    color: #ffffff;
  }
  .swiper-button-next, .swiper-button-prev::after {
    color: #ffffff;
    opacity: 0.5;
  }
  .swiper-button-next, .swiper-button-prev::after:hover {
      opacity: 1;
  }
`;
