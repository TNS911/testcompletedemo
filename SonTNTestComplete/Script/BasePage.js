class BasePage {
  constructor(url){
    this.url = url;
  }
  printMessage(mes){
    Log.Message(mes);
  }
}

module.exports.BasePage = BasePage;