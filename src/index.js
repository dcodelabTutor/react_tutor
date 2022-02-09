import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
  SSR (Server Side Rendering)
  -- index.html, sub1.html, sub2.html
  -- 메뉴 링크를 클릭할때마다 브라우저가 서버에 각각의 html파일들을 요청해서 화면 렌더링
  -- 초기 로딩속도가 빠름 (장점)
  -- 페이지 이동시 화면이 깜박이면서 서브 페이지를 서버쪽에서 요청 (단점)
  -- 페이지 이동시 화면에서 변경될 필요가 없는 공통 영역까지 모조리 변경함 (단점)

  CSR (Clinet Side Rendering) SPA (Single Page Application)
  -- index.html
  -- 모든 컴포넌트들을 JSX 자바스크립트 파일 형태로 초기 로딩시 모두 불러옴
  -- 초기 로딩속도가 느림 (단점)
  -- 메뉴 이동시 부드럽게 실시간으로 서브 컨텐츠를 보여줌, 서버쪽 요청없이 (장점)
  -- 메뉴 이동시 변경될 부분만 실시간으로 바꿔치기 (장점)
  -- 뭔가 화면의 변화점이 많은 동적인 UI구현할때에는 속도가 빠름

  DOM (Document Object Model)
  --HTML, CSS 문법들을 브라우저가 해석을 해서 자바스크립트가 제어 가능한 객체형태로 변환해서 화면에 출력하는 요소

  Real DOM 
  --HTML 파일에 입력 내용을 토대로 화면에 출력된 DOM

  Virtual DOM
  --JSX를 통해 실제 브라우저에 real DOM형태로 출력되기전 메모리상에서 빠르게 만들어지는 가상의 DOM

  JSX 
  --HTML태그는 아니지만 자바스크립트 VirtualDOM을 손쉽게 만들기 위한 문법체계

  React의 Virtual DOM방식이 Real DOM 방식보다 효율적인 이유 (React 프론트엔드 개발 효율적인 이유)
*/

