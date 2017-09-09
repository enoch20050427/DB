function show(){
	var data = studentCollection.find();
	console.log(data);
	for (var i = 0; i < data.length ; i++) {
		var student = data[i]
		$("#table-body").append(
			"<tr>"+
				"<td>" + student._id +"</td>"+
				"<td>" + student.name + "</td>"+
			"</tr>"
		);
	}
}
function myfun(){
	var name = $("input[name='name']").val();
	var age = $("input[name='age']").val();
	var newStudent = {
    	name: name,
    	age: age
	};
	studentCollection.insert(newStudent);
	studentCollection.save();
	var data = studentCollection.find();
}
$("#submit").on("click",myfun);
var fdb = new ForerunnerDB();
var db = fdb.db("myDB");
var studentCollection = db.collection('students');
studentCollection.load(show);