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

### Class에 대해 학습

이전에 독학하면서 Todolist를 만들 때 모듈화로 코드를 구성해보는 경험을 해본 적이

있었다. 그렇지만 그땐 class를 사용하지 않고 생성자 함수 function을 사용했기에

class를 먼저 학습했다.

[애플코딩의 class강의](https://www.youtube.com/watch?v=dHrI-_xq1Vo) 
[class 정리 블로그](https://jongdai.tistory.com/67)

위 두 콘텐츠에서 기본적인 class 문법에 대해 익히고 코드를 짜면서 학습했다.

**직접 코드를 짜면서 가장 많이 배운 거 같다!**

> 내가 정의 하는 Class문법은 **_뭉탱이 묶기이다_**

Class 문법을 사용하면 자주 쓰이는 함수나 변수를 묶기에 좋다

this는 constructur에서 관리해서 이전의 function 으로 this를 관리했을 때 보다

더 좋은 가독성을 느꼈다. Class 내부의 함수들은 분리가 되어 각각의 기능을

한눈에 보기에 좋았다. 

> 처음: 아 this를 어떻게 관리하지..
 깨달은 후 : 내가 왜리허게 this에 집착하지?
 
 ![](https://velog.velcdn.com/images/tkdgk1996/post/fb877b74-8c84-4a0c-b979-e8771ec950d5/image.jpeg)


코드를 짜면 짤수록 계속 골이 깊어지는 경험을 했다. Class문법이니까 this를

사용해야겠다는 그런 생각이 자꾸 들었던게 잘못이었던 거 같다.


그걸 깨닳기 전 this로 최대한 데이터를 주고받으며 코드를 짰는데,, 

Controller 역할을 하는 함수에서 가독성이 떨어지고 this 범벅의 Class를

발견하고 한번 엎고 다시 리팩토링하여 불필요한 this를 최소화 했다. 

이런 경험을 통해 this를 오히려 더 잘 다룰 수 있게 된 거 같다. 

### this랑 더 친해지기

![](https://velog.velcdn.com/images/tkdgk1996/post/773ab7bd-2acb-4ddf-93d7-015f5f9d7893/image.jpeg)


학습을 하기 전 this는 그저 해당 함수를 부른놈 또는 해당 변수를 부른놈! 

이렇게 그냥 외웠던 거 같다. 그렇게 하다 보니 this 내부의 this가 호출된 경우 

this를 잘 구별하기 힘들었고 this를 통해 값을 주고받으면서 사용하며 

내 나름의 this 분별법과 this의 장점을 알게되었다

> This는 어떤 값에 대한 변화를 다룰 때 사용하면 편리하게 사용할 수 있겠다!!

값을 변화시키고 다시 렌더링을 하는 함수가 있다면 그런 함수를 사용할때 this를 

사용하면 더 편리하겠다는 생각이 들었다. 숫자야구게임은 값을 변화시킨다기 보단

주어진 값에 대한 결과를 print하면 되게 때문에 this가 많이 필요 없었던 거 같다.

_**내 생각이 틀릴 수 도 있으니 이는 우테코 커뮤니티를 통해 더 알아봐야겠다!!**_

### 모듈화에 종류가 있구나?

이제 Class도 알고 this도 아니까 모듈화만 잘 하면 되겠다!! 하고 이제 모듈화를 시작하려 했는데..

미션에서 제공해준 라이브러리를 불러오는데 2가지의 방식이 있었다. 

**CommonJS 방식과 ES6 **

어떤 걸 선택해야하나 고민돼 모듈화의 종류에 대해 학습을 했다.

[CommonJS 모듈화 강의](https://www.youtube.com/watch?v=5NXEXkIrkAk&ab_channel=%EC%A7%90%EC%BD%94%EB%94%A9%EC%9D%98CODINGGYM)
[모듈화 정리 블로그](https://baeharam.netlify.app/posts/javascript/module)

> 모듈화의 종류 
CommonJS
ES6
AMD
UMD

#### CommonJS 

ES6 방식의 모듈화가 나오기 전에 주로 이방식이 많이 쓰였다고 한다

각각 서로 모듈을 불러오거나 내보낼땐 require, module.exports를 사용한다.

> const  모듈이름 = require(모듈주소)

> module.exports= 모듈이름 

결국 ES6에서 import export하는 방식과 배우 흡사함에 반가웠지만 .. 초반에는 

require() 로 받아와서 어떻게 모듈을 사용해야하는지 확신이 없었다

또, 한 개의 변수나 함수를 내보내고 싶다면 exports.함수명 = 

또는 module.exports={함수명} 이렇게 보낼 수 있다.

이번주에는 모듈화를 정말 많이 해볼 수 있어서 많이 배울 수 있었다.

가장 헷갈렸던 부분은 ..

**require is undefined 였다!!!**

진짜 이 오류 때문에 하루는 고생한 거 같다!! 그렇지만 지금은 안다!!!


#### require은 브라우저에서 안돼!!

 평소 프로그램이 잘 돌아가는지 확인할때 늘 브라우저를 켜서 console 창에

그 값을 비교하며 코딩을 해나갔다. 이번 미션을 수행하면서 CommonJS방식의 

모듈화를 진행하면서 node.js에 대해 처음 알게되었다. 개발자를 꿈꾸면서 이를 

처음 알게된 것도 부끄러웠지만 오히려 이 기회를 통해 제대로 배워보고자 

브라우저와 node.js의 차이를 학습하였다. 

> Browser vs Node.js 차이점
1. 각 환경에서 제공하는 API의 차이 
브라우저의 경우 사용자에게 웹 페이지를 보여주는 것이 목적!  그렇기 때문에 HTML요소를 조작하는 DOM API를 제공한다. 이와 달리 Node.js는 주로 서버에서 데이터를 다루는 목적으로 사용되기 때문에 로컬 스토리지에 파일을 생성하고 수정하는 File시스템 관련 API가 제공된다.


> 2. 자바스크립트엔진의 차이(이는 아직 잘이해를 못햇다..) 


> 3. 모듈 키워드의 차이!!
Node.js에서 CommonJS 모듈 시스템을 사용하는 반면, 브라우저는 ES 모듈 표준을 사용하고 있다. 즉, Node.js에서는 require()를, 브라우저에서는 import를 이용하여 다른 파일의 코드를 불러올 수 있다.

[Browser vs Node.js 블로그 정리글](https://velog.io/@gwanuuoo/node.js%EC%99%80-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%B0%A8%EC%9D%B4)

 이를 모른 상태로 계속 오류가 발생하니 멘붕이었다..! 
 
 이 경험을 통해 node.js와 친해질 수 있는 계기가 되었고 브라우저에 대해서도
 
 공부할 수 있어 좋았다.
 
 #### MVC 패턴과 더 친해지기 
 
  1주차는 알고리즘 문제에 가까운 미션이었다면 이번 과제는 게임을 만드는 과제
  
  였기 때문에 더더욱 MVC 패턴을 잘 지켜보고싶었다. 그래서 많은 설계 끝에 MVC 패턴을 완성할 수 있었다..
  
  ![](https://velog.velcdn.com/images/tkdgk1996/post/e4fd6674-22ce-4738-8bd4-d7f892d7a8a6/image.jpeg)

처음 설계했던 MVC 패턴이다...부끄럽지만 이렇게 대략적인 틀을 먼저 짜고 

그 후 컴포넌트를 구체적으로 나눴다. 그 후 함수를 기능별로 나눴다. 

최종 나의 MVC 패턴은 
![](https://velog.velcdn.com/images/tkdgk1996/post/0700ce4c-f03b-4bf2-9d2e-34a4ea0036e6/image.jpg)

이렇게 틀을 짤 수 있었다 먼저 틀을 짜고나니 함수들이 해야할 역할들을 나누기 편리했다.

#### TDD ?? TDD!! 

프로그래밍을 공부하면서 TDD는 처음 들어봤다. 내가 이해하는 TDD는

_**코드의 오류를 먼저잡는 콩고물이다!! **_

테스트코드를 통해 오류를 잡고 그 테스트코드의 잔여물을 이용해 코드의 재사용성을

높이는 굉장히 프로그래머스러운 코딩방법이다!! 🧑‍💻

Jest라는 테스트 도구를 처음 사용해봐서 테스트의 효율성이 많이 떨어졌던 거 같다..

이렇게 테스트 하는 것 보다 더 효율적인 테스트 코드가 있을텐데.. 라는생각이

계속해서 들었다. 

[Jest강의](https://www.youtube.com/watch?v=g4MdUjxA-S4)

위 강의를 계속해서 들었지만 내가 원하는 방식의 테스트를 하려면 더 추가적인 

학습이 필요했고 시간관계상 다 학습하지 못해 아쉬운 마음이 많이 든다. 

**확실한건 TDD를 잘 짠다면 일의 효율성이 분명 늘어날 것이라는 점이다.**

이번 주 미션을 하며 테스트 코드를 한번 갈아엎고 두번의 테스트 코드를 짰다.😭

3주차에는 TDD를 더욱 적용해서 시작할 때부터 테스트 코드를 잘 짜도록 노력해

야겠다!!
