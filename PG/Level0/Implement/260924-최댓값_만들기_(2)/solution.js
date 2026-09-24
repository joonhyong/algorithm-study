/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 최댓값 만들기 (2)
유형: 구현
날짜: 2026-09-24
Review 여부: true

# 📰 문제 설명
- 정수 뱌욜 numbers가 주어짐
- numbers의 원소 중 두개를 곱해 만들 수 있는 최대값을 반환하는 함수 만들기

# 💡 문제 풀이
- maxNum 변수를 -Infinity로 초기화
- 중첩 for문 사용
    - 외부, 내부 for문 모두 numbers 배열을 순회
    - 외부 for문 (루프변수: i)
        - numbers[i]를 곱할 두 수 중 첫번째 숫자를 선정
        - 내부 for문을 수행
    - 내부 for문 (루프변수: j)
        - 첫번째 숫자로 선정된 원소를 제외한 원소들 중에서 두번째 숫자로 선정
        - 두 수를 곱하여 maxNum 변수와 비교 후 더 큰 수를 maxNum 변수에 저장
- for문 종료 후 maxNum 반환

# ⏰ 시간복잡도 O(N^2)
- 외부, 내부 for문 모두 numbers 배열을 순회하므로 전체 시간복잡도는 O(N^2)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- ES6 문법을 활용한 풀이법으로 다시 풀어보고 싶다.
*/

function solution(numbers) {
  let maxNum = -Infinity;
  const len = numbers.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      const num = numbers[i] * numbers[j];
      if (num > maxNum) maxNum = num;
    }
  }

  return maxNum;
}

console.log(solution([1, 2, -3, 4, -5]));
