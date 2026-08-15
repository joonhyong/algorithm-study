/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 피자 나눠 먹기 (3)
유형: 구현
날짜: 2026-08-16
Review 여부: false

# 📰 문제 설명
- 피자를 나누는 조각 수 slice와 피자를 먹는 사람의 수 n이 주어짐
- n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇판의 피자를 시켜야하는지를 반환

# 💡 문제 풀이
- slice가 n보다 같거나 크면 피자는 1판만 시키면 됨
- slice가 n보다 작으면, 아래의 경우를 따름
    1. n 나누기 slice에 나머지 발생 시 -> answer = n/slice
    2. n 나누기 slice에 나머지가 발생하지 않을 시 -> answer = n/slice + 1

# ⏰ 시간복잡도: O(1)
- 함수의 연산 횟수는 입력값에 영향을 받지않으므로, 시간복잡도는 O(1)이다.

# 🚀 알게 된 점
- 올림은 소수점이 발생 했을 때만 올린다!

# 💭 아쉬운 점
- 조건 분기 없이 slice를 n으로 나눈 결과에 올림만 처리 해줘도 항상 답이 나온다는 것을 알게되었다.
- 조건 분기를 더 간결하게 만들 수 있는지,
- 간결하게 만든 코드가 특정 경우에 따라서 다르게 결과값을 틀리게 반환하는지,
- 를 확인하며 코드를 더 간결하게 만들 수 있는 지에 대한 시도를 해봐야겠다. 
 */

function solution(slice, n) {
  let answer = 0;

  if (slice >= n) {
    answer = 1;
  } else if (slice < n) {
    if (n % slice === 0) answer = Math.trunc(n / slice);
    else answer = Math.ceil(n / slice);
  }

  return answer;
}

console.log(solution(7, 10));
