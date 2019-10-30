package testRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.qa.rm.setup.SetupClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features= {"."},
plugin= {"pretty", "html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json", 
	 "junit:target/cucumber.xml",
	"usage:target/cucumber-usage.json"},
glue= {"stepDefinations"},
//dryRun=true,
monochrome=true

)
public class TestRunner {

	@BeforeClass
	public static void beforeClass() throws Exception {
		SetupClass.setUp();	
	}

	@AfterClass
	public static void afterClass() throws Exception {

	}
}
