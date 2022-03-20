var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'testing@gmail.com',
        pass:'--------'
    }
})
var mailOptions={
    from:'testing@gmail.com',
    to:'---@gmail.com',
    subject:'Testing Node MAil',
    text:'Hello Mail Send Successfullyy'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }else{
        console.warn("Email Has Been Sent",info.response)
    }
})