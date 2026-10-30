/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 2016년
유형: 구현
날짜: 2026-10-30
Review 여부: false

# 📰 문제 설명
- 2016년 1월 1일은 금요일
- 2016년 a월 b일은 무슨 요일일까요?
- 두 수 a, b를 입력받아 2016년 a월 b일의 요일을 반환하는 함수 만들기
- 요일 형식은 SUN, MON, TUE, WED, THU, FRI, SAT

# 💡 문제 풀이
- 현재 날짜 까지의 일 수를 n으로 표현 -> 1월 1일 부터 해당 날짜까지의 누적 일수
    - 예시1: 1월 1일에서의 n = 1
    - 예시2: 2월 2일에성의 n = 33
- 현재 날짜 까지의 일 수를 n을 기준으로 n % 7의 값에 요일이 정해짐
    - 1 -> 금요일
    - 2 -> 토요일
    - 3 -> 일요일
    - 4 -> 월요일
    - 5 -> 화요일
    - 6 -> 수요일
    - 0 -> 목요일
- n일을 카운트 하기
    1. n 변수를 0으로 초기화
    2. for문으로 a회 반복하며 다음 작업 수행
        - 루프변수 범위: 1 ~ a
        - 조건문으로 i의 값에 따라 n 값 증가
        - i가 1, 3, 5, 7, 8, 10, 12인 경우 31 증가
        - i가 2인 경우 29 증가
        - i가 4, 6, 9, 11인 경우 30 증가
    3. n을 b 증가
- switch문을 이용하여 n % 7의 결과값에 따른 요일을 반환

# ⏰ 시간복잡도 O(N)
- for문은 a회 반복하며 내부 연산은 O(1) 소요하므로 O(a) 소요
- 그 외 연산 모두 O(1) 소요되므로 전체 시간복잡도는 O(N)으로 일반화할 수 있음

# 🚀 알게 된 점

# 💭 아쉬운 점
- 상수 배열을 통해 코드 가독성을 높일 수 있었다.

*/

function solution(a, b) {
  // 방식1. for문과 switch문 이용
  /*
  let n = 0;

  for (let i = 0; i < a; i++) {
    if (i === 0) continue;
    if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) n += 31;
    else if (i === 2) n += 29;
    else if (i === 4 || i === 6 || i === 9 || i === 11) n += 30;
  }

  n += b;

  switch (n % 7) {
    case 1:
      return "FRI";
    case 2:
      return "SAT";
    case 3:
      return "SUN";
    case 4:
      return "MON";
    case 5:
      return "TUE";
    case 6:
      return "WED";
    case 0:
      return "THU";
  }
  */
  // 방식2. 상수 배열 이용
  const weekList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const monthList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let n = 0;
  n += monthList.slice(0, a - 1).reduce((a, c) => (a += c));
  n += b;

  return weekList[n % 7];
}

console.log(solution(5, 24));
