// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import userModel from "../models/userModel.js"
import FormData from "form-data"
import axios from "axios"



export const generateImage = async (req, res) => {
    try {
        const {userId, prompt} = req.body

        const user = await userModel.findById(userId)

        if (!user || !prompt) {
            return res.json({ success: false, message: 'Missing Details'})
        }

        if (user.creditBalance === 0 || userModel.creditBalance <0){
            return res.json({success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
        } 

        const formData = new FormData()
        formData.append('prompt', prompt)

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
              },
              responseType : 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`

        await userModel.findByIdAndUpdate(user._id, {creditBalance:user.creditBalance - 1})

        res.json({success:true, message:"Image Generated", 
        creditBalance: user.creditBalance -1 , resultImage})
    } catch (error) {
         console.log(error)
        res.json({ success: false, message: error.message })
    }
}