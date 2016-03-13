/**
 * Created by praba on 2/12/2016.
 */

//JS file for the supplier-page
Polymer({
  is: "supplieradditem-card",
  ready:function()
  {

   //Initially to make all the fields are in editable mode
   this.read=false;
   //Calling services to bind info to the itemtype , itemgroup and supplier fields
   this.$.adminservice.callItemPurchasetypeReadService();
   this.$.adminservice.callItemReadService();
   this.$.adminservice.callItemgroupReadService();
   localStorage.setItem("curr_sess_showpage","supplieradditem-card");
   //calling webcomponent service to fetch labels for current page
   this.$.ID_Webcomponent_Service.callWebcomponentService();
  },
  //Method invokes to fetch item id of the currently selected Item type name in dropdown
    FnSelecttype:function(e){
      //Flag is used to identify the itemtype drop down change and it is later refered in update mode
      localStorage.setItem("curr_sess_itemtypechangeflag","1");
      var itemarray=this.itemarr;
      this.itemtypename=(e.target.selectedItem.textContent).trim();
      for(var i=0;i<itemarray.length;i++)
      {
         if(itemarray[i].itemtypename==this.itemtypename) {
          this.itemtype = itemarray[i].itemtypeid;
        }
      }
    },
    //Method invokes to fetch item group id of the currently selected Item group name in dropdown
    FnSelectGrouptype:function(e){
      //Flag is used to identify the itemgroup drop down change and it is later refered in update mode
      localStorage.setItem("curr_sess_grouptypechangeflag","1");
      var itemgrouparray=this.itemgrouparr;
      this.itemgroupname=(e.target.selectedItem.textContent).trim();
      for(var i=0;i<itemgrouparray.length;i++)
      {
         if(itemgrouparray[i].itemgroupname==this.itemgroupname) {
          this.itemgroup = itemgrouparray[i].itemgroupid;
        }

      }
  },
FnAddItemSubmit:function(){
//Fields mandatory validation performing here
    document.querySelector('#itemid').validate();
    document.querySelector('#itemname').validate();
    document.querySelector('#itemdes').validate();
    document.querySelector('#container').validate();
    document.querySelector('#quantity').validate();
    document.querySelector('#dropitemtype').validate();
    document.querySelector('#dropgrouptype').validate();
    document.querySelector('#supplier').validate();
	//Fetching selected radio button value
	var purchasetype=document.querySelector('#radio').selected;

	for(var i=0;i<this.purchasearr.length;i++){
    if(document.querySelector('#radio').selected==this.purchasearr[i].purchasetypename)
    this.itemflag=this.purchasearr[i].purchasetypeid;
	}
	if(this.itemid==null||this.itemid==""||this.itemname==null||this.itemname==""||this.itemdes==null||this.itemdes==""||this.container==null||this.container==""||this.itemgroup==null||this.itemgroup==""||this.itemtype==null||this.itemtype==""||purchasetype==""||purchasetype==null){

	}
	else
	{
		this.$.adminsupplierservice.additemService(this.itemflag,this.itemid, this.itemname, this.itemdes, this.container, this.quantity, this.itemgroup, this.itemtype, this.supplier,purchasetype);
	}
},
FnSetValue:function(suppliername){
	this.supplier=suppliername;
}
});