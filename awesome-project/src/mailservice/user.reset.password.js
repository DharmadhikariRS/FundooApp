const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const CLIENT_ID ='1020224368715-b92mjh1am08ohic481nm5klcsl5oc0s1.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04YXb70NBJ8jRCgYIARAAGAQSNwF-L9IrnonXNu8k-uH4SurkMcFIYi-BkLP6RGpUEAWhOErhAvk3w9XXW36p8WhJvtUClrqm_vs'
const OAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

let api="http://localhost:3000/api/v1/";

export async function sendMail(Email,token) {
  try {
    const acceessToken = await OAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAUTH2",
        user: "rushikesh1998sd@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: acceessToken
      }
    })
    const mailOptions = {
        from: "rushikesh1998sd@gmail.com>",
        to: Email,
        subject: " mail via google api",
        html: `<h1>link for reset password: </h1><a href="http://localhost:3000/api/v1/users/resetPassword/${token}"><h1>click here</h1></a>`

      };
      const sentMailDetails = await transport.sendMail(mailOptions);

    return sentMailDetails;
}catch(error){

}}



