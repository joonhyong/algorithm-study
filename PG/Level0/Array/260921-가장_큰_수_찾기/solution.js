/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 가장 큰 수 찾기
유형: 배열
날짜: 2026-09-21
Review 여부: false

# 📰 문제 설명
- 정수 배열 array가 주어짐
- 가장 큰 수와 그 수의 인덱스르 담은 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- Math.max()메서드에 ...array를 인수로 전달 -> 가장 큰 수
- array에 indexOf(max)를 적용 -> 가장 큰 수의 인덱스
- 가장 큰 수와 가장 큰 수의 인덱스를 차례로 담아 배열을 리터럴로 반환

# ⏰ 시간복잡도 O(N)
- Math.max()와 indexOF() 메서드가 각가 최악의 경우 시간복잡도가 O(n)이다.
- 두 연산이 독립적으로 순차 수행되므로 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(array) {
  const maxNum = Math.max(...array);
  return [maxNum, array.indexOf(maxNum)];
}

console.log(solution([1, 8, 3]));
