import dotenv from "dotenv";

dotenv.config();

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.gemini_api_key });







const SuggestCourse = async (req, res) => {
    let arr = [];
    try {

        let data = req.body;
      console.log(data)

        if (!data.goals || !data.interests) {
            res.json({ status: false, message: "please mention your goals and interests" })
        }

        async function main(skill) {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: ` Suggest the best online courses and learning resources for me based on my goals ${data.goals} and interests ${data.interests} on platforms like Udemy, YouTube, Coursera, edX, or free resources.
                             and course can be paid or free and atleast 10 courses 
                             `,

                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                CourseName: {   // task
                                    type: Type.STRING,
                                },
                                CoursePrice: {                          //practice
                                    type: Type.STRING,

                                },
                                CourseLink: {                          //practice
                                    type: Type.STRING,

                                },
                               
                                AboutCourse: {                          //practice
                                    type: Type.STRING,

                                },


                            },
                            propertyOrdering: ["CourseName", "CoursePrice", "CourseLink", "AboutCourse"],
                        },
                    },
                },
            });
         
            arr.push(JSON.parse(response.text));

        }



        main()
            .then(() => {
                res.json({ succes: true, data: arr });
            });
    }
    catch (e) {
        console.log(e)
        res.json({ status: false, message: e })
    }



}

export default SuggestCourse;