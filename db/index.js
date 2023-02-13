const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());

const connection = mysql.createConnection({
    host: "166.62.10.50",
    user: "mithun",
    password: "advity@123",
    database: "biolabs",
    multipleStatements: true
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "biolabs",
    // multipleStatements: true
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected Successfully to MySql Server")
});

app.get("/", (req, res) => {
    res.send("Hello From The Server");
})


app.post('/api/securitylogin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM security_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post('/api/bdlogin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM bd_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post('/api/tfmlogin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM tfm_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post('/api/ticologin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM tico_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post('/api/qalogin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM qa_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post('/api/sdlogin', function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    
    connection.query('SELECT * FROM sd_login WHERE username = ? AND password = ?',[username, password], function(err,result){
        if(result.length > 0) {
            res.send(200, {
                msg: "Logged in succesfully!",
            })
        } else {
            res.send(500, {
                msg: "Something went wrong please try again!"
            })
        }
        res.end();
    })

})

app.post("/api/secdash", (req, res) => {
    console.log("Request.. ");
    let article_name = req.body.article_name;
    let mode = req.body.mode;
    let condition1 = req.body.condition1;
    let condition2 = req.body.condition2;
    let quantity = req.body.quantity;
    let location = req.body.location;

    let query = `INSERT INTO security_add (article_name, mode, condition1, condition2, quantity, location) VALUES ('${article_name}', '${mode}', '${condition1}', '${condition2}', '${quantity}', '${location}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/personnel", (req, res) => {
    console.log("Request.. ");
    let allocate_personnel = req.body.allocate_personnel;

    let query = `INSERT INTO study_personnel (personnel) VALUES ('${allocate_personnel}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/bddash", (req, res) => {
    console.log("Request.. ");
    let sponser_name = req.body.sponser_name;
    let address = req.body.address;
    let rep_name = req.body.rep_name;
    let email = req.body.email;
    let city = req.body.city;
    let country = req.body.country;
    let pdf = req.files.file;

    pdf.mv(`${__dirname}/../biolabs/public/uploads/${pdf.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: pdf.name, path: `/${pdf.name}`});
    })

    let query = `INSERT INTO bd_add (sponser_name, address, rep_name, email, city, country, pdf) VALUES ('${sponser_name}', '${address}', '${rep_name}', '${email}', '${city}', '${country}', '${pdf.name}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/bdupdate/:id", (req, res) => {
    var id = req.params.id;
    let sponsor_code = req.body.sponsor_code;
    let type = req.body.type;
    let article_code = req.body.article_code;
    let study_no = req.body.study_no;
    let study_dir = req.body.study_dir;
    let study_code = req.body.study_code;
    let g_ng = req.body.g_ng;
    let remarks1 = req.body.remarks1;
    let remarks2 = req.body.remarks2;
    let remarks3 = req.body.remarks3;

    let query = `UPDATE bd_add SET sponsor_code='${sponsor_code}',type='${type}',article_code='${article_code}',study_no='${study_no}',study_dir='${study_dir}',study_code='${study_code}',g_ng='${g_ng}',remarks1='${remarks1}',remarks2='${remarks2}',remarks3='${remarks3}' WHERE id=${id}; INSERT IGNORE INTO draft_plan (gpmt_id) VALUES ('${id}'); INSERT IGNORE INTO draftast_plan (ast_id) VALUES ('${id}'); INSERT IGNORE INTO draftnzw_plan (irtnzw_id) VALUES ('${id}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/tfmbdupdate/:id", (req, res) => {
    var id = req.params.id;
    let tfm_status = req.body.tfm_status;
    let tfm_comments = req.body.tfm_comments;

    let query = `UPDATE bd_add SET tfm_status='${tfm_status}',tfm_comments='${tfm_comments}' WHERE id=${id};`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/qabdupdate/:id", (req, res) => {
    var id = req.params.id;
    let qa_comments = req.body.qa_comments;

    let query = `UPDATE bd_add SET qa_comments='${qa_comments}' WHERE id=${id};`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/bdupdatecom/:id", (req, res) => {
    var id = req.params.id;
    let bd_comments = req.body.bd_comments;

    let query = `UPDATE bd_add SET bd_comments='${bd_comments}' WHERE id=${id};`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/ticodash", (req, res) => {
    console.log("Request.. ");
    let tico_sl = req.body.tico_sl;
    let tico_art_name = req.body.tico_art_name;
    let tico_mode = req.body.tico_mode;
    let tico_storage = req.body.tico_storage;
    let tico_qty = req.body.tico_qty;
    let tico_remarks = req.body.tico_remarks;
    let test_article_name = req.body.test_article_name;
    let name = req.body.name;
    let sponsor_name = req.body.sponsor_name;
    let tico_key = req.body.tico_key;
    let pack_details = req.body.pack_details;
    let expiry_date1 = req.body.expiry_date1;
    let batch_no = req.body.batch_no;
    let phy_app1 = req.body.phy_app1;
    let balance_id1 = req.body.balance_id1;
    let total_qty1 = req.body.total_qty1;
    let condition1 = req.body.condition1;
    let availability1 = req.body.availability1;
    let transport1 = req.body.transport1;
    let verify1 = req.body.verify1;
    let details1 = req.body.details1;
    let details2 = req.body.details2;
    let details3 = req.body.details3;
    let details4 = req.body.details4;
    let expiry_date2 = req.body.expiry_date2;
    let phy_app2 = req.body.phy_app2;
    let total_qty2 = req.body.total_qty2;
    let balance_id2 = req.body.balance_id2;
    let condition2 = req.body.condition2;
    let availability2 = req.body.availability2;
    let transport2 = req.body.transport2;
    let verify2 = req.body.verify2;
    let details5 = req.body.details5;
    let details6 = req.body.details6;
    let details7 = req.body.details7;
    let details8 = req.body.details8;
    let discrepancy2 = req.body.discrepancy2;
    let action2 = req.body.action2;

    let query = `INSERT INTO tico_add (tico_sl, tico_art_name, tico_mode, tico_storage, tico_qty, tico_remarks, test_article_name, name, sponsor_name, tico_key, pack_details, expiry_date1, batch_no, phy_app1, balance_id1, total_qty1, condition1, availability1, transport1, verify1, details1, details2, details3, details4, expiry_date2, phy_app2, total_qty2, balance_id2, condition2, availability2, transport2, verify2, details5, details6, details7, details8, discrepancy2, action2) VALUES ('${tico_sl}', '${tico_art_name}', '${tico_mode}', '${tico_storage}', '${tico_qty}', '${tico_remarks}', '${test_article_name}', '${name}', '${sponsor_name}', '${tico_key}', '${pack_details}', '${expiry_date1}', '${batch_no}', '${phy_app1}', '${balance_id1}', '${total_qty1}', '${condition1}', '${availability1}', '${transport1}', '${verify1}', '${details1}', '${details2}', '${details3}', '${details4}', '${expiry_date2}', '${phy_app2}', '${total_qty2}', '${balance_id2}', '${condition2}', '${availability2}', '${transport2}', '${verify2}', '${details5}', '${details6}', '${details7}', '${details8}', '${discrepancy2}', '${action2}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/ticoadd1/:id", (req, res) => {
    console.log("Request.. ");
    var id = req.params.id;
    let cont_weight1 = req.body.cont_weight1;
    let con_id1 = req.body.con_id1;
    let gross_wt1 = req.body.gross_wt1;
    let samp_id1 = req.body.samp_id1;
    let bal_id1 = req.body.bal_id1;
    let cont_weight2 = req.body.cont_weight2;
    let con_id2 = req.body.con_id2;
    let gross_wt2 = req.body.gross_wt2;
    let samp_id2 = req.body.samp_id2;
    let bal_id2 = req.body.bal_id2;
    let cont_weight3 = req.body.cont_weight3;
    let con_id3 = req.body.con_id3;
    let gross_wt3 = req.body.gross_wt3;
    let samp_id3 = req.body.samp_id3;
    let bal_id3 = req.body.bal_id3;
    let cont_weight4 = req.body.cont_weight4;
    let con_id4 = req.body.con_id4;
    let gross_wt4 = req.body.gross_wt4;
    let samp_id4 = req.body.samp_id4;
    let bal_id4 = req.body.bal_id4;
    let cont_weight5 = req.body.cont_weight5;
    let con_id5 = req.body.con_id5;
    let gross_wt5 = req.body.gross_wt5;
    let samp_id5 = req.body.samp_id5;
    let bal_id5 = req.body.bal_id5;

    let query = `INSERT INTO tico_add1 (cont_weight1, con_id1, gross_wt1, samp_id1, bal_id1, cont_weight2, con_id2, gross_wt2, samp_id2, bal_id2, cont_weight3, con_id3, gross_wt3, samp_id3, bal_id3, cont_weight4, con_id4, gross_wt4, samp_id4, bal_id4, cont_weight5, con_id5, gross_wt5, samp_id5, bal_id5, ticoadd_id) VALUES ('${cont_weight1}', '${con_id1}', '${gross_wt1}', '${samp_id1}', '${bal_id1}', '${cont_weight2}', '${con_id2}', '${gross_wt2}', '${samp_id2}', '${bal_id2}', '${cont_weight3}', '${con_id3}', '${gross_wt3}', '${samp_id3}', '${bal_id3}', '${cont_weight4}', '${con_id4}', '${gross_wt4}', '${samp_id4}', '${bal_id4}', '${cont_weight5}', '${con_id5}', '${gross_wt5}', '${samp_id5}', '${bal_id5}', '${id}')`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.get("/api/secdash", (req, res) => {
    let query = "SELECT * FROM security_add";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/personnel", (req, res) => {
    let query = "SELECT * FROM study_personnel";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddash", (req, res) => {
    let query = "SELECT * FROM bd_add";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashgpmt", (req, res) => {
    let query = "SELECT * FROM bd_add WHERE study_code='GPMT' AND tfm_status='Approved'";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashgpmtone/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM bd_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashast", (req, res) => {
    let query = "SELECT * FROM bd_add WHERE study_code='AST' AND tfm_status='Approved'";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashastone/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM bd_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashirtnzw", (req, res) => {
    let query = "SELECT * FROM bd_add WHERE study_code='IRTNZW' AND tfm_status='Approved'";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/bddashirtnzwone/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM bd_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/ticodash", (req, res) => {
    let query = "SELECT * FROM tico_add";
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get('/api/secdashview/:id', function(req, res) {
    var id = req.params.id;
    var query=`SELECT * FROM security_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        } else { 
            res.send(200, {
                msg: "All the data fetched successfully!",
                data: result
            })
        }
    })
})

app.get('/api/bdview/:id', function(req, res) {
    var id = req.params.id;
    var query=`SELECT * FROM bd_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        } else { 
            res.send(200, {
                msg: "All the data fetched successfully!",
                data: result
            })
        }
    })
})

app.get('/api/ticoview/:id', function(req, res) {
    var id = req.params.id;
    var query=`SELECT * FROM tico_add WHERE id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        } else { 
            res.send(200, {
                msg: "All the data fetched successfully!",
                data: result
            })
        }
    })
})

app.get('/api/ticoview1/:id', function(req, res) {
    var id = req.params.id;
    var query=`SELECT * FROM tico_add1 WHERE ticoadd_id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        } else { 
            res.send(200, {
                msg: "All the data fetched successfully!",
                data: result
            })
        }
    })
})

app.post("/api/dplan/:id", (req, res) => {
    var id = req.params.id;
    console.log("Request.. ");
    let title1 = req.body.title1;
    let title2 = req.body.title2;
    let study_no = req.body.study_no;
    let study_code = req.body.study_code;
    let study_dir = req.body.study_dir;
    let sponser = req.body.sponser;
    let obj = req.body.obj;
    let study_title1 = req.body.study_title1;
    let study_no1 = req.body.study_no1;
    let study_code1 = req.body.study_code1;
    let ulr_no1 = req.body.ulr_no1;
    let sponsor1 = req.body.sponsor1;
    let study_director1 = req.body.study_director1;
    let study_vet1 = req.body.study_vet1;
    let sponsor_rep1 = req.body.sponsor_rep1;
    let monitor1 = req.body.monitor1;
    let study_start_date = req.body.study_start_date;
    let exp_start_date = req.body.exp_start_date;
    let acc = req.body.acc;
    let treat_start_date = req.body.treat_start_date;
    let exp_end_date = req.body.exp_end_date;
    let draft_rep = req.body.draft_rep;
    let study_end_date = req.body.study_end_date;
    let short1 = req.body.short1;
    let full1 = req.body.full1;
    let short2 = req.body.short2;
    let full2 = req.body.full2;
    let short3 = req.body.short3;
    let full3 = req.body.full3;
    let short4 = req.body.short4;
    let full4 = req.body.full4;
    let short5 = req.body.short5;
    let full5 = req.body.full5;
    let short6 = req.body.short6;
    let full6 = req.body.full6;
    let short7 = req.body.short7;
    let full7 = req.body.full7;
    let short8 = req.body.short8;
    let full8 = req.body.full8;
    let short9 = req.body.short9;
    let full9 = req.body.full9;
    let short10 = req.body.short10;
    let full10 = req.body.full10;
    let short11 = req.body.short11;
    let full11 = req.body.full11;
    let short12 = req.body.short12;
    let full12 = req.body.full12;
    let short13 = req.body.short13;
    let full13 = req.body.full13;
    let short14 = req.body.short14;
    let full14 = req.body.full14;
    let short15 = req.body.short15;
    let full15 = req.body.full15;
    let short16 = req.body.short16;
    let full16 = req.body.full16;
    let short17 = req.body.short17;
    let full17 = req.body.full17;
    let short18 = req.body.short18;
    let full18 = req.body.full18;
    let short19 = req.body.short19;
    let full19 = req.body.full19;
    let short20 = req.body.short20;
    let full20 = req.body.full20;
    let short21 = req.body.short21;
    let full21 = req.body.full21;
    let short22 = req.body.short22;
    let full22 = req.body.full22;
    let iaec_no = req.body.iaec_no;
    let item_name = req.body.item_name;
    let item_code = req.body.item_code;
    let item_code1 = req.body.item_code1;
    let intended_use = req.body.intended_use;
    let contact_site = req.body.contact_site;
    let duration = req.body.duration;
    let material = req.body.material;
    let weight = req.body.weight;
    let storage_cond = req.body.storage_cond;
    let batch_no = req.body.batch_no;
    let mfg_date = req.body.mfg_date;
    let exp_date = req.body.exp_date;
    let sterility = req.body.sterility;
    let mfg_by = req.body.mfg_by;
    let supplied_by = req.body.supplied_by;
    let others = req.body.others;
    let anex_1 = req.body.anex_1;
    let iso_1 = req.body.iso_1;
    let source = req.body.source;
    let age = req.body.age;
    let no_groups = req.body.no_groups;
    let no_animals = req.body.no_animals;
    let weight_range = req.body.weight_range;
    let temp = req.body.temp;
    let cage_size = req.body.cage_size;
    let mfg_by_name = req.body.mfg_by_name;
    let test_extract = req.body.test_extract;
    let induction = req.body.induction;
    let anex_2 = req.body.anex_2;
    let g1a = req.body.g1a;
    let g2a = req.body.g2a;
    let g1b = req.body.g1b;
    let g2b = req.body.g2b;
    let challenge_phase = req.body.challenge_phase;
    let g1a_head = req.body.g1a_head;
    let g1a_right = req.body.g1a_right;
    let g1a_polar = req.body.g1a_polar;
    let g1a_left = req.body.g1a_left;
    let g1a_nonpolar = req.body.g1a_nonpolar;
    let g2a_head = req.body.g2a_head;
    let g2a_right = req.body.g2a_right;
    let g2a_polar = req.body.g2a_polar;
    let g2a_left = req.body.g2a_left;
    let g2a_nonpolar = req.body.g2a_nonpolar;
    let g1b_head = req.body.g1b_head;
    let g1b_right = req.body.g1b_right;
    let g1b_polar = req.body.g1b_polar;
    let g1b_left = req.body.g1b_left;
    let g1b_nonpolar = req.body.g1b_nonpolar;
    let g2b_head = req.body.g2b_head;
    let g2b_right = req.body.g2b_right;
    let g2b_polar = req.body.g2b_polar;
    let g2b_left = req.body.g2b_left;
    let g2b_nonpolar = req.body.g2b_nonpolar;
    let anex_3 = req.body.anex_3;
    let anex_4 = req.body.anex_4;
    let archive_1 = req.body.archive_1;
    let archive_2 = req.body.archive_2;
    let study_no2 = req.body.study_no2;
    let date_app = req.body.date_app;
    let study_dir1 = req.body.study_dir1;
    let sign1 = req.body.sign1;
    let sign2 = req.body.sign2;
    let sign3 = req.body.sign3;
    let sponsor_name = req.body.sponsor_name;
    let spons_rep = req.body.spons_rep;
    let sign4 = req.body.sign4;
    let monitor_sci = req.body.monitor_sci;
    let sign5 = req.body.sign5;

    // let query = `INSERT INTO draft_plan (title1, title2, study_no, study_code, study_dir, sponser, obj,study_title1,study_no1,study_code1,ulr_no1,sponsor1,study_director1,study_vet1,sponsor_rep1,monitor1,study_start_date,exp_start_date,acc,treat_start_date,exp_end_date,draft_rep,study_end_date,iaec_no,item_name,item_code,item_code1,intended_use,contact_site,duration,material,weight,storage_cond,batch_no,mfg_date,exp_date,sterility,mfg_by,supplied_by,others,anex_1,iso_1,source,age,no_groups,no_animals,weight_range,temp,cage_size,mfg_by_name,test_extract,induction,anex_2,g1a,g2a,g1b,g2b,challenge_phase,g1a_head,g1a_right,g1a_polar,g1a_left,g1a_nonpolar,g2a_head,g2a_right,g2a_polar,g2a_left,g2a_nonpolar,g1b_head,g1b_right,g1b_polar,g1b_left,g1b_nonpolar,g2b_head,g2b_right,g2b_polar,g2b_left,g2b_nonpolar,anex_3,anex_4,archive_1,archive_2,study_no2,date_app,study_dir1,sign1,sign2,sign3,sponsor_name,spons_rep,sign4,monitor_sci,sign5) VALUES ('${title1}', '${title2}', '${study_no}', '${study_code}', '${study_dir}', '${sponser}', '${obj}', '${study_title1}', '${study_no1}', '${study_code1}', '${ulr_no1}', '${sponsor1}', '${study_director1}', '${study_vet1}', '${sponsor_rep1}', '${monitor1}', '${study_start_date}', '${exp_start_date}', '${acc}', '${treat_start_date}', '${exp_end_date}', '${draft_rep}', '${study_end_date}', '${iaec_no}', '${item_name}', '${item_code}', '${item_code1}', '${intended_use}', '${contact_site}', '${duration}', '${material}', '${weight}', '${storage_cond}', '${batch_no}', '${mfg_date}', '${exp_date}', '${sterility}', '${mfg_by}', '${supplied_by}', '${others}', '${anex_1}', '${iso_1}', '${source}', '${age}', '${no_groups}', '${no_animals}', '${weight_range}', '${temp}', '${cage_size}', '${mfg_by_name}', '${test_extract}', '${induction}', '${anex_2}', '${g1a}', '${g2a}', '${g1b}', '${g2b}', '${challenge_phase}','${g1a_head}','${g1a_right}','${g1a_polar}','${g1a_left}','${g1a_nonpolar}','${g2a_head}','${g2a_right}','${g2a_polar}','${g2a_left}','${g2a_nonpolar}','${g1b_head}','${g1b_right}','${g1b_polar}','${g1b_left}','${g1b_nonpolar}','${g2b_head}','${g2b_right}','${g2b_polar}','${g2b_left}','${g2b_nonpolar}','${anex_3}', '${anex_4}', '${archive_1}', '${archive_2}', '${study_no2}','${date_app}','${study_dir1}','${sign1}','${sign2}','${sign3}','${sponsor_name}','${spons_rep}','${sign4}','${monitor_sci}','${sign5}')`;
    
    let query = `UPDATE draft_plan SET title1='${title1}',title2='${title2}',study_no='${study_no}',study_code='${study_code}',study_dir='${study_dir}',sponser='${sponser}',obj='${obj}',study_title1='${study_title1}',study_no1='${study_no1}',study_code1='${study_code1}',ulr_no1='${ulr_no1}',sponsor1='${sponsor1}',study_director1='${study_director1}',study_vet1='${study_vet1}',sponsor_rep1='${sponsor_rep1}',monitor1='${monitor1}',study_start_date='${study_start_date}',exp_start_date='${exp_start_date}',acc='${acc}',treat_start_date='${treat_start_date}',exp_end_date='${exp_end_date}',draft_rep='${draft_rep}',study_end_date='${study_end_date}',short1='${short1}',full1='${full1}',short2='${short2}',full2='${full2}',short3='${short3}',full3='${full3}',short4='${short4}',full4='${full4}',short5='${short5}',full5='${full5}',short6='${short6}',full6='${full6}',short7='${short7}',full7='${full7}',short8='${short8}',full8='${full8}',short9='${short9}',full9='${full9}',short10='${short10}',full10='${full10}',short11='${short11}',full11='${full11}',short12='${short12}',full12='${full12}',short13='${short13}',full13='${full13}',short14='${short14}',full14='${full14}',short15='${short15}',full15='${full15}',short16='${short16}',full16='${full16}',short17='${short17}',full17='${full17}',short18='${short18}',full18='${full18}',short19='${short19}',full19='${full19}',short20='${short20}',full20='${full20}',short21='${short21}',full21='${full21}',short22='${short22}',full22='${full22}',iaec_no='${iaec_no}',item_name='${item_name}',item_code='${item_code}',item_code1='${item_code1}',intended_use='${intended_use}',contact_site='${contact_site}',duration='${duration}',material='${material}',weight='${weight}',storage_cond='${storage_cond}',batch_no='${batch_no}',mfg_date='${mfg_date}',exp_date='${exp_date}',sterility='${sterility}',mfg_by='${mfg_by}',supplied_by='${supplied_by}',others='${others}',anex_1='${anex_1}',iso_1='${iso_1}',source='${source}',age='${age}',no_groups='${no_groups}',no_animals='${no_animals}',weight_range='${weight_range}',temp='${temp}',cage_size='${cage_size}',mfg_by_name='${mfg_by_name}',test_extract='${test_extract}',induction='${induction}',anex_2='${anex_2}',g1a='${g1a}',g2a='${g2a}',g1b='${g1b}',g2b='${g2b}',challenge_phase='${challenge_phase}',g1a_head='${g1a_head}',g1a_right='${g1a_right}',g1a_polar='${g1a_polar}',g1a_left='${g1a_left}',g1a_nonpolar='${g1a_nonpolar}',g2a_head='${g2a_head}',g2a_right='${g2a_right}',g2a_polar='${g2a_polar}',g2a_left='${g2a_left}',g2a_nonpolar='${g2a_nonpolar}',g1b_head='${g1b_head}',g1b_right='${g1b_right}',g1b_polar='${g1b_polar}',g1b_left='${g1b_left}',g1b_nonpolar='${g1b_nonpolar}',g2b_head='${g2b_head}',g2b_right='${g2b_right}',g2b_polar='${g2b_polar}',g2b_left='${g2b_left}',g2b_nonpolar='${g2b_nonpolar}',anex_3='${anex_3}',anex_4='${anex_4}',archive_1='${archive_1}',archive_2='${archive_2}',study_no2='${study_no2}',date_app='${date_app}',study_dir1='${study_dir1}',sign1='${sign1}',sign2='${sign2}',sign3='${sign3}',sponsor_name='${sponsor_name}',spons_rep='${spons_rep}',sign4='${sign4}',monitor_sci='${monitor_sci}',sign5='${sign5}' WHERE gpmt_id=${id}`;  
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/dastplan/:id", (req, res) => {
    var id = req.params.id;
    console.log("Request.. ");
    let title1 = req.body.title1;
    let title2 = req.body.title2;
    let study_no = req.body.study_no;
    let study_code = req.body.study_code;
    let study_dir = req.body.study_dir;
    let sponser = req.body.sponser;
    let obj = req.body.obj;
    let study_title1 = req.body.study_title1;
    let study_no1 = req.body.study_no1;
    let study_code1 = req.body.study_code1;
    let ulr_no1 = req.body.ulr_no1;
    let sponsor1 = req.body.sponsor1;
    let study_director1 = req.body.study_director1;
    let study_vet1 = req.body.study_vet1;
    let sponsor_rep1 = req.body.sponsor_rep1;
    let monitor1 = req.body.monitor1;
    let study_start_date = req.body.study_start_date;
    let exp_start_date = req.body.exp_start_date;
    let acc = req.body.acc;
    let treat_start_date = req.body.treat_start_date;
    let exp_end_date = req.body.exp_end_date;
    let draft_rep = req.body.draft_rep;
    let study_end_date = req.body.study_end_date;
    let short1 = req.body.short1;
    let full1 = req.body.full1;
    let short2 = req.body.short2;
    let full2 = req.body.full2;
    let short3 = req.body.short3;
    let full3 = req.body.full3;
    let short4 = req.body.short4;
    let full4 = req.body.full4;
    let short5 = req.body.short5;
    let full5 = req.body.full5;
    let short6 = req.body.short6;
    let full6 = req.body.full6;
    let short7 = req.body.short7;
    let full7 = req.body.full7;
    let short8 = req.body.short8;
    let full8 = req.body.full8;
    let short9 = req.body.short9;
    let full9 = req.body.full9;
    let short10 = req.body.short10;
    let full10 = req.body.full10;
    let short11 = req.body.short11;
    let full11 = req.body.full11;
    let short12 = req.body.short12;
    let full12 = req.body.full12;
    let short13 = req.body.short13;
    let full13 = req.body.full13;
    let short14 = req.body.short14;
    let full14 = req.body.full14;
    let short15 = req.body.short15;
    let full15 = req.body.full15;
    let short16 = req.body.short16;
    let full16 = req.body.full16;
    let short17 = req.body.short17;
    let full17 = req.body.full17;
    let short18 = req.body.short18;
    let full18 = req.body.full18;
    let short19 = req.body.short19;
    let full19 = req.body.full19;
    let short20 = req.body.short20;
    let full20 = req.body.full20;
    let short21 = req.body.short21;
    let full21 = req.body.full21;
    let short22 = req.body.short22;
    let full22 = req.body.full22;
    let iaec_no = req.body.iaec_no;
    let item_name = req.body.item_name;
    let item_code = req.body.item_code;
    let item_code1 = req.body.item_code1;
    let intended_use = req.body.intended_use;
    let contact_site = req.body.contact_site;
    let duration = req.body.duration;
    let material = req.body.material;
    let weight = req.body.weight;
    let storage_cond = req.body.storage_cond;
    let batch_no = req.body.batch_no;
    let mfg_date = req.body.mfg_date;
    let exp_date = req.body.exp_date;
    let sterility = req.body.sterility;
    let mfg_by = req.body.mfg_by;
    let supplied_by = req.body.supplied_by;
    let others = req.body.others;
    let anex_1 = req.body.anex_1;
    let iso_1 = req.body.iso_1;
    let source = req.body.source;
    let age = req.body.age;
    let no_groups = req.body.no_groups;
    let no_animals = req.body.no_animals;
    let weight_range = req.body.weight_range;
    let temp = req.body.temp;
    let cage_size = req.body.cage_size;
    let mfg_by_name = req.body.mfg_by_name;
    let test_extract = req.body.test_extract;
    let archive_1 = req.body.archive_1;
    let archive_2 = req.body.archive_2;
    let study_no2 = req.body.study_no2;
    let date_app = req.body.date_app;
    let study_dir1 = req.body.study_dir1;
    let sign1 = req.body.sign1;
    let sign2 = req.body.sign2;
    let sign3 = req.body.sign3;
    let sponsor_name = req.body.sponsor_name;
    let spons_rep = req.body.spons_rep;
    let sign4 = req.body.sign4;
    let monitor_sci = req.body.monitor_sci;
    let sign5 = req.body.sign5;

    // let query = `INSERT INTO draftast_plan (title1, title2, study_no, study_code, study_dir, sponser, obj,study_title1,study_no1,study_code1,ulr_no1,sponsor1,study_director1,study_vet1,sponsor_rep1,monitor1,study_start_date,exp_start_date,acc,treat_start_date,exp_end_date,draft_rep,study_end_date,iaec_no,item_name,item_code,item_code1,intended_use,contact_site,duration,material,weight,storage_cond,batch_no,mfg_date,exp_date,sterility,mfg_by,supplied_by,others,anex_1,iso_1,source,age,no_groups,no_animals,weight_range,temp,cage_size,mfg_by_name,test_extract,archive_1,archive_2,study_no2,date_app,study_dir1,sign1,sign2,sign3,sponsor_name,spons_rep,sign4,monitor_sci,sign5) VALUES ('${title1}', '${title2}', '${study_no}', '${study_code}', '${study_dir}', '${sponser}', '${obj}', '${study_title1}', '${study_no1}', '${study_code1}', '${ulr_no1}', '${sponsor1}', '${study_director1}', '${study_vet1}', '${sponsor_rep1}', '${monitor1}', '${study_start_date}', '${exp_start_date}', '${acc}', '${treat_start_date}', '${exp_end_date}', '${draft_rep}', '${study_end_date}', '${iaec_no}', '${item_name}', '${item_code}', '${item_code1}', '${intended_use}', '${contact_site}', '${duration}', '${material}', '${weight}', '${storage_cond}', '${batch_no}', '${mfg_date}', '${exp_date}', '${sterility}', '${mfg_by}', '${supplied_by}', '${others}', '${anex_1}', '${iso_1}', '${source}', '${age}', '${no_groups}', '${no_animals}', '${weight_range}', '${temp}', '${cage_size}', '${mfg_by_name}', '${test_extract}', '${archive_1}', '${archive_2}', '${study_no2}','${date_app}','${study_dir1}','${sign1}','${sign2}','${sign3}','${sponsor_name}','${spons_rep}','${sign4}','${monitor_sci}','${sign5}')`;
    
    let query = `UPDATE draftast_plan SET title1='${title1}',title2='${title2}',study_no='${study_no}',study_code='${study_code}',study_dir='${study_dir}',sponser='${sponser}',obj='${obj}',study_title1='${study_title1}',study_no1='${study_no1}',study_code1='${study_code1}',ulr_no1='${ulr_no1}',sponsor1='${sponsor1}',study_director1='${study_director1}',study_vet1='${study_vet1}',sponsor_rep1='${sponsor_rep1}',monitor1='${monitor1}',study_start_date='${study_start_date}',exp_start_date='${exp_start_date}',acc='${acc}',treat_start_date='${treat_start_date}',exp_end_date='${exp_end_date}',draft_rep='${draft_rep}',study_end_date='${study_end_date}',short1='${short1}',full1='${full1}',short2='${short2}',full2='${full2}',short3='${short3}',full3='${full3}',short4='${short4}',full4='${full4}',short5='${short5}',full5='${full5}',short6='${short6}',full6='${full6}',short7='${short7}',full7='${full7}',short8='${short8}',full8='${full8}',short9='${short9}',full9='${full9}',short10='${short10}',full10='${full10}',short11='${short11}',full11='${full11}',short12='${short12}',full12='${full12}',short13='${short13}',full13='${full13}',short14='${short14}',full14='${full14}',short15='${short15}',full15='${full15}',short16='${short16}',full16='${full16}',short17='${short17}',full17='${full17}',short18='${short18}',full18='${full18}',short19='${short19}',full19='${full19}',short20='${short20}',full20='${full20}',short21='${short21}',full21='${full21}',short22='${short22}',full22='${full22}',iaec_no='${iaec_no}',item_name='${item_name}',item_code='${item_code}',item_code1='${item_code1}',intended_use='${intended_use}',contact_site='${contact_site}',duration='${duration}',material='${material}',weight='${weight}',storage_cond='${storage_cond}',batch_no='${batch_no}',mfg_date='${mfg_date}',exp_date='${exp_date}',sterility='${sterility}',mfg_by='${mfg_by}',supplied_by='${supplied_by}',others='${others}',anex_1='${anex_1}',iso_1='${iso_1}',source='${source}',age='${age}',no_groups='${no_groups}',no_animals='${no_animals}',weight_range='${weight_range}',temp='${temp}',cage_size='${cage_size}',mfg_by_name='${mfg_by_name}',test_extract='${test_extract}',archive_1='${archive_1}',archive_2='${archive_2}',study_no2='${study_no2}',date_app='${date_app}',study_dir1='${study_dir1}',sign1='${sign1}',sign2='${sign2}',sign3='${sign3}',sponsor_name='${sponsor_name}',spons_rep='${spons_rep}',sign4='${sign4}',monitor_sci='${monitor_sci}',sign5='${sign5}' WHERE ast_id=${id}`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.post("/api/dnzwplan/:id", (req, res) => {
    var id = req.params.id;
    console.log("Request.. ");
    let title1 = req.body.title1;
    let title2 = req.body.title2;
    let study_no = req.body.study_no;
    let study_code = req.body.study_code;
    let study_dir = req.body.study_dir;
    let sponser = req.body.sponser;
    let obj = req.body.obj;
    let study_title1 = req.body.study_title1;
    let study_no1 = req.body.study_no1;
    let study_code1 = req.body.study_code1;
    let ulr_no1 = req.body.ulr_no1;
    let sponsor1 = req.body.sponsor1;
    let study_director1 = req.body.study_director1;
    let study_vet1 = req.body.study_vet1;
    let sponsor_rep1 = req.body.sponsor_rep1;
    let monitor1 = req.body.monitor1;
    let study_start_date = req.body.study_start_date;
    let exp_start_date = req.body.exp_start_date;
    let acc = req.body.acc;
    let treat_start_date = req.body.treat_start_date;
    let exp_end_date = req.body.exp_end_date;
    let draft_rep = req.body.draft_rep;
    let study_end_date = req.body.study_end_date;
    let short1 = req.body.short1;
    let full1 = req.body.full1;
    let short2 = req.body.short2;
    let full2 = req.body.full2;
    let short3 = req.body.short3;
    let full3 = req.body.full3;
    let short4 = req.body.short4;
    let full4 = req.body.full4;
    let short5 = req.body.short5;
    let full5 = req.body.full5;
    let short6 = req.body.short6;
    let full6 = req.body.full6;
    let short7 = req.body.short7;
    let full7 = req.body.full7;
    let short8 = req.body.short8;
    let full8 = req.body.full8;
    let short9 = req.body.short9;
    let full9 = req.body.full9;
    let short10 = req.body.short10;
    let full10 = req.body.full10;
    let short11 = req.body.short11;
    let full11 = req.body.full11;
    let short12 = req.body.short12;
    let full12 = req.body.full12;
    let short13 = req.body.short13;
    let full13 = req.body.full13;
    let short14 = req.body.short14;
    let full14 = req.body.full14;
    let short15 = req.body.short15;
    let full15 = req.body.full15;
    let short16 = req.body.short16;
    let full16 = req.body.full16;
    let short17 = req.body.short17;
    let full17 = req.body.full17;
    let short18 = req.body.short18;
    let full18 = req.body.full18;
    let short19 = req.body.short19;
    let full19 = req.body.full19;
    let short20 = req.body.short20;
    let full20 = req.body.full20;
    let short21 = req.body.short21;
    let full21 = req.body.full21;
    let short22 = req.body.short22;
    let full22 = req.body.full22;
    let iaec_no = req.body.iaec_no;
    let item_name = req.body.item_name;
    let item_code = req.body.item_code;
    let item_code1 = req.body.item_code1;
    let intended_use = req.body.intended_use;
    let contact_site = req.body.contact_site;
    let duration = req.body.duration;
    let material = req.body.material;
    let weight = req.body.weight;
    let storage_cond = req.body.storage_cond;
    let batch_no = req.body.batch_no;
    let mfg_date = req.body.mfg_date;
    let exp_date = req.body.exp_date;
    let sterility = req.body.sterility;
    let mfg_by = req.body.mfg_by;
    let supplied_by = req.body.supplied_by;
    let others = req.body.others;
    let anex_1 = req.body.anex_1;
    let iso_1 = req.body.iso_1;
    let source = req.body.source;
    let age = req.body.age;
    let no_groups = req.body.no_groups;
    let no_animals = req.body.no_animals;
    let weight_range = req.body.weight_range;
    let temp = req.body.temp;
    let cage_size = req.body.cage_size;
    let mfg_by_name = req.body.mfg_by_name;
    let test_extract = req.body.test_extract;
    let anex_2 = req.body.anex_2;
    let archive_1 = req.body.archive_1;
    let archive_2 = req.body.archive_2;
    let study_no2 = req.body.study_no2;
    let date_app = req.body.date_app;
    let study_dir1 = req.body.study_dir1;
    let sign1 = req.body.sign1;
    let sign2 = req.body.sign2;
    let sign3 = req.body.sign3;
    let sponsor_name = req.body.sponsor_name;
    let spons_rep = req.body.spons_rep;
    let sign4 = req.body.sign4;
    let monitor_sci = req.body.monitor_sci;
    let sign5 = req.body.sign5;

    // let query = `INSERT INTO draftnzw_plan (title1, title2, study_no, study_code, study_dir, sponser, obj,study_title1,study_no1,study_code1,ulr_no1,sponsor1,study_director1,study_vet1,sponsor_rep1,monitor1,study_start_date,exp_start_date,acc,treat_start_date,exp_end_date,draft_rep,study_end_date,iaec_no,item_name,item_code,item_code1,intended_use,contact_site,duration,material,weight,storage_cond,batch_no,mfg_date,exp_date,sterility,mfg_by,supplied_by,others,anex_1,iso_1,source,age,no_groups,no_animals,weight_range,temp,cage_size,mfg_by_name,test_extract,anex_2,archive_1,archive_2,study_no2,date_app,study_dir1,sign1,sign2,sign3,sponsor_name,spons_rep,sign4,monitor_sci,sign5) VALUES ('${title1}', '${title2}', '${study_no}', '${study_code}', '${study_dir}', '${sponser}', '${obj}', '${study_title1}', '${study_no1}', '${study_code1}', '${ulr_no1}', '${sponsor1}', '${study_director1}', '${study_vet1}', '${sponsor_rep1}', '${monitor1}', '${study_start_date}', '${exp_start_date}', '${acc}', '${treat_start_date}', '${exp_end_date}', '${draft_rep}', '${study_end_date}', '${iaec_no}', '${item_name}', '${item_code}', '${item_code1}', '${intended_use}', '${contact_site}', '${duration}', '${material}', '${weight}', '${storage_cond}', '${batch_no}', '${mfg_date}', '${exp_date}', '${sterility}', '${mfg_by}', '${supplied_by}', '${others}', '${anex_1}', '${iso_1}', '${source}', '${age}', '${no_groups}', '${no_animals}', '${weight_range}', '${temp}', '${cage_size}', '${mfg_by_name}', '${test_extract}', '${anex_2}', '${archive_1}', '${archive_2}', '${study_no2}','${date_app}','${study_dir1}','${sign1}','${sign2}','${sign3}','${sponsor_name}','${spons_rep}','${sign4}','${monitor_sci}','${sign5}')`;
    
    let query = `UPDATE draftnzw_plan SET title1='${title1}',title2='${title2}',study_no='${study_no}',study_code='${study_code}',study_dir='${study_dir}',sponser='${sponser}',obj='${obj}',study_title1='${study_title1}',study_no1='${study_no1}',study_code1='${study_code1}',ulr_no1='${ulr_no1}',sponsor1='${sponsor1}',study_director1='${study_director1}',study_vet1='${study_vet1}',sponsor_rep1='${sponsor_rep1}',monitor1='${monitor1}',study_start_date='${study_start_date}',exp_start_date='${exp_start_date}',acc='${acc}',treat_start_date='${treat_start_date}',exp_end_date='${exp_end_date}',draft_rep='${draft_rep}',study_end_date='${study_end_date}',short1='${short1}',full1='${full1}',short2='${short2}',full2='${full2}',short3='${short3}',full3='${full3}',short4='${short4}',full4='${full4}',short5='${short5}',full5='${full5}',short6='${short6}',full6='${full6}',short7='${short7}',full7='${full7}',short8='${short8}',full8='${full8}',short9='${short9}',full9='${full9}',short10='${short10}',full10='${full10}',short11='${short11}',full11='${full11}',short12='${short12}',full12='${full12}',short13='${short13}',full13='${full13}',short14='${short14}',full14='${full14}',short15='${short15}',full15='${full15}',short16='${short16}',full16='${full16}',short17='${short17}',full17='${full17}',short18='${short18}',full18='${full18}',short19='${short19}',full19='${full19}',short20='${short20}',full20='${full20}',short21='${short21}',full21='${full21}',short22='${short22}',full22='${full22}',iaec_no='${iaec_no}',item_name='${item_name}',item_code='${item_code}',item_code1='${item_code1}',intended_use='${intended_use}',contact_site='${contact_site}',duration='${duration}',material='${material}',weight='${weight}',storage_cond='${storage_cond}',batch_no='${batch_no}',mfg_date='${mfg_date}',exp_date='${exp_date}',sterility='${sterility}',mfg_by='${mfg_by}',supplied_by='${supplied_by}',others='${others}',anex_1='${anex_1}',iso_1='${iso_1}',source='${source}',age='${age}',no_groups='${no_groups}',no_animals='${no_animals}',weight_range='${weight_range}',temp='${temp}',cage_size='${cage_size}',mfg_by_name='${mfg_by_name}',test_extract='${test_extract}',anex_2='${anex_2}',archive_1='${archive_1}',archive_2='${archive_2}',study_no2='${study_no2}',date_app='${date_app}',study_dir1='${study_dir1}',sign1='${sign1}',sign2='${sign2}',sign3='${sign3}',sponsor_name='${sponsor_name}',spons_rep='${spons_rep}',sign4='${sign4}',monitor_sci='${monitor_sci}',sign5='${sign5}' WHERE irtnzw_id=${id}`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

// app.post("/api/sdata", (req, res) => {
//     console.log("Request.. ");
//     let study_no9 = req.body.study_no9;
//     let room_no4 = req.body.room_no4;
//     let month_year = req.body.month_year;
//     let check1 = req.body.check1;
//     let check2 = req.body.check2;
//     let check3 = req.body.check3;
//     let check4 = req.body.check4;
//     let check5 = req.body.check5;
//     let check6 = req.body.check6;
//     let check7 = req.body.check7;
//     let check8 = req.body.check8;
//     let check9 = req.body.check9;
//     let check10 = req.body.check10;
//     let check11 = req.body.check11;
//     let check12 = req.body.check12;
//     let check13 = req.body.check13;
//     let check14 = req.body.check14;
//     let check15 = req.body.check15;
//     let check16 = req.body.check16;
//     let check17 = req.body.check17;
//     let check18 = req.body.check18;
//     let check19 = req.body.check19;
//     let check20 = req.body.check20;
//     let check21 = req.body.check21;
//     let check22 = req.body.check22;
//     let check23 = req.body.check23;
//     let check24 = req.body.check24;
//     let check25 = req.body.check25;
//     let check26 = req.body.check26;
//     let check27 = req.body.check27;
//     let check28 = req.body.check28;
//     let check29 = req.body.check29;
//     let check30 = req.body.check30;
//     let check31 = req.body.check31;
//     let others1 = req.body.others1;
//     let sign22 = req.body.sign22;
//     let marker = req.body.marker;
//     let others2 = req.body.others2;
//     let sign23 = req.body.sign23;
//     let sign24 = req.body.sign24;
//     let study_no3 = req.body.study_no3;
//     let species = req.body.species;
//     let req_date = req.body.req_date;
//     let age_male = req.body.age_male;
//     let age_female = req.body.age_female;
//     let no_male = req.body.no_male;
//     let no_female = req.body.no_female;
//     let wt_male = req.body.wt_male;
//     let wt_female = req.body.wt_female;
//     let sign9 = req.body.sign9;
//     let species1 = req.body.species1;
//     let iaec = req.body.iaec;
//     let req_date1 = req.body.req_date1;
//     let age_male1 = req.body.age_male1;
//     let age_female1 = req.body.age_female1;
//     let dob_male = req.body.dob_male;
//     let dob_female = req.body.dob_female;
//     let no_male1 = req.body.no_male1;
//     let no_female1 = req.body.no_female1;
//     let wt_male1 = req.body.wt_male1;
//     let wt_female1 = req.body.wt_female1;
//     let sign10 = req.body.sign10;
//     let sign11 = req.body.sign11;
//     let sign12 = req.body.sign12;
//     let sign13 = req.body.sign13;
//     let date1 = req.body.date1;
//     let study_no4 = req.body.study_no4;
//     let species2 = req.body.species2;
//     let no_male2 = req.body.no_male2;
//     let no_female2 = req.body.no_female2;
//     let from_date = req.body.from_date;
//     let to_date = req.body.to_date;
//     let sign14 = req.body.sign14;
//     let sign15 = req.body.sign15;
//     let room_no = req.body.room_no;
//     let study_no5 = req.body.study_no5;
//     let from_date1 = req.body.from_date1;
//     let to_date1 = req.body.to_date1;
//     let sign16 = req.body.sign16;
//     let sign17 = req.body.sign17;
//     let study_no6 = req.body.study_no6;
//     let room_no1 = req.body.room_no1;
//     let fum_date = req.body.fum_date;
//     let fum_result = req.body.fum_result;
//     let airsamp_date = req.body.airsamp_date;
//     let airsamp_result = req.body.airsamp_result;
//     let airflow_date = req.body.airflow_date;
//     let airflow_result = req.body.airflow_result;
//     let airpres_date = req.body.airpres_date;
//     let airpres_result = req.body.airpres_result;
//     let lux_date = req.body.lux_date;
//     let lux_result = req.body.lux_result;
//     let sound_date = req.body.sound_date;
//     let sound_result = req.body.sound_result;
//     let feed_no = req.body.feed_no;
//     let bedding_no = req.body.bedding_no;
//     let others = req.body.others;
//     let sign18 = req.body.sign18;
//     let remarks2 = req.body.remarks2;
//     let study_no2 = req.body.study_no2;
//     let study_code2 = req.body.study_code2;
//     let sd2 = req.body.sd2;
//     let sign7 = req.body.sign7;
//     let date4 = req.body.date4;
//     let name4 = req.body.name4;
//     let desg4 = req.body.desg4;
//     let signn4 = req.body.signn4;
//     let date5 = req.body.date5;
//     let name5 = req.body.name5;
//     let desg5 = req.body.desg5;
//     let signn5 = req.body.signn5;
//     let date6 = req.body.date6;
//     let name6 = req.body.name6;
//     let desg6 = req.body.desg6;
//     let signn6 = req.body.signn6;
//     let date7 = req.body.date7;
//     let name7 = req.body.name7;
//     let desg7 = req.body.desg7;
//     let signn7 = req.body.signn7;
//     let date8 = req.body.date8;
//     let name8 = req.body.name8;
//     let desg8 = req.body.desg8;
//     let signn8 = req.body.signn8;

//     let query = `INSERT INTO study_data (study_no9,room_no4,month_year,check1,check2,check3,check4,check5,check6,check7,check8,check9,check10,check11,check12,check13,check14,check15,check16,check17,check18,check19,check20,check21,check22,check23,check24,check25,check26,check27,check28,check29,check30,check31,others1,sign22,marker,others2,sign23,sign24,study_no3,species,req_date,age_male,age_female,no_male,no_female,wt_male,wt_female,sign9,species1,iaec,req_date1,age_male1,age_female1,dob_male,dob_female,no_male1,no_female1,wt_male1,wt_female1,sign10,sign11,sign12,sign13,date1,study_no4,species2,no_male2,no_female2,from_date,to_date,sign14,sign15,room_no,study_no5,from_date1,to_date1,sign16,sign17,study_no6,room_no1,fum_date,fum_result,airsamp_date,airsamp_result,airflow_date,airflow_result,airpres_date,airpres_result,lux_date,lux_result,sound_date,sound_result,feed_no,bedding_no,others,sign18,remarks2,study_no2,study_code2,sd2,sign7,date4,name4,desg4,signn4,date5,name5,desg5,signn5,date6,name6,desg6,signn6,date7,name7,desg7,signn7,date8,name8,desg8,signn8) VALUES ('${study_no9}','${room_no4}','${month_year}','${check1}','${check2}','${check3}','${check4}','${check5}','${check6}','${check7}','${check8}','${check9}','${check10}','${check11}','${check12}','${check13}','${check14}','${check15}','${check16}','${check17}','${check18}','${check19}','${check20}','${check21}','${check22}','${check23}','${check24}','${check25}','${check26}','${check27}','${check28}','${check29}','${check30}','${check31}','${others1}','${sign22}','${marker}','${others2}','${sign23}','${sign24}','${study_no3}','${species}','${req_date}','${age_male}','${age_female}','${no_male}','${no_female}','${wt_male}','${wt_female}','${sign9}','${species1}','${iaec}','${req_date1}','${age_male1}','${age_female1}','${dob_male}','${dob_female}','${no_male1}','${no_female1}','${wt_male1}','${wt_female1}','${sign10}','${sign11}','${sign12}','${sign13}','${date1}','${study_no4}','${species2}','${no_male2}','${no_female2}','${from_date}','${to_date}','${sign14}','${sign15}','${room_no}','${study_no5}','${from_date1}','${to_date1}','${sign16}','${sign17}','${study_no6}','${room_no1}','${fum_date}','${fum_result}','${airsamp_date}','${airsamp_result}','${airflow_date}','${airflow_result}','${airpres_date}','${airpres_result}','${lux_date}','${lux_result}','${sound_date}','${sound_result}','${feed_no}','${bedding_no}','${others}','${sign18}','${remarks2}','${study_no2}','${study_code2}','${sd2}','${sign7}','${date4}','${name4}','${desg4}','${signn4}','${date5}','${name5}','${desg5}','${signn5}','${date6}','${name6}','${desg6}','${signn6}','${date7}','${name7}','${desg7}','${signn7}','${date8}','${name8}','${desg8}','${signn8}')`;
//         connection.query(query, (err, result) => {
//             if (err) {
//                 res.send(500, {
//                     msg: "Something went wrong please try again!"
//                 })
//             }
//             res.send(200, {
//                 msg: "Added Succesfully!",
//             })
//         })
// })

app.post("/api/sdata/:id", (req, res) => {
    var id = req.params.id;
    console.log("Request.. ");
    let study_no9 = req.body.study_no9;
    let room_no4 = req.body.room_no4;
    let month_year = req.body.month_year;
    let check1 = req.body.check1;
    let check2 = req.body.check2;
    let check3 = req.body.check3;
    let check4 = req.body.check4;
    let check5 = req.body.check5;
    let check6 = req.body.check6;
    let check7 = req.body.check7;
    let check8 = req.body.check8;
    let check9 = req.body.check9;
    let check10 = req.body.check10;
    let check11 = req.body.check11;
    let check12 = req.body.check12;
    let check13 = req.body.check13;
    let check14 = req.body.check14;
    let check15 = req.body.check15;
    let check16 = req.body.check16;
    let check17 = req.body.check17;
    let check18 = req.body.check18;
    let check19 = req.body.check19;
    let check20 = req.body.check20;
    let check21 = req.body.check21;
    let check22 = req.body.check22;
    let check23 = req.body.check23;
    let check24 = req.body.check24;
    let check25 = req.body.check25;
    let check26 = req.body.check26;
    let check27 = req.body.check27;
    let check28 = req.body.check28;
    let check29 = req.body.check29;
    let check30 = req.body.check30;
    let check31 = req.body.check31;
    let others1 = req.body.others1;
    let sign22 = req.body.sign22;
    let marker = req.body.marker;
    let others2 = req.body.others2;
    let sign23 = req.body.sign23;
    let sign24 = req.body.sign24;
    let study_no3 = req.body.study_no3;
    let species = req.body.species;
    let req_date = req.body.req_date;
    let age_male = req.body.age_male;
    let age_female = req.body.age_female;
    let no_male = req.body.no_male;
    let no_female = req.body.no_female;
    let wt_male = req.body.wt_male;
    let wt_female = req.body.wt_female;
    let sign9 = req.body.sign9;
    let species1 = req.body.species1;
    let iaec = req.body.iaec;
    let req_date1 = req.body.req_date1;
    let age_male1 = req.body.age_male1;
    let age_female1 = req.body.age_female1;
    let dob_male = req.body.dob_male;
    let dob_female = req.body.dob_female;
    let no_male1 = req.body.no_male1;
    let no_female1 = req.body.no_female1;
    let wt_male1 = req.body.wt_male1;
    let wt_female1 = req.body.wt_female1;
    let sign10 = req.body.sign10;
    let sign11 = req.body.sign11;
    let sign12 = req.body.sign12;
    let sign13 = req.body.sign13;
    let date1 = req.body.date1;
    let study_no4 = req.body.study_no4;
    let species2 = req.body.species2;
    let no_male2 = req.body.no_male2;
    let no_female2 = req.body.no_female2;
    let from_date = req.body.from_date;
    let to_date = req.body.to_date;
    let sign14 = req.body.sign14;
    let sign15 = req.body.sign15;
    let room_no = req.body.room_no;
    let study_no5 = req.body.study_no5;
    let from_date1 = req.body.from_date1;
    let to_date1 = req.body.to_date1;
    let sign16 = req.body.sign16;
    let sign17 = req.body.sign17;
    let study_no6 = req.body.study_no6;
    let room_no1 = req.body.room_no1;
    let fum_date = req.body.fum_date;
    let fum_result = req.body.fum_result;
    let airsamp_date = req.body.airsamp_date;
    let airsamp_result = req.body.airsamp_result;
    let airflow_date = req.body.airflow_date;
    let airflow_result = req.body.airflow_result;
    let airpres_date = req.body.airpres_date;
    let airpres_result = req.body.airpres_result;
    let lux_date = req.body.lux_date;
    let lux_result = req.body.lux_result;
    let sound_date = req.body.sound_date;
    let sound_result = req.body.sound_result;
    let feed_no = req.body.feed_no;
    let bedding_no = req.body.bedding_no;
    let others = req.body.others;
    let sign18 = req.body.sign18;
    let remarks2 = req.body.remarks2;
    let study_no2 = req.body.study_no2;
    let study_code2 = req.body.study_code2;
    let sd2 = req.body.sd2;
    let sign7 = req.body.sign7;
    let date4 = req.body.date4;
    let name4 = req.body.name4;
    let desg4 = req.body.desg4;
    let signn4 = req.body.signn4;
    let date5 = req.body.date5;
    let name5 = req.body.name5;
    let desg5 = req.body.desg5;
    let signn5 = req.body.signn5;
    let date6 = req.body.date6;
    let name6 = req.body.name6;
    let desg6 = req.body.desg6;
    let signn6 = req.body.signn6;
    let date7 = req.body.date7;
    let name7 = req.body.name7;
    let desg7 = req.body.desg7;
    let signn7 = req.body.signn7;
    let date8 = req.body.date8;
    let name8 = req.body.name8;
    let desg8 = req.body.desg8;
    let signn8 = req.body.signn8;

    let query = `UPDATE study_data SET study_no9='${study_no9}',room_no4='${room_no4}',month_year='${month_year}',check1='${check1}',check2='${check2}',check3='${check3}',check4='${check4}',check5='${check5}',check6='${check6}',check7='${check7}',check8='${check8}',check9='${check9}',check10='${check10}',check11='${check11}',check12='${check12}',check13='${check13}',check14='${check14}',check15='${check15}',check16='${check16}',check17='${check17}',check18='${check18}',check19='${check19}',check20='${check20}',check21='${check21}',check22='${check22}',others1='${others1}',sign22='${sign22}',marker='${marker}',others2='${others2}',sign23='${sign23}',sign24='${sign24}',study_no3='${study_no3}',species='${species}',req_date='${req_date}',age_male='${age_male}',age_female='${age_female}',no_male='${no_male}',no_female='${no_female}',wt_male='${wt_male}',wt_female='${wt_female}',sign9='${sign9}',species1='${species1}',iaec='${iaec}',req_date1='${req_date1}',age_male1='${age_male1}',age_female1='${age_female1}',dob_male='${dob_male}',dob_female='${dob_female}',no_male1='${no_male1}',no_female1='${no_female1}',wt_male1='${wt_male1}',wt_female1='${wt_female1}',sign10='${sign10}',sign11='${sign11}',sign12='${sign12}',sign13='${sign13}',date1='${date1}',study_no4='${study_no4}',species2='${species2}',no_male2='${no_male2}',no_female2='${no_female2}',from_date='${from_date}',to_date='${to_date}',sign14='${sign14}',sign15='${sign15}',room_no='${room_no}',study_no5='${study_no5}',from_date1='${from_date1}',to_date1='${to_date1}',sign16='${sign16}',sign17='${sign17}',study_no6='${study_no6}',room_no1='${room_no1}',fum_date='${fum_date}',fum_result='${fum_result}',airsamp_date='${airsamp_date}',airsamp_result='${airsamp_result}',airflow_date='${airflow_date}',airflow_result='${airflow_result}',airpres_date='${airpres_date}',airpres_result='${airpres_result}',lux_date='${lux_date}',lux_result='${lux_result}',sound_date='${sound_date}',sound_result='${sound_result}',feed_no='${feed_no}',bedding_no='${bedding_no}',others='${others}',sign18='${sign18}',remarks2='${remarks2}',study_no2='${study_no2}',study_code2='${study_code2}',sd2='${sd2}',sign7='${sign7}',date4='${date4}',name4='${name4}',desg4='${desg4}',signn4='${signn4}',date5='${date5}',name5='${name5}',desg5='${desg5}',signn5='${signn5}',date6='${date6}',name6='${name6}',desg6='${desg6}',signn6='${signn6}',date7='${date7}',name7='${name7}',desg7='${desg7}',signn7='${signn7}',date8='${date8}',name8='${name8}',desg8='${desg8}',signn8="${signn8}" WHERE study_id=${id}`;
        connection.query(query, (err, result) => {
            if (err) {
                res.send(500, {
                    msg: "Something went wrong please try again!"
                })
            }
            res.send(200, {
                msg: "Added Succesfully!",
            })
        })
})

app.get("/api/dplan/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM draft_plan WHERE gpmt_id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/dastplan/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM draftast_plan WHERE ast_id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/dnzwplan/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM draftnzw_plan WHERE irtnzw_id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.get("/api/sdata/:id", (req, res) => {
    var id = req.params.id;
    let query = `SELECT * FROM study_data WHERE study_id=${id}`;
    connection.query(query, (err, result) => {
        if (err) {
            res.send(500, {
                msg: "Internal Server Error. Please Try Again!"
            })
        }
        res.send(200, {
            msg: "All the data fetched successfully!",
            data: result
        })
    })
})

app.listen(3000, () => {
    console.log("Server started ...");
});

// Pending Tables (Draft Plan)
// 13.2 METHODS
// 13.4.3 CHALLENGE PHASE

// Pending Tables (Study Data)
// ANNEXURE 1: DAILY WORK CHECKLIST
// ANNEXURE 6: MODEL LETTER FOR ALLOTMENT OF SD / REPLACEMENT OF SD / AMENDMENT TO ALLOTMENT
// ANNEXURE 1: PREPARATION AND TRACKING DETAILS OF STUDY PLAN / AMENDMENTS
// ANNEXURE 2: RECORD FOR DISTRIBUTION, RETURN AND DESTRUCTION OF STUDY PLAN / STUDY PLAN AMENDMENT
// ANNEXURE 1: STUDY INITIATION MEETING RECORD
