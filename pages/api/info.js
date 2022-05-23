// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Info from "../../models/Info";
import connectDb from "../../utlis/connectDb";
import mailer from "../../utlis/mailer";

connectDb();
export default (req, res) => {
  
  switch (req.method) {
    case "GET":
            break;
        case "DELETE":
            break;
        case "POST":
            handlePostRequest(req, res)
            break;
        default:
            break;
    }

}
async function handlePostRequest(req, res) {
  const { first_name, last_name,email,message } = req.body;
  await new Info({ first_name,last_name,email,message }).save();
  mailer(email,"Test Save", `${first_name} -- ${last_name} -- ${message}`)
  res.status(200).send("Success");
}