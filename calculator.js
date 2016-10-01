function calculatePercent(n)
{
	var id1 = "a" + n + "2";
	var id2 = "a" + n + "3";
	var a = document.getElementById(id1).value;
	var b = document.getElementById(id2).value;
	
	var p1 = Math.round((a/b) * 100 * 100)/100; //rounds off to 2 decimal places
	var id3 = "percent" + n;
	if( isFinite(p1) )
		document.getElementById(id3).innerHTML = p1 + "%";
	else
		document.getElementById(id3).innerHTML = "X";


}

function calculateWeighted()
{
	var a1 = 0,
		a2 = 0;
		a3 = 0;
		a4 = 0;
	
	var a12 = document.getElementById("a12").value;
	var a13 = document.getElementById("a13").value;
	//check inputs for activity 1
	if( isNaN(a12) || isNaN(a13) || a12 == "" || a13 == "" || a13 <= 0)
		a1=0;
	else
		a1 = a12/a13;
	
	var a22 = document.getElementById("a22").value;
	var a23 = document.getElementById("a23").value;
	//check inputs for activity 2
	if( isNaN(a22) || isNaN(a23) || a22 == "" || a23 == "" || a23 <= 0)
		a2=0;
	else
		a2 = a22/a23;
	
	var a32 = document.getElementById("a32").value;
	var a33 = document.getElementById("a33").value;
	//check inputs for activity 3
	if( isNaN(a32) || isNaN(a33) || a32 == "" || a33 == "" || a33 <= 0)
		a3=0;
	else
		a3 = a32/a33;
	
	var a42 = document.getElementById("a42").value;
	var a43 = document.getElementById("a43").value;
	//check inputs for activity 4
	if( isNaN(a42) || isNaN(a43) || a42 == "" || a43 == "" || a43 <= 0)
		a4=0;
	else
		a4 = a42/a43;
	
	var w1 = parseInt(document.getElementById("a11").value);
	var w2 = parseInt(document.getElementById("a21").value);
	var w3 = parseInt(document.getElementById("a31").value);
	var w4 = parseInt(document.getElementById("a41").value);
	//checks if weights are numbers
	if ( isNaN(w1) )
		w1 = 0;
	if ( isNaN(w2) )
		w2 = 0;
	if ( isNaN(w3) )
		w3 = 0;
	if ( isNaN(w4) )
		w4 = 0;
	
	var wt = w1+w2+w3+w4;
	//checks if there is a weight at all
	if(wt == 0 || isNaN(wt))
		document.getElementById("weighted").innerHTML = "X";
	else
	{
		var weighted = (a1 * w1 + a2 * w2 + a3 * w3 + a4 * w4) / wt;
		weighted = weighted * 100;
		document.getElementById("weighted").innerHTML = weighted + " / 100";
	}
	
	
}

function calculateMean()
{
	var a1 = 0,
		a2 = 0;
		a3 = 0;
		a4 = 0;
	
	var a12 = document.getElementById("a12").value;
	var a13 = document.getElementById("a13").value;
	//check inputs for activity 1
	if( isNaN(a12) || isNaN(a13) || a12 == "" || a13 == "" || a13 <= 0)
		a1=0;
	else
		a1 = a12/a13;
	
	var a22 = document.getElementById("a22").value;
	var a23 = document.getElementById("a23").value;
	//check inputs for activity 2
	if( isNaN(a22) || isNaN(a23) || a22 == "" || a23 == "" || a23 <= 0)
		a2=0;
	else
		a2 = a22/a23;
	
	var a32 = document.getElementById("a32").value;
	var a33 = document.getElementById("a33").value;
	//check inputs for activity 3
	if( isNaN(a32) || isNaN(a33) || a32 == "" || a33 == "" || a33 <= 0)
		a3=0;
	else
		a3 = a32/a33;
	
	var a42 = document.getElementById("a42").value;
	var a43 = document.getElementById("a43").value;
	//check inputs for activity 4
	if( isNaN(a42) || isNaN(a43) || a42 == "" || a43 == "" || a43 <= 0)
		a4=0;
	else
		a4 = a42/a43;
	
	
	var non_zero = 0;
	//check for non zero activities
	if (a1 > 0)
		non_zero++;
	if (a2 > 0)
		non_zero++;
	if (a3 > 0)
		non_zero++;
	if (a4 > 0)
		non_zero++;
	
	if(non_zero > 0)
	{
		var mean = (a1 + a2 + a3 + a4)/non_zero * 100;
		document.getElementById("mean").innerHTML = mean + "%";
	}
	else
		document.getElementById("mean").innerHTML = "X";
}