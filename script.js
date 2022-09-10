// create a form element using DOM with below mentioned details
// 1.firstname
// 2.middlename
// 3.lastname
// 4.email
// 5.contact

{/* <label for="fn">First Name</label><br />
    <input type="text" name="" id="fn" /><br />
    <label for="mn">Middle Name</label><br />
    <input type="text" name="" id="mn" /><br />
    <label for="ln">Last Name</label><br />
    <input type="text" name="" id="ln" /><br />
    <label for="em">Email</label><br />
    <input type="email" name="" id="em" /><br />
    <label for="cont">Contact</label><br />
    <input type="tel" name="" id="cont" /><br /> */}

var lb1=label("label","for","fn","First Name");
var br1=linebr("br");
var inp1=input("input","type","text","id","fn");
var br2=linebr("br");

var lb2=label("label","for","mn","Middle Name");
var br3=linebr("br");
var inp2=input("input","type","text","id","mn");
var br4=linebr("br");

var lb3=label("label","for","ln","Last Name");
var br5=linebr("br");
var inp3=input("input","type","text","id","ln");
var br6=linebr("br");

var lb4=label("label","for","em","Email");
var br7=linebr("br");
var inp4=input("input","type","email","id","em");
var br8=linebr("br");

var lb5=label("label","for","cont","Contact");
var br9=linebr("br");
var inp5=input("input","type","tel","id","cont");
var br10=linebr("br");

document.body.append(lb1,br1,inp1,br2,lb2,br3,inp2,br4,lb3,br5,inp3,br6,lb4,br7,inp4,br8,lb5,br9,inp5,br10);

function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function linebr(element){
    var ele1=document.createElement(element);
    return ele1;
}
function input(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele2=document.createElement(tagname);
    ele2.setAttribute(attrname,attrvalue);
    ele2.setAttribute(attrname1,attrvalue1);
    return ele2;
}