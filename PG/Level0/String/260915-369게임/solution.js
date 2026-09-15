/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 369게임
유형: 문자열
날짜: 2026-09-15
Review 여부: true

# 📰 문제 설명
- 외쳐야하는 숫자에 포함된 3, 6, 9의 개수를 반환하는 함수 만들기

# 💡 문제 풀이
- result 변수를 0으로 초기화
- s 변수를 order를 문자열로 변환한 값으로 초기화
- for문으로 s를 순회하며 "3", "6", "9" 셋 중 하나와 같은 경우 result++
- for문 종료 후 result 반환 

# ⏰ 시간복잡도 O(n)
- s의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 정규표현식, filter() 메서드 등을 활용한 방식으로 생각해보지 못한점이 아쉽다.
*/

function solution(order) {
  let result = 0;
  const s = String(order);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "3" || s[i] === "6" || s[i] === "9") result++;
  }

  return result;
}

console.log(solution(29423));
