/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 내적
유형: 수학
날짜: 2026-09-14
Review 여부: false

# 📰 문제 설명
- 길이가 같은 두 정수 배열 a, b가 주어짐
- a와 b의 내적을 반환하는 함수 만들기
- a와 b의 내적 = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 

# 💡 문제 풀이
- 방식1. for문과 sum 변수
    - sum 변수를 0으로 초기화
    - for문을 통해 a와 b 배열을 순회하며 다음 작업을 수행
        - a[i] * b[i]의 결과값을 sum에 더하기
    - for문 종료 후 sum 반환

- 방식2. reduce() 메서드 활용
    - a배열에 reduce() 메서드를 적용
    - reduce() 메서드에 acc(누적값,) cur(현재 요소), idx(인덱스), 초기값(0)을 전달
    - reduce() 메서드의 콜백함수 반환값: `acc += cur * b[idx]`

# ⏰ 시간복잡도: O(n)
- 방식1
    - for문은 배열 a만큼 반복하므로 시간복잡도는 O(n)이다.
- 방식2
    - reduce() 메서드의 콜백함수내에서 b[idx]는 시간복잡도가 O(1)이다. -> b[idx]를 찾을 때 b배열을 전체 순회하지 않음
    - reduce() 메서드는 배열 a에 대해 동작하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 기존 코드는 for문과 reduce() 메서드를 따로 분리하여 불필요한 연산과 코드가 생겼다.
- for문에는 sum 변수에 누적하여 더해나가는 방식으로,
- reduce() 메서드에는 콜백함수 내부 로직에서 끝낼 수 있는 방식으로 수정하였다.
*/

function solution(a, b) {
  // 기존 코드
  /*
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] * b[i]);
  }
  return arr.reduce((acc, cur) => (acc += cur));
  */

  // 방식1. for문과 sum 변수
  /*
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
  */

  // 방식2. reduce() 메서드
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
