import { config, Proxy } from "../config.js";
import { request, ProxyAgent, Agent } from "undici";

const apiKey = config.openai_api_key;
const model = config.model;

const dispatcher = Proxy ?
  new ProxyAgent(Proxy) :
  new Agent({
    bodyTimeout: 0,
    headersTimeout: 0,
  });

const sendMessage = async (message: string) => {
  try {
    const { body } = await request(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      dispatcher,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            "role": "user",
            "content": message
          }
        ],
        temperature: 0.6
      }),
    });
    return body.json()
      .then((data: any) => data.choices[0].message.content);
  } catch (e) {
    console.error(e)
    return "Something went wrong"
  }
}

export { sendMessage };