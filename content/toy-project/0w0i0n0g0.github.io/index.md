---
emoji: 💝
title: 깃허브 블로그 제작
date: '2024-07-02 00:00:00'
author: 0w0i0n0g0
tags: react blog github-pages gatsby
categories: toy-project
---

See this project on Github 👉 <a href="https://github.com/0w0i0n0g0/0w0i0n0g0.github.io" target="_blank" rel="noreferrer noopener">Link</a>

## 📚 개요

- 깃허브 블로그 제작

- 1차 : 2022/4/19 ~ 2023/5/8

- 2차 : 2022/7/2 ~ 2024/7/8

## 🏁 제작 동기

여러 토이 프로젝트를 하면서 기록을 남길 곳이 필요해져서 블로그를 만드려고 이것저것 찾아보았다.

티스토리나 velog 등 여러가지 선택지가 있었지만 결국 직접 커스텀해서 만들지 못한다면 나중에 마음에 안들어서 후회할 것 같아서 직접 만드는 쪽을 선택하게 되었다.

## ⚙️ 나만의 블로그를 만들자!

개발자라면 Github 계정이 다 있어서 Github에서 제공하는 GitHub Pages 기능을 이용하여 블로그를 많이 운영한다.

GitHub Pages는 정적 웹사이트를 호스팅해주어서, 보통 정적 웹사이트를 빌드할 수 있는 Jekyll이나 Gatsby로 블로그를 만들어서 배포한다.

그런데 처음부터 모든 걸 만드려면 시간이 너무 오래 걸리기 때문에 여러 스타터 블로그 템플릿을 찾아보았고, 그 중에서 제일 마음에 들었던 `zoomkoding-gatsby-blog`를 기반으로 블로그를 만들기로 했다.

하지만 여러가지 마음에 안드는 부분이 많아서, 여기에 필요한 기능들을 직접 추가해가면서 내 마음에 쏙 드는 블로그를 만들어보도록 하자!

## 1️⃣ 1️차 제작기

### Scroll to Top 컴포넌트 추가

가장 아쉬웠던 점은 긴 글을 보여주는 웹사이트에 필수적인 '맨 위로 가기 버튼'이 없었던 것이다.

가장 핵심 로직은 Scroll to Top 버튼을 만들어서, 버튼이 클릭되면 `window.scrollTo({top: 0, left: 0, behavior: 'smooth'})`를 실행해주기만 하면 된다.

오히려 이 버튼에 다크모드 디자인 같은 걸 맞추는게 더 오래 걸렸다...

### Like 버튼 추가

블로그 글에 좋아요를 남기는 기능이 없었다.

Like 버튼을 누르면 좋아요 수가 늘어나고, 예쁜 폭죽이 터지도록 해보자.

좋아요 버튼은 각 포스트 글의 footer에 들어가면 되기 때문에 해당 컴포넌트에 추가적으로 좋아요 버튼을 디자인해서 집어 넣었다.

좋아요 수는 무료 counter api에 블로그 주소와 포스트 주소 문자열을 합치고 뒤에 `-like`를 붙여서 관리한다.

State를 잘 설정해서 좋아요 버튼은 그 페이지에서 한 번만 클릭할 수 있도록 할 수 있고, 눌러서 좋아요 수가 늘어나면 새로 좋아요 수를 받아오는 것까지 구현했다.

폭죽은 `react-canvas-confetti` 패키지에서 간단하게 불러와서, 좋아요 수가 정상적으로 증가하면 좋아요 버튼의 y 좌표에서 터지도록 설정했다.

### 페이지 뷰 횟수 기능 추가

이것도 무료 counter api에 블로그 주소와 포스트 주소 문자열을 합쳐서 관리하고, 페이지를 로딩할 때마다 증가하도록 호출해서 페이지 뷰 횟수 기능을 추가했다.

### TOC highlight 기능 추가

TOC는 자동으로 너무 예쁘게 생성되는데, TOC의 기본 기능인 현재 어디를 읽고 있는지 보여주는 기능이 없었다.

이를 추가하기 위해, 스크롤 이벤트를 받아와서 일정 길이 이상 스크롤 될 때마다 어디를 읽고 있는지 확인해서 TOC에 해당되는 제목의 스타일을 변경해주는 방식으로 구현했다.

### 소소한 변경 사항들

- 기본 폰트를 Pretendard-Regular로 변경.

- 이모지에 TossFace가 적용되도록 설정.

- usehooks-ts 라이브러리 적용.

- 영문으로 적힌 버튼들을 한글로 변경.

- bio 컴포넌트 디자인 변경.

- Github 자체 CDN 대신 jsdelivr CDN을 활용하여 더 빠른 속도 보장.
    - gatsby-config.js에서 assetPrefix를 `https://cdn.jsdelivr.net/gh/0w0i0n0g0/0w0i0n0g0.github.io@gh-pages`로 적용.

- Source Map 제거.
    - gatsby-plugin-no-sourcemaps 플러그인 적용.

- 블로그 footer에 저작권 표시.

## 2️⃣ 2차 제작기

### Sticky Header로 변경

- 이에 따른 사이드 이펙트 수정.
    - TOC에서 읽는 부분 계산하는 로직 업데이트
    - `let absoluteY = window.scrollY + forEach.getBoundingClientRect().top - 60; // 헤더에 가려지는 부분을 -60으로 제외.`

    - TOC에서 클릭하여 해당 부분으로 이동 시 상단 헤더 영역 마진 설정.
    - `scroll-margin-top: 80px;  scroll-snap-margin-top: 80px;`로 여유 공간 확보.

### TOC 자동 스크롤 기능 추가

### 커스텀 도메인 적용

### 소소한 변경 사항

- 버튼 클릭 시 새 창에서 열리도록 설정.
    - 버튼에는 onClick과 window.open 활용.
    - 마크다운 속 a 태그에는 `target="_blank" rel="noreferrer noopener"`를 적용.

- 헤더의 홈 부분을 로고 이미지로 변경.
    - base64로 인코딩한 이미지로 하드코딩하여 최적화.

- 글의 info 부분 날짜 표기 형식 변경.
    - GraphQL에서 날짜를 ```date(formatString: "YYYY/MM/DD")```로 퀴리.

- 이미지 lazy loading 시 배경 색 투명 설정.

```toc

```