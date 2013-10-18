Ext.define("RunApp.controller.FriendController", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            friendList: "#friendList",
			friendInfoPanel: "#friendInfoPanel",
			mainPanel: "#mainPanel",
        },
		control: {
			friendList: {
				friendInfoCommand: "onFriendInfoCommand",
			},
			
			friendInfoPanel: {
				backHomeCommand: "onBackHomeCommand",
			}
			
        }

	},
	
	// Commands.
	onFriendInfoCommand: function (list, record) {
		console.log("onFriendInfoCommand");
		this.activateFriendInfoPanel();
	},
    
	onBackHomeCommand: function () {
		console.log("onBackHomeCommand");
		this.activateMainPanel();
	},

	activateFriendInfoPanel: function () {
		var friendInfoPanel = this.getFriendInfoPanel();
		Ext.Viewport.animateActiveItem(friendInfoPanel, this.slideLeftTransition);
	},
    
	activateMainPanel: function() {
        var mainPanel = this.getMainPanel();
		Ext.Viewport.animateActiveItem(mainPanel, this.slideRightTransition);
	},
	
	slideLeftTransition: { type: 'slide', direction: 'left' },
	slideRightTransition: { type: 'slide', direction: 'right' },
	
	// Base Class functions.
    launch: function () {
        this.callParent(arguments);
    },
    init: function () {
        this.callParent(arguments);
    },
	
});