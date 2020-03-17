require.config({
  baseUrl: '.',
  paths: {
    modules: './dist'
  }
});

define(["modules/ModuleA"],
  function(ModuleA) {
    ModuleA.default();
  }
);
