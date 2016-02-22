/**
 * Created by praba on 2/12/2016.
 */
(function(){
  Polymer({is:"item-card",
    ready:function(){
      this.qty=null;
      this.comments="";
      this.unit;
      var auto_input="autoinput"+localStorage.getItem("curr_sess_unitset");
      var txt_input1="textinput1"+localStorage.getItem("curr_sess_unitset");
      var txt_input3="textinput3"+localStorage.getItem("curr_sess_unitset");
      var txt_input5="textinput5"+localStorage.getItem("curr_sess_unitset");
      var txt_input6="textinput6"+localStorage.getItem("curr_sess_unitset");
      //It would hide remarks and adjust the style properties of the item card components when reusing this card for the outward mode
      if(localStorage.getItem("curr_sess_wardflag")=="0") {
        this.querySelector("#" + auto_input).style.width = '20%';
        this.querySelector("#" + txt_input1).style.width = '15%';
        this.querySelector("#" + txt_input1).style.marginLeft = '-12%';
        this.querySelector("#" + txt_input3).style.width = '15%';
        this.querySelector("#" + txt_input3).style.marginLeft = '3%';
        this.querySelector("#" + txt_input5).style.width = '17%';
        this.querySelector("#" + txt_input5).style.marginLeft = '5%';
        this.querySelector("#" + txt_input6).style.visibility = 'hidden';
      }
      if(localStorage.getItem("curr_sess_wardflag")=="1") {
        this.querySelector("#" + auto_input).style.width = '25%';
        this.querySelector("#" + txt_input1).style.width = '19%';
        this.querySelector("#" + txt_input1).style.marginLeft = '-7%';
        this.querySelector("#" + txt_input3).style.width = '19%';
        this.querySelector("#" + txt_input3).style.marginLeft = '5%';
        this.querySelector("#" + txt_input5).style.visibility = 'hidden';
        this.querySelector("#" + txt_input6).style.visibility = 'hidden';
      }
      else if(localStorage.getItem("curr_sess_wardflag")=="2") {
        //alert('hi'+this.querySelector("#" + txt_input6));
        this.querySelector("#" + txt_input6).style.visibility = 'visible';
      }
    },

    //Function Invoked when input changing in input fields
    FnInputChanged:function(e) {
      /*var currid="input"+localStorage.getItem("curr_sess_unitset");
      this.querySelector("#"+currid).value=localStorage.getItem("curr_sess_showunitvalue");*/
      var txt_input2="textinput2"+localStorage.getItem("curr_sess_unitset");
      this.querySelector("#"+txt_input2).value=localStorage.getItem("curr_sess_showmeasurevalue");
      var txt_input4="textinput4"+localStorage.getItem("curr_sess_unitset");
      this.querySelector("#"+txt_input4).value=localStorage.getItem("curr_sess_showunitvalue");
      this.weight=this.container;
      this.qty=this.qtyreceived;
      this.remark=this.comments;
      this.specification=this.specification;
      //Setting info in localstorage to refer in item page
      localStorage.setItem("localsess_curr_qtyreceived",this.qtyreceived);
      localStorage.setItem("localsess_curr_remark",this.remark);
      //Binding info to the item page
      if(localStorage.getItem("curr_sess_wardflag")!="1") {
        document.querySelector('item-page').FnSetIteminfo(this.weight, this.qty, this.remark);
      }
      if(localStorage.getItem("curr_sess_wardflag")=="1") {
        document.querySelector('outwarditem-page').FnSetIteminfo(this.weight,this.qty);
      }
      if(localStorage.getItem("curr_sess_wardflag")=="2") {
        document.querySelector('intent-page').FnSetIteminfo(this.specification,this.weight,this.qty,this.remark);
      }
    }
  });
})();
