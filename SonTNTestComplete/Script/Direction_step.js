const directionPage = new(require("DirectionPage")).DirectionPage();

Given("I request to {arg}", function (url){
  Browsers.Item(btChrome).Navigate(url);
});

When("I enter {arg} and {arg}", function (start, address){
  directionPage.enterAddress(start, address);
});

Then("I should see the distance length is {arg}", function (result){
  directionPage.checkLength(result);
});