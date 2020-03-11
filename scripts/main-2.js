require.config({
  baseUrl: '.',
  paths: {
    modules: './dist'
  }
});

define(["modules/ModuleA", "modules/ModuleB", "modules/ModuleC"],
  function(ModuleA, ModuleB, ModuleC) {
    ModuleA.default();
    ModuleB.default();
    ModuleC.default();
  }
);
