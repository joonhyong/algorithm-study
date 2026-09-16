/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 문자열 다루기 기본
유형: 문자열
날짜: 2026-09-16
Review 여부: false

# 📰 문제 설명
- 문자열 s가 주어짐
- s의 길이가 4 혹은 6이고 숫자로만 구성되었는지 확인해주는 함수 만들기
- 조건 충족 시 true 반환
- 그렇지 않을 경우 false 반환

# 💡 문제 풀이
- 방식1. if문과 for문 사용
  - if문
    - s.length === 4 OR s.length === 6인 경우 for문으로 이동
    - 아닌 경우 false 반환

  - for문
    - cnt 변수를 0으로 초기화
    - s를 순회하며 다음 작업을 수행
      - s[i]가 [0-9]에 속하는 경우 cnt++ 후 continue
      - 속하지 않는 경우 false 반환

  - for문 종료 후 cnt === s.length인 경우 true 반환

- 방식2. if문만 사용
  - if문 조건
    - s.length가 4 OR 6 이면서 s에 0부터 9까지의 숫자가 아닌 문자열을 포함하고 있지 않는 경우 true 반환
    - 그렇지 않으면 false 반환 

# ⏰ 시간복잡도 O(n)
- 방식1
  - `for`문은 최악의 경우 문자열의 길이만큼 반복하므로 O(n)이다.

- 방식2
  - 정규표현식으로 문자열 전체를 검사하므로 일반적으로 O(n)이다.

# 🚀 알게 된 점
- 정규표현식 (Regular Expression - RegEx)은 문자열에서 특정 패턴을 검색, 추출, 대체할 때 사용

- 정규표현식 만들기
  - 방식1. 리터럴 방식: `const regex = /abc/;`

  - 방식2. 객체 생성자 방식: `const regex = new RegExp("abc")`

  - 정규표현식과 자주 쓰이는 메서드
  1. regex.test(문자열) -> true/false 반환
    - 패턴이 포함되어 있는지 확인할 때 사용
    - 예시
      ```js
      const text = "Hello World";
      const hasHello = /Hello/.test(text);
      ```
    - `[]`는 문자 클래스. 내부에 지정된 문자 중 하나의 문자와 매칭됨
    - test() 메서드는 인자 문자열을 한글자씩 스캔함 -> 매칭 성공 시 즉시 종료

  2. 문자열.match(regex) -> 배열/null 반환
    - 매칭된 실제 값들을 추출해 올 때 사용
    - 예시
      ```js
      const text = "My phone is 010-1234-5678";
      const numbers =  text.match(/\d+/g); // \d+는 연속된 숫자 패턴
      ```
  3. 문자열.replace(regex, 바꿀문자열) -> 변경된 문자열 반환
    - 패턴에 맞는 부분을 다른 문자열로 치환할 때 사용
    - 예시
      ```js
      const text = "Apple, Banana, Orange";
      const result = text.replace(/Apple/g, "Orange");
      ``` 

- `^`의 위치에 따른 의미
  - `[]` 안에서 맨 앞: NOT을 의미. `[^0-9]` -> 숫자가 아닌 문자
  - `[]` 밖: 문자열의 시작을 의미. `^[0-9]` -> 문자열 시작에서 숫자

- AND 연산자가 OR 연산자 보다 우선순위 높음

# 💭 아쉬운 점
*/

function solution(s) {
  // 방식1. if문과 for문 분리
  /*
  if (s.length === 4 || s.length === 6) {
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
      if (/[0-9]/.test(s[i])) cnt++;
      else return false;
    }

    if (cnt === s.length) return true;
  } else return false;
   */

  // 방식2. if문에 정규표현식 test() 메서드 결과값 포함
  if ((s.length === 4 || s.length === 6) && !/[^0-9]/.test(s)) return true;
  else return false;
}

console.log(solution("a234"));
console.log(solution("1234"));
