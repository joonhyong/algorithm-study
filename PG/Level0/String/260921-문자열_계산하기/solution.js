/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 문자열 계산하기
유형: 문자열
날짜: 2026-09-21
Review 여부: true

# 📰 문제 설명
- 문자열 my_string이 주어짐
- 문자열은 "3 + 5"처럼 수식의 형태로 주어짐
- 해당 수식을 계산한 값을 반환하는 함수 만들기
- 조건
    - 연산자는 + 혹은 -만 존재
    - 문자열의 시작과 끝에는 공백이 없음
    - 0으로 시작하는 숫자는 주어지지 않음
    - 잘못된 수식은 없음
    - 연산자는 적어도 하나 포함되어 있음

# 💡 문제 풀이
- my_array 변수를 my_string을 split(" ")을 적용시킨 배열로 초기화
- answer 변수를 Number(my_array[0])으로 초기화
- for문으로 my_array 순회하며 다음 작업을 수행
    - 루프 변수 i는 1부터 순회 my_array.length - 2까지 순회
    - 루프 변수 i는 2씩 증가
    - 만약 my_string[i]의 값이 "+"이면, answer에 Number(my_array[i+1]) 값을 더하기
    - 그렇지 않다면 answer에 Number(my_array[i+1]) 값을 빼기
- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N)
- for문은 my_array의 길이 - 1을 2로 나눈 횟수만큼 반복한다.
- 계수는 무시하므로 전체 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 스택을 이용한 방법을 풀이법을 알게되었다. 시간이 지난 후 스스로 시도해 볼 예정이다.

# 💭 아쉬운 점
*/

function solution(my_string) {
  const my_array = my_string.split(" ");
  let answer = Number(my_array[0]);

  for (let i = 1; i <= my_array.length - 2; i += 2) {
    if (my_array[i] === "+") answer += Number(my_array[i + 1]);
    else answer -= Number(my_array[i + 1]);
  }

  return answer;
}

console.log(solution("3 + 4"));
