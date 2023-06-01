# React 상태관리 라이브러리 정리
React에서 많은 프로젝트들은 주로 Redux를 사용을 했습니다.
하지만 시간이 지나고 다양한 상태관리 라이브러리가 나오고 이를 사용하는 방법과 장단점을 알아보겠습니다.
# React의 상태관리 라이브러리 종류
많이 사용하는 라이브러리는 크게 5가지가 있습니다.
1. redux
2. redux-saga
3. zustand
4. jotai
5. recoil

이 5가지를 하나하나 알아보고 사용하는 방법을 알아보도록 하겠습니다.

# react 상태관리 비교

|비교|redux|redux-toolkit|zustand|jotai|recoil|
|:---|:---|:---|:---|:---|:---|
|깃허브 start 개수|15.4k|9.5k|31.4k|13.5k|18.8k|
|라이브러리 사이즈|176kb|12.9 MB|283 kB|381 kB|2.21 MB|

위에서 간단하게만 비교를 해봤는데
결론부터 말하자면 저는 zustand나 zotai를 사용하는걸 추천드립니다.

하지만 여기서는 모든 라이브러리의 사용법을 알아보도록 하겠습니다.

## 번외 : zustand vs zotai
위에서 제가 추천한 라이브러리 2가지를 비교해보겠습니다.
- jotai를 사용해야하는 경우
  - useState + useContext를 대체하는 경우
  - code splitting이 중요한 경우
  - react supense를 활용을 해야하는 경우
- zustand
  - react 이외에서도 사용해야하는 경우
  - redux devtools를 좋아하는 경우

