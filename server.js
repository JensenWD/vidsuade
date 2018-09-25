var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var multer = require('multer');
const stripe = require("stripe")("sk_test_x6IdvtCY7o6gtBc3Txie41YE");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'src/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

var upload = multer({storage: storage}).single('file');

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(serveStatic(__dirname + "/dist"));
app.use(require("body-parser").urlencoded({extended: false}));

var port = process.env.PORT || 5000;

app.post('/send-email', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');

    // let nodemailer = require('nodemailer');
    //
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'sergio.roman45@gmail.com',
    //         pass: 'Qpwoeir45'
    //     }
    // });
    //
    // let message = {
    //     from: req.body.email,
    //     to: 'sergio.roman45@gmail.com',
    //     subject: 'Animated Logo Purchase',
    //     text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Phone: ' + req.body.phone + '\n\n',
    //     hmtl: '<p>Testing email</p>',
    //     attachments: [
    //         {
    //             filename: req.body.filename,
    //             path: 'src/uploads/' + req.body.filename
    //         }
    //     ]
    // };
    //
    // transporter.sendMail(message, function (err, info) {
    //     if (err)
    //     {
    //         console.log(err);
    //         res.send(err);
    //     }
    //     else
    //     {
    //         console.log(info);
    //         res.send('OK');
    //     }
    // });
    res.send('ok');

    res.end();
    next()
});

app.post('/charge', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    let amount = req.body.amount;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    }).then(customer =>
        stripe.charges.create({
            amount,
            description: "Animate Logo",
            currency: "usd",
            customer: customer.id
        }));
    res.send('200');
    next()
});

app.post('/upload', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    upload(req, res, function (err) {
        if (err)
            res.send(err);
    });
    res.send('OK');
    res.end();
    next()
});


app.listen(port);
