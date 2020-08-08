function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function () {
	var anos=[2016,2017,2018];
	var trimestre=[1,2,3,4];
	var meses=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
	var dias=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	function sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	sorteados=shuffle(meses);
	async function animacao(){
	    if(false){
		//essa implementação do hops está errada. O hops tem que ser amostras aleatórias não tem nada relacionado com fazer um ciclo aleatório do que vc tem
		for (var i = 0; i < sorteados.length; i++) {
		    if(hops){
			mesmedia= sorteados[i];
			inicioMedia(dataset);
			Vis04TutorialFunction(dataset);
		    }
		    if(i==(sorteados.length-1)){
			i=-1;
		    }
		    await sleep(660);
		}
	    }
	    else{
		for (var i = 0; i < sorteados.length; i++) {
		    if(hops){
			let myIndex = getRandomInt(0,meses.length-1);
			mesmedia= sorteados[myIndex];
			inicioMedia(dataset);
			Vis04TutorialFunction(dataset);
		    }
		    if(i==(sorteados.length-1)){
			i=-1;
		    }
		    await sleep(660);
		}
	    }
	}
	async function animacaoT(){
		for (var i = 0; i < sorteados.length; i++) {
			if(hops){
				mesmedia= sorteados[i];
				if(sorteados[i]=='Jan'){
					mesmediaN=0;
				}else if(sorteados[i]=='Fev'){
					mesmediaN=1;
				}else if(sorteados[i]=='Mar'){
					mesmediaN=2;
				}else if(sorteados[i]=='Abr'){
					mesmediaN=3;
				}else if(sorteados[i]=='Mai'){
					mesmediaN=4;
				}else if(sorteados[i]=='Jun'){
					mesmediaN=5;
				}else if(sorteados[i]=='Jul'){
					mesmediaN=6;
				}else if(sorteados[i]=='Ago'){
					mesmediaN=7;
				}else if(sorteados[i]=='Set'){
					mesmediaN=8;
				}else if(sorteados[i]=='Out'){
					mesmediaN=9;
				}else if(sorteados[i]=='Nov'){
					mesmediaN=10;
				}else if(sorteados[i]=='Dez'){
					mesmediaN=11;
				}
				inicioTaxi(datasettaxi);
			}
			if(i==(sorteados.length-1)){
				i=-1;
			}
			await sleep(660);
		}
	}
	animacao();
	animacaoT();
});
