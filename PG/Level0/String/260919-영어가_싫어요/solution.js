/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 영어가 싫어요
유형: 문자열
날짜: 2026-09-19
Review 여부: true

# 📰 문제 설명
- 영어로 표기되어있는 숫자를 수로 바꾸려고 함
- 문자열 numbers가 주어짐
- numbers를 정수로 바꿔 반환하는 함수 만들기
- numbers는 소문자이며 길이는 1이상 50이하
- "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"들이 공백없이 조합되어있음

# 💡 문제 풀이
- 정규표현식과 replace() 메서드 사용
    - replace() 메서드의 첫번째 인자로 전달할 정규표현식
        ```js
        /zero|one|two|three|four|five|six|seven|eight|nine/g
        ```
    - replace() 메서드의 두번째 인자로 전달할 콜백함수
        ```js
        (word) => {
            switch(word) {
                case "one": return 1;
                case "two": return 2;
                case "three": return 3;
                case "four": return 4;
                case "five": return 5;
                case "six": return 6;
                case "seven": return 7;
                case "eight": return 8;
                case "nine": return 9;
            }    
        }
        ```
    - replace()메서드의 반환값을 숫자형으로 변환하여 반환


# ⏰ 시간복잡도 O(n)
- replace() 메서드는 문자열 전체를 탐색하므로 시간복잡도는 O(n)이다.
    - 문자열 탐색: 최대 n회
    - 각 위치에서 패턴 검사: 상수 시간
# 🚀 알게 된 점
- 정규표현식의 //안에서는 공백이 없어야함 (공백도 패턴의 일부로 인식하므로)
- replace() 메서드를 반환값에 이어서 호출 가능 (메서드 체이닝)
- replace() 메서드의 두번째 인자로 콜백함수 전달 가능

# 💭 아쉬운 점
- replace() 메서드 사용법이 서툴러서 혼자서 풀지 못했다. (GPT의 도움을 받음)
- 정규표현식을 비롯한 문자열 메서드에 대한 공부가 더 필요함을 느꼈다.
- replcae() 메서드 외에 다른 메서드를 이용한 방식도 알게되었다.

*/

function solution(numbers) {
  return +numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (word) => {
    switch (word) {
      case "zero":
        return 0;
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      case "four":
        return 4;
      case "five":
        return 5;
      case "six":
        return 6;
      case "seven":
        return 7;
      case "eight":
        return 8;
      case "nine":
        return 9;
    }
  });
}

console.log(solution("onefourzero"));
