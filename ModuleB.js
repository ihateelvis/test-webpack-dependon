import ModuleC from './ModuleC';

const ModuleB = function() {
  console.log('B');
  ModuleC();
};

export default ModuleB;
