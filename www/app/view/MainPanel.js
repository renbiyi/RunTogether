/**
 * @Author zhanghao_py@sina.com
 */
Ext.define('RunApp.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    requires: ['RunApp.view.RunPanel', 'RunApp.view.RankPanel', 'RunApp.view.FriendsPanel', 'RunApp.view.MessagesPanel', 'RunApp.view.SettingsPanel'],
    config: {
        tabBarPosition: 'bottom'
    },
    initialize: function () {
        this.callParent(arguments);
        var runPanel = Ext.create('RunApp.view.RunPanel', {id: 'runPanel'});
        var rankPanel = Ext.create('RunApp.view.RankPanel', {id: 'rankPanel'});
        var friendsPanel = Ext.create('RunApp.view.FriendsPanel', {id: 'friendsPanel'});
        var messagesPanel = Ext.create('RunApp.view.MessagesPanel', {id: 'messagesPanel'});
        var settingsPanel = Ext.create('RunApp.view.SettingsPanel', {id: 'settingsPanel'});
        
        this.add([runPanel, rankPanel, friendsPanel, messagesPanel, settingsPanel]);
        
    }
});

