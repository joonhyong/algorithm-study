/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 짝수의 합
유형: 구현
날짜: 2026-08-06
Review 여부: false

# 📰 문제 설명

# 💡 문제 풀이
방법1. 반복문 사용
- 반복문을 사용하여 로직 자체를 직접 구현함
 
방법2. reduce 메서드 사용
- 누적 작업 후 누적값을 반환하는 reduce 메서드를 사용
- reduce 메서드의 콜백 함수 내부에서 조건문을 통해 짝수일때만 누적값에 더하도록 함

# ⏰ 시간복잡도: O(n)
- 입력값 만큼 반복을 하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- reduce 메서드
  - 형식
    배열.reduce((누적값, 현재요소) => {
        // 누적 작업
        // return 누적값;
    }, 초기값);
- 기존에는 map 메서드와 filter 메서드만 알고 있었지만, 해당 메서드는 배열을 반환하는 메서드이므로,
- 특정 값을 반환하는 reduce 메서드를 사용하는 것이 더 올바른 방법이란 것을 알게되었다.
 */

function solution(n) {
  // 방법1. 반복문 사용
  /*
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
    else continue;
  }
  return sum;
  */

  // 방법2. ES6 문법 사용 (reduce 메서드)
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  const answer = arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return acc + cur;
    }
    return acc;
  }, 0);

  return answer;
}

console.log(solution(4));
