import FSItemSheet from './sheets/ItemSheet.js';

Hooks.once('init', async function() {
    console.log('Nahual | Initializing Nahual RPG System');

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("nahual", FSItemSheet, {makeDefault: true});

});


Hooks.once('ready', async function(p) {
    console.log('nahual | Nahual RPG System is ready');
});