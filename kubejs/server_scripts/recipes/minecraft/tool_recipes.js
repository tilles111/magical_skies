ServerEvents.recipes(event => {
    event.shaped('kubejs:crude_pickaxe',[
        'P ',
        'SP'
    ],{
        P: 'twigs:pebble',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:crude_axe',[
        'P ',
        'PS'
    ],{
        P: 'twigs:pebble',
        S: '#forge:rods/wooden'
    })
    
    event.shaped('kubejs:slate_sword',[
        'U',
        'B',
        'S'
    ],{
        U: 'kubejs:inert_slate',
        B: 'bloodmagic:blankslate',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:slate_pickaxe',[
        'UBU',
        ' S ',
        ' S '
    ],{
        U: 'kubejs:inert_slate',
        B: 'bloodmagic:blankslate',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:slate_shovel',[
        'B',
        'S',
        'S'
    ],{
        B: 'bloodmagic:blankslate',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:slate_axe',[
        'UB',
        'US',
        ' S'
    ],{
        U: 'kubejs:inert_slate',
        B: 'bloodmagic:blankslate',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:slate_hoe',[
        'UB',
        ' S',
        ' S'
    ],{
        U: 'kubejs:inert_slate',
        B: 'bloodmagic:blankslate',
        S: '#forge:rods/wooden'
    })
    
    event.shaped('kubejs:bronze_sword',[
        'B',
        'B',
        'S'
    ],{
        B: '#forge:ingots/bronze',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:bronze_pickaxe',[
        'BBB',
        ' S ',
        ' S '
    ],{
        B: '#forge:ingots/bronze',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:bronze_shovel',[
        'B',
        'S',
        'S'
    ],{
        B: '#forge:ingots/bronze',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:bronze_axe',[
        'BB',
        'BS',
        ' S'
    ],{
        B: '#forge:ingots/bronze',
        S: '#forge:rods/wooden'
    })
    event.shaped('kubejs:bronze_hoe',[
        'BB',
        ' S',
        ' S'
    ],{
        B: '#forge:ingots/bronze',
        S: '#forge:rods/wooden'
    })
})