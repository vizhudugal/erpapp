/**
 * Created by praba on 2/17/2016.
 */
//JS file for dialog-page
(function() {
  Polymer({
    is: 'dialog-page',
    ready:function(){
      this.retflag;
    },
    //Method will invoke to toggle the dialog control
    FnShowDialog:function(dialogmsg,regno){
      if(regno!="duplicate entry") {
        this.regno = regno;
        this.retflag="";
      }
      else
      this.retflag="duplicate entry";
      this.dialogmsg=dialogmsg;
      //this.displayvalue=dialogmsg+"!  "+regno;
      this.$.Fn_Open_dialog.open();
    },
  FnClickOk:function(){
  if(this.retflag!="duplicate entry") {
    if (sessionStorage.getItem("curr_sess_roleflag") == "admin") {
      window.location.href = "indexhome.html";
    }
  }

  }
  });
})();
