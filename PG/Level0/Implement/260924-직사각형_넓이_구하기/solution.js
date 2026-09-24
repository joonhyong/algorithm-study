/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 직사각형 넓이 구하기
유형: 구현
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 2차원 좌표평면에 변과 축이 평행한 직사각형이 있음
- 네 꼭지점의 좌표[x1, y1], [x2, y2], [x3, y3], [x4, y4]가 주어짐
- 직사각형의 넓이를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 삼항연산자와 Math.abs() 메서드 사용
  - x1은 x2, x3, x4 중에서 하나와 값이 같고, 두개와는 값이 다르다.
  - y1도 y2, y3, y4 중에서 하나와 값이 같고, 두개와는 값이 다르다.
  - 따라서 직사각형의 가로, 세로의 길이는 아래와 같다.
    - 가로 길이
      - x1 - x2 === 0 이라면, | x1 - x3 | 이고
      - x1 - x2 !== 0 이라면, | x1 - x2 | 이다.
    - 세로 길이
      - y1 - y2 === 0 이라면, | y1 - y3 | 이고,
      - y1 - y2 !== 0 이라면, | y1 - y2 | 이다.
  - 가로 길이와 세로 길이를 곱한 값을 반환한다.

- 방식2. Math.max(), Math.min() 메서드 사용
  - x1, x2, x3, x4 중에서 가장 큰 값과 작은 값을 뺀 절댓값이 가로 길이이다.
  - y1, y2, y3, y4 중에서 가장 큰 값과 작은 값을 뺀 절댓값이 세로 길이이다.
  - xArr, yArr 변수를 빈배열로 초기화
  - for...of문으로 dots 배열을 순회하면서 다음 작업을 수행
    - 요소의 첫번째 요소를 xArr에 추가
    - 요소의 두번째 요소를 yArr에 추가
  - 가로 길이 = Math.max(...xArr) - Math.min(...xArr)
  - 세로 길이 = Math.max(...yArr) - Math.min(...yArr)
  - 가로 길이와 세로 길이를 곱한 값을 반환

# ⏰ 시간복잡도 O(1)
- 단순 숫자 연산이 정해진 횟수 내에서 수행되므로 전체 시간복잡도는 O(1)이다.

# 🚀 알게 된 점
- Math.max()와 Math.min() 메서드는 인수로 전달받은 숫자들 중 동일한 최댓값이나 최솟값이 여러 개 있더라도, 해당 값 자체를 딱 하나만 반환함

# 💭 아쉬운 점

*/

function solution(dots) {
  // 방식1. 삼항연산자와 절댓값
  /*
  const [x1, y1] = dots[0];
  const [x2, y2] = dots[1];
  const [x3, y3] = dots[2];

  const row = x1 - x2 === 0 ? Math.abs(x1 - x3) : Math.abs(x1 - x2);
  const col = y1 - y2 === 0 ? Math.abs(y1 - y3) : Math.abs(y1 - y2);

  return row * col;
  */

  // 방식2. x, y 좌표들의 최댓값과 최솟값
  const xArr = [];
  const yArr = [];

  for (const item of dots) {
    xArr.push(item[0]);
    yArr.push(item[1]);
  }

  return (Math.max(...xArr) - Math.min(...xArr)) * (Math.max(...yArr) - Math.min(...yArr));
}

console.log(
  solution([
    [1, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
  ]),
);
