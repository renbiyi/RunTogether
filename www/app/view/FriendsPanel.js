Ext.define("RunApp.view.FriendsPanel", {
	extend: 'Ext.Panel',

	requires: ['RunApp.view.friend.FriendList', 'RunApp.view.friend.FriendInfoPanel'],
	
	initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
           xtype: 'toolbar',
           title: '好友',
           docked: 'top',
        };
           
        var friendList = Ext.create('RunApp.view.friend.FriendList', {id: 'friendList'});
           
        this.add([topToolbar, friendList]);
		
        //Slide Panel
        var friendInfoPanel = Ext.create('RunApp.view.friend.FriendInfoPanel', {id: 'friendInfoPanel'});
		
    },
	/*
	onHomePageListDisclose: function (list, record, target, index, evt, options) {

		var typeId = record.getData().id;
		switch(typeId)
		{
			case 1: 
				console.log("friendRequestCommand");
				this.fireEvent('friendRequestCommand', this, record);
				break;
			case 2: 
				console.log("msgCommand");
				this.fireEvent('msgCommand', this, record);
				break;
			case 3: 
				console.log("replyCommand");
				this.fireEvent('replyCommand', this, record);
				break;
			case 4: 
				console.log("travelMemoryCommand");
				this.fireEvent('travelMemoryCommand', this, record);
				break;
			case 5: 
				console.log("friendTripCommand");
				this.fireEvent('friendTripCommand', this, record);
				break;
			default:
				break;
				
		}
		//console.log("friendAppCommand");
		//console.log(record);
		//this.fireEvent('friendAppCommand', this, record);
	},
    */
	
	
	
	config: {
		title: '好友',
		iconCls: 'team',
		//scrollable: true,
		layout: {
            type: 'fit'
        },
		
	}
	
	
});