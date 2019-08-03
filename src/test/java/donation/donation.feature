Feature: donation 


Scenario Outline: try to donation

	Given I on donation page 
	And I input amount <amount> for donation 
	And I select payment methode 
	And I type Nama Lengkap "<fullname>" 
	And I type Email or WhatsApp "<emailOrPhone>" 
	When I click Lanjut Pembayaran 
	Then I see Instruksi Pembayaran 
	
	Examples: 
		|amount  |fullname         |emailOrPhone				|	
		|200000  |Angga Saputra        |abc@gmail.com	|
		
		
Scenario Outline: try to validate amount donation 

	Given I on donation page 
	When I input amount <amount> for donation 
	Then I see error message "<message>" 
	
	Examples: 
		|amount|message|                    		
		|1	|Jumlah donasi harus lebih besar dari Rp 1.000.|
		|3000000000000|Jumlah donasi maksimal Rp 500.000.000.|
		|222222222|Jumlah donasi harus dalam kelipatan ribuan.|
		
		
Scenario Outline: try to validate Nama Lengkap 

	Given I on donation page 
	When I type Nama Lengkap "<fullname>" 
	Then I see error message on Nama Lengkap Field "<message>" 
	
	
	Examples: 
		|fullname         			|message|
		|@!*(!&(*!*&%^$(!*^*&!*)!!  |Nama Lengkap hanya bisa diisi oleh alphabet.|
		
Scenario Outline: try to validate Email or WhatsApp 
	Given I on donation page 
	When I type Email or WhatsApp "<emailOrPhone>" 
	Then I see error message on Email or WhatsApp field "<message>" 
	
	Examples: 
		|emailOrPhone         			|message|
		|abraham.com  |Hanya diisi dengan nomor WhatsApp atau Email saja.|
		|abraham		|Hanya diisi dengan nomor WhatsApp atau Email saja.|
		|<script></script>|Hanya diisi dengan nomor WhatsApp atau Email saja.|
		|123456789|Hanya diisi dengan nomor WhatsApp atau Email saja.|
		
