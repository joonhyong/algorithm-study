/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 뒤집힌 문자열
유형: 문자열
날짜: 2026-08-19
Review 여부: false

# 📰 문제 설명
- 주어진 문자열을 거꾸로 뒤집은 문자열로 반환하는 함수 만들기

# 💡 문제 풀이
- 방법1. 문자열 역순회
    - 빈문자열("") answer 생성
    - 문자열의 길이를 저장하는 len 변수 생성
    - 반복문으로 my_string의 가장 마지막 인덱스부터 순회
    - 문자열을 순회할 때 마다 해당 문자열을 answer에 더해나가기

- 방법2. 문자열을 배열로 변환
    - 문자열을 배열로 변환 -> Array.from() 혹은 split() 메서드 사용
    - reverse() 메서드로 배열의 요소들을 거꾸로 뒤집기
    - join("") 메서드로 뒤집힌 배열을 문자열로 변환

# ⏰ 시간복잡도: O(n)
- 문자열의 길이 만큼 작업을 수행하므로, 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- reverse() 메서드는 원본 배열을 변환시킨다.

# 💭 아쉬운 점
 */

function solution(my_string) {
  // 방법1. 문자열 역순회
  /*
  let answer = "";
  const len = my_string.length;
  
  for (let i = len - 1; i >= 0; i--) {
    answer += my_string[i];
  }

  return answer;
  */

  // 방법2-1. 문자열을 배열로 변환 -> Array.from()
  /*
  const answer = Array.from(my_string).reverse().join("");

  return answer;
  */

  // 방법2-2. 문자열을 배열로 변환 -> split("")
  const answer = my_string.split("").reverse().join("");

  return answer;
}

console.log(solution("asdfghjkl"));
