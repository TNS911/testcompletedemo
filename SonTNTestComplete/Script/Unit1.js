function Open_Chrome()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://www.facebook.com/", 15);
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxEmailHoCSINThoI' control.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.textboxEmailHoCSINThoI.Click();
  //Sets the text 'tangocson911' in the 'textboxEmailHoCSINThoI' text editor.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.textboxEmailHoCSINThoI.SetText("tangocson911");
  //Enters '[Tab]' in the 'textboxEmailHoCSINThoI' object.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.textboxEmailHoCSINThoI.Keys("[Tab]");
  //Sets the text Project.Variables.Password1 in the 'passwordboxMTKhU' text editor.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.passwordboxMTKhU.SetText(Project.Variables.Password1);
  //Sets the text Project.Variables.Password2 in the 'passwordboxMTKhU' text editor.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.passwordboxMTKhU.SetText(Project.Variables.Password2);
  //Enters '[Enter]' in the 'passwordboxMTKhU' object.
  Aliases.browser.pageFacebookNgNhPHoCNgK.formU02H7.passwordboxMTKhU.Keys("[Enter]");
}