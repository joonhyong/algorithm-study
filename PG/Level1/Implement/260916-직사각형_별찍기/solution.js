/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 직사각형 별찍기
유형: 구현
날짜: 2026-09-16
Review 여부: false

# 📰 문제 설명
- 표준 입력으로 두개의 정수 n과 m이 주어짐
- "*"문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력하세요

# 💡 문제 풀이
- 직사각형은 행과 열로 이루어진 결과물이라고 하자.
- 각 행과 열은 길이가 1인 "*"들로 구성되어 있음

- 중첩 for문 사용
    - 외부 for문 (로프변수: i)
        - row 변수를 빈문자열 ""로 초기화
        - 직사각형의 행에 대해서 내부 for문을 수행
        - 내부 for문 종료 후 "\n" 추가
    - 내부 for문 (루프변수: j)
        - row 문자열에 "*"을 추가
        - b회 반복

# ⏰ 시간복잡도 O(n)
- 중첩 for문이므로 시간복잡도는 O(mn)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const arr = data.split(" ");
  const n = Number(arr[0]),
    m = Number(arr[1]);

  let answer = [];

  for (let i = 0; i < m; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row += "*";
    }

    answer.push(row);
  }

  for (let k = 0; k < m; k++) {
    console.log(answer[k]);
  }
});
