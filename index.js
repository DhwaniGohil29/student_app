const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
	host:"sql6.freesqldatabase.com",
	user:"sql6695458",
	password:"LAUPv7r6BZ",
	database:"sql6695458"

});

app.post("/save", (req, res)=>{
	let data = [req.body.rno, req.body.name, req.body.marks]
	let sql = "insert into student values(?, ?, ?)";
	con.query(sql, data, (err, result)=>{
		if(err)		res.send(err);
		else		res.send(result);

	});
});

app.get("/getdata", (req, res)=>{
	let sql = "select * from student";
	con.query(sql, (err, result)=>{
		if(err)		res.send(err);
		else		res.send(result);

	});
});

app.delete("/remove", (req, res)=>{
	let data = [req.body.rno]
	let sql = "delete from student where rno=?";
	con.query(sql, data, (err, result)=>{
		if(err)		res.send(err);
		else		res.send(result);

	});
});

app.put("/update", (req, res)=>{
	let data = [req.body.name, req.body.marks, req.body.rno]
	let sql = "update student set name = ?, marks = ? where rno = ?";
	con.query(sql, data, (err, result)=>{
		if(err)		res.send(err);
		else		res.send(result);

	});
});

app.listen(9000, ()=>{console.log("ready @ 9000")});