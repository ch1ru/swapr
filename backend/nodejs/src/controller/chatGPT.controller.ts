import { Request, Response, response } from 'express';
import { HttpResponse } from '../http/response';
import { Status } from '../http/status.enum';
import { Code } from '../http/code.enum';
import dotenv from 'dotenv';

dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

export const generateResponse = async (req: Request, res: Response): Promise<any> => { //used for testing purposes 
    try {
        
        const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You: ${req.body.message}\nFriend:`,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
        });

        console.log(JSON.stringify(response.data.choices[0].text));

        return res.status(Code.OK)
          .send(new HttpResponse(Code.OK, Status.OK, 'Created user', { reply: response.data.choices[0].text }));
    }
    catch(error: unknown) {
        console.log(error)
        return res.status(Code.INTERNAL_SERVER_ERROR)
        .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'Error', response));
    }
}