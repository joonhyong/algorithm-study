/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명:평균 구하기
유형: 구현
날짜: 2026-09-06
Review 여부: true

# 📰 문제 설명
- 정수를 담고있는 배열 arr가 주어짐
- arr 요소들의 평균을 반환하는 함수 만들기

# 💡 문제 풀이
- reduce() 메서드 사용

# ⏰ 시간복잡도: O(n)
- arr의 길이 만큼 연산이 수행되므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(arr) {
  const answer = arr.reduce((acc, cur) => (acc += cur));

  return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));
