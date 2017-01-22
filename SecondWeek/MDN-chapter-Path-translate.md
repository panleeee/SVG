# MDN SVG Tutorial chapter Paths

The <path> element is the most powerful element in the SVG library of basic shapes.
<패스>요소는 기본 도형의 SVG라이브러리 중 가장 강력한 요소입니다.

You can use it to create lines, curves, arcs and more.
당신은 그것을 선, 곡선, 원 등을 만드는데 사용할 수 있습니다.

Paths create complex shapes by combining multiple straight lines or curved lines.
패스는 많은 직선이나 곡선을 결합하여 복잡한 도형을 만든다.

Complex shapes composed only of straight lines can be created as polylines.
직선으로만 구성된 복잡한 도형들이 폴리라인으로 만들어질 수 있다.

While polylines and paths can create similar-looking shapes, polylines require a lot of small straight lines to simulate curves and don't scale well to larger sizes.
폴리라인과 패스가 비슷한 도형을 만들때, 폴리라인은 곡선을 만들기 위해 많고 작은 직선이 필요하고, 더 큰 크기로 잘 확대되지 않는다.

A good understanding of paths is important when drawing SVGs.
패스를 잘 이해하는 것은 SVG를 그릴 때 매우 중요하다.

While creating complex paths using an XML editor or text editor is not recommended,
XML에디터나 텍스트 에디터를 이용하여 복합한 패스를 만드는 것은 좋지 않지만,

understanding how they work will allow you to identify and repair display issues in SVGs.
그들이 어떻게 동작하는지 이해하면 당신이 SVG의 디스플레이 문제를 확인하고 수정할 수 있습니다.

The shape of a path element is defined by one attribute: d (see more in basic shapes).
패스 요소의 형태는 하나의 속성으로 정의됩니다 : d (다른 기본 모양 참고)

The "d" attribute contains a series of commands and parameters used by those commands.
"d" 속성은 명령에 사용되는 일련의 명령어들과 매개변수들을 포함하고 있습니다.

Each of the commands is instantiated (for example, creating a class, naming and locating it) by a
specific letter.
각각의 명령들은 특정 문자로 예시가 들어져있다. (예를들어 _ 클래스 생성, 이름지정 및 위치지정)

For instance, let's move to the x and y coordinates (10, 10).
예를 들어, x와 y좌표로 이동해봅시다. (10, 10)

The "Move to" command is called with the letter M.
"Move to"라는 명령어는 문자 M으로 호출됩니다.

When the parser runs into this letter, it knows you want to move to a point.
파서가 이 문자를 보면(?), 당신이 점으로 이동하고 싶어 한다는 것을 알게 됩니다.

So, to move to (10,10) you would use the command "M 10 10".
그래서, (10, 10)으로 이동하려면 명령어 "M 10 10"을 이용하면 됩니다.

After that, the parser begins reading for the next command.
그 다음에, 파서는 다음 명령을 읽을 준비를 합니다.

All of the commands also come in two variants.
모든 명령어에는 두 가지 형태가 있습니다.

An uppercase letter specifies absolute coordinates on the page, and a lowercase letter specifies
relative coordinates (e.g. move from the last point 10px up and 7px to the left).
대문자는 페이지의 절대좌표를 명시하고, 소문자는 상대좌표를 명시합니다.
(예를들어_ 마지막 점에서 10px 위로, 7px 왼쪽으로) (?맞는건가)

Coordinates in the "d" attribute are always unitless and hence in the user coordinate system.
"d" 속성에 있는 좌표들은 항상 단위가 없어서 사용자 좌표 시스템에 있습니다.

Later, we will learn how paths can be transformed to suit other needs.
나중에, 우리는 경로를 다른 곳에 맞도록 변형시키는 방법을 배울 것입니다.

Line commands
라인 명령

There are five line commands for <path> nodes.
<path>노드에는 다섯개의 라인 명령어가 있습니다.

As the name suggets, each one just draws a straight line between two points.
이름에서 알 수 있듯이, 각 점은 두 점 사이에 직선을 그립니다.

The first command is the "Move To" or M, which was described above.
첫번째 명령어는 위에서 말했던 "Move To" 또는 M 입니다.

It takes two parameters, a coordinate  ' x ' and coordinate ' y ' to move to.
그 명령어는 움직이기 위해서 'x' 좌표, 'y' 좌표 두 개의 매개변수를 가집니다.

If your cursor already was somewhere on the page, no lines is drawn to connect the two places.
당신의 커서가 페이지 어딘가에 있다면 , 두 지점을 연결하는 선은 그려지지 않습니다.

