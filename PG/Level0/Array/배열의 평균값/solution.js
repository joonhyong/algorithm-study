/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 배열의 평균값
유형: 구현
날짜: 2026-08-16
Review 여부: false

# 📰 문제 설명
- 주어진 배열의 원소의 평균값을 반환

# 💡 문제 풀이
- 방법1. 반복문 사용
    - 변수 sum을 0으로 초기화
    - 반복문으로 배열을 순회하며 배열 요소들을 sum에 더해나감
- 방법2. reduce 메서드 사용
    - reduce 메서드 내부의 콜백함수 로직으로 acc + cur 작성

# ⏰ 시간복잡도: O(n)
- 입력값으로 전달된 배열의 길이 만큼 연산을 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- reduce 메서드의 두번째 인자인 acc의 초기값을 설정하지 않는 경우,
- 배열의 첫번째 요소가 acc의 초기값이 되며, 콜백함수는 배열의 길이 - 1번 수행됨

# 💭 아쉬운 점
 */

function solution(numbers) {
  // 방법1. 반복문 사용
  //   let sum = 0;

  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }

  //   const answer = sum / numbers.length;

  // 방법2. reduce 메서드 사용
  const sum = numbers.reduce((acc, cur) => acc + cur);
  const answer = sum / numbers.length;

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
