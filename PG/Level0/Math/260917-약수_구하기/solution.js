/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 같은 숫자는 싫어
유형: 문자열
날짜: 2026-09-17
Review 여부: false

# 📰 문제 설명
- 정수 n이 주어짐
- n의 약수를 오름차순으로 담은 배열을 반환하는 함수만들기

# 💡 문제 풀이
- answer 변수를 빈배열로 초기화
- sqrt 변수를 루트n의 값으로 초기화
- for문으로 1부터 sqrt까지 다음 작업을 수행
    - n을 i로 나눈 나머지가 0이라면 아래 작업을 수행
    - i * i가 n이면 i를 answer 배열에 추가
    - 아니라면 i와 n/i의 값을 answer 배열에 추가

# ⏰ 시간복잡도 O(n)

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(n) {
  const answer = [];
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      if (i * i === n) answer.push(i);
      else {
        answer.push(i);
        answer.push(n / i);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution(24));
