function PitchLoader3 () {
  console.log('执行pitchLoader3中的normalLoader');
}

PitchLoader3.pitch = function () {
  console.log('执行pitchLoader3中的pitchLoader');
  return '触发熔断机制,此时不会执行pitch-loader4以及loader3中的normal-loader'
}

module.exports = PitchLoader3