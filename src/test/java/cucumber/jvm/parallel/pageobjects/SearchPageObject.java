package cucumber.jvm.parallel.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import junit.framework.Assert;

import java.util.List;

public class SearchPageObject {
    private static WebDriver webDriver;

    public SearchPageObject(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    private By searchTermField = By.name("q");
    private By submitSearch = By.name("q");
    private By googleSearchBtn = By.name("btnK");

    private By searchResults = By.id("resultStats");

    public void enterSearchTerm(String searchTerm) {
        webDriver.findElement(searchTermField).sendKeys(searchTerm);
    }

    public void submitSearch() {
        webDriver.findElement(googleSearchBtn).click();
    }

    public void acceptSearchResult(int id) {
       
    }
}
