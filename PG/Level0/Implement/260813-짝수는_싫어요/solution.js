/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 짝수는 싫어요
유형: 구현
날짜: 2026-08-13
Review 여부: false

# 📰 문제 설명
- 정수 n이 주어졌을때, 
- n 이하의 홀수가 오름차순으로 담긴 배열을 반환

# 💡 문제 풀이
- answer 빈배열 생성
- 반복문을 통해 1부터 n까지 반복하면서
- 2로 나눴을 때 0이 아닌 경우에만 answer 배열에 추가
- 반복문 종료 후 answer 배열 반환

# ⏰ 시간복잡도: O(n)
- 입력값 n에 따라 반복횟수가 결정되므로 시간복잡도는 O(n)

# 🚀 알게 된 점
- 

# 💭 아쉬운 점
 */

function solution(n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) answer.push(i);
  }

  return answer;
}

console.log(solution(10));
