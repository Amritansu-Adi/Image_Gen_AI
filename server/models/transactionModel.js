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

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId :{type: String, required: true},
    plan :{type: String, required: true},
    amount :{type: Number, required: true},
    credits :{type: Number, required: true},
    payment :{type: Boolean, default: false},
    date :{type: Number},
})

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema);
export default transactionModel;