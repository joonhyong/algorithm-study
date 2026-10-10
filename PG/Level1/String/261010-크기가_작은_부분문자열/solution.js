/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 크기가 작은 부분 문자열
유형: 문자열
날짜: 2026-10-10
Review 여부: false

# 📰 문제 설명
- 문자열 t, p가 주어짐
- t에서 p와 길이가 같은 부분문자열 중 
- p가 나타내는 수보다 작거나 작은 것이 나오는 횟수를 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 0으로 초기화
- lenT 변수를 t의 길이로 초기화
- lenP 변수를 p의 길이로 초기화
- t를 for문으로 순회하며 다음 작업을 수행
    - 루프변수 i의 범위: 0 ~ lenT - lenP - 2
    - Number(t.slice(i, i + lenP)) <= Number(p)이면 answer++
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N)
- for문이 t와 p의 길이의 차 + 1 만큼 반복하며 각 연산의 시간복잡도는 O(1)이다. 
- 따라서 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(t, p) {
  let answer = 0;
  const lenT = t.length;
  const lenP = p.length;

  for (let i = 0; i < lenT - lenP + 1; i++) {
    if (Number(t.slice(i, i + lenP)) <= Number(p)) answer++;
  }

  return answer;
}

console.log(solution("3141592", "271"));
