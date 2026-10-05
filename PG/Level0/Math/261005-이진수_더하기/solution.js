/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 이진수 더하기
유형: 수학
날짜: 2026-10-04
Review 여부: false

# 📰 문제 설명
- 이진수를 의미하는 문자열 bin1, bin2가 주어짐
- 두 이진수의 합을 반환하는 함수 만들기

# 💡 문제 풀이
- answer 변수를 배열로 초기화 
    - 덧셈 결과값을 저장하는 용도
    - 배열의 길이는 bin1과 bin2 중 길이가 더 큰 쪽의 길이
    - 배열의 모든 요소는 0

- bin1과 bin2를 배열로 변환하여 각각 arr1, arr2에 할당
- 배열의 길이가 짧은 쪽에 길이의 차이만큼 0을 unshift()

- bin1과 bin2의 가장 끝자리 부터 덧셈을 수행
    - cnt 변수를 0으로 초기화
    - for문으로 arr1의 길이 만큼 반복
        - result 변수를 Number(arr1[i]) + Number(arr2[i])로 초기화 
        - cnt가 0이 아닌 경우 result++ 및 cnt = 0 할당
        - result의 결과값에 따라 다음 작업 수행
            - 2 미만인 경우: 덧셈 결과값을 answer 배열에 결과값 추가
            - 2 이상인 경우: 2로 나눈 나머지값을 answer 배열에 추가 및 cnt++

# ⏰ 시간복잡도 O(N^)
- 여기서 N은 bin1과 bin2 중 더 큰 길이의 값이다.
- 두 이진수의 길이를 맞춰주는 for문에서 최악의 경우 N의 제곱회 수행한다.
- 이진수의 덧셈을 수행하는 for문은 총 N회 반복한다.
- 따라서 전체 시간복잡도는 O(N^)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
- 문자열을 저장한 변수의 길이를 변수에 저장해놓고, 해당 문자열의 길이를 변형시켜 기존 변수의 의미를 퇴색시켰었다.
- padStart() 메서드를 통해 시간복잡도를 더 단순화 시킬 수 있었다.
*/

function solution(bin1, bin2) {
  const lenSub = Math.abs(bin1.length - bin2.length);
  const answer = [];
  let ceilCnt = 0;

  if (bin1.length !== bin2.length) {
    for (let i = 0; i < lenSub; i++) {
      if (bin1.length < bin2.length) bin1 = "0" + bin1;
      else bin2 = "0" + bin2;
    }
  }

  for (let i = bin1.length - 1; i >= 0; i--) {
    const a = Number(bin1[i]);
    const b = Number(bin2[i]);
    const result = a + b + ceilCnt;

    answer.push(result % 2);
    if (result > 1) ceilCnt = 1;
    else ceilCnt = 0;
  }

  if (ceilCnt > 0) answer.push(1);

  return answer.reverse().join("");
}

console.log(solution("1001", "1111"));
