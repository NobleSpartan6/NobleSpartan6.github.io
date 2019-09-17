const tilts = document.querySelectionAll(.'tilt');
const livetilts = new UniversalTilt(tilts,{});

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
    scale: 1.2
})
