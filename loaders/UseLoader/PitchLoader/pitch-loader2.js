function PitchLoader2 () {
  console.log('执行pitchLoader2中的normalLoader');
}

PitchLoader2.pitch = function () {
  console.log('执行pitchLoader2中的pitchLoader');
}

module.exports = PitchLoader2