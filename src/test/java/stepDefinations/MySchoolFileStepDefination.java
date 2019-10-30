package stepDefinations;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.rm.setup.SetupClass;
import com.qa.rm.util.TestUtil;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MySchoolFileStepDefination extends SetupClass{
	@Given("^Open the Application url$")
	public void open_the_Application_url() throws Throwable {
	   try{driver.get(AppURL);
	   log.info("it's Opening Application url");}catch(TimeoutException e) 
	   {
		   Thread.sleep(1500);
		   driver.get(AppURL);
		   log.info("it's Opening Application url");
	   }
	}
	@And("^Enter email address in \"([^\"]*)\" field for SignIn$")
	public void enter_email_address_in_field_for_SignIn(String locator) throws Throwable {
		 webelement=driver.findElement(By.name(locator));
		   webelement.click();
		   webelement.sendKeys(email);
		   log.info("it's entered in text ");
	}

	@And("^Enter \"([^\"]*)\" in \"([^\"]*)\" field for SignIn$")
	public void enter_in_field_for_SignIn(String value, String locator) throws Throwable {
	   webelement=driver.findElement(By.name(locator));
	   webelement.click();
	   webelement.sendKeys(value);
	   log.info("it's entered in text ");
	}

	@When("^Click on 'Login' button$")
	public void click_on_Login_button() throws Throwable {
		webelement=driver.findElement(By.xpath("//input[@type='submit']"));
		webelement.submit();
		log.info("it's cliecked on Login Button");
	}

	@Then("^Verify it Redirected to \"([^\"]*)\" Page$")
	public void verify_it_Redirected_to_Page(String arg1) throws Throwable {
		webelement=TestUtil.presenceOfElementWait(By.xpath("//h2[text()='"+arg1+"']"));
		log.info("It's properly redirected to webPage : "+arg1);
	}

	@And("^Verify the page Title \"([^\"]*)\" text$")
	public void verify_the_page_Title_text(String arg1) throws Throwable {
	    String titleText=driver.getTitle();
	    assertEquals(titleText,arg1);
	    log.info("It's verified Page Title text");
	}
	@When("^Click on \"([^\"]*)\" Menu$")
	public void click_on_Menu(String arg1) throws Throwable {
		webelement=driver.findElement(By.xpath("//a[text()='"+arg1+"']"));
		webelement.click();
		log.info("it's cliecked on "+arg1+" Menu options");
	}

	@And("^Verify \"([^\"]*)\" menu option is highlighted$")
	public void verify_menu_option_is_highlighted(String arg1) throws Throwable {
		webelement=driver.findElement(By.xpath("//a[text()='"+arg1+"']//parent::li"));
		if(webelement.isDisplayed()) 
		{
			System.out.println(arg1+" Menu options is highlighted");
		}else 
		{
			log.info("Menu options is not highlighted");
		}
	}

	@And("^Verify \"([^\"]*)\" Document Available in list$")
	public void verify_Document_Available_in_list(String arg1) throws Throwable {
		webelement=TestUtil.presenceOfElementWait(By.xpath("//a[contains(text(),'"+arg1+"')]"));
		log.info(arg1+" : Congrates Document is Available in list");
	}
	@And("^Select Add files from My \"([^\"]*)\" options from Dropdown list$")
	public void select_Add_files_from_My_options_from_Dropdown_list(String arg1) throws Throwable {
	Select select=new Select(driver.findElement(By.id("upload_type")));
	select.selectByValue(arg1);
	log.info("it's selected Select Add files from My "+arg1+" options");
	}

	@And("^Check \"([^\"]*)\" Document is Mandatory or not$")
	public void check_Document_is_Mandatory_or_not(String arg1) throws Throwable {
		webelement=driver.findElement(By.xpath("//a[contains(text(),'"+arg1+"')]//following::td[contains(text(),'Yes')]"));
		log.info(arg1+" : Document is mandatory");
	}

	@And("^Click on \"([^\"]*)\" Document 'UPLOAD' button$")
	public void click_on_Document_UPLOAD_button(String arg1) throws Throwable {
		webelement=driver.findElement(By.xpath("//a[contains(text(),'"+arg1+"')]//following::a[@class='btn btn-small'][1]"));
		webelement.click();
		log.info("it's clicked on Document 'UPLOAD' button");
	}

	@And("^Verify \"([^\"]*)\" model window open$")
	public void verify_model_window_open(String arg1) throws Throwable {
		webelement=TestUtil.presenceOfElementWait(By.xpath("//h4[contains(text(),'"+arg1+"')]"));
		log.info(arg1+" : Congrates Document is Available in list");
	}

	@And("^Enter \"([^\"]*)\" in \"([^\"]*)\" calender box$")
	public void enter_in_calender_box(String value, String locator) throws Throwable {
		 webelement=driver.findElement(By.id(locator));
		   webelement.click();
		   webelement.sendKeys(value);
		   log.info("it's entered expiry in calender ");
	}

	@And("^Click on \"([^\"]*)\" button$")
	public void click_on_button(String arg1) throws Throwable {
		try{webelement=driver.findElement(By.xpath("//button[@class='btn  modal_callback']"));
		webelement.click();
		log.info("it's clicked on "+arg1+" Button");}catch(Exception e) 
		{
			Thread.sleep(1000);
			webelement=driver.findElement(By.xpath("//button[@class='btn  modal_callback']"));
			webelement.click();
			log.info("it's clicked on "+arg1+" Button");
		}
	}
	@And("^Verify 'Mandatory' field Notification message \"([^\"]*)\" appears$")
	public void verify_Mandatory_field_Notification_message_appears(String arg1) throws Throwable {
		webelement=TestUtil.presenceOfElementWait(By.xpath("//span[@class='noty_text']"));
		Boolean bln=(new WebDriverWait(driver,20)).until(ExpectedConditions.textToBePresentInElement(webelement, arg1));
		if(bln) {
		String resultObtain=webelement.getText();
		assertEquals(resultObtain,arg1);
		log.info("congrates 'Mandatory' field Notification message appears");
		Boolean bln2=(new WebDriverWait(driver,10)).until(ExpectedConditions.invisibilityOf(webelement));
		System.err.println(bln2);
		}
	}
	@And("^Verify \"([^\"]*)\" Document 'Status' after upload file$")
	public void verify_Document_Status_after_upload_file(String arg1) throws Throwable {
		webelement=TestUtil.presenceOfElementWait(By.xpath("(//a[contains(text(),'"+arg1+"')]//following::img[contains(@id,'student_img')])[1]"));
		String srcText=webelement.getAttribute("src");
		System.err.println(srcText);
		if(srcText.contains("green.png")) 
		{
			log.info("Status now ******Approved********");
		} else if (srcText.contains("alert.png")) {
			log.info("Status now ******Pending for reviews********");
		} else {
			log.info("Status now ******Pending********");
		}
	}
	@And("^Select \"([^\"]*)\" file from 'Account Files' list$")
	public void select_file_from_Account_Files_list(String arg1) throws Throwable {

		webelement=driver.findElement(By.xpath("//a[contains(text(),'"+arg1+"')]//ancestor::tr//td//input"));
		webelement.click();
		log.info("it's selecting "+arg1+" file from list");
	}

	@And("^Upload \"([^\"]*)\" from 'Choose File' prompt$")
	public void upload_from_Choose_File_prompt(String arg1) throws Throwable {
		webelement=driver.findElement(By.id("upload_file"));
		String location=System.getProperty("user.dir")+arg1;
		System.err.println(location);
		webelement.sendKeys(location);
	}
	@Then("^Update Expiry date to \"([^\"]*)\"$")
	public void update_Expiry_date_to(String arg1) throws Throwable {
		webelement=driver.findElement(By.id("editExpDate"));
		webelement.click();
		log.info("it's clicked on EditExpiry date button");
		webelement=driver.findElement(By.id("editExpDate"));
		webelement.sendKeys(arg1);
		log.info("it's entered  EditExpiry date :"+ arg1);
		webelement=driver.findElement(By.id("saveExpDate"));
		webelement.click();
		log.info("it's clicked on Save EditExpiry date button");
		Thread.sleep(500);
	}



}
