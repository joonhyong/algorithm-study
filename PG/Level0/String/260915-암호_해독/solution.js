/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 암호 해독
유형: 문자열
날짜: 2026-09-15
Review 여부: false

# 📰 문제 설명
- 암호화된 문자열 cipher와 정수 code가 주어짐
- cipher의 code 배수번째 문자들을 합친 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- 변수 answer를 빈문자열로 초기화
- 변수 i를 code - 1로 초기화
- while문으로 다음 작업을 수행
    - 조건식: i <= cipher.length - 1
    - cipher[i]를 answer에 더하기
    - i += code;
-while문 종료 후 answer 반환

# ⏰ 시간복잡도 O(n)
- while문은 code가 1인 경우 cihper의 길이 만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- ES6 문법 활용: filter() 메서드 사용하는 방법을 알게되었다.

# 💭 아쉬운 점
*/

function solution(cipher, code) {
  let answer = "";
  let i = code - 1;

  while (i <= cipher.length - 1) {
    answer += cipher[i];
    i += code;
  }

  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
