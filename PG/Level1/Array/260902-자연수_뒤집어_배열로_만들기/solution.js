/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 자연수 뒤집어 배열로 만들기
유형: 구현
날짜: 2026-09-02
Review 여부: true

# 📰 문제 설명
- 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 반환하는 함수 만들기

# 💡 문제 풀이
- 방법1.
    0. 빈배열 answer 생성
    1. n을 문자열로 변환 -> String() 함수 사용
    2. 문자열을 배열로 변환 -> split() 메서드 사용
    3. 배열의 요소들을 거꾸로 뒤집기 -> for문으로 배열의 마지막 요소를 answer 배열에 추가
    4. 배열의 요소들을 문자열에서 숫자형으로 변환 -> map()  메서드 사용
    5. answer 배열을 반환

    - 방법2. reverse() 메서드 사용
    1. n을 문자열로 변환 -> String() 함수 사용
    2. 문자열을 배열로 변환 -> split() 메서드 사용
    3. 배열의 요소들을 거꾸로 뒤집기 -> reverse() 메서드 사용
    4. 배열의 요소들을 문자열에서 숫자형으로 변환 -> map()  메서드 사용
    5. 해당 배열을 반환

# ⏰ 시간복잡도: O(N)
- 해당 알고리즘에서는 for문, 배열을 순회하는 메서드만 사용하므로 시간복잡도는 O(N)이다.
- 여기서 N은 자연수 n의 길이이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 숫자연산을 이용한 풀이가 있었다.
- 10으로 나눈 나머지는 1의 자리의 숫자
- 10으로 나눈 몫을 통해 자릿수를 하나씩 줄임
- 해당 방법으로 1의 자리 숫자 부터 answer 배열에 push하고,
  기존의 n은 1의 자리 숫자 부터 줄여나간다.
*/

function solution(n) {
  // 방법1. for문 사용
  const answer = [];
  const arr = String(n).split("");
  const len = arr.length;

  for (let i = len - 1; i >= 0; i--) {
    answer.push(arr[i]);
  }

  return answer.map(Number);

  // 방법2. reverse() 메서드 사용
  /*
  const answer = String(n).split("").reverse().map(Number);

  return answer;
  */
}

console.log(solution(123));
