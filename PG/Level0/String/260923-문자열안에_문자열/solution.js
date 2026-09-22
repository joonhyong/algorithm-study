/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열안에 문자열
유형: 문자열
날짜: 2026-09-22
Review 여부: false

# 📰 문제 설명
- 문자열 str1, str2가 주어짐
- str1 안에 str2가 있다면 1을, 없다면 2를 반환하는 함수 만들기

# 💡 문제 풀이
- 정규표현식과 test() 메서드 사용
    - regex 변수를 new RegExp(`${str2}`)로 초기화
    - regex.test(str1)가 참이면 1을, 거짓이면 2를 반환

# ⏰ 시간복잡도 O(n + m)
- str1의 길이를 n, str2의 길이를 m이라 할 때
- new RegExp(str2) 생성자의 시간복잡도는 O(m)이고, regex.test(str1) 메서드의 시간복잡도는 O(n)이다.
- 따라서 전체 시간복잡도는 O(n + m)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- includes() 메서드 한번으로도 가능했다.

*/

function solution(str1, str2) {
  const regex = new RegExp(`${str2}`);
  return regex.test(str1) ? 1 : 2;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));
