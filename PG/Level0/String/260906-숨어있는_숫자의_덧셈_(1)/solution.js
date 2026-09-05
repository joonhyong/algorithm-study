/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 숨어있는 숫자의 덧셈 (1)
유형: 문자열
날짜: 2026-09-06
Review 여부: false

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 해당 문자열 안의 모든 자연수들의 합을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 반복문 사용
  0. 변수 sum을 0으로 초기화
  1. my_string을 순회
  2. 정규 표현식을 통해 자연수 1-9인 경우 해당 문자열을 숫자형으로 변환 후 sum에 더하기
  3. 반복묹 종료 후 sum 반환

- 방식2. replace() 메서드 사용
  1. my_string에 replace() 메서드를 적용시켜 숫자 1-9가 아닌 문자들을 제거
  2. 변환된 my_string의 각 자릿수의 숫자들을 합친 값을 반환

# ⏰ 시간복잡도: O(n)
- 방식1에서는 문자열의 길이만큼 반복하므로 시간복잡도는 O(n)이다.
- 방식2에서는 문자열의 길이만큼 반복 및 자연수 추출 후에 자연수 개수 만큼 반복한다.
  - 이는 O(n + k)이며, k는 n 이하이므로 최종 시간복잡도는 O(n)이다. 

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(my_string) {
  // 방식1. 반복문 사용
  /*
  let sum = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (/[1-9]/.test(my_string[i])) sum += Number(my_string[i]);
  }

  return sum;
  */

  // 방식2. replace() 메서드 사용
  const sum = my_string
    .replace(/[^1-9]/g, "")
    .split("")
    .map(Number)
    .reduce((acc, cur) => (acc += cur));

  return sum;
}

console.log(solution("aAb1B2cC34oOp"));
