Ext.define("RunApp.model.Friend", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'uid',
        fields: [
            { name: 'uid', type: 'int' },
            { name: 'username', type: 'string' },
            { name: 'location', type: 'string' },
			//{ name: 'sex', type: 'string' },
			//{ name: 'birth', type: 'datecolumn', format: 'd/m/y'},
			//{ name: 'email', type: 'string' },
			//{ name: 'thumb', type: 'string' },
			
        ],
        /*validations: [
            { type: 'presence', field: 'uid' },
            { type: 'presence', field: 'username' },
            { type: 'presence', field: 'location', message: 'Please enter a title for this note.' },
			{ type: 'presence', field: 'thumb' },
        ]*/
    }
});