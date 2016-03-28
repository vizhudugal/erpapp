(function() {
    'use strict';
    var itemArray=[];
    var itemid;
    Polymer({
      is: 'supplier-detail',
	 ready:function(){
	 this.idd=0;
	 localStorage.setItem("curr_sess_unitset",this.idd);
	 /*Dynamic array for creating rows of item card*/
	 this.supArray=[{id:this.idd,supname:''}];
     this.splice('supArray',1,1);
	 },
     FnAddSupplier:function(){
		this.push('supArray', {id: this.idd, supname: ''});
	 },
	 FnSaveSupplier:function(){
		document.querySelector('admin-service').callItemWriteSupplierService(itemid,itemArray);
	 },
	 FnSelectSupplier:function(supplierid,suppliername){
		 var obj={"supplierid":"","suppliername":""};
		 obj.supplierid=supplierid;
		 obj.suppliername=suppliername;
		 itemArray.push(obj);
		 //alert(JSON.stringify(itemArray));
	 },
	 FnSetItemid:function(iitemid){
		 itemid=iitemid;
		 //alert(itemid);
	 }
    });
  })();