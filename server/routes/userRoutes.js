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

import express from 'express'
import { loginUser, paymentRazorpay, registerUser, userCredits, verifyRazorpay } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';


const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',authUser, userCredits)
userRouter.post('/pay-razor',authUser, paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter