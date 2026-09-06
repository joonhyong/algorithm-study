/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 하샤드 수
유형: 수학
날짜: 2026-09-06
Review 여부: false

# 📰 문제 설명
- 하샤드 수의 정의
  - 양의 정수 x가 하샤드 수라면,
  - x의 자릿수의 합으로 x가 나누어져야 함
- 자연수 x를 입력받아 하샤드 수 인지 검사하는 함수 만들기

# 💡 문제 풀이
- x의 자릿수의 합을 구하기
- x를 해당 수로 나눠보기
- 나머지가 0이라면 "true" 반환
- 아니라면 "false" 반환

# ⏰ 시간복잡도: O(log_(10)n)
- 주어진 숫자의 자릿수만큼 반복하므로 시간복잡도는 O(log_10 n)이다.

# 🚀 알게 된 점
- 숫자형 데이터의 자릿수들을 요소로 갖는 배열로 만들기
  - 문자열로 변환 -> split() 메서드 -> map() 메서드
- 문자열 데이터의 자릿수들을 요소로 갖는 배열로 만들기
  - split() 메서드 -> map() 메서드

# 💭 아쉬운 점
*/

function solution(x) {
  // 방식1. 문자열로 풀기
  /*
  const strX = String(x);
  let sum = 0;

  for (let i = 0; i < strX.length; i++) {
    sum += Number(strX[i]);
  }

  if (x % sum === 0) return true;
  else return false;
  */

  // 방식2. 배열로 풀기
  const arr = x.toString().split("").map(Number);
  let sum = 0;

  for (const item of arr) {
    sum += item;
  }

  if (x % sum === 0) return true;
  else return false;

  // 방식3. 숫자형으로 풀기
  /*
  const origin = x;
  let sum = 0;

  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }

  if (origin % sum === 0) return true;
  else return false;
  */
}

console.log(solution(12));
