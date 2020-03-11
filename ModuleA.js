import ModuleB from './ModuleB';
import ModuleC from './ModuleC';

const ModuleA = function() {
  console.log('A');
  ModuleB();
  ModuleC();
};

export default ModuleA;
