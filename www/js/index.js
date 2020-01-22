var storage = window.localStorage;
var topiclist = [];
var tasklist = [];

class Topic {
	constructor(name,avg,id) {
		this.name = name;
		this.avg = avg;
		this.id = id;
	}
}

class Task {
	constructor(topic,avg,date,type) {
		this.topic = topic;
		this.avg = avg;
		this.date = date;
		this.type = type;
	}
}

function resetstorage() {
	storage.clear();
}

function updatetopics(list) {
	let place = 0;
	for (var x = 0; x < list.length; x++) {
		place += 1;
		storage.setItem('toplist' + x, JSON.stringify(list[x]));
	}
	storage.setItem('toplistl', place.toString());	
}

function updatetasks(list) {
	let place = 0;
	for (var y = 0; y < list.length; y++) {
		place += 1;
		storage.setItem('tasklist' + y, JSON.stringify(list[y]));
	}
	storage.setItem('tasklistl', place.toString());
}

function createheader() {
	$('#title').css({'font-size': ($("#divider").height() / 2) +'px'});
	$('#title').css({'top': ($("#divider").height() / 8)+'px'});
	$('#title').css({'left': ($("#divider").width() / 17.28)+'px'});
	$('#darrb').css({'height': ($("#divider").height() / 2)+'px'});
	$('#darrb').css({'top': ($("#divider").height() / 4)+'px'});
	$('#darrb').css({'left': (($("#divider").width() / 17.28) + $("#title").width() + $("#divider").height() / 4)+'px'});
}

function createaddb() {
	$('#add').css({'height': ($(".himg").height() * 1.5) +'px'});
	$('#add').css({'width': ($(".himg").height() * 1.5) +'px'});
	$('#add').css({'bottom': ($("#add").height() / 4 + $("#navbar").height())+'px'});
	$('#add').css({'right': ($("#add").width() / 4) +'px'});
	
}

function createelement(a,x,y,topic,avg,height,width) {
	$( "#content" ).append( "<div class='classes' id='class"+a+"' onclick='changeper("+a+")'></div>");
	$( "#class"+a ).append( "<p class='classtext topic' id='topic"+a+"'>"+topic+"</p>" );
	$( "#class"+a ).append( "<p class='classtext avg' id='avg"+a+"'>"+avg+"%</p>" );
	$( "#class"+a ).append( "<p class='remove' id='remove"+a+"'>x</p>" );
	$( "#class"+a ).css({'top': (y + $("#divider").height())+'px'});
	$( "#class"+a ).css({'left': x +'px'});
	$( "#class"+a ).css({'height': height +'px'});
	$( "#class"+a ).css({'width': width +'px'});
	$( "#class"+a ).css({'backround-color': '#404040'});
	$( "#class"+a ).css({'position': '#fixed'});
	$( "#topic"+a ).css({'font-size': (($( "#class"+a ).width() / 20) * 3) +'px'});
	$( "#avg"+a ).css({'font-size': ($( "#class"+a ).width() / 10) +'px'});
	$( "#avg"+a ).css({'top': $( "#topic"+a ).height() +'px'});
	$( "#avg"+a ).css({'left': (($( "#avg"+a ).width() / 2)/2) +'px'});
	$( "#topic"+a ).css({'left': (($( "#avg"+a ).width() / 2)/2) +'px'});
	$( "#remove"+a ).css({'font-size': ($( "#class"+a ).width() / 2.5) +'px'});
	$( "#remove"+a ).css({'right': ($( "#avg"+a ).width() / 2)+'px'});
}

function createelementtask(a,x,y,topic,avg,height,width,date, type, spacex ) {
	$( "#content" ).append( "<div class='classes' id='class"+a+"' onclick='changeper("+a+")'></div>");
	$( "#class"+a ).append( "<p class='classtext topic' id='topic"+a+"'>"+topic+": "+type+"</p>" );
	$( "#class"+a ).append( "<p class='classtext avg' id='avg"+a+"'>Mark to get: "+avg+"</p>" );
	$( "#class"+a ).append( "<p class='classtext date' id='date"+a+"'>Due: "+date+"</p>" );
	$( "#class"+a ).css({'top': (y + $("#divider").height())+'px'});
	$( "#class"+a ).css({'left': spacex / 2 +'px'});
	$( "#class"+a ).css({'height': height +'px'});
	$( "#class"+a ).css({'width': width +'px'});
	$( "#class"+a ).css({'backround-color': '#404040'});
	$( "#class"+a ).css({'position': '#fixed'});
	$( "#topic"+a ).css({'font-size': ($( "#class"+a ).width() / 15) +'px'});
	$( "#avg"+a ).css({'font-size': ($( "#class"+a ).width() / 10) / 2 +'px'});
	$( "#avg"+a ).css({'bottom': $( "#avg"+a ).height() / 4 +'px'});
	$( "#avg"+a ).css({'left': spacex / 2 +'px'});
	$( "#topic"+a ).css({'left': spacex / 2 +'px'});
	$( "#date"+a ).css({'font-size': ($( "#class"+a ).width() / 10) / 2+'px'});
	$( "#date"+a ).css({'right': spacex / 2 +'px'});
	$( "#date"+a ).css({'bottom': $( "#avg"+a ).height() / 4 +'px'});
}

function createmonth(i) {
	var monthh = "";
	switch (i) {
		case 1:
			monthh = "January"
			break;
		case 2:
			monthh = "Febuary"
			break;
		case 3:
			monthh = "March"
			break;
		case 4:
			monthh = "April"
			break;
		case 5:
			monthh = "May"
			break;
		case 6:
			monthh = "June"
			break;
		case 7:
			monthh = "July"
			break;
		case 8:
			monthh = "August"
			break;
		case 9:
			monthh = "September"
			break;
		case 10:
			monthh = "October"
			break;
		case 11:
			monthh = "November"
			break;
		case 12:
			monthh = "December"
			break;
	}
	$( "#content" ).append( "<p class='month' id='month"+i+"' '>"+monthh+":</p>");
	$('#month'+ i).css({'font-size': ($("#divider").height() / 2) +'px'});
	$('#month'+ i).css({'top': ($("#divider").height() / 8)+'px'});
	$('#month'+ i).css({'left': ($("#divider").width() / 17.28)+'px'});
}

function enditall(u) {
	console.log(tasklist.length);
	delete tasklist[u];
	console.log(tasklist.length);
	//window.setTimeout(location.reload(), 1000);
	
}

function createday(list, u) {
	console.log(u);
	var date = list[u].date.charAt(list[u].date.length -2) + list[u].date.charAt(list[u].date.length-1);
	var string = "" + list[u].topic + " " + list[u].type + " due " + date;
	$( "#content" ).append( "<p class='day' id='dayyyy"+u+"'>"+string+"</p>");
	$('#dayyyy'+ u).css({'font-size': ($("#divider").height() / 3) +'px'});
	$('#dayyyy'+ u).css({'top': ($("#divider").height() / 8)+'px'});
	$('#dayyyy'+ u).css({'left': ($("#divider").width() / 17.28)+'px'});
	
}



function load() {
	//resetstorage();
	//TOPICS
	try {      
		for (var i = 0; i < parseInt(storage.getItem('toplistl')); i++) {
			let retreive = JSON.parse(storage.getItem('toplist' + i));
			let t = new Topic(retreive.name, retreive.avg, retreive.id);
			topiclist.push(t);
		}
	}
    catch(e) { console.error(e); }
    
   //TASKS
   try {      
        for (var i = 0; i < (parseInt(storage.getItem('tasklistl'))); i++) {
            let retreive = JSON.parse(storage.getItem('tasklist' + i));
            let t = new Task(retreive.topic, retreive.avg, retreive.date, retreive.type);
            tasklist.push(t);
        }
    }
    catch(e) { console.error(e); }
	console.log(tasklist.length)

    //MARGINS
	var height = $("#navbar").height() / 2;
	var width = $("#navbar").width();
	var marginsizes = width - (height * 4);
	var finalmargin = Math.floor(marginsizes / 8) - 1;
	$('.himg').css({'margin-left': finalmargin +'px'});
	$('.himg').css({'margin-right': finalmargin +'px'});
	$('.himg').css({'top': height / 2 +'px'});
	structure(topiclist, tasklist);
}

