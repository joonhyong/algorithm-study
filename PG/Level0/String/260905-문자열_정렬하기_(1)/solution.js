/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열 정렬하기 (1)
유형: 문자열
날짜: 2026-09-05
Review 여부: true

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 해당 문자열에 있는 숫자만 골라 오름차순으로 정렬한 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- 빈배열 arr 생성
- my_string을 순회하며 숫자인 경우 숫자형으로 변환하여 arr에 추가
- arr에 sort() 메서드 적용
- arr 반환

# ⏰ 시간복잡도: O(n)
- 입력값의 길이에 따라 반복횟수가 정해지므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 문자열 검사 방법
- 방식1. 정규 표현식 사용
  - ` /정규표현식_패턴/.test("검사할_문자열"); `
- 방식2. includes() 메서드 사용
  - ` "검사할_문자열".includes("검사할_문자") `
- 방식3. replace() 메서드 사용
  - ` "검사할_문자열".replace(//) ` 

- 정규표현식_패턴에 쓰이는 옵션
  - [] (대괄호)
    - 이 안의 문자 중 아무거나 딱 한 글자
    - 하이픈(-)으로 범위 지정 가능 (예: [0-9], [a-z])
  - ^ (캐럿)
    - 대괄호 안 `[^0-9]` : 숫자가 아닌 것 (NOT)
    - 대괄호 밖 `/^abc/` : abc로 시작해야한다는 의미
  - g (Global 플래그) : 전체 매칭
    - 매칭되는 걸 끝가지 다 찾으라는 의미
    - 해당 옵션이 없는 경우, 첫번째 문자만 찾아내고 검사를 끝냄
    - replace()에서는 필수, test()에서는 지양
# 💭 아쉬운 점
*/

function solution(my_string) {
  // 방식1. 조건문 + || 연산자
  /*
  const arr = [];

  for (let i = 0; i < my_string.length; i++) {
    if (
      Number(my_string[i]) === 0 ||
      Number(my_string[i]) === 1 ||
      Number(my_string[i]) === 2 ||
      Number(my_string[i]) === 3 ||
      Number(my_string[i]) === 4 ||
      Number(my_string[i]) === 5 ||
      Number(my_string[i]) === 6 ||
      Number(my_string[i]) === 7 ||
      Number(my_string[i]) === 8 ||
      Number(my_string[i]) === 9 ||
      Number(my_string[i]) === 0
    ) {
      arr.push(Number(my_string[i]));
    }
  }

  arr.sort((a, b) => a - b);

  return arr;
  */

  // 방식2. 정규 표현식
  /*
  const arr = [];

  for (let i = 0; i < my_string.length; i++) {
    if (/[0-9]/.test(my_string[i])) arr.push(Number(my_string[i]));
  }

  arr.sort((a, b) => a - b);

  return arr;
  */

  // 방식3. replace() 메서드
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  return answer;
}

console.log(solution("hi12392"));
