import axios from "axios";
import {Createpath} from "./path";
import { CreateAddproduct, Createid,Createreviseoneself, createaddclass ,CreateClassnameId,  checkprerequisite, searchname,Createmodifyproduct, CreateRemove, CreateAddTask, Createremovetask, Createpublictask,CreateViewtask,CreateComment, applycondition } from "../Interface/CreateInterface";



const createapi= {
 
  //问题
  //gettest要没完成要修改
  async viewoverclass(params : Createid){
    const response= await axios.post(Createpath.createclassUrl,{
      account_id : params.account_id
    });
    return response.data;
  },//展示个人数据
  async viewoneself(params : Createid){
    const response = await axios.post( Createpath.createviewoneselfUrl,{
      account_id : params.account_id,
    });
    return response.data;
  },//添加班级
  async addclass(params : createaddclass){
    const response = await axios.post(Createpath.createaddclassUrl , {
      account_id : params.account_id,
      classname: params.classname,
      classbrief : params.classbrief,
      userinvitecode : params.userinvitecode,
      manageinvitecode : params.manageinvitecode,
    });
    return response.data;
  },//添加产品
  async addproduct(params : CreateAddproduct ){
    const response = await axios.post( Createpath.createaddproductUrl,{ 
      productname : params.productname,
      productprice : params.productprice,
      totalnumber : params.totalnumber,
      createid : params.createid,
    });
    return response.data;
  },//修改个人信息
  async reviseoneself(params : Createreviseoneself){
    const response = await axios.post( Createpath.createreviseoneselfUrl,{
      account_id : params.account_id,
      create_name : params.create_name,
      create_sex : params.create_sex,
      create_profile : params.create_profile,
    });
    return response.data;
  },//寻找班级
  async checkclass(params : CreateClassnameId ){
    const response = await axios.post( Createpath.createcheckclassUrl,{
      // classname_id : params.classname_id,
      id : params.id,

    } );
    return response.data;
  },//查找班级成员
  async checkclassmember(params : checkprerequisite ){
    const response = await axios.post(Createpath.createcheckclassmemberUrl,{
      manage : params.manage,
      user : params.user,
    });
    return response.data;
  },//在寻找指定成员
  async searchname(params: searchname){
    const response = await axios.post(Createpath.createsearchnameUrl,{
      manageinvitecode : params.manageinvitecode,
      userinvitecode : params.userinvitecode,
      searchname : params.searchname,
      
    })
    return response.data;
  },//显示商品
  async viewproduct(){
    const response = await axios.post(Createpath.createviewproductUrl,);
    return response.data;
  },//修改商品
  async modifyproduct(params :Createmodifyproduct ){
    const response = await axios.post(Createpath.createmodifyproductUrl,{
      product_name :params.product_name,
      productname : params.productname,
      productprice : params.productprice,
      totalnumber : params.totalnumber,
    });
    return response.data;
  },//下架商品
  async removeproduct(params: CreateRemove ){
    const response = await axios.post(Createpath.createremovieproductUrl,{
      productname : params.proddcutname,
    });
    return response.data;
  },//添加or 修改任务
  async addtask(params : CreateAddTask){
    const response = await axios.post(Createpath.createaddtaskUrl,{
      condition: params.condition,
      account_id : params.account_id,
      taskname : params.taskname,
      taskcompletion : params.taskcompletion,
      taskovertime: params.taskovertime,
      taskstarttime : params.taskstarttime,
      successrewardone: params.successrewardone,
      successrewardtwo_one : params.successrewardtwo_one,
       successrewardtwo_two : params.successrewardtwo_two,
      failed: params.failed,
      taskid : params.taskid,
    });
    return response.data;
  },//显示所有任务
  async viewtask(params : CreateViewtask , classname: string =""){
    const response = await axios.post(Createpath.createviewrtaskUrl,{
      account_id : params.account_id,
      condition: params.condition,
      classname :classname,
    });
    return response.data;
  },//删除任务
  async removetask(params: Createremovetask , classname : string = ""){
    const response = await axios.post(Createpath.createremovetaskUrl,{
      taskid:params.taskid,
      createid : params.createid,
      condition:params.condition,
      classname : classname,
    });
    return response.data;
  },//发布任务
  async taskpublictask(params : Createpublictask){
    const response = await axios.post(Createpath.createpublictaskUrl,{
      createid : params.creatateid,
      taskid : params.taskid,
      checkclass : params.checkclass,
    });
    return response.data;
  },//显示评论
  async viewcomment( params: CreateComment){
    const response = await axios.post(Createpath.createsearcommentUrl,{
      searchtime:params.time,
      createid: params.createid,
    });
    return response.data;
  },//显示申请
  async application(createid:string){
    const response = await axios.post(Createpath.createapplicationUrl,{
      createid:createid,
    });
    return response.data;
  },//申请同意或拒绝
  async applycondition(params :applycondition){
    const response = await axios.post(Createpath.createapplyconditionUrl,{
      userinvitecode : params.userinvitecode,
      userid: params.userid,
      classname: params.classname,
      condition : params.condition,
      username : params.username ,
      createid : params.createid,
    });
    return response.data;
  },

}

export {createapi}