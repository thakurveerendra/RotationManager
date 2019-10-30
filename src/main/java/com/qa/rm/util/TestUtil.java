package com.qa.rm.util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.rm.setup.SetupClass;

public class TestUtil extends SetupClass{
	// This function will handle WebDriverWait for presenceOfElementLocated
	public static WebElement presenceOfElementWait(By locator) 
	{
		webelement=(new WebDriverWait(driver,80)).until(ExpectedConditions.presenceOfElementLocated(locator));
		return webelement;
	}
}
