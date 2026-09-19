/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 0
문제명: 한 번만 등장한 문자
유형: 문자열
날짜: 2026-09-20
Review 여부: false

# 📰 문제 설명
- 문자열 s가 주어짐
- s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 반환하는 함수 만들기

# 💡 문제 풀이
1. answer 변수를 빈배열로 초기화
2. map 변수를 new Map() 생성자의 결과값으로 초기화
3. for문으로 s를 순회하며 다음 작업을 수행
    - map의 Key로 존재하지 않는 문자라면 Value를 1로 갖는 Key로 추가
    - map의 Key로 존재한다면 해당 문자의 Value를 1 증가
4. for...of문으로 map.keys()를 순회하며 다음 작업을 수행
    - Value의 값이 1인 경우 해당 Key를 answer 배열에 추가
5. answer 배열에 sort() 메서드 적용한 값을 반환

# ⏰ 시간복잡도 O(n log n)
- 각 for문은 최대 s의 길이 만큼 반복하므로 각각의 시간복잡도는 O(n)이다.
- sort() 메서드의 시간복잡도는 O(n log n)이다.
- 전체 시간복잡도는 O(n log n)이다.

# 🚀 알게 된 점
- sort() 메서드의 시간복잡도는 O(n log n)이다.

# 💭 아쉬운 점

*/

function solution(s) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) map.set(char, map.get(char) + 1);
    else map.set(char, 1);
  }

  for (const key of map.keys()) {
    if (map.get(key) === 1) answer.push(key);
  }

  return answer.sort().join("");
}

console.log(solution("abcabcadc"));
