({
	doInit: function(component, event, helper){
	var action = component.get("c.getAcclst");
	action.setCallback(this, function(response) {
            
            var state = response.getState();
            
            if (state === "SUCCESS") {
                
                var records = response.getReturnValue();
                debugger;
                component.set("v.acctList", records);
                
            }            
            
        });
        
        $A.enqueueAction(action);
},
	getContacts: function(component,event,helper){
	var accid = event.getparam();
	var action = component.get("c.getConLst");
	action.setparams({"accid" : accId});
	action.setCallback(this, function(response) {
            
            var state = response.getState();
            
            if (state === "SUCCESS") {
                
                var records = response.getReturnValue();
                
                component.set("v.ConList", records);
                
            }            
            
        });
        
        $A.enqueueAction(action);
}
})