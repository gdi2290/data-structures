var Stack = function(){
  var methods = Object.create(Stack.prototype);
  methods.storage = {};
  methods.stackSize = 0;
  return methods;
};

stackMethods = Stack.prototype;

stackMethods.push = function(value){
};

stackMethods.pop = function(){
};

stackMethods.size = function(){
};