The "Move To" command appears at the beginning of paths to specify where the drawing should start. e.g. :
"Move To" 명령어는 패스의 시작부분에 나타나서 그리기를 시작할 위치를 지정합니다. 예 :

or
또는

In the following example we only have a point at (10, 10).
다음 예제는 (10, 10)에만 점이 있습니다.

Note, though, that it wouldn't show up if you were just drawing the path normally. For example :
하지만, 경로를 정상적으로 그리는 경우에는 표시되지 않습니다. 예를 들어 :

There are three commands that draw lines.
선을 그리는 세 개의 명령어가 있습니다.

The most generic is the "Line To" command, called with L.
가장 일반적인 명령어는 L이라고 불리는 "Line To" 명령입니다.

L takes two parameters ?x and y coordinates?and draws a line from the current position to a new position.
L은 두 개의 매개변수를 가집니다 ㅡx와 y좌표 ㅡ 그리고 현재 지점에서 새로운 지점까지 선을 그립니다.

There are two abbreviated forms for drawing horizontal and vertical lines.
가로와 세로선을 그리기 위한 두가지 짧은 형태가 있습니다.

H draws a horizontal line, and V draws a vertical line.
H는 가로선, V는 세로선을 그립니다.

Both commands only take one argument since they only move in one direction.
이 두 명령어는 한 쪽 방향으로만 움직이기 때문에 하나의 인수만 필요합니다.

An easy place to start is by drawing a shape.
도형을 그리는 것이 가장 쉬운 출발입니다.

We will start with a rectangle (the same type that could be more easily be made with a <rect> element).
직사각형 먼저 시작하겠습니다. (이 유형은 <rect>요소로 더 쉽게 만들어 질 수 있습니다.)

It's composed of horizontal and vertical lines only:
그것은 가로와 세로 선으로만 구성되어 있습니다:

We can shorten the above path declaration a little bit by using the "Close Path" command, called with Z.
위의 패스 선언은 Z라고 불리는 "Close Path" 명령어를 통해서 축약할 수 있습니다.63

This command draws a straight line from the current position back to the first point of the path.
이 명령은 현재 위치에서 패스의 첫 지점까지 직선을 그릴 수 있습니다.

It is often placed at the end of a path node, although not always.
그것은 항상은 아니지만 주로 패스 노드의 마지막에 있습니다.

There is no difference between the uppercase and lowercase command.
대문자와 소문자 명령의 차이는 없습니다.

So our path above could be shortened to:
그래서 위의 패스는 다음과 같이 축약할 수 있습니다:

You can also use the relative form of these commands to draw the same picture.
또한 같은 그림을 그리기 위해서 이 명령들의 상대적인 유형을 이용할 수 있습니다.

Relative commands are called by using lowercase letters, and rather than moving the cursor to an exact coordinate, they move it relative to its last position.
상대적인 명령어는 소문자로 호출되며, 정확한 좌표로 커서를 이동하는 대신 마지막 위치로 이동합니다.

For instance, since our box is 80 x 80, the path element could have been written:
예를 들어, 상자가 80 x 80이므로 경로는 다음과 같이 쓰일 수 있습니다:

The path will move to point (10,10) and then move horizontally 80 points to the right, then 80 points down, then 80 points to the left, and then back to the start.
패스는 (10 ,10) 점까지 이동한 후 가로로는 오른쪽으로 80포인트, 그리고 80포인트 아래, 그리고 80포인트 왼쪽, 그리고 시작으로 돌아갈 것이다.

In these examples, it would probably be simpler to use the <polygon> or <polyline> elements.
이러한 예들에서, 아마 <polygon> 또는 <polyline> 요소를 쓰는 것이 더 간단할 것이다.

However, paths are used so often in drawing SVG that developers may be more comfortable using them instead.
하지만 개발자들이 그들을 쓰는 것ㄴ 보다 SVG로 그리는 것이 더 편하기 때문에 패스들이 자주 쓰일 것이다.

There is no real performance penalty or bonus for using one or the other.
그것을 사용하거나 다른것을 사용하거나 실제 성능에 손해가 되거나 득이 되는 것은 없습니다.

Curve Commands
곡선 명령

There are three different commands that you can use to create smooth curves.
부드러운 곡선을 만들 때에 사용할 수 있는 명령어에는 세 개가 있습니다.

