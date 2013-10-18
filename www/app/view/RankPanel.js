Ext.define("RunApp.view.RankPanel", {
	extend: 'Ext.Panel',

	requires: [],
	
	initialize: function () {

        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            title: '排名',
            docked: "top",
        };
           
        this.add([topToolbar]);
		
		/*
		var homePagesList = {
            xtype: "homepagelist",
			store: Ext.getStore("HomePages"),
            listeners: {
                disclose: { fn: this.onHomePageListDisclose, scope: this }
            }
        };

        this.add([topToolbar, homePagesList]);

		
		//Slide Panel
		Ext.create('donkey.view.homepage.FriendRequestPanel', {id: 'friendRequestPanel'});
		Ext.create('donkey.view.homepage.MsgPanel', {id: 'myMsgPanel'});
		Ext.create('donkey.view.homepage.ReplyPanel', {id: 'myReplyPanel'});
		Ext.create('donkey.view.homepage.MyTravelMemoryPanel', {id: 'myTravelMemoryPanel'});
		Ext.create('donkey.view.homepage.MyFriendTripPanel', {id: 'myFriendTripPanel'});
        */
		
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
		title: '排名',
		iconCls: 'favorites',
		//scrollable: true,
		layout: {
            type: 'fit'
        },
		
	}
	
	
});