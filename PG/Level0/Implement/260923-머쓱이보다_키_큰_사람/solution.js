/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 머쓱이보다 키 큰 사람
유형: 구현
날짜: 2026-09-23
Review 여부: false

# 📰 문제 설명
- 키를 요소로 갖는 array와 머쓱이의 키 height가 주어짐
- 머쓱이 보다 크 큰 사람 수를 반환하는 함수 만들기

# 💡 문제 풀이
- filter() 메서드 사용
- array의 요소가 height보다 큰 요소만 남긴 배열을 반환
- filter() 메서드의 결과값의 길이를 반환

# ⏰ 시간복잡도 O(N)
- filter() 메서드의 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(array, height) {
  return array.filter((item) => item > height).length;
}

console.log(solution([149, 180, 192, 170], 167));
