
Hooks.once("init", function(){
    console.log("test | Initializing nahual");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("nahual", ItemSheet, {makeDefault:true})
})