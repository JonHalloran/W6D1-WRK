// sum
// function sum() {
//   let args = Array.from(arguments);
//   if(args.length <= 0) {
//     return 0;
//   }
//   console.log(args);
//   return args[0] + sum(...args.slice(1));
// }
//
// function sum2(...args) {
//   if(args.length === 0) {
//     return 0;
//   }
//   return args[0] + sum2(...args.slice(1));
// }

// bind
// Function.prototype.myBind = function(ctx) {
//   let args = Array.from(arguments).slice(1);
//   let self = this;
//   return function() {
//     let args2 = Array.from(arguments);
//     return self.apply(ctx, args.concat(args2));
//   };
// };

Function.prototype.myBind = function (ctx, ...args) {
  return (...otherArgs) => {
    return this.apply(ctx, args.concat(otherArgs));
  };
};

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs){
      return numbers.reduce((acc, el) => acc+el);
    } else {
      return _curriedSum;
    }

  }

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let main = this;

   let _curried = function(num) {
    // console.log(main);
    // console.log(numbers);
    // console.log(this);
    numbers.push(num);
    if(numbers.length === numArgs) {
      // return main(...numbers);
      return main.apply(main, numbers);
    } else {
      // console.log(this);
      return _curried;
    }

    };
    return _curried;


  // let self = this;
  // function _curriedSum(num) {
  //   numbers.push(num);
  //   if(numbers.length === numArgs) {
  //     return numbers.reduce((acc, el) => acc + el);
  //   } else {
  //     return this.apply(self)
  //   }
  // }

  /////
  // return (num) => {
  //   numbers.push(num);
  //   if(numbers.length === numArgs) {
  //     return this.apply(this, numbers);
  //   } else {
  //     return this;
  //   }
  // };
};

Function.prototype.curry2 = function (...numArgs) {
  return (...otherArgs) => {
    let args = numArgs.concat(otherArgs);
    if (args[0] === args.slice(1).length) {
      let nums = args.slice(1);
      return this(...nums);
    } else {

      return this.apply(this, numArgs.concat(otherArgs));
    }
  };
};




//sumThree.curry(3)(4)(20)(6);
