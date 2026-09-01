/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 주사위의 개수
유형: 수학
날짜: 2026-09-01
Review 여부: false

# 📰 문제 설명
- 직육면체 상자 box에 모서리의 길이가 n인 정육면체를 최대로 채우는 개수는 반환하는 함수 만들기

# 💡 문제 풀이
- box 배열의 세 요소를 n으로 나눈 몫들을 각각의 변수에 저장
- 이 세 값들을 곱한 값을 반환

# ⏰ 시간복잡도: O(1)
- 입력값에 상관없이 연산 횟수가 고정되어 있으므로 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(box, n) {
  const x = Math.trunc(box[0] / n);
  const y = Math.trunc(box[1] / n);
  const z = Math.trunc(box[2] / n);

  const answer = x * y * z;

  return answer;
}

console.log(solution([10, 8, 6], 3));
