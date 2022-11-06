# precourse
 우아한테크코스[5기] 프리코스를 수료하며 배운 점 
### 프리코스에서 배울 수 있는 건 다 배워가자..!!📚📚

혼자 학습을 해오다보니 이런 기회가 많지 않았다. 올해는 감사히 모든 신청자에게 프리코스의 기회를 주셨다!!!
_
"오히려조아"😏_

**기대가 된다 빨리 배우고싶다!!**


> 가장 중요한건 기죽지 않고 끝까지 도전하기!! 
나보다 잘하는 사람이 많더라도 
비교말고 내 템포로 끝까지 완료하자!

----

우테코 4시 프론트엔드과정 후기에

**_"일단 쓰레기 코드라도 작성해라!"_**

라는 글을 보았다. 각 미션마다 요구하는 기능이 다르고 이를 기능별로 커밋 해야 하기 때문에 요구사랑을 처음부터 지키려하지말고 일단 만들고 쳐내는 식으로 해보자!!🔥🔥

> **MVC 패턴을 학습해보자 !! 이를 기준으로 모듈화를 한다면 확실한 모듈기준이 생길것이다!**



---


# <span style="color: yellowgreen">코드 컨벤션 연습</span>

코드 컨벤션은 읽고 관리하기 쉬운 코드를 작성하기 위한 코딩 스타일 규약!
(협업 할 때 코드를 읽기 쉽게 만들어주는 하나의 규칙..!)

## 1. 변수와 함수의 이름을 정하기  
### 카멜케이스, 파스칼 표기법, 헝가리안 표기법, 스네이크 표기법

**rocket launch duration**

1. 카멜케이스 => 첫 단어는 소문자로 시작하고 두 번째 단어부터 대문자로 시작한다!
ex =>  roketLaunchDuration

2. 스네이크 표기법 => ex=> roket_launch_duration

3. 파스칼 표기법 => ex => RoketLaunchDuration

**주로 카멜 케이스를 사용한다! (상수 일때만 스네이크 표기법)**

## 2. Const , Let 

### const를 let 보다 위에 선언한다

## 3. 배열과 객체는 반드시 리터럴로 선언한다!

## 4. 모듈 

항상 import와 export를 이용한다.

```
// Best
import {es6} from './AirbnbStyleGuide';
export default es6;
```
import문으로부터 직접 export하지 않는다.

한 줄로 표현되어 간결하기는 하지만, import와 export 하는 방법을 명확하게 구분함으로써 일관성을 유지하자.
```
// Bad
export {es6 as default} from './airbnbStyleGuide';
```

## 5. for문 

키워드와 조건문 사이에 빈칸을 사용한다.
키워드와 조건문 사이가 빼곡하면 코드를 읽기 어렵다.
```
// Bad
var i = 0;
for(;i<100;i+=1) {
  someIterativeFn();
} 

// Good
var i = 0;
for(; i < 100; i+=1) {
  someIterativeFn();
} 
```

반복을 위한 변수를 미리 선언한다

```
// Bad
for (var i = 0; i < array.length; i += 1) ...

// Bad
for (var i in array) ...

// Good
var i, len
for (i = 0, len = array.length; i < len; i += 1) ...

// good
var key;
for (key in object) ...
``` 

 ### 기타 깨알 코드 지식
 
reduce(누적값,현재값) : 누적값을 리턴해 줄 수 있다.
forEach는 return이 먹히지 않는다.
string과 toString은 사실상 같다고 봐도 된다.
toString은 인자를 하나 받는데 이에 따라 숫자의 표현방식이 달라진다 (이진법 십진법 )


참고: https://ui.toast.com/fe-guide/ko_CODING-CONVENTION

## 2주차 미션 MVC모델설계

![8E950DD8-BA8C-4B6F-ABE4-2B206D06FB6E_1_105_c](https://user-images.githubusercontent.com/101778169/200177847-fb5750ff-a599-4451-884e-ddb8e6cea89f.jpg)


## TDD

테스트 코드를 먼저 짜서 기능별로 컴포넌트를 나눠 코드를 구성할때 더 편리하게 한다.
jest를 이용해 코드를 짜보는 경험을 했다. 다른 branch에 있어 아직은 가져오지 못했지만

프리코스가 끝나면 한꺼번에 업로드해야겠다! 

TDD를 지키며 코드를 짜다보니 한 가지 좋은 점은 계속해서 기능목록을 수정할 수 있다는 점이다. 

기능 목록에서 필요한 부분이 계속 추가되고 더 함수를 작게 나눠볼 수 있었다. 이는 후에 컴포넌트별로

코드를 짤 때 유용함으로 작용할 것같다. 

가장 좋은 점은 내가 구현해야하는 기능들을 다시한번 리마인드하면서 구조의 맥락을 더 잘 이해할 수 있다는 점이다.

<테스트 코드 일부>
```js
const MissionUtils = require("@woowacourse/mission-utils");
describe("게임 결과에 따라 유저에게 입력받기", () => {
  test("User로 부터 1과 2중 하나의 입력을 받는 함수 테스트", (done) => {
    function callback() {
      MissionUtils.Console.readLine("1은 재시작 2는 종료입니다", (number) => {
        expect(number).toBe(number);
        done();
      });
    }
    callback();
  });
  test("number를 각 자릿수마다 string으로 변경 후 배열로 묶기 ", () => {
    function numToArr(num) {
      return [...String(num)];
    }
    expect(numToArr(123)).toEqual(["1", "2", "3"]);
  });

  test("유저가 1과 2의 숫자만을 입력했는지 확인", () => {
    function checkNumRange(userNum) {
      if (/^[1-2]*$/g.test(userNum.join("")) === false) {
        return false;
      } else if (/^[1-2]*$/g.test(userNum.join("")) === true) {
        return true;
      }
    }
    expect(checkNumRange(["1", "2", "3"])).toEqual(false);
    expect(checkNumRange(["1", "2"])).toEqual(true);
    expect(checkNumRange(["@"])).toEqual(false);
  });

  test("유저의 입력값이 한 개 인지 확인 ", () => {
    function checkNumLength(userNum) {
      if (userNum.length !== 1) {
        return false;
      } else if (userNum.length === 1) {
        return true;
      }
    }
    expect(checkNumLength(["1", "2"])).toEqual(false);
    expect(checkNumLength(["1"])).toEqual(true);
  });

  test("false 시 에러문구 보내기 검사", () => {
    function errorCatch(boolean) {
      if (boolean === false) {
        throw new Error("Invalid");
      }
    }
    expect(() => errorCatch(false)).toThrow("Invalid");
  });

  test("1,2의 선택에 따라 재시작/종료 요청", () => {
    function replayOrEnd(userChoice) {
      if (userChoice === 1) {
        return "재시작함수";
      }
      if (userChoice === 2) {
        return "종료함수";
      }
    }

    expect(replayOrEnd(1)).toBe("재시작함수");
    expect(replayOrEnd(2)).toBe("종료함수");
  });
});

```


