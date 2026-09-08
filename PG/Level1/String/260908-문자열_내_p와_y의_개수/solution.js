/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 문자열 내 p와 y의 개수
유형: 문자열
날짜: 2026-09-08
Review 여부: false

# 📰 문제 설명
- 대문자와 소문자가 섞여있는 문자열 s가 주어짐
- 대소문자 구분없이 "p"의 개수와 "y"의 개수를 비교하여
- 같다면 true 반환, 다르다면 false 반환하는 함수 만들기

# 💡 문제 풀이
- s에 toLowerCase() 메서드 적용
- pCnt, yCnt 변수를 0으로 초기화
- for문으로 문자열을 순회하며 "p"라면 pCnt++, "y"라면 yCnt++
- pCnt와 yCnt를 비교하여 같다면 true 반환, 다르다면 false 반환

# ⏰ 시간복잡도: O(n)
- 주어진 문자열의 길이만큼 반복하므로 시간복잡도는 O(n)이다.

# 🚀 알게 된 점

# 💭 아쉬운 점
*/

function solution(s) {
  const str = s.toLowerCase();
  let pCnt = 0;
  let yCnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      pCnt++;
    } else if (str[i] === "y") {
      yCnt++;
    }
  }

  if (pCnt === yCnt) return true;
  else return false;
}

console.log(solution("pPoooyY"));
