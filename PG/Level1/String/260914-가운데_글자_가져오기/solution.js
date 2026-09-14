/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 가운데 글자 가져오기
유형: 문자열
날짜: 2026-09-14
Review 여부: false

# 📰 문제 설명
- 문자열 s가 주어짐
- s의 가운데 글자를 반환하는 함수 만들기
- s의 길이가 짝수라면, 가운데 두 글자를 반환한다.

# 💡 문제 풀이
- 변수 len에 s의 길이를 저장
- len의 홀짝에 따라 다음 작업을 수행

- 홀수인 경우
    - ` (len - 1)/2 + 1 ` 번째 문자
    - 즉, s[(len - 1)/2]을 반환한다.

- 짝수인 경우
    - ` (len - 2)/2 + 1 ` 번째 문자와 바로 다음 문자
    - 즉, s[(len - 2)/2] + s[(len - 2)/2 + 1]을 반환한다.

# ⏰ 시간복잡도: O(n)
- 연산횟수가 고정되어 있으므로, 시간복잡도는 O(1)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(s) {
  const len = s.length;

  if (len % 2 === 0) return s[(len - 2) / 2] + s[(len - 2) / 2 + 1];
  else return s[(len - 1) / 2];
}

console.log(solution("abcde"));
