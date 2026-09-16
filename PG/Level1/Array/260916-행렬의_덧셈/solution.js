/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 행렬의 덧셈
유형: 배열
날짜: 2026-09-16
Review 여부: true

# 📰 문제 설명
- 행렬의 덧셈이란?
    - 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
- 2개의 행렬 arr1과 arr2를 입력받아 행렬의 덧셈의 결과를 반환하는 함수 만들기

# 💡 문제 풀이
- arr1의 길이를 col 변수에 저장
- arr1[0]의 길이를 row 변수에 저장
- answer 변수를 빈배열로 초기화

- 중첩 for문으로 answer 배열의 요소들을 채움
    - 외부 for문 (루프변수: i)
      - answer 행렬의 row가 될 배열 rowArr를 생성
      - 내부 for문 종료 후 rowArr를 answer 배열에 추가
    - 내부 for문 (루프변수: j)
      - rowArr에 arr1[i][j] + arr2[i][j]의 값을 추가
    - 외부 for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(n)
- 행렬의 행의 개수을 n, 열의 개수를 m이라 한다면,
- 중첩 for문에서 외부 for문이 n회, 내부 for문이 m회 반복하므로 시간복잡도는 O(mn)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법을 사용하는 방법, answer 배열을 2차원 배열로 초기화하는 방법도 시도해보고싶다.
*/

function solution(arr1, arr2) {
  const answer = [];
  const row = arr1.length;
  const col = arr1[0].length;

  for (let i = 0; i < row; i++) {
    const rowArr = [];

    for (let j = 0; j < col; j++) {
      rowArr.push(arr1[i][j] + arr2[i][j]);
    }

    answer.push(rowArr);
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
  ),
);
