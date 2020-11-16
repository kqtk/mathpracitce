oper  = [ " + ", " - ", " * ", " / " ];

and  = [ 1, 2 ];
ator = [ 2 ];

var que, ans;

queDOM = document.getElementById("question");	
ansDOM = document.getElementById("answer");

function ask(){
	num=randnum(and[0]);
	ans=num;
	que=num + "";

	for(i=0; i<ator.length; i++){
		num=randnum(and[i+1]);
		if(ator[i] == 0)	ans += num;
		else if(ator[i] == 1)   ans -= num;
		else if(ator[i] == 2)   ans *= num;
		else			ans /= num;
		que += oper[ator[i]] + num;
	}
	//DOM Manipulation
	queDOM.innerHTML = que;
}

function randnum(oom){
	return Math.floor(Math.random()*Math.pow(10, oom));
}
function submit(){
	title=document.getElementsByTagName("title")[0];
	if(Number(ansDOM.value) == ans){
		title.innerHTML="MathPractice";
		ask();
		ansDOM.value="";
	}
	else {
		title.innerHTML="Incorrect";
	}
	
}

ask();

