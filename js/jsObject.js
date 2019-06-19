/*
编程程序，完成下列需求：
创建一个空对象，变量名为user；
添加一个name属性，并设置值为John；
添加一个surname属性，并设置其值为Mike；
将name属性的值改为Peter;
删除user的name属性
 */
var user = {
  name:"john" ,
  surname:"Mike"
};
user.name = "Peter";
console.log(user);
delete user.name;
console.log(user);


/*
编写程序，实现下列需求：计算下面fruit对象共有多少个水果，应该输出50。

 */
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
// write your code here...
function getSum(fruit) {
  return fruit.apple+fruit.peach+fruit.pear;
}
getSum(fruit);
