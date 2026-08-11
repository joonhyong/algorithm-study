/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 최대값 만들기 (1)
유형: 구현
날짜: 2026-08-010
Review 여부: true

# 📰 문제 설명
- 정수 배열이 주어짐
- 원소 중 두개를 곱해 만들 수 있는 최대값을 반환

# 💡 문제 풀이
- numbers 배열의 첫번째 요소부터 마지막에서 두번째 요소까지,
- 해당 요소의 뒤에 있는 요소들과 하나씩 곱했을 때의 값들을 arr 배열에 추가
- 중첩 반복문을 이용
  - 외부 반복문은 첫번째 요소부터 마지막에서 두번째 요소까지 반복 (numbers.length - 1회 반복)
  - 내부 반복문은 첫번째 요소의 다음 요소부터 마지막 요소까지 반복 (numbers.length - i회 반복)

# ⏰ 시간복잡도: O(n^)
- 중첩 반복문이 등장하며
- 입력값의 제곱 만큼 반복을 하므로 시간복잡도는 O(n^)이다.

# 🚀 알게 된 점
 */

function solution(numbers) {
  const arr = [];
  for (let i = 0; i <= numbers.length - 2; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      arr.push(numbers[i] * numbers[j]);
    }
  }
  const answer = Math.max(...arr);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
