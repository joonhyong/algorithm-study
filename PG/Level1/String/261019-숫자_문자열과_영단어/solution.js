/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 숫자 문자열과 영단어
유형: 문자열
날짜: 2026-10-19
Review 여부: false

# 📰 문제 설명
- 숫자 놀이 룰
    - 숫자를 건낼 때 일부 자릿수를 영단어로 바꾼 카드를 건네줌
    - 여기서 원래 숫자를 찾는 게임
- 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 바뀌지 않고 그대로인 문자열 s가 주어짐
- s가 의미하는 원래 숫자를 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 ""로 초기화
- map 변수를 new Map(["zero", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]) 으로 초기화

- 만약 isNaN(s)가 false라면 Number(s)를 반환
- true라면 다음 작업을 수행
    1. word 변수를 ""로 초기화
    2. for문으로 s를 순회하며 다음 작업을 순회
        - word += s[i]
        - 만약 map.has(word)가 true라면 answer += String(map.get(word)))
        - word = ""
- for문 종료 후 Number(answer) 반환

# ⏰ 시간복잡도 O(N)

# 🚀 알게 된 점

# 💭 아쉬운 점

*/

function solution(s) {
  // 첫번째 풀이
  /*
     let answer = "";
    let reader = "";
    
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        reader += s[i];
        switch (reader) {
          case "zero":
            answer += "0";
            reader = "";
            break;
          case "one":
            answer += "1";
            reader = "";
            break;
          case "two":
            answer += "2";
            reader = "";
            break;
          case "three":
            answer += "3";
            reader = "";
            break;
          case "four":
            answer += "4";
            reader = "";
            break;
          case "five":
            answer += "5";
            reader = "";
            break;
          case "six":
            answer += "6";
            reader = "";
            break;
          case "seven":
            answer += "7";
            reader = "";
            break;
          case "eight":
            answer += "8";
            reader = "";
            break;
          case "nine":
            answer += "9";
            reader = "";
            break;
        }
      } else answer += s[i];
    }
    return parseInt(answer);
     */

  // 두번째 풀이
  let answer = [];
  const map = new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);

  if (!isNaN(s)) return Number(s);

  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) word += s[i];
    else answer.push(s[i]);

    if (map.has(word)) {
      answer.push(map.get(word));
      word = "";
    }
  }

  return Number(answer.join(""));
}

console.log(solution("one4seveneight"));
