/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 짝수 홀수 개수
유형: 구현
날짜: 2026-08-19
Review 여부: true

# 📰 문제 설명
- 주어진 배열에서 짝수의 수와 홀수의 수를 반환하는 함수 만들기

# 💡 문제 풀이
- 짝수와 홀수를 카운트할 변수 even, odd 생성
- 배열의 길이를 저장할 변수 생성
- 반복문으로 배열을 순회하여 해당 요소를 2로 나눴을 때의 나머지로 짝수, 홀수 판단
    - 짝수일 때 even 증가
    - 홀수일 때 odd 증가

# ⏰ 시간복잡도: O(n)
- 입력값으로 주어진 배열의 길이에 따라 반복횟수가 달라지므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법을 이용해서 푸는 방법도 가능하다는 것을 알게되었다.
 */

function solution(num_list) {
  let odd = 0;
  let even = 0;
  const len = num_list.length;

  for (let i = 0; i < len; i++) {
    if (num_list[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  const answer = [even, odd];
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
