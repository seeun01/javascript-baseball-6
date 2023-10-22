import { Console, Random } from "@woowacourse/mission-utils";

class App {
  play(){
    Console.print("숫자 야구 게임을 시작합니다.")
    this.ComputerCreateNumber();
  }

  ComputerCreateNumber(){
    const computerArr = [];
    while(computerArr.length < 3){
      const number = Random.pickNumberInRange(1,9);
      if(!computerArr.includes(number)){
        computerArr.push(number);
      }
    }
    const computer = computerArr.join('');
    Console.print(computer);
  } 
}
let app = new App();
app.play(); //숫자 야구 게임을 시작합니다.

export default App;