package com.qa.rm.setup;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class SetupClass {
	public static WebDriver driver;
	public static WebElement webelement;
	public static String AppURL;
	public static String browserName;
	public static Properties properties=new Properties(System.getProperties());
	public static Logger log;
	public static String SignUpRUL;
	public static String email;
	
	@BeforeClass
	public static void setUp() throws FileNotFoundException, IOException 
	{
		log=Logger.getLogger(BeforeClass.class.getName());
		properties.load(new FileReader("src\\main\\java\\com\\qa\\rm\\config\\config.properties"));
		AppURL = properties.getProperty("App_url");
		SignUpRUL=properties.getProperty("SignUp_url");
		String browserName = properties.getProperty("browser");
		
		if(browserName.contains("chrome")) 
		{
			WebDriverManager.chromedriver().setup();
			ChromeOptions options=new ChromeOptions();
			options.addArguments("--disable-notifications");
			driver = new ChromeDriver(options);
		}else {

			System.out.println("platform does not provide");
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	@AfterClass
	public static void tearDown() 
	{
		driver.quit();
	}

}
