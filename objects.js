let newObject ={
    fullName: "Chris Villa",
    age: "29",
    FAveColor: "grey",
    likesTacos: true
}
//let FAveColor=newObject.FAveColor;
let FAveColor= newObject["FAveColor"];
console.log(FAveColor);

newObject.fullName="Villa";

delete newObject.likesTacos;
console.log(newObject);


newObject.likesCookies = true;
console.log(newObject);

//https://digitalcrafts.instructure.com/courses/221/pages/js-101-explore-objects?module_item_id=45215