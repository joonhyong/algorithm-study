/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 정수 내림차순으로 배치하기
유형: 배열
날짜: 2026-09-03
Review 여부: false

# 📰 문제 설명
- 정수 n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 반환하는 함수 만들기

# 💡 문제 풀이
- n을 각 자릿수를 요소로 갖는 배열로 변환 
  - Array.from() 메서드 사용 OR split() 메서드 사용
  - map() 메서드로 각 요소를 문자열에서 숫자형으로 변환
- 해당 배열에 sort() 메서드 적용
- 이어서 join() 메서드 적용
- 이어서 parseInt() 메서드 적용

# ⏰ 시간복잡도: O(n)
- 문자열 방식으로 푼 방식에서는 입력값의 자릿수 만큼 반복한다.
- 따라서 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 문자열 방식보다, 숫자형 방식이 더 빠듬
- 숫자형을 문자열로 변환하는 방법 -> n + ""
- 문자열을 숫자형으로 변환하는 방법 -> +str

# 💭 아쉬운 점
- 이전에도 숫자형 데이터를 10으로 나누는 연산을 통해 자릿수별 숫자를 다루는 방식을 알게되었으나 적용시키지 못함
- 숫자형 풀이로 다시 풀어보았으나, sort()를 적용시킨 배열을 다시 문자열로 변환시키는 과정을 겪는다는 점에서 100% 숫자형 풀이가 아니었음
- 배열을 숫자형 풀이로 푸는 방식도 필요
*/

function solution(n) {
  // 방식1. 문자열 - Array.from() 사용
  /*
  const answer = Number(
    Array.from(String(n))
      .map(Number)
      .sort((a, b) => b - a)
      .join(""),
  );

  return answer;
  */
  // 방식2. 문자열 - split() 사용
  /*
  const answer = Number(
    String(n)
      .split("")
      .map(Number)
      .sort((a, b) => b - a)
      .join(""),
  );

  return answer;
  */

  // 방식3. 숫자형 - 반환값 생성 시 문자열 관련 메서드 사용
  /*
  const arr = [];

  while (n > 0) {
    arr.push(n % 10);
    n = Math.trunc(n / 10);
  }

  return +arr.sort((a, b) => b - a).join("");
  */

  // 방식4. 숫자형 - 반환값 생성 과정도 숫자형 방식 적용
  const arr = [];
  let answer = 0;

  while (n > 0) {
    arr.push(n % 10);
    n = Math.trunc(n / 10);
  }

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer = answer * 10 + arr[i];
  }

  return answer;
}

console.log(solution(4231));
