const basePage = require("BasePage");

class AngularPage extends basePage.BasePage{
  constructor(){
    super()
  }
  
  search(text){
    this.printMessage("Keyword: " + text);
    let textarea = Aliases.chrome.pageWwwGoogleCom.formSearch.textareaSearch;
    textarea.Click();
    textarea.Keys(text + "[Enter]");
  }
  
  checkValue(results){
    aqObject.CheckProperty(Aliases.chrome.pageSearch.panelResultStats, "contentText", cmpContains, results);
  }
  
}

module.exports.AngularPage = AngularPage