/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 문자열을 정수로 바꾸기
유형: 배열
날짜: 2026-08-28
Review 여부: false

# 📰 문제 설명
- 문자열 s를 숫자로 변환한 결과를 반환하는 함수 만들기
- s에 대한 조건
    - 길이는 1~5
    - 맨앞에오는 부호는 +, -
    - 부호와 숫자로만 이뤄짐
    - "0"으로 시작하지 않음

# 💡 문제 풀이
- 방법1. 단순 조건문 & 반복문 사용
    - 빈문자열 answer 생성
    - s의 인덱스 1 부터 마지막 인덱스 까지의 문자를 answer 변수에 더해나가기 -> for문 사용
    - answer 문자열에 Number() 함수를 통해 숫자로 변환
    - 문자열 s의 맨앞의 부호를 보고 맨마지막에 반환할 숫자의 부호를 결정
        - "+"인 경우 그대로 반환
        - "-"인 경우 단항 마이너스 연산자 - 붙여서 반환
- 방법2. splice() 메서드 사용
    1. s의 0번 인덱스 확인
    1-1. "-"인 경우
        - 그대로 s에 splice()메서

# ⏰ 시간복잡도 O(N)
- 입력값 s의 길이만큼 반복문이 실행되므로 시간복잡도는 O(N)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- JavaScript에서 숫자로만 이루어진 문자열 앞에 단항 플러스 연산자(+)나 단항 마이너스 연산자(-)를 붙이면, 
  자바스크립트 엔진이 이를 숫자로 강제 형변환(Type Coercion) 함.
- 이러한 특성으로 코드를 대폭 단순화 가능하였다.
*/

function solution(s) {
  let answer = "";

  if (s[0] === "-") {
    for (let i = 1; i <= s.length - 1; i++) {
      answer += s[i];
    }
    return -Number(answer);
  } else {
    for (let i = 0; i <= s.length - 1; i++) {
      answer += s[i];
    }
    return Number(answer);
  }
}

console.log(solution("1234"));
