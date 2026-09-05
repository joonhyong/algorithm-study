/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 모음 제거
유형: 문자열
날짜: 2026-09-05
Review 여부: true

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 해당 문자열에서 모음(a, e, i, o, u)을 제거한 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- 빈문자열 answer 선언
- for문으로 my_string을 순회하며 각 문자가 모음인지 확인
-  모음이면 continue로 패스, 자음이면 answer에 결합 후 대입(+=)

# ⏰ 시간복잡도: O(n)
- 입력값의 길이에 따라 연산횟수가 정해지므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 문자열은 Immutable 임.
- 따라서 answer(문자열)에 + 연산만 해주면 answer 자체 값은 변하지 않음
- 그러므로 연산 결과를 answer에 할당까지 해주어야 함

# 💭 아쉬운 점
- ES6 문법으로 푸는 시도를 해보지 않았다.
- replace() 메서드를 사용하면 코드가 훨씬 간결해진다.
*/

function solution(my_string) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (
      my_string[i] === "a" ||
      my_string[i] === "e" ||
      my_string[i] === "i" ||
      my_string[i] === "o" ||
      my_string[i] === "u"
    ) {
      continue;
    } else answer += my_string[i];
  }

  return answer;
}

console.log(solution("bus"));
