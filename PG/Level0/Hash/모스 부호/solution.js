/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 모스부호(1)
유형: 해시
날짜: 2026-08-23
Review 여부: false

# 📰 문제 설명
- 모스 부호가 문자열 letter로 주어짐
    - 모스 부호는 공백으로 나뉘어 있으며 공백은 연속으로 두 개 이상 존재하지 않음
    - 해독할 수 없는 편지는 주어지지 않음
    - letter의 시작과 끝에는 공백이 없음
- 모스 부호 letter를 영어 소문자로 바꾼 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
- morse 객체 생성
    - 모스 부호를 Key로 갖고, 영어 소문자를 Value로 가짐
- letter를 공백으로 구분하여 각 문자열들을 요소로 갖는 배열 생성
- 해당 배열의 요소들을 순회하며, 각 요소에 해당하는 Value들을 빈배열 morseArr에 추가
- morseArr를 join("")을 통해 각 요소들을 이어붙인 문자열로 변환
- 해당 문자열을 반환

# ⏰ 시간복잡도: O(n)
- 입력값 문자열을 배열로 변환하는 작업은 시간복잡도가 O(n)이다.
- 반복문은 입력값 문자열의 길이 만큼 진행하고,
- 반복문 내부에서 수행하는 연산의 시간복잡도는 O(1)이다.
- O(2n)이므로 최종 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
 */

const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter) {
  const letterArr = letter.split(" ");
  const morseArr = [];
  const len = letterArr.length;

  for (let i = 0; i < len; i++) {
    morseArr.push(morse[letterArr[i]]);
  }

  const answer = morseArr.join("");

  return answer;
}

console.log(solution(".... . .-.. .-.. ---"));