function structure(topiclist, tasklist) {
	//UPCOMING
	if (($("body").data("selector")) === "upcoming") {
		createheader();
		for (var i = 1; i < 14; i++) {
			for (var u = 0; u < (parseInt(storage.getItem('tasklistl'))); u++) {
				var month = parseInt(tasklist[u].date.charAt(tasklist[u].date.length-5) + tasklist[u].date.charAt(tasklist[u].date.length-4));
				var day = parseInt(tasklist[u].date.charAt(tasklist[u].date.length-2) + tasklist[u].date.charAt(tasklist[u].date.length-1));
				if (month == i) {
					for (var v = 1; v < 32; v++) { 
						if (day == v) {
							if (u <= 3) {
								let spacey = (($("#content").height() - ($(".himg").height() * 1.5 * 6)) / 7 );
								let cury = 0;
								let height = (($("#content").height() - (spacey * 5)) / 4 );
								switch (u) {
									case 0:
										cury = spacey;
										break;
									case 1:
										cury = spacey * 2 + height;
										break;
									case 2:
										cury = spacey * 3 + height * 2;
										break;
									case 3:
										cury = spacey * 4 + height * 3;
										break;
									default:
										break;
								}
								let place = $(".himg").css("margin-left");
								place = parseInt(place.replace("px", ""));
								let curx = place;
								let width = $("#content").width() - curx ;
								let topic = tasklist[u].topic;
								let type = tasklist[u].type;
								let date = tasklist[u].date;
								let avg = 0;
								for (var o = 0; o < parseInt(storage.getItem('toplistl')); o++) {
									if (tasklist[u].topic == topiclist[o].name) {
										avg = topiclist[o].avg;
									}
								}
							createelementtask(u+1,curx,cury,topic,avg,height,width,date,type,curx)
						}
						}
					}
				}
			}
		}
	}		
	
	//CLASS 
	else if (($("body").data("selector")) === "class") {
		createheader();
		createaddb();
		var clicks = 0;
		if (parseInt(storage.getItem('toplistl')) > 0) {
			clicks += parseInt(storage.getItem('toplistl'));
		}
        for (var i = 0; i < clicks; i++) {
            let cury = 0;
            let curx = 0;
            let topic = topiclist[i].name;
            let avg = topiclist[i].avg;
            let width = ($("#add").width() * 2);
            let height = ($("#add").height());
            let spacex = (($("#content").width() - (width * 3)) / 4 );
            let spacey = (($("#content").height() - (height * 6)) / 7 );
            if (i < 3) {
                curx = (i * width) + (spacex * (i + 1));
                cury = spacey;
            }
            else if (i < 6) {
                curx = ((i - 3) * width) + (spacex * (i - 2));
                cury = height + (spacey * 2);
            }
            else if (i < 9) {
                curx = ((i - 6) * width) + (spacex * (i - 5));
                cury = height * 2 + (spacey * 3);
            }
            else if (i < 12) {
                curx = ((i - 9) * width) + (spacex * (i - 8));
                cury = height * 3 + (spacey * 4);
            }
            else if (i < 15) {
                curx = ((i - 12) * width) + (spacex * (i - 11));
                cury = height * 4 + (spacey * 5);
            }
            else if (i < 17) {
                curx = ((i - 15) * width) + (spacex * (i - 14));
                cury = height * 5 + (spacey * 6);
            }
            else if (i >= 17){ alert("Too many classes"); return }
			let elemname = i + 1;
			createelement(elemname,curx,cury,topic,avg,height,width)
		}
		updatetopics(topiclist);
		
		$( "#add" ).click(function() {
			if (clicks < 18) {
				let cury = 0;
				let curx = 0;
				let topic = prompt("Enter the class topic", "Math");
				let newavg = prompt("Enter the desired percent average", "90");
				let avg = newavg.replace('%', '');
				let width = ($("#add").width() * 2);
				let height = $("#add").height();
				let spacex = (($("#content").width() - (width * 3)) / 4 );
				let spacey = (($("#content").height() - (height * 6)) / 7 );
				if (clicks < 3) {
					curx = (clicks * width) + (spacex * (clicks + 1));
					cury = spacey;
				}
				else if (clicks < 6) {
					curx = ((clicks - 3) * width) + (spacex * (clicks - 2));
					cury = height + (spacey * 2);
				}
				else if (clicks < 9) {
					curx = ((clicks - 6) * width) + (spacex * (clicks - 5));
					cury = height * 2 + (spacey * 3);
				}
				else if (clicks < 12) {
					curx = ((clicks - 9) * width) + (spacex * (clicks - 8));
					cury = height * 3 + (spacey * 4);
				}
				else if (clicks < 15) {
					curx = ((clicks - 12) * width) + (spacex * (clicks - 11));
					cury = height * 4 + (spacey * 5);
				}
				else if (clicks < 17) {
					curx = ((clicks - 15) * width) + (spacex * (clicks - 14));
					cury = height * 5 + (spacey * 6);
				}
				else if (clicks >= 17){ alert("Too many classes"); return }
				clicks += 1;
				createelement(clicks,curx,cury,topic,avg,height,width)
				let t = new Topic(topic, avg, clicks);
				topiclist.push(t);
				updatetopics(topiclist);
			}
		});
    }
	
	//GRADES
	else if (($("body").data("selector")) === "track") {

		//topic
		$('#classsub').css({'font-size': ($("#divider").height() / 2) +'px'});
		$('#classsub').css({'left': ($("#divider").width() / 17.28)+'px'});
		$('#classsub').css({'top': (($("#classsub").height() / 2)+$("#divider").height())+'px'});

		$('#classsel').css({'height': $("#classsub").height() / 2+'px'});
		$('#classsel').css({'width': $("#classsub").width() /2+'px'});
		$('#classsel').css({'right': ($("#divider").width() / 17.28) +'px'});
		$('#classsel').css({'top': ((($("#classsub").height() / 2)+$("#divider").height())+ $("#classsel").height() / 2)+'px'});
		

		for (var i = 0;i < parseInt(storage.getItem('toplistl')); i++) {
			
			$( "#classsel" ).append( "<option value='"+topiclist[i].name+"'>"+topiclist[i].name+"</option>" );
		}
		
		


		//date
		$('#duesub').css({'font-size': ($("#divider").height() / 2) +'px'});
		$('#duesub').css({'left': ($("#divider").width() / 17.28)+'px'});
		$('#duesub').css({'top': (($("#classsub").height() * 2)+$("#divider").height())+'px'});

		$('#duesel').css({'height': $("#classsub").height() / 2+'px'});
		$('#duesel').css({'width': $("#classsub").width() /2+'px'});
		$('#duesel').css({'right': ($("#divider").width() / 17.28)+'px'});
		$('#duesel').css({'top': ((($("#classsub").height() * 2)+$("#divider").height())+ $("#duesel").height() / 2)+'px'});


		
		//type
		$('#typesub').css({'font-size': ($("#divider").height() / 2) +'px'});
		$('#typesub').css({'left': ($("#divider").width() / 17.28)+'px'});
		$('#typesub').css({'top': ((($("#classsub").height() * 3)+($("#classsub").height() / 2))+$("#divider").height())+'px'});

		$('#typesel').css({'height': $("#classsub").height() / 2+'px'});
		$('#typesel').css({'width': $("#classsub").width() /2+'px'});
		$('#typesel').css({'right': ($("#divider").width() / 17.28)+'px'});
		$('#typesel').css({'top': (((($("#classsub").height() * 3)+($("#classsub").height() / 2))+$("#divider").height())+ $("#typesel").height() / 2)+'px'});

		createheader();
		createaddb();
		var clicks = 0;
		
		$( "#add" ).click(function() {
			clicks += 1;
			topic = $('#classsel').val();
			date = $('#duesel').val();
			type = $('#typesel').val();
			let t = new Task(topic,0,date,type);
			tasklist.push(t);
			updatetasks(tasklist);			
		});
	}
	
	
	
	
	//CALENDAR
	else if (($("body").data("selector")) === "calendar") {
		createheader();
		for (var i = 1; i < 13; i++) {
			for (var u = 0; u < (parseInt(storage.getItem('tasklistl'))); u++) {
				var month = parseInt(tasklist[u].date.charAt(tasklist[u].date.length-5) + tasklist[u].date.charAt(tasklist[u].date.length-4));
				if (month == i) {
					createmonth(month);
					for (var n = 1; n < 32; n++) {
						var day = parseInt(tasklist[u].date.charAt(tasklist[u].date.length -2) + tasklist[u].date.charAt(tasklist[u].date.length-1));
						if (day == n) {
							createday(tasklist,u);
						}
					}
				}
			}
		}
		$( ".day" ).click(function() {

			tasklist.splice(u,1);
			location.reload()
		});
		
	}
	
	
	
	
	//SETTINGS
	else if (($("body").data("selector")) === "settings") {
		
	}
}
