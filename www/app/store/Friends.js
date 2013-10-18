Ext.define("RunApp.store.Friends", {
    extend: "Ext.data.JsonStore",
	requires: [
		"Ext.data.proxy.JsonP",
	],
    config: {
        model: "RunApp.model.Friend",
        
		fields: ['uid', 'username', 'location'],
		//fields: ['uid', 'username', 'location', 'sex', 'birth', 'email', 'thumb'],
		/*
        proxy: {
			type: 'jsonp',
			url : donkey.model.Config.getMyFriendsUrl(),
			reader: {
                type: 'json',
                rootProperty: 'friends'
            },
			//callbackKey: 'callback',
			params: {
                //key: '23f6a0ab24185952101705',
            },
        },
        */
		//autoLoad : true,
		
        data: [
            { uid: 1, username: "Note 1", location: "narrative 1" },
            { uid: 2, username: "Note 2", location: "narrative 2" },
            { uid: 3, username: "Note 3", location: "narrative 3" },
            { uid: 4, username: "Note 4", location: "narrative 4" },
            { uid: 5, username: "Note 5", location: "narrative 5" },
            { uid: 6, username: "Note 6", location: "narrative 6" }
        ],
		
		//sorters: [{ property: 'uid', direction: 'DESC'}]

    },
});