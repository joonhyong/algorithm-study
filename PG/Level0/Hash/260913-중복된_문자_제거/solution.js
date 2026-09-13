/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 중복된 문자 제거
유형: 문자열
날짜: 2026-09-13
Review 여부: false

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 중복된 문자를 제거한 문자열을 반환하는 문자열 만들기

# 💡 문제 풀이
- 방식1. Map 사용
    - my_map 변수에 new Map() 생성자로 Map 객체를 할당
    - for of문으로 my_string을 순회하며 다음 작업을 수행 
        - my_string을 순회하는 문자를 item이라 하자.
        - my_map.has(item)이 참이라면 continue (이미 등록된 문자이므로 스킵)
        - 거짓이라면 my_map.set(item)으로 Key 등록
    - for문 종료 후 변수 answer에 my_map을 스프레드 연산자를 통해 만든 배열에 join("") 메서드 적용한 결과값 반환

- 방식2. Set 사용
    - my_set 변수에 new Set() 생성자에 my_string을 인수로 전달한 결과값을 할당
    - my_arr 변수에 ...my_set 값을 할당
    - my_arr 변수에 join("") 메서드 적용하여 반환

# ⏰ 시간복잡도: O(n)
- for문, new Set() 생성자, Array.from() 메서드, join() 메서드 모두 
- 입력값 my_string의 길이에 비례하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- Map의 keys() 메서드는 Map의 모든 Key를 포함하는 이터레이터(MapIterator) 반환한다.
- Map의 values() 메서드는 Map의 모든 Value를 포함하는 이터레이터(MapIterator) 반환한다.
- Set에 초기값 지정시에는 반복가능한 객체(배열, 문자열 등)을 인수로 전달한다.

# 💭 아쉬운 점
*/

function solution(my_string) {
  // 방식1. Map 사용
  /*
  const my_map = new Map();

  for (const item of my_string) {
    if (my_map.has(item)) continue;
    else my_map.set(item);
  }

  return Array.from(my_map.keys()).join("");
  */

  // 방식2. Set 사용
  return Array.from(new Set(my_string)).join("");
}

console.log(solution("We are the world"));
