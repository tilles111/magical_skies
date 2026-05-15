StartupEvents.registry('item', event => {
    event.create('sourceberry_stew')
    .maxStackSize(16)
    .food(food => { food
      .hunger(5)
      .saturation(0.3)
      .effect('ars_nouveau:mana_regen', 200, 0, 2)
      .alwaysEdible()
      .eaten(ctx => {
        ctx.player.give('minecraft:bowl')
      })
  })
})