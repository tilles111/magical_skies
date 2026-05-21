ServerEvents.recipes(event => {
    event.remove({id: '/theurgy:.*liquefaction.*/'})
    // need liquefaction recipe for rendering and EMI to work, weird and bad!!!
})