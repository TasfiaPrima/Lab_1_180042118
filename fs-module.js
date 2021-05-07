//Synchronous and Asynchronous Function

//readFile
//writeFile
//AppendFile
//DeleteFile
//RenameFile

const fs = require("fs");

//fs.readFileSync
//fs.readFile

//fs.writeFileSync("./contents/demoFile.txt","We are learning JavaScript.");
//fs.appendFileSync("./contents/demoFile.txt","We are learning nodejs.");

//fs.rename("./contents/demofile.txt","./contents/renamedFile.txt",(err)=>{
//if (err){
//    console.log(err);
//}else{
//    console.log("rename successful!");
//}
//});

// console.log("before");

// fs.readFile("./contents/renamedFile.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.appendFile("./contents/renamedFile.txt", "is it synchronous?", (err) => {
//       console.log(err);
//     });
//     fs.readFile("./contents/renamedFile.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// console.log("after");

fs.unlink("./contents/renamedFile.txt", (err) => {
  if (!err) console.log("deleted successfully!");
});