Two of those curves are Bezier curves, and the third is an "arc" or part of a circle.
두 곡선은 베지어 곡선이며 세 번째 곡선은 원호나 원의 일부분입니다.

You might have already gained practical experience with Bezier curves using path tools in Inkscape, Illustrator or Photoshop.
Inkscape, Illustrator, 또는 포토샵의 패스 도구를 사용하여 이미 베지어 곡선을 그려보신 경험이 있으실 겁니다.

For a complete description of the math behind Bezier curves, go to a reference like the one on Wikipedia.
베지어 곡선의 수학적인 설명 전문은 Wikipedia와 같은 곳을 참조하십시오.

There are an infinite number of Bezier curves, but only two simple ones are available in path elements: a cubic one, called with C, and a quadratic one, called with Q.
베지어 곡선은 무한개가 있지만 패스 요소에서는 간단한 곡선 두개만 사용 가능합니다: C로 호출된 3차곡선과 Q로 호출된 2차 곡선입니다.

Bezier Curves
베이저 곡선

The cubic curve, C, is the slightly more complex curve.
3차곡선인 C는 약간은 더 복잡한 곡선입니다.

Cubic Beziers take in two control points for each point.
3차원 베지어는 각 점에 대해 두 개의 제어점을 이용합니다.

Therefore, to create a cubic Bezier, you need to specify three sets of coordinates.
따라서, 3차원 베지어를 만들기 위해서는 세 쌍의 좌표를 지정해야 합니다.

The last set of coordinates here (x,y) are where you want the line to end.
마지막 세트의 좌표 (x,y)은 선이 끝나는 지점입니다.

The other two are control points.
나머지 두 점은 제어점입니다.

The control point for the start of your curve is (x1,y1), and (x2,y2) is the end point of your curve.
곡선의 시작점의 제어점은 (x1, y1)이고, 끝점의 제어점은 (x2, y2)입니다.

The control points essentially describe the slope of your line starting at each point.
제어점은 기본적으로 각 지점에서 시작한 선의 경사를 나타냅니다.

The Bezier function then creates a smooth curve that transfers you from the slope you established at the beginning of your line, to the slope at the other end.
베지어 선의 시작부분에서 지정한 기울기에서 다른 쪽 끝의 기울기로 이동하는 부드러운 곡선을 만듭니다.

The example above creates nine Cubic Bezier curves.
위의 예시는 아홉개의 3차원 베지어 곡선을 만듭니다.

As the curves move toward the left, the control points become spread out horizontally.
곡선이 왼쪽으로 이동함에 따라 제어점이 수평으로 펼쳐집니다.

As it moves towards the right, they become further separated from the end points.
오른쪽으로 이동하면 끝점에서 더 멀어집니다.

The thing to note here is that the curve starts in the direction of the first control point, and then bends so that it arrives along the direction of the second control point.
여기서 주의해야 할 점은 곡선이 첫 번째 제어점 방향으로 시작한 다음 두 번째 곡선 방향으로 굴곡이 된다는 것입니다.

You can string together several Bezier curves to create extended, smooth shapes.
여러 베지어 곡선을 함께 연결하여 확장된 부드러운 모양을 만들 수 있습니다.

Often, the control point on one side of a point will be a reflection of the control point used on the other side to keep the slope constant.
종종 한 점의 한 측면에 있는 제어점은 다른 쪽에 있는 제어점을 반영하여 기울기를 일정하게 유지합니다.

In this case, you can use a shortcut version of the cubic Bezier, designated by the command S (or s).
이 경우 명령어 S (또는 s)로 지정된 3차원 베지어를 빠르게 사용할 수 있습니다.

S produces the same type of curve as earlier, but if it follows another S command or a C command, the first control point is assumed to be a reflection of the one used previously.
S는 이전과 동일한 유형의 곡선을 생성하지만, 다른 S 명령 또는 C 명령을 따르는 경우 첫 번째 제어점은 이전에 사용한 제어점을 반영합니다.

If the S command doesn't follow another S or C command, then it is assumed that both control points for the curve are the same.
S 명령이 다른 S 또는 C 명령을 따르지 않으면, 두 제어점이 동일하다고 보면 됩니다.

An example of this syntax is shown below, and in the figure to the left the specified control points are shown in red, and the inferred control point in blue.
이 구문의 예는 아래에 있으며, 왼쪽 그림에는 지정된 제어점이 빨간색으로 표시되고 예상된 제어점이 파란색으로 표시됩니다.


### reference
- https://developer.mozilla.org/en-us/docs/Web/SVG/Tutorial/Paths
