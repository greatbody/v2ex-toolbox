import MarkBuildingOwner from './functions/MarkBuildingOwner';
import AtPeople from './functions/AtPeople';

class Runner {
  run = () => {
    console.log('Hello, this is V2EX tool');
    MarkBuildingOwner.markOwner();
    AtPeople.new();
  }
}

// eslint-disable-next-line
(function () {
  // eslint-disable-next-line
  'use strict';
  const runner = new Runner();
  runner.run();
  // eslint-disable-next-line
}());
