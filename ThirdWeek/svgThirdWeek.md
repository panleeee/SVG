## SVG Tutorials Paths

Along either of those circles there are two possible paths that you can take to connect the points, so in any situation there are four possible arcs available.
이 둘 중 하나를 따라 점을 연결하기 위해서 가능한 경로는 두 개가 있으므로, 어떠한 상황에서도 4개의 호가 가능합니다.

Because of that, arcs have to take in quite a few arguments:
그것 때문에 호는 몇 개의 인자가 필요합니다.

At its start, the arc element takes in two arguments for the x-radius and y-radius.
처음에 시작할 때, 호 요소는 x반지름과 y반지름을 위해 두 개의 인자가 필요합니다.

If you need to, look up ellipses to see how they behave.
필요하다면, 타원형이 어떻게 작동하는지 보십시오.

The third parameter describes the rotation of the arc.
세 번째 파라미터는 호의 회전을 묘사합니다.

This is best explained with an example:
이것이 예시와 함께 설명된 가장 좋은 예입니다.

The example shows a path element that goes diagonally across the page.
예시는 페이지를 가로 질러 대각선으로 이동하는 path요소를 보여줍니다.

At its center, two elliptical arcs have been cut out (x radius = 30, y radius = 50).
그것의 중심에서 두 개의 타원의 호가 잘려졌습니다 (x반지름 = 30, y반지름 = 50).

In the first one, the x-axis-rotation has been left at 0, so the ellipse that the arc travels around (shown in gray) is oriented straight up and down.
첫 번째 에서는 x축 회전이 0으로 남아있으므로, 호가 이동하는 타원(회색으로 표시된 것)이 위아래로 똑바로 향할 수 있게 됩니다.

For the second arc, though, the x-axis-rotation is set to -45 degrees.
두 번째 호의 경우에는 x축 회전이 -45도로 설정됩니다.

This rotates the ellipse so that it is aligned with its minor axis along the path direction, as shown by the second ellipse in the example image.
그것은 타원을 회전시켜 예제 이미지의 두 번째 타원에 표시된 것 처럼 경로 방향을 따라 보조 축과 정렬됩니다.

#### reference
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
