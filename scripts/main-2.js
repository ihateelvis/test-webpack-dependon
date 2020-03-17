require.config({
  baseUrl: '.',
  paths: {
    modules: './dist'
  }
});

define(["modules/ModuleC", "modules/ModuleB", "modules/ModuleA"],
  function(ModuleC, ModuleB, ModuleA) {
    ModuleC.default();
    ModuleB.default();
    ModuleA.default();
  }
);
