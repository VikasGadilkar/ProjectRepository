public class LstController {
	@AuraEnabled
	public static list<Account> getAcclst(){
		return [select id, name,phone from Account limit 10];
	}
	@AuraEnabled
	public static list<Contact> getConlst(Id accid){
		return [select id,name, email from Contact where Accountid=:accId];
	}
}