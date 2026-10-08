/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 다음에 올 숫자
유형: 수학
날짜: 2026-10-08
Review 여부: false

# 📰 문제 설명
- 등차수열 혹은 등비수열 common 배열이 매개변수로 주어짐
- 마지막 원소 다음으로 올 숫자를 반환하는 함수 만들기

# 💡 문제 풀이
- 방식1. 등차수열의 합 공식
    - type 변수를 "+"로 초기화
    - len 변수를 common 배열의 길이로 초기화
    - common 배열의 요소들의 합과 등차수열의 합 공식을 통한 결과값을 비교한다.
        - sumCommon === common 배열의 요소들의 합: common.reduce((acc, cur)=> acc + cur, 0)
        - sumOfficial === 등차수열의 합 공식으로 구한 요소들의 합: common.length * (common[0] + common[common.length-1]) / 2
    - sumCommon !== sumOfficial이면 type에 "*" 할당 
    - switch문으로 type의 case에 따라 다음 작업을 수행
        - case "+": common[common.length-1] + common[1]-common[0]을 반환
        - case "*": common[common.length-1] * common[1]/common[0]을 반환

- 방식2. 1,2번째 항과 2,3번째 항의 차이를 비교
    - len 변수를 common 배열의 길이로 초기화
    - common[1]-common[0] === common[2]-common[1]의 결과에 따라 다음 작업을 수행
        - 같다면 등차수열 -> common[len-1] + common[1] - common[0] 반환
        - 다르다면 등비수열 -> common[len-1] * (common[1] / common[0]) 반환

# ⏰ 시간복잡도 O(N)
- reduce() 메서드를 제외한 연산의 시간복잡도는 O(1)이다.
- reduce() 메서드가 common 배열을 순회하므로 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- 등차수열의 합 공식: n * (a1 + an) / 2
- 등비수열의 합 공식: a * (r^n - 1) / (r - 1)

# 💭 아쉬운 점
- 첫번쨰항과 두번쨰항의 차이와 두번째항과 세번째항의 차이를 비교하는 방식으로도 등차수열 여부를 판단할 수 있었다.
- 해당 방법으로 풀면 전체 시간복잡도는 O(1)이다.

*/

function solution(common) {
  // 방식1. 등차수열의 합 공식 사용
  /*
  let type = "+";
  const len = common.length;
  const sumCommon = common.reduce((acc, cur) => acc + cur, 0);
  const sumOfficial = (len * (common[0] + common[len - 1])) / 2;

  if (sumCommon !== sumOfficial) type = "*";

  switch (type) {
    case "+":
      return common[len - 1] + common[1] - common[0];

    case "*":
      return common[len - 1] * (common[1] / common[0]);
  }
  */

  // 방식2. 1,2번째 항의 차이와 2,3번째 항의 차이를 비교
  const len = common.length;

  if (common[1] - common[0] === common[2] - common[1])
    return common[len - 1] + common[1] - common[0];
  else return common[len - 1] * (common[1] / common[0]);
}

console.log(solution([2, 4, 8]));
