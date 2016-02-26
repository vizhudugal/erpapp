/**
 * Created by praba on 2/12/2016.
 */

//JS file for the home-page
Polymer({
  is: "additem-card",
  ready:function()
  {
    this.itemtype="Select Item Type";
    this.itemgroup="Select Item Group";
    this.$.adminservice.callItemReadService();
    this.$.adminservice.callItemgroupReadService();
    //Setting current page in session for fetching labels dynamically
    localStorage.setItem("curr_sess_showpage","additem-card");
    //calling webcomponent service to fetch labels for current page
    this.$.ID_Webcomponent_Service.callWebcomponentService();
  },
  FnSearchItemId:function(e){

    localStorage.setItem("curr_sess_searchitemflag","1");
    this.$.adminservice.callSearchService(this.itemid,"");
  },
  FnSearchItemName:function(e){

    localStorage.setItem("curr_sess_searchitemflag","1");
    this.$.adminservice.callSearchService("",this.itemname);
  },
  selecttype:function(e){
    var itemarray=this.itemarr;
    //alert(itemarray);
    this.itemtypename=(e.target.selectedItem.textContent).trim();
    for(var i=0;i<itemarray.length;i++)
    {
      //alert(itemarray[i].itemtypename);
      //alert(this.itemtypename);

      if(itemarray[i].itemtypename==this.itemtypename) {
        this.itemtype = itemarray[i].itemtypeid;
       // alert(this.itemtype);

      }

    }
  },
  selectgrouptype:function(e){
    var itemgrouparray=this.itemgrouparr;
    this.itemgroupname=(e.target.selectedItem.textContent).trim();
    for(var i=0;i<itemgrouparray.length;i++)
    {
      //alert(itemgrouparray[i].itemgroupname);
      //alert(this.itemgroupname);

      if(itemgrouparray[i].itemgroupname==this.itemgroupname) {
        this.itemgroup = itemgrouparray[i].itemgroupid;
       // alert(this.itemgroup);

      }

    }
  },
  FnAddItemInfoSubmit:function()
  {
    document.querySelector('#itemid').validate();
    document.querySelector('#itemname').validate();
    document.querySelector('#itemdes').validate();
    document.querySelector('#container').validate();
    document.querySelector('#quantity').validate();
    //document.querySelector('#itemgroup').validate();
    //document.querySelector('#itemtype').validate();

  //alert(document.querySelector('#radio').selected);
    //alert(this.$.adminservice);
  var purchasetype=document.querySelector('#radio').selected;
  if(this.itemid==null||this.itemid==""||this.itemname==null||this.itemname==""||this.itemdes==null||this.itemdes==""||this.container==null||this.container==""||this.itemgroup==null||this.itemgroup==""||this.itemtype==null||this.itemtype==""){}
    else {
    if(document.querySelector('#radio').selected=="Regular")
    this.itemflag="0";
    else
    this.itemflag="1";
    if(localStorage.getItem("curr_sess_searchitemflag")!="1") {

      this.$.adminservice.callItemWriteService(this.itemflag, this.itemid, this.itemname, this.itemdes, this.container, this.quantity, this.itemgroup, this.itemtype, purchasetype);
    }
      if(localStorage.getItem("curr_sess_searchitemflag")=="1")
      {


        this.$.adminservice.callItemUpdateService(this.itemflag,this.itemid, this.itemname, this.itemdes, this.container, this.quantity, this.itemgroup, this.itemtype, purchasetype);
      }

      }
  },
  FnBtnDisable:function(){
    document.querySelector('#save').style.backgroundColor='grey';

    this.Btn_disable_flag=true;
  },
  setSelectedItem:function(itemtype,itemgroup,selection){
    this.itemtype=itemtype;
    this.itemgroup=itemgroup;
    this.selection=selection;
  }


});
