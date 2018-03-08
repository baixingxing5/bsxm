var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 搜索
router.post('/search', (req, res) => {
    var sql = $sql.user.search;
    // console.log(sql)
    var params = req.body;
    conn.query(sql, [], function(err, result) {
        if (err) {
            // console.log(err);
        }
        if (result) {
            // jsonWrite(res, result);
        }
    })
});

module.exports = router;