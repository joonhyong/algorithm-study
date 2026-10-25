/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: [1차] 비밀지도
유형: 구현
날짜: 2026-10-26
Review 여부: false

# 📰 문제 설명
- 지도 두장에 대한 정보 arr1, arr2과 지도의 한변의 길이 n이 주어짐
- 지도 두장을 겹쳐서 두장 중 한장이 벽이면 "#", 두장 모두 공백이면 " "
- arr1,과 arr2에는 n개의 요소가 들어있음
- 각 요소를 2진수로 변환하여 1부분이 벽, 0부분이 공백임
- 지도 두장을 통해 원래의 비밀지도를 해독하여 "#"과 " "으로 구성된 문자열 배열을 반환하는 함수 만들기

# 💡 문제 풀이
- answer 배열을 []로 초기화
- map1 변수를 arr1의 각 요소들을 2진수로 변환시킨 배열로 초기화
- map2 변수를 arr2의 각 요소들을 2진수로 변환시킨 배열로 초기화
- 중첩 for문
- 외부 for문
    - map1, map2를 순회
    - line 변수를 ""로 초기화
    - item1 변수를 map1[i]로 초기화
    - item2 변수를 map2[i]로 초기화
    - 내부 for문 종료 후 answer 배열에 line 추가
- 내부 for문
    - item1[j]과 item2[j] 모두 "0"이라면 line += "0"
    - item1[j]과 item2[j] 중 하나라도 "1"이라면 line += "1"

# ⏰ 시간복잡도 O(n^2)
- map1, map2를 만들떄 각각 O(n^2) 소요
    - map() 메서드는 arr1, arr2의 길이(n)만큼 순회 -> O(n) 소요
    - 순회하며 각 숫자를 n자리 문자열로 변환 -> O(2n) 소요
- 중첩 for문의 O(n^2) 소요
    - 외부 for문은 n회 반복 -> O(n) 소요
    - 내부 for문은 item1의 길이(n) 만큼 반복 -> O(n) 소요
- map() 메서드와 중첩 for문은 순차 수행되므로 전체 시간복잡도는 O(n^2)이다.

# 🚀 알게 된 점
- 2진수 문자열 -> 10진수 숫자 변환: parseInt(string, radix)의 두 번째 인자(radix)에 2 넣기
- 10진수 숫자 -> 2진수 문자열 변환: toString()의 인수로 2를 전달
- 문자열의 자릿수 채우는 메서드
    - 앞부분 채우기: padStart(목표길이, "채울문자")
    - 뒷부분 채우기: padEnd(목표길이, "채울문자") 

# 💭 아쉬운 점

*/

function solution(n, arr1, arr2) {
  const answer = [];
  const map1 = arr1.map((item) => item.toString(2).padStart(n, "0"));
  const map2 = arr2.map((item) => item.toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    let line = "";
    const [item1, item2] = [map1[i], map2[i]];

    for (let j = 0; j < item1.length; j++) {
      const value = item1[j] === "0" && item2[j] === "0" ? " " : "#";
      line += value;
    }

    answer.push(line);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
