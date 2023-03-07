# To Do List

## 목적

To Do List를 작성하는 프로그램입니다. 리액트 실습 프로젝트를 하기 위한 목적으로 구현하게 되었습니다.

## 주요 기능

1. To Do List를 입력합니다.
2. 입력 후 enter key 또는 Add 버튼을 클릭하면 리스트가 생성됩니다.
3. 완료한 항목은 check box를 클릭합니다.
4. 완료된 항목은 completed로 완료되지 않은 항목은 Active로 필터링 됩니다.
5. trash 버튼을 클릭하면 해당 리스트가 삭제됩니다.
6. 좌측 상단에 달버튼을 클릭하게 되면 Dark Mode로의 전환이 가능합니다.
7. 좌측 상단에 태양버튼을 클릭하게 되면 Light Mode로의 전환이 가능합니다.
8. 페이지를 새로고침하여도 추가한 리스트가 그대로 유지됩니다.
9. 페이지를 새로고침하여도 모드(다크모드, 라이트모드)는 그대로 유지됩니다.

![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/92011224/223333972-cf106da7-8f81-40a1-934a-9684d817495d.gif)

## 사용 기술

React, Post CSS

## 배운 점

- Post CSS를 사용해 모듈별로 css를 관리: 유지보수에 편의 + 클래스 작명에 대한 고민을 안 해도 됨
- React 라이브러리와 JSX 문법에 대한 이해
- context api를 이용해 다크모드 기능을 추가
- useState를 이용한 배열 상태 업데이트
- props를 이용해 부모 컴포넌트와 상태를 공유하며 filtering
- uncontrolled form을 controlled form으로 관리
- local storage에 있는 데이터를 읽고 저장

## 어려운 점

- context api 사용법
- useState 훅을 이용한 복잡한 상태관리
- local storage에서 데이터 관리

## 더 공부할 점

네트워크 통신을 요구하는 리액트 공부
