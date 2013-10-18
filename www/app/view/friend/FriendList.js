Ext.define("RunApp.view.friend.FriendList", {
    extend: "Ext.List",
    xtype: "friendlist",
    requires: ['RunApp.store.Friends'],
    config: {
        store: 'Friends',
        loadingText: "Loading...",
        emptyText: '</pre><div class="notes-list-empty-text">没有好友...</div><pre>',
        onItemDisclosure: true,
        itemTpl: [
            '<div class="list-item-title">{username}</div>',
            '<div class="list-item-narrative">{location}</div>'
        ].join(''),
        listeners: {
           disclose: function() { this.onFriendListDisclose(); }
        },
        //itemTpl: '</pre><div class="list-item-title">hello</div><div class="list-item-narrative">hello</div><pre>',
		//itemTpl: '<div class="run"><img src="{thumb}" /><div class="info"><b>{username}</div><div class="location">{location}</div><div class="time"></div></div>',
    },
    
    onFriendListDisclose: function (list, record, target, index, evt, options) {
        console.log("friendInfoCommand");
        this.fireEvent('friendInfoCommand', this, record);
    },
});