public with sharing class LWC_ApexClassDataBinding {
    
    //constructor
    public LWC_ApexClassDataBinding() {
        
    }

    //method to return accounts
    @AuraEnabled(cacheable = true)
    public static List<account> getListAccnts(){
        return [Select Id, Name from Account];
    }
  
}
