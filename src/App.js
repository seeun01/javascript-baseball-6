import { Console, Random } from "@woowacourse/mission-utils";

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerCreateNumber();
    this.getUserInput()
      .then(() => {
        // getUserInput이 완료되면 실행할 코드
      })
      .catch((error) => {
        // 오류 처리
      });
  }

  computerCreateNumber() {
    const computerArr = [];
    while (computerArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerArr.includes(number)) {
        computerArr.push(number);
      }
    }
    const computer = computerArr.join('');
    Console.print(computer);
  }

  async getUserInput() {
    try {
      const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
      this.checkUserInput(userInput); // "this"를 통해 클래스의 메서드 호출
    } catch (error) {
      Console.print(error);
      // 오류 처리
    }
  }

  checkUserInput(userInput) {
    if(!/^[1-9]{3}/.test(userInput) || /(\d).*\1/.test(userInput)){
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다');
    }
  }
}

let app = new App();
app.play();
