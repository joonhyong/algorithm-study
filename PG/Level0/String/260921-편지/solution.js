/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 편지
유형: 문자열
날짜: 2026-09-21
Review 여부: false

# 📰 문제 설명
- 문자열 message가 주어짐
- 길이는 공백을 포함함
- 편지를 글자 한 자 한 자를 가로 2cm 크기로, 가로로만 적을 예정
- message의 내용을 해당 형식으로 적기 위해 필요한 편지지의 최소 가로길이를 반환하는 함수만들기

# 💡 문제 풀이
- 공백을 포함하여 2글자씩 적을 예정임
- 따라서 message의 길이를 2로나눈 값을 올림하여 반환

# ⏰ 시간복잡도 O(1)
- 연산의 횟수는 정해져있으므로 전체 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(message) {
  return message.length * 2;
}

console.log(solution("happy birthday!"));
