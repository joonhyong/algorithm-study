/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 대문자와 소문자
유형: 문자열
날짜: 2026-09-15
Review 여부: false

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 각 문자들을 대문자는 소문자로, 소문자는 대문자로 변환한 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. for문 사용
    - answer 변수를 빈문자열로 초기화
    - for문으로 my_string을 순회하며 다음 작업을 수행
        - toUpper 변수에 현재 요소에 toUpperCase() 메서드를 적용시킨 값을 할당
        - toLower 변수에 현재 요소에 toLowerCase() 메서드를 적용시킨 값을 할당
        - 현재 요소와 toUpper를 비교하여 같다면, toLower를 answer에 더하기
        - 같지않다면, toUpper를 answer에 더하기
    - for문 종료 후 answer 반환

- 방식2. 배열로 변환 및 map() 메서드 사용
    - my_string에 split("") 메서드 적용
    - 해당 배열에 map() 메서드 적용, 콜백함수에서는 다음 작업을 수행
        - 현재 요소와 현재 요소에 toUpperCase()를 적용시킨 값이 같다면, toLoweCase()를 적용시킨 값을 반환
        - 같지않다면, toUpperCase()를 적용시킨 값을 반환
    - map() 메서드의 반환값에 join("")을 적용시킨 값을 반환


# ⏰ 시간복잡도 O(n)
- 방식1. for문 사용
    - for문은 my_string의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

- 방식2. map() 메서드 사용
    - split(), map(), join() 메서드의 시간복잡도는 각각 O(n)이다.
    - 연산은 순차적으로 수행되므로 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- toUpperCase(), toLowerCase() 메서드는 원본 문자열을 변경하지 않는 메서드
- JavaScript에서 문자열은 불변 자료형이며 문자열 메서드들은 원본 문자열 자체를 수정하지 않음

- 삼항 연산자는 사이드 이펙트를 발생시키는 용도보다는 조건에 따라 값을 선택하여 반환하는 경우에 적합함

# 💭 아쉬운 점
*/

function solution(my_string) {
  // 방식1. for문 사용 - 조건문
  /*
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    const toUpper = my_string[i].toUpperCase();
    const toLower = my_string[i].toLowerCase();

    if (my_string[i] === toUpper) answer += toLower;
    else answer += toUpper;
  }

  return answer;
  */

  // 방식 1-2. for문 사용 - 삼항연산자
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    answer +=
      my_string[i] === my_string[i].toUpperCase()
        ? my_string[i].toLowerCase()
        : my_string[i].toUpperCase();
  }

  return answer;

  // 방식2. map() 메서드 사용
  /*
  return my_string
    .split("")
    .map((item) => {
      return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    })
    .join("");
  */
}

console.log(solution("cccCCC"));
