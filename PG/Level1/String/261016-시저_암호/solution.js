/*
# 🧩 문제 정보
사이트: Programmers
레벨: Level 1
문제명: 시저 암호
유형: 문자열
날짜: 2026-10-16
Review 여부: false

# 📰 문제 설명
- 시저 암호: 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
- 문자열 s와 거리 n이 주어짐
- 문자열 s를 n만큼 민 암호문을 만드는 함수 만들기
- 공백 문자열은 그대로 유지한다.

# 💡 문제 풀이
- s의 각 문자열을 codePointAt() 메서드를 통해 유니코드 값으로 변환한 값들을 요소로 갖는 배열 생성
- 각 배열 요소들에 n을 더하고, 유니코드 범위를 넘는다면 대소문자에 맞게 넘는 범위 만큼 수정한 코드 값으로 변환
- 각 배열의 요소들에 fromCodePoint() 메서드를 통해 문자열로 변환
- 해당 배열에 join("")을 적용시킨 결과값을 반환

1. arr 변수를 []로 초기화
2. for문으로 s 문자열을 순회하며 각 자리의 문자열을 유니코드 값으로 변환하여 arr의 요소로 저장
3. for문으로 arr 배열을 순회하며 다음 작업을 수행
    - 각 요소의 값을 n씩 증가
    - arr[i]의 값이 65 이상 90 이하라면 다음 작업을 수행
        -  arr[i] + n > 90 이라면, String.fromCodePoint(64 + arr[i] + n - 90)의 결과값을 arr[i]에 할당
        - 아니라면 String.fromCodePoint(arr[i] + n)을 arr[i]에 할당
    - arr[i]의 값이 91 이상 116 이하
        - arr[i] + n > 116 이라면, String.fromCodePoint(90 + arr[i] + n - 116)의 결과값을 arr[i]에 할당
        - 아니라면 String.fromCodePoint(arr[i] + n) 을 arr[i]에 할당 
4. arr.join("")을 반환

# ⏰ 시간복잡도 O(N)
- arr.push(), codePointAt(), fromCodePoint() 메서드들의 시간복잡도는 O(1)이다.
- join()메서드의 시간복잡도는 O(N)이다.
- for문은 s의 길이만큼 순회하므로 시간복잡도는 O(N)이다.
- join() 메서드와 for문은 순차 수행되므로 전체 시간복잡도는 O(N)이다.

# 🚀 알게 된 점
- 알파벳 유니코드 범위
    - 대문자: A-Z -> 65-90
    - 소문자: a-z -> 97-122
- 문자를 유니코드로 바꾸는 메서드
    - 프로토타입 메서드 (Prototype Method): 실제 데이터(인스턴스)에 사용하는 메서드

    1. str.charCodeAt(index)
        - 역할: 지정한 인덱스에 있는 문자의 UTF-16코드(0 ~ 65535 사이의 정수)를 반환
        - 특징: 아스키코드 범위(0~127)의 문자는 아스키코드 값과 정확히 일치함
        - 한계: 이모지나 옛 한글처럼 2개의 코드 단위가 합쳐진 복합 문자(서로게이트 페어)의 경우, 정확한 값을 읽지 못함 -> 앞부분만 잘라서 반환
        - 예시
            ```js
                const str = "ABC";
                str.charCodeAt(0); // 65

                const emoji = "🍎";
                emoji.charCodeAt(0); // 55356 (전체 유니코드 X, 앞쪽 서로게이트 값 O)
            ```
    2. str.codePointAt(index)
        - 역할: 지정한 인덱스에 있는 문자의 전체 유니코드 코드 포인트(코드 값)을 정확하게 반환
        - 특징: charCodeAt()과 달리, 이모지, 특수 유니코드까지 온전하게 인식
        - 예시
            ```js
                const emoji = "🍎";
                emoji.codePointAt(0); // 127822 (정화한 유니코드 값)
            ```

- 유니코드를 문자로 바꾸는 메서드
    - 정적 메서드 (Static Method): 전역 객체에 직접 사용하는 메서드

    1. String.fromCharCode(num1, num2, ...)
        - 역할: UTF-16 코드 숫자를 받아 유니코드 문자열을 만듬
        - 한계: 이모지처럼 큰 범위의 유니코드는 문자 깸 현상 발생 가능
        - 예시
            ```js
                String.fromCharCode(65, 66, 67); // "ABC"
            ```
    2. String.fronCodePoint(num1, num2, ...)
        - 역할: 유니코드 코드 포인트 숫자를 받아 온전한 문자열을 반환
        - 특징: 이모지 코드 값을 넣어도 깨지지 않고 환벽한 문자로 합성해줌
        - 예시
            ```js
                String.fromCodePoint(127822); // "🍎"
            ```

# 💭 아쉬운 점
- n을 더했을 때의 코드값을 일반화시키는데 시간이 오래걸렸었다.
- 다른 문제들을 많이 접해봐야할 필요성을 느꼈다.

*/

function solution(s, n) {
  // 기존 코드
  /*
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") arr.push(" ");
    else {
      const code = s.codePointAt(i);

      if (code > 64 && code < 91) {
        if (code + n > 90) arr.push(String.fromCodePoint(code + n - 26));
        else arr.push(String.fromCodePoint(code + n));
      }

      if (code > 96 && code < 123) {
        if (code + n > 122) arr.push(String.fromCodePoint(code + n - 26));
        else arr.push(String.fromCodePoint(code + n));
      }
    }
  }

  return arr.join("");
  */

  // 리팩토링 코드
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      arr.push(" ");
      continue;
    }

    const code = s.codePointAt(i);

    if (code > 64 && code < 91) {
      arr.push(String.fromCodePoint(65 + ((code - 65 + n) % 26)));
    } else if (code > 96 && code < 123) {
      arr.push(String.fromCodePoint(97 + ((code - 97 + n) % 26)));
    }
  }
  console.log(arr);

  return arr.join("");
}

console.log(solution("a B z", 4));
