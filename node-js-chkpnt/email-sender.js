var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bechirhabbechi1@gmail.com',
    pass: 'biboyasso80'
  }
});

var mailOptions = {
  from: 'bechirhabbechi1@gmail.com',
  to: 'bechirhabbechi7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});