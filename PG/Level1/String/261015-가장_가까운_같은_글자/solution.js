/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 가장 가까운 같은 글자
유형: 문자열
날짜: 2026-10-15
Review 여부: true

# 📰 문제 설명
- 문자열 s가 주어짐
- s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶은 상황
- 예시
    - 앞에 같은 문자가 존재하지 않는다면 -1
    - 2칸 앞에 같은 문자가 존재한다면 2
- 문자열의 각 문자에 대한 같은 문자 위치 값을 배열의 인덱스에 할당하여 배열을 반환

# 💡 문제 풀이
- answer 변수를 길이가 s.length이고 모든 요소를 -1로 갖는 배열로 초기화

- 중첩 for문으로 다음 작업을 순회
    - 외부 for문: s를 for문으로 순회하며 다음 작업을 순회
        - i===0이면 continue
        - cnt 변수를 0으로 초기화
        - s[i] 앞에 있는 문자열들을 for문으로 순회 
    - 내부 for문
        - 루프변수 j 범위: i-1 ~ 0, 감소
        - cnt++
        - s[j] === s[i]이면 answer[i] = cnt 및 continue

- for문 종료 후 answer 반환

# ⏰ 시간복잡도 O(N^2)
- 외부 for문은 s의 길이 만큼 반복하므로 O(N)
- 내부 for문은 최대 s-1의 길이 만큼 반복 하므로 O(N)
- 중첩 for문이므로 전체 시간복잡도는 O(N^2)이다. 

# 🚀 알게 된 점

# 💭 아쉬운 점
- 중첩 for문이 아닌 방법으로도 풀어보고싶다.

*/

function solution(s) {
  const answer = new Array(s.length).fill(-1);

  for (let i = 0; i < s.length; i++) {
    if (i === 0) continue;

    let cnt = 0;

    for (let j = i - 1; j >= 0; j--) {
      cnt++;
      if (s[j] === s[i]) {
        answer[i] = cnt;
        break;
      }
    }
  }

  return answer;
}

console.log(solution("banana"));
