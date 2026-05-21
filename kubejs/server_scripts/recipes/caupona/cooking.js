ServerEvents.recipes(event => {

    // TODO frog: maybe helper function here? seems tough
    // alternatively, recipe schema

    event.custom({
        "type": "caupona:cooking",
        "allow": [
            {
                "type": {
                    "item": "wizards_reborn:arcane_linen"
                },
                "cond": "half"
            },
            {
                "type": {
                    "item": "eidolon:merammer_resin"
                },
                "cond": "contains"
            },
            {
                "type": "caupona:sourceberries",
                "cond": "contains"
            }
        ],
        "base": [
            {
                "fluid": "caupona:nail_soup"
            }
        ],
        "density": 1,
        "output": "wizards_reborn:alchemy_oil",
        "priority": 1200,
        "time": 200
    }).id('kubejs:cooking/alchemy_oil_from_arcane_linen_and_merammer_resin_and_sourceberries')

    event.custom({
        "type": "caupona:cooking",
        "allow": [
            {
                "type": "caupona:sourceberries",
                "cond": "mainly"
            }
        ],
        "base": [
            {
                "fluid": "caupona:nail_soup"
            }
        ],
        "density": 1.2,
        "output": "kubejs:sourceberry_stew",
        "priority": 1200,
        "time": 200
    }).id('kubejs:cooking/sourceberry_stew_from_sourceberries')

})