# SVG 1주차

#### 들어가기 전
이번에 재밌어보여서 시작했던 SVG 스터디에 학교 캠프가 겹쳤다는 핑계로 너무 공부를 안했던것 같다. SVG 스터디를 처음에 한다고 했을 때 먼저 책을 보면 잘 나와있을까 해서 책을 구매하려고 하니 책이 거의 없고 있어도 영문버전의 책이더라 내가 읽지 못하였다. 결국 구글링을 통해 공부해는데 한국어로 번역된 것들이 거의 없고 거의 다 영문서라 내가 읽기가 힘들었다. 그래서 이번 스터디를 통해 SVG뿐만 아니라 영어 공부도 동시에 해야할 것 같다.

#### SVG란
SVG(Scable Vector Graphic)는 2차원의 벡터 그래픽을 기술하기 위한 XML 마크업 언어이다.

웹에서 사용되는 SVG는 Canvas와 많이 비교되는데 MDN에서 말하는 SVG와 Canvas의 차이는 다음과 같다

- SVG는 W3C 권고이다.(표준이다)
- Flash는 바이너리 형식, SVG는 XML 기반 포맷
- SVG는 CSS, DOM, SMIL과 다른 W3C 표준들과 함께 작업하는 것을 고려해서 설계되었다
- SVG는 DOM이 존재하지만 Canvas는 존재하지 않음
- SVG는 이미지가 복잡해질수록 성능이 저하되고
  Canvas는 해상도가 높을수록 성능이 저하된다.


그렇다고 합니다.

### 기본적인 도형들
rect(사각형)
- x : rect 왼쪽 위 모서리의 x 위치
- y : rect 왼쪽 위 모서리의 y 위치
- width : rect의 넓이
- height : rect의 높이
- rx : 사각형 모서리 x 반경(아마 border-radius인데 x값만 늘려주는것 같다)
- ry : 사각형 모서리 y 반경(아마 border-radius인데 y값만 늘려주는것 같다)

circle(원)
- cx : 원의 중심의 x위치
- cy : 원의 중심의 y위치

line(선)
- x1 ,y1 : line의 시작 좌표 (x1, y1)
- x2 ,y2 : line의 끝 좌표 (x2, y2)

ellipse(타원)
- rx : ellipse의 x 반경 (너비를 말하는 듯)
- ry : ellipse의 y 반경 (높이를 말하는 듯)
- cx,cy : ellipse 중심의 위치 (cx, cy)

polyline(점렬을 이어 만든 선)
- points : 선의 좌표를 여러개 찍어 선을 그려낸다

polygon(다각형)
- points : 선의 좌표를 여러개 찍어 도형을 그려낸다

path(path를 통해서는 다양한 도형들을 그려낼수있다.)
- path가 SVG에서 가장 일반적으로 사용될 것 이라고한다

### 2주차에 공부할 것
- MDN SVG Tutorial 적어도 Path 챕터부터  Clipping and masking 챕터까지 영문서로 읽고 정리하기
- Path에 대해 정확히 이해하기 (Path가 제일 이해 안됨...)
-https://svgontheweb.com/ 영문서로 읽고 번역한 후 내가 번역한 것과 https://svgontheweb.com/ko/ 와 비교해보기
- SVG로 캐릭터 그려보기

### Reference
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial
- https://msdn.microsoft.com/ko-kr/library/gg193983(v=vs.85).aspx
- http://cyberx.tistory.com/19

### My code
http://codepen.io/river-stone-jin/pen/QdNGGX
