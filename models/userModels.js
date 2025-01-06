const mongoose = require("mongoose");

// class for User
// attribute: username, phone
// create object follow rouls
// schema > attribute > validation
const userSchema = new mongoose.Schema({
  // structure الخاص في الداتا اللي عندي
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});
// module: هو كائن (object) موجود في Node.js ويُستخدم لتعريف أو تصدير (export) أجزاء من الكود حتى يمكن استيرادها (import) واستخدامها في ملفات أخرى.
// exports: هو الخاصية التي تُستخدم لتحديد البيانات أو الوظائف أو الكائنات التي يمكن تصديرها.
// model: هو أسلوب تستخدمه مكتبة Mongoose لإنشاء نموذج (Model) في MongoDB.
module.exports = mongoose.model("users", userSchema);
// module.exports = exports; صححححححححححححححححححححححححح؟
