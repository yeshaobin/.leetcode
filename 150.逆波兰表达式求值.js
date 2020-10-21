/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  tokens.forEach(( token ) => {
  if ( /^[+\-*/]$/.test( token ) ) {
    const [y, x] = [stack.pop(), stack.pop()];
    stack.push( evaluate( x, y, token ) );
  } else {
    stack.push( +token );  // Number(token)
  }
});

// The last evaluated expression is the answer
return stack.pop();
};

const evaluate = ( x, y, op ) => {
switch ( op ) {
  case '+': return x + y;
  case '-': return x - y;
  case '*': return x * y;
  case '/': return x / y | 0;  // Math.trunc()
}
};
// @lc code=end

