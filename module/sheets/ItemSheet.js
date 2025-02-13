export default class FSItemSheet extends ItemSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ['boilerplate', 'sheet', 'item'],
            width: 520,
            height: 480,
            tabs: [
                {
                    navSelector: '.sheet-tabs',
                    contentSelector: '.sheet-body', 
                    initial: 'description'
                },
            ],
            template: "systems/nahual/templates/sheets/weapon-sheet.html"
        });
    }
}