<aura:application controller="LstController">
<aura:attribute name="acctList" type="list"/>
<aura:attribute name="conList" type="list"/>
<aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
<table>
	<thead>
    	<tr>
    		<th>Name</th>
    		<th>phone</th>
    	</tr>
    </thead>
	<tbody>
		<aura:iteration var="acc" items="{!v.acctList}">
		<tr>
			<td><a onclick="{!c.getContactlst}">{acc.Name}</a></td>
            <td>{acc.Name}</td>
            <td>{acc.phone}</td>
		</tr>
        </aura:iteration>
	</tbody>
</table>

List of contacts:
<table>
	<thead>
		<tr> <th> Name</th>
			<th>Email</th>
		</tr>
    </thead>
	<tbody>
		<aura:iteration var="con" items="{!v.conlist}">
			<tr>
            	<td>{!con.Name}</td>
            	<td>{!con.Email}</td>
            </tr>
        </aura:iteration>
        </tbody>
    </table>
</aura:application>