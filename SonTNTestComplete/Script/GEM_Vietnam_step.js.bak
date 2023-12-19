const angularPage = new(require("AngularPage")).AngularPage();

Given("I navigate to {arg}", function (url){
  Browsers.Item(btChrome).Run("https://www.google.com/");
});

When("I search for a keyword {arg}", function (text){
  angularPage.search(text);
});

Then("I should see the number of results is {arg}", function (results){
  angularPage.checkValue(results);
});

Then("I should see the title is {arg}", function (newTitle){
  angularPage.findDirection();
});