/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 외계행성의 나이
유형: 해시
날짜: 2026-08-21
Review 여부: true

# 📰 문제 설명
- 외계행성에서는 나이를 알파벳으로 말함
    - 0은 a, 1는 b, 2는 c, ..., 9는 j
- age가 주어졌을 때 외계행성에서의 나이를 반환하는 함수 만들기
- age는 자연수

# 💡 문제 풀이
- 빈문자열("") answer 생성
- a는 0, b는 1, c는 2, ..., j는 9가 되도록 Key-Value쌍을 갖는 Map인 ageRules 생성
- age를 String()으로 변환
- age의 자리수만큼 반복하는 반복문 생성
- ageString를 순회하며 각 자리 숫자(문자)를 대응하는 ageRules의 Value를 answer에 추가
- 반복문 종료 후 answer 반환


# ⏰ 시간복잡도: O(n)
- Map.get()메서드는 평균적으로 시간복잡도가 O(1)임
- 해당 연산을 입력값의 자리수 만큼 반복하므로 시간복잡도는 O(n)이다.
- 이 때 n은 age의 자리수

# 🚀 알게 된 점
- JavaScript의 Map 자료구조

# 💭 아쉬운 점
- Map 자료구조 없이 숫자 0-9가 a-j와 1:1 대응하므로 배열만으로도 풀 수 있었다.
 */

function solution(age) {
  let answer = "";
  const ageString = String(age);
  const ageRules = new Map([
    ["0", "a"],
    ["1", "b"],
    ["2", "c"],
    ["3", "d"],
    ["4", "e"],
    ["5", "f"],
    ["6", "g"],
    ["7", "h"],
    ["8", "i"],
    ["9", "j"],
  ]);

  for (let i = 0; i < ageString.length; i++) {
    answer += ageRules.get(ageString[i]);
  }

  return answer;
}

console.log(solution(23));
