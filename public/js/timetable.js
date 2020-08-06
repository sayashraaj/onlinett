function convert(){

//hiding elements
document.getElementById('slotter').style.display='none';
document.getElementsByClassName('howtouse')[0].style.display='none';
document.getElementById('convert-button').style.display='none';


var index, boxes,id,name,link;
boxes = document.getElementsByClassName('subj');
for(index=0;index<boxes.length;index++){
	name = boxes[index].getElementsByTagName('input')[0].value;
	link = boxes[index].getElementsByTagName('input')[1].value;
	if(link) boxes[index].innerHTML = '<a href="'+link+'">'+name+'<a>';
	else boxes[index].innerHTML = name;
}


// for (index = 0; index < boxes.length; index++) {
// 	name=null;
// 	link=null;
// 	id=null;

// 	if(boxes[index].getElementsByTagName('input').length){
		
// 	id = boxes[index].getElementsByTagName('input')[0].id.toString();
// 	if(document.getElementById('name'+id.toLowerCase())) name = document.getElementById('name'+id.toLowerCase()).value;
// 	if(document.getElementById(id.toLowerCase())) link = document.getElementById(id.toLowerCase()).value;
// 	if(!boxes[index].getElementsByTagName('input')[0].value) continue;
	
// 	if(!name) name = boxes[index].getElementsByTagName('input')[0].value;
// 	if(!link) link = boxes[index].getElementsByTagName('input')[1].value;

//     boxes[index].innerHTML = '<a href="'+link+'">'+name+'<a>';
// }
// }

window.print();

}

function changer(slot){

	var i;
	slot=slot.id.toString()
	var val = document.getElementById(slot).value;
	var val1 = document.getElementById('name'+slot).value;
	slot=slot.toUpperCase();
	var divs=document.getElementsByClassName('subj');

	for(i=0;i<divs.length;i++){
		var box = divs[i].getElementsByTagName('input')[1];
		if(box.id===slot+'name'){
			box.value=val;

			divs[i].getElementsByTagName('input')[0].value = val1;
		}
	}

	// var i;
	// slot=slot.id.toString()
	// var val = document.getElementById(slot).value;
	// slot=slot.toUpperCase();
	// var divs=document.getElementsByClassName('subj');

	// for(i=0;i<divs.length;i++){
	// 	var box = divs[i].getElementsByTagName('input')[0];
	// 	if(box.id===slot){
	// 		box.value=val;
	// 	}
	// }
}