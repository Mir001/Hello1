const Print = function(symbol,times) {
	if (times === 0) {
		return " ";
	}
	else {
		return symbol + Print(symbol,times-1);
	}
};
const func = function(space,astx)
{
	if(space<0) {
		return;
	}
	else {
		console.log(Print(" " ,space)+Print("*",astx));
		return func(space-1,astx+2);
	}
};
const triangleStars = function(n) {
	func(n-1,1);
}
triangleStars(5);