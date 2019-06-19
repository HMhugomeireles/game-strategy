export const GameSheet = {
  Buildings: {
    Base: {
      level: 1,
      resistance: 1000,
      nWorkerSlots: 8,
      timeBuild: 20,
      toReBuild: 1000
    },
    Carpentry: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 10,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 100
    },
    SlaughterHouse: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 10,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 100
    },
    IronHouse: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 10,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 50
    },
    RefineryOil: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 5,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 40
    },
    RefineryGold: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 5,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 30
    },
    Quarry: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 5,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 70
    },
    WaterWell: {
      level: 1,
      resistance: 300,
      nWorkerSlots: 5,
      timeBuild: 10,
      toReBuild: 500,
      valueCollectInTime: 50
    },
    ArmyHouse: {
      level: 1,
      resistance: 600,
      nWorkerSlots: 5,
      timeBuild: 10,
      toReBuild: 500,
    },
  },
  Characters: {
    Worker: {
      timeCreation: 2,
      level: 1,
      speed: 0,
      energyExperience: 0,
      resourcesExperience: 0,
      buildingExperience: 0,
    }
  }
}
