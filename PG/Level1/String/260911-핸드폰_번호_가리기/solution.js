/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 핸드폰 번호 가리기
유형: 문자열
날짜: 2026-09-11
Review 여부: false

# 📰 문제 설명
- 전화번호가 문자열 phone_number가 주어짐
- 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 "*"로 가진 문자열을 반환하는 함수 만들기
- phone_number의 길이는 4이상 20이하이다.

# 💡 문제 풀이
- 방식1. 배열 메서드 사용 - split(), splice(), join() 메서드
    1. phone_number의 길이를 len 변수에 저장

    2. back_number: phone_number의 뒷자리 4자리를 문자열 형태로 갖는 변수
        - phone_number에 split() 메서드를 적용시킨 배열을 phone_arr에 할당
        - phone_arr에 splice() 메서드로 `len - 4`번 인덱스 부터 마지막 인덱스 까지의 요소 잘라낸 후 join() 메서드를 적용시켜 back_number 변수에 저장

    3. front_number: 길이가 `phone_number - 4` 이면서 각 문자가 "*"로 구성된 문자열 
        - front_number에 new Array(len-4).fill("*")의 결과값에 join() 메서드를 적용시킨 결과값을 할당

    4. front_number와 back_number를 붙인 문자열을 반환

- 방식2. 문자열 메서드 사용 - repeat(), slice() 메서드

# ⏰ 시간복잡도: O(n)
- 연산횟수가 phone_number 문자열의 길이에  비례하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- repeat() 메서드
    - 문자열을 지정한 횟수만큼 반복하여 이어붙인 문자열을 반환하는 메서드
    - 원본 문자열은 그대로 두고 새로운 문자열 반환
    - 형식: `str.repeat(n)`

- slice() 메서드
    - 문자열의 특정 구간을 잘라내어 해당 부분의 문자열을 반환하는 메서드
    - 원본 문자열은 그대로 두고 새로운 문자열 반환
    - 형식: str.slice(시작_인덱스, 마지막_인덱스+1)
    - 두번째 인수 생략시 마지막 요소까지 잘라냄  
    - 배열에서도 사용 가능

# 💭 아쉬운 점
- repeat() 메서드와 slice() 메서드를 통해 더 간결한 방식의 풀이법을 알게되었다.
- 해당 방법을 통해 배열로 변환시키는 불필요한 과정을 없앨 수 있었다.
*/

function solution(phone_number) {
  // 방식1. 배열 메서드 사용
  /*
  const len = phone_number.length;

  const front_number = new Array(len - 4).fill("*").join("");
  const back_number = phone_number
    .split("")
    .splice(len - 4)
    .join("");


  return front_number + back_number;
  */

  // 방식2. 문자열 메서드 사용
  const len = phone_number.length;

  const front_number = "*".repeat(len - 4);
  const back_number = phone_number.slice(len - 4);

  return front_number + back_number;
}

console.log(solution("01033334444"));
