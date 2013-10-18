Ext.define("RunApp.view.friend.FriendInfoPanel", {
    extend: "Ext.Panel",
    requires: [],
    config:{
        scrollable:'vertical',
    },
    initialize: function () {

        this.callParent(arguments);

        var backButton = {
           xtype: "button",
           ui: "back",
           text: "返回",
           handler: this.onBackHomeButtonTap,
           scope: this
        };
           
        var topToolbar = {
           xtype: "toolbar",
           docked: "top",
           title: "好友详细信息",
           items: [
                backButton,
                { xtype: "spacer" },
           ]
        };

        this.add([
            topToolbar,
        ]);
		
    },
	
	onBackHomeButtonTap: function() {
		console.log("backHomeCommand");
        this.fireEvent("backHomeCommand", this);
	},

});