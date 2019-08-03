package donation;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class annotation {

	static WebDriver driver = null;
	
	WebElement amount;
	WebElement pilih;
	WebElement goPay;
	WebElement fullname;
	WebElement emailOrPhone;
	WebElement messageAmount;
	
	By amountElement = By.id("target-donasi");
	By pilihElement = By.xpath("//*[@id=\"yw0\"]/div/div[3]/div/div/div/div[2]/span");
	By PaymentElement = By.xpath("//*[@id=\"yw0\"]/div/div[3]/div/ul/li[2]");
	By fullnameElement = By.id("Donations_donorName");
	By emailOrPhoneElement = By.id("emailOrPhone");
	

	By messageAmountElement=By.xpath("//*[@id=\"yw0\"]/div/div[1]/div/p");
	By messageEmailOrPhoneElement = By.xpath("//*[@id=\"yw0\"]/div/div[6]/p");
	
	String url="https://www.kitabisa.com/patunganbisasehat/contribute";
	String message="";
	
	
	
	
	public void createAndStartService() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\\\Users\\\\Toshiba\\\\Downloads\\\\chromedriver_win32\\\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--incognito");
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		// Initialize browser
		driver = new ChromeDriver();
	}

	@Given("^I on donation page$")
	public void I_on_donation_page() {
		createAndStartService();
		driver.navigate().to(url);
	}
	
	@And("^I input amount (\\d+) for donation$")
	public void i_input_amount_for_donation(int arg1){
	    // Write code here that turns the phrase above into concrete actions
		amount=driver.findElement(amountElement);
	    amount.sendKeys(Integer.toString(arg1));
	}
	
	@And("^I select payment methode$")
	public void i_select_payment_methode() throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		pilih=driver.findElement(pilihElement);
		goPay=driver.findElement(PaymentElement);
		pilih.click();
	    goPay.click();
	}
	
	@And("^I type Nama Lengkap \"(.*?)\"$")
	public void i_type_Nama_Lengkap(String arg1){
	    // Write code here that turns the phrase above into concrete actions
		fullname=driver.findElement(fullnameElement);
		fullname.sendKeys(arg1);
	}
	
	@And("^I type Email or WhatsApp \"(.*?)\"$")
	public void i_type_Email_or_WhatsApp(String arg1){
	    // Write code here that turns the phrase above into concrete actions
		emailOrPhone=driver.findElement(emailOrPhoneElement);
		emailOrPhone.sendKeys(arg1);
	}
	@When("^I click Lanjut Pembayaran$")
	public void I_click_Lanjut_Pembayaran() {
		driver.findElement(By.xpath("//*[@id=\"yw0\"]/button")).submit();
	}
	@Then("^I see Instruksi Pembayaran$")
	public void I_see_Instruksi_Pembayaran() {
		assertTrue(driver.getPageSource().contains("Instruksi Pembayaran"));
		driver.close();
	}
	@Then("^I see error message \"(.*?)\"$")
	public void i_see_error_message(String arg1) throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		String msg=driver.findElement(messageAmountElement).getText();
		//System.out.println("message : -------------------"+msg);
		//assertTrue(driver.getPageSource().contains(arg1));
		assertEquals(arg1, msg);
		driver.close();
	}
	@Then("^I see error message on Nama Lengkap Field \"(.*?)\"$")
	public void i_see_error_message_on_Nama_Lengkap(String arg1) throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		//String msg=driver.findElement(messageAmountElement).getText();
		//System.out.println("message : -------------------"+msg);
		assertTrue(driver.getPageSource().contains(arg1));
		
		//assertEquals(arg1, msg);
		driver.close();
	}
	
	@Then("^I see error message on Email or WhatsApp field \"(.*?)\"$")
	public void i_see_error_message_on_Email_or_WhatsApp_field(String arg1) throws InterruptedException{
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		String msg=driver.findElement(messageEmailOrPhoneElement).getText();
		//System.out.println("message : -------------------"+msg);
		//assertTrue(driver.getPageSource().contains(arg1));
		assertEquals(arg1, msg);
		driver.close();
	}
	


}
