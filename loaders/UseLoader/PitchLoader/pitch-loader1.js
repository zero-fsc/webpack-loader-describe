function PitchLoader1 () {
  console.log('执行pitchLoader1中的normalLoader');
}

PitchLoader1.pitch = function () {
  console.log('执行pitchLoader1中的pitchLoader');
}

module.exports = PitchLoader1