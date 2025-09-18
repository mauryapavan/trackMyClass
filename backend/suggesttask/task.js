import dotenv from "dotenv";

dotenv.config();

import { GoogleGenAI ,Type} from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.gemini_api_key });







const SuggestTask = async (req, res) => {
    let arr = [];
      
    let data = req.body;
   console.log(data)
    async function main(skill) {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
           contents: `please provide me only 5 task according to my goals ${data.goals} , Strength ${data.strengths} , weaknes ${data.weakness} ans ${data.intrests} also remember will provide those five task that all five task will complete in One hour`,
           
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                             task: {   // task
                                type: Type.STRING,
                            },
                            practice: {                          //practice
                                type: Type.ARRAY,
                                items: {
                                    type: Type.STRING,
                                },
                            },
                           
                        },
                        propertyOrdering: ["task","practice"],
                    },
                },
            },
        });
      
        arr.push(JSON.parse(response.text));
      
    }



    main()
    .then(()=>{
      res.json({ succes: true,data:arr});
    });
   

    
}

export default SuggestTask;