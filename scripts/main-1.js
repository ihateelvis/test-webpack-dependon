require.config({
  baseUrl: '.',
  paths: {
    modules: './dist'
  }
});

define(["modules/ModuleC", "modules/ModuleB", "modules/ModuleA"],
  function(a, b, ModuleA) {
    // ModuleA.default();
    console.log(`Contents of A: ${ModuleA}`);
  }
);
