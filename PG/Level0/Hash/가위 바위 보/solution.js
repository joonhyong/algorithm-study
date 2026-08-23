/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 가위 바위 보
유형: 해시
날짜: 2026-08-23
Review 여부: false

# 📰 문제 설명
- 가위: 2 / 바위: 0 / 보: 5 로 표현
- 가위 바위 보를 낸 순서가 문자열로 주어질 때,
- 해당 순서들을 이기는 순서를 문자열로 반환하는 함수 만들기 

# 💡 문제 풀이
- 문자열 rsp를 배열 rspArr로 변환
- rspArr의 길이를 변수 len에 저장
- 빈문자열 answer 생성
- 반복문으로 rspArr를 순회하며 각 요소의 Key에 해당하는 Value를 answer에 더함
- 반복문 종료 후 answer 반환

# ⏰ 시간복잡도: O(n)
- 입력값 문자열을 배열로 변환하는 작업은 시간복잡도가 O(n)이다.
- 반복문은 입력값 문자열의 길이 만큼 진행하고,
- 반복문 내부에서 수행하는 연산의 시간복잡도는 O(1)이다.
- 따라서 최종 시간복잡도는 O(n)이다.

# 🚀 알게 된 점
- 객체의 Key는 문자열 혹은 심볼로만 저장됨
- Key 부분이 "0"이 아닌 0으로 되어 있어도(숫자형으로 작성되어도) 문자열로 변환되어 저장됨
- 객체의 Value는 모든 자료형이 가능

# 💭 아쉬운 점
 */

const winForRsp = {
  2: "0",
  0: "5",
  5: "2",
};

function solution(rsp) {
  const rspArr = rsp.split("");
  const len = rspArr.length;
  let answer = "";

  for (let i = 0; i < len; i++) {
    answer += winForRsp[rspArr[i]];
  }

  return answer;
}

console.log(solution("205"));
