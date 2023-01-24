import nodemailer from 'nodemailer'
import middleware from '../../middleware/middleware';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(middleware);

const FILE_SIZE_LIMIT = 20

export const config = {
    api: {
      bodyParser: false
    }
  }

  
handler.post(async(req, res) => {
    try {
		const files = req.files

        const attachment = files[0]

        console.log(`Attachment: ${attachment.name},${attachment.size},${attachment.type}`)

		// do stuff with files and body

        const {quoteReq} = req.body;

        console.log(JSON.stringify(quoteReq))
        // res.status(200).end(JSON.stringify({ message:'Send Mail' }))

    } catch (err) {
        console.log(err)
    }
});
    

