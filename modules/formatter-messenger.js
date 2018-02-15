"use strict";

let formatAccounts = accounts => {
    let elements = [];
    accounts.forEach(account =>
        elements.push({
            title: account.get("Name"),
            subtitle: account.get("BillingStreet") + ", " + account.get("BillingCity") + " " + account.get("BillingState") + " · " + account.get("Phone"),
            image_url: "https://cdns.tblsft.com/sites/default/files/salesforce_video_thumbnail.jpg",
            buttons: [{
                type:"postback",
                title:"View Contacts",
                payload: "view_contacts," + account.getId() + "," + account.get("Name")
            },{
                type: "web_url",
                url: "https://login.salesforce.com/" + account.getId(),
                title: "Open in Salesforce"
            },
			]
        })
    );
    return {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: elements
            }
        }
    };
	
};

/*
{attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: {
					title: account.get("Name"),
					subtitle: account.get("BillingStreet") + ", " + account.get("BillingCity") + " " + account.get("BillingState") + " · " + account.get("Phone"),
            
					buttons: [{
						type:"postback",
						title:"View Contacts",
						payload: "view_contacts," + account.getId() + "," + account.get("Name")
						},{
						type: "web_url",
						url: "https://login.salesforce.com/" + account.getId(),
						title: "Open in Salesforce"
					},
					]
				}
            }
        }
}
*/



let formatContacts = contacts => {
    let elements = [];
    contacts.forEach(contact => {
        elements.push({
            title: contact.get("Name"),
			subtitle:contact.get("Title"),
			image_url: "https://cdns.tblsft.com/sites/default/files/salesforce_video_thumbnail.jpg",
			buttons: [
                {
                    type: "postback",
                    title: "View Notes",
                    payload: "view_notes," + contact.getId() + "," + contact.get("Name")
                },
                {
                    type: "web_url",
                    url: "https://login.salesforce.com/" + contact.getId(),
                    title: "Open in Salesforce"
                }]
        })
    });
   
	return {
		attachment : {
						type: "template",
						payload : {
						template_type: "generic",
						elements: elements
						}
					}
	};
	
};



let formatOpportunities = opportunities => {
    let elements = [];
    opportunities.forEach(opportunity =>
        elements.push({
            title: opportunity.get("Name"),
            subtitle: opportunity.get("Account").Name + " · $" + opportunity.get("Amount"),
            image_url: "https://cdns.tblsft.com/sites/default/files/salesforce_video_thumbnail.jpg",
            buttons: [
                {
                    type:"postback",
                    title:"Close Won",
                    payload: "close_won," + opportunity.getId() + "," + opportunity.get("Name")
                },
                {
                    type:"postback",
                    title:"Close Lost",
                    payload: "close_lost," + opportunity.getId() + "," + opportunity.get("Name")
                },
                {
                    type: "web_url",
                    url: "https://login.salesforce.com/" + opportunity.getId(),
                    title: "Open in Salesforce"
                }]
        })
    );
    return {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                elements: elements
            }
        }
    };
	
};

exports.formatAccounts = formatAccounts;
exports.formatContacts = formatContacts;
exports.formatOpportunities = formatOpportunities;