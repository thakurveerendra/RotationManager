package stepDefinations;

import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.Select;

import com.qa.rm.setup.SetupClass;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class SignUpStepDefinations extends SetupClass{
	 JavascriptExecutor js=(JavascriptExecutor)driver;
	
	@Given("^Open the 'SignUp' url$")
	public void open_the_SignUp_url() throws Throwable {
		 try{driver.get(SignUpRUL);
		   log.info("it's Opening SignUp url");}catch(TimeoutException e) 
		   {
			   Thread.sleep(1500);
			   driver.get(SignUpRUL);
			   log.info("it's Opening SignUp url");
		   }		
	}


	@And("^Enter \"([^\"]*)\" in \"([^\"]*)\" field$")
	public void enter_in_field(String value, String locator) throws Throwable {
	 webelement=driver.findElement(By.id(locator));
	 webelement.click();
	 webelement.sendKeys(value);
	 log.info("it's entered value in text box :" +value);
	}

	@And("^Select \"([^\"]*)\" for School-Campus-Discipline$")
	public void select_for_School_Campus_Discipline(String arg1) throws Throwable {
	   Select select=new Select(driver.findElement(By.id("combo")));
	   select.selectByVisibleText(arg1);
	   log.info("it's selecting "+arg1+ "from dropdown list");
	   Thread.sleep(2000);
	   js.executeScript("arguments[0].scrollIntoView()", webelement);
	}

	@And("^Enter \"([^\"]*)\" date in \"([^\"]*)\" calender$")
	public void enter_date_in_calender(String arg1, String arg2) throws Throwable {
//	  webelement=driver.findElement(By.id(arg2));	 
//	  js.executeScript("arguments[0].scrollIntoView()", webelement); 
	  js.executeScript("document.getElementById('graduation_date').setAttribute('value', '"+arg1+"')");
	}

	@And("^Select \"([^\"]*)\" from \"([^\"]*)\" dropdown$")
	public void select_from_dropdown(String arg1, String arg2) throws Throwable {
		Select select=new Select(driver.findElement(By.id(arg2)));
		select.selectByValue(arg1);
		log.info("it's selecting "+arg1+ "from dropdown");
	}

	@And("^Enter \"([^\"]*)\" address for 'Registration'$")
	public void enter_address_for_Registration(String locator) throws Throwable {
	    Random rand=new Random();
	    int i=rand.nextInt(1000);
	    email="student"+i+"@getnada.com";
	    System.err.println(email);
	    webelement=driver.findElement(By.id(locator));
		 webelement.click();
		 webelement.sendKeys(email);
		 log.info("it's added email addess for registration");
	    
	}

	@And("^Enter \"([^\"]*)\" address for 'Verification'$")
	public void enter_address_for_Verification(String locator) throws Throwable {
		webelement=driver.findElement(By.id(locator));
		 webelement.click();
		 webelement.sendKeys(email);
		 log.info("it's added email addess for Verification");
	}

	@And("^Select \"([^\"]*)\" Checkbox$")
	public void select_Checkbox(String locator) throws Throwable {
		webelement=driver.findElement(By.id(locator));
		if(!webelement.isSelected())
		 webelement.click();
		log.info("it's selecting check box");
	}

	@When("^Click on \"([^\"]*)\" \"([^\"]*)\"$")
	public void click_on(String arg1, String locator) throws Throwable {
		webelement=driver.findElement(By.id(locator));
		webelement.click();
		log.info("it's clicked on AGREE AND REGISTER ,submit_button");
	}
}
