/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 서울에서 김서방 찾기
유형: 문자열
날짜: 2026-09-11
Review 여부: false

# 📰 문제 설명
- 문자열 배열 seoul이 주어짐
- seoul의 요소들 중 "Kim"의 위치 x 찾기
- 이 때 x는 배열의 인덱스이다.
- "김서방은 x에 있다"를 반환하는 함수 만들기

# 💡 문제 풀이
- x를 0으로 초기화
- for문으로 seoul 배열을 순회
- 해당 요소가 "Kim"이라면 "김서방은 ${i}에 있다"를 반환

# ⏰ 시간복잡도: O(n)

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`;
  }
}

console.log(solution(["Jane", "Kim"]));
