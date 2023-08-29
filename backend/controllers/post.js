const conn = require("../config/dbConn");
const getPost = async (req, res) => {
  const id = req.params.id ? req.params.id : null;
  let sql;
  try {
	await conn.connect(async (err) => {
	  if (id) {
		sql = `SELECT * FROM posts WHERE id='${id}' `;
	  } else {
		sql = `SELECT * FROM posts`;
	  }
	  await conn.query(sql, async (err, result) => {
		if (result.length) {
		  res.json({
			data: result,
			message: "success",
			status: true,
		  });
		} else {
		  res.status(404).json({
			status: false,
			message: "Post not found",
		  });
		}
	  });
	});
  } catch (error) {
	console.log(error);
  }
};

const createPost = async (req, res) => {
  const request_fields = ["title", "content"];

  var error_flag = false;
  var return_data = {};
  if (error_flag == false) {
	for (var i = 0; i < request_fields.length; i++) {
	  var field = request_fields[i];
	  if (typeof req.body[field] == "undefined" || req.body[field] == "") {
		return_data.success = false;
		return_data.message = field + " field is required";
		error_flag = true;
		break;
	  }
	}
  }
  if (error_flag) {
	return res.json(return_data);
  }
  const { id, name } = req.user;
  const { title, content } = req.body;
  if (!title || !content) {
	res.status(400).json({
	  message: "Pls Fill the value",
	  status: "fail",
	});
  }
  try {
	await conn.connect(async (err) => {
	  const insert = `INSERT INTO posts (title,content,image,createdId,createdBy) VALUES ('${title}','${content}','','${id}','${name}')`;
	  await conn.query(insert, (err) => {
		if (err) throw err;
		res.json({
		  message: "success",
		  status: true,
		});
	  });
	});
  } catch (error) {
	console.log(error);
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  const request_fields = ["title", "content"];

  var error_flag = false;
  var return_data = {};
  if (error_flag == false) {
	for (var i = 0; i < request_fields.length; i++) {
	  var field = request_fields[i];
	  if (typeof req.body[field] == "undefined" || req.body[field] == "") {
		return_data.success = false;
		return_data.message = field + " field is required";
		error_flag = true;
		break;
	  }
	}
  }
  if (error_flag) {
	return res.json(return_data);
  }

  const { title, content } = req.body;
  if (!title || !content) {
	res.status(400).json({
	  message: "Pls Fill the value",
	  status: false,
	});
  }
  try {
	await conn.connect(async (err) => {
	  sql = `SELECT * FROM posts WHERE id='${id}' `;
	  await conn.query(sql, async (err, result) => {
		if (result.length) {
		  const update = `UPDATE posts SET title='${title}',content='${content}' WHERE id='${id}'`;
		  await conn.query(update, (err) => {
			if (err) throw err;
			res.json({
			  message: "success",
			  status: true,
			});
		  });
		} else {
		  res.status(404).json({
			status: false,
			message: "Post not found",
		  });
		}
	  });
	});
  } catch (error) {
	console.log(error);
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
	await conn.connect(async (err) => {
	  const sql = `DELETE FROM posts WHERE id='${id}' `;
	  await conn.query(sql, async (err) => {
		res.json({
		  message: "success",
		  status: true,
		});
	  });
	});
  } catch (error) {
	console.log(error);
  }
};

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
