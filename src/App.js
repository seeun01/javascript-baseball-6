import { Console } from "@woowacourse/mission-utils";

class App {
  play(){
    Console.print("숫자 야구 게임을 시작합니다.")
  }
}
let app = new App();
app.play(); //숫자 야구 게임을 시작합니다.

export default App;