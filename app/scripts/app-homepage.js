/**
 * Created by praba on 2/11/2016.
 */
Polymer({
  is: "app-homepage",
  ready: function() {
    this.userlabel="Signout"; 
    // alert(sessionStorage.getItem("curr_sess_roleflag")+" "+localStorage.getItem("curr_sess_wardflag"));
    this.loggedusername="Hello! "+sessionStorage.getItem("curr_sess_loggeduser");   

    this.$.intentview.style.visibility='hidden';
    this.$.promotebutton.style.visibility='hidden';
    this.$.intentflow.style.visibility='hidden';
    this.$.recheck.style.visibility='hidden';
    this.$.searchmenu.style.visibility='hidden';
    this.$.dynamicbutton.style.visibility='hidden';
    this.$.flowbutton.style.visibility='hidden';
    this.$.supplybutton.style.visibility='hidden';
    // Condition which shows the outward report card
    if(sessionStorage.getItem("curr_sess_roleflag")=="10"){
      if(localStorage.getItem("curr_sess_wardflag")=="5") {
        document.querySelector('app-homepage').setPage('outwardreport-card');
        this.page = "outwardreport-card";
      }
      // Function which shows the Add customer card
      if(localStorage.getItem("curr_sess_wardflag")=="6") {
        localStorage.setItem("curr_sess_showpage", "Add Customer");
        this.page = "customer-page";
      }
      this.$.flow.style.visibility='hidden';
      this.$.list.style.visibility='visible';
      this.$.flowbutton.style.visibility='hidden';
      this.$.drawerlist.style.visibility='visible';
      this.$.searchmenu.style.visibility='hidden';
    }
    /*Condition which allow to see the search page and hide the respective components in UI*/
    if(sessionStorage.getItem("curr_sess_roleflag")=="5"&&sessionStorage.getItem("curr_sess_roleflag")!="6"){
      localStorage.setItem("curr_sess_showpage","Search Items");
      this.page="Search Items";
      this.$.flow.style.visibility='hidden';
      this.$.list.style.visibility='hidden';
      this.$.flowbutton.style.visibility='hidden';
      this.$.drawerlist.style.visibility='visible';
      this.$.searchmenu.style.visibility='visible';
    }
    if(sessionStorage.getItem("curr_sess_roleflag")=="6"){
      if(localStorage.getItem("curr_sess_wardflag")=="") {        
        localStorage.setItem("curr_sess_showpage", "additem-card");
        this.page = "admin-page";
      }
      if(localStorage.getItem("curr_sess_wardflag")=="11") {
        localStorage.setItem("curr_sess_showpage", "Employee Detail");        
		    this.page = "usercreation-home-card";
      }
      if(localStorage.getItem("curr_sess_wardflag")=="13") {
        // localStorage.setItem("curr_sess_showpage", "Employee Detail");        
        this.page = "departmentcreation-card";
      }
      if(localStorage.getItem("curr_sess_wardflag")=="14") {
        // localStorage.setItem("curr_sess_showpage", "Employee Detail");        
        this.page = "rolecreation-card";
      }
      this.$.flow.style.visibility='hidden';
      this.$.list.style.visibility='visible';
      this.$.flowbutton.style.visibility='hidden';
      this.$.drawerlist.style.visibility='visible';
      this.$.searchmenu.style.visibility='hidden';
    }
    /*Condition which allow security gaurd(role flag is 0) to navigate to his respective inward/outward item entry page*/
    if(sessionStorage.getItem("curr_sess_roleflag")=="0"&&sessionStorage.getItem("curr_sess_roleflag")!="5"&&sessionStorage.getItem("curr_sess_roleflag")!="6")
    {
      /*Condtion to navigate to the inward item entry page when he initially logged in or changing options in drawer menu*/
      if(localStorage.getItem("curr_sess_wardflag")!="1"){
        localStorage.setItem("curr_sess_showpage","Vehicle Info");
        this.page="inwardslip-page";
      }
      /*Condtion to navigate to the outward item entry page when he initially logged in or changing options in drawer menu*/
      else
      {
        localStorage.setItem("curr_sess_showpage","Out Vehicle Info");
        this.page="outwardslip-page";
      }
      /*For security flow states are not necessary,which was hided from him*/
      this.$.flow.style.visibility='hidden';
      this.$.flowbutton.style.visibility='hidden';
      this.$.searchmenu.style.visibility='hidden';
    }
    /*Condtion to navigate to the grn flow page according to the role(role flags of the managers),who logged in*/
    if(sessionStorage.getItem("curr_sess_roleflag")!="0"&&sessionStorage.getItem("curr_sess_roleflag")!="5"&&sessionStorage.getItem("curr_sess_roleflag")!="6"&&sessionStorage.getItem("curr_sess_roleflag")!="7"&&sessionStorage.getItem("curr_sess_roleflag")!="8"&&sessionStorage.getItem("curr_sess_roleflag")!="9"&&sessionStorage.getItem("curr_sess_roleflag")!="10"&&sessionStorage.getItem("curr_sess_roleflag")!="11")
    {
      if(localStorage.getItem("curr_sess_wardflag")=="2"&&sessionStorage.getItem("curr_sess_intentrefreshflag")=="0"){
      this.$.flow.style.visibility='hidden';
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('Add Intent');
      }
      else if(localStorage.getItem("curr_sess_wardflag")=="3"&&sessionStorage.getItem("curr_sess_intentrefreshflag")=="1"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='visible';
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('View Intent');
      }
      else if(localStorage.getItem("curr_sess_wardflag")=="15"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='hidden';
      document.querySelector('app-homepage').setPage('intenthome-page');
      
      if(sessionStorage.getItem("curr_sess_roleflag")=='2')
        document.querySelector('intenthome-page').setPage('internalintentview-page');
      else
        document.querySelector('intenthome-page').setPage('Internal Intent');
      }
      else if(localStorage.getItem("curr_sess_wardflag")=="16"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='hidden';
      document.querySelector('app-homepage').setPage('search-batch-card'); 
      }
      else{
      localStorage.setItem("curr_sess_showpage","physicins-page");
      this.page="home-page";
      this.$.flow.style.visibility='visible';

      if(sessionStorage.getItem("curr_sess_roleflag")=="2")
        this.$.recheck.style.visibility='visible';
      }
      this.$.list.style.visibility='visible';
      this.$.flowbutton.style.visibility='hidden';
      this.$.searchmenu.style.visibility='hidden';
    }
    // Condition which shows the intent category pages according to the type either intent based view or item based intent view
    if(sessionStorage.getItem("curr_sess_roleflag")=="7"||sessionStorage.getItem("curr_sess_roleflag")=="8"||sessionStorage.getItem("curr_sess_roleflag")=="9"){
      if(localStorage.getItem("curr_sess_wardflag")=="2"&&sessionStorage.getItem("curr_sess_intentrefreshflag")=="0"){
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('Add Intent');
      }
      else
      {
      this.$.intentflow.style.visibility='visible';
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('View Intent');
      }
      this.$.flow.style.visibility='hidden';
      this.$.list.style.visibility='hidden';
      this.$.flowbutton.style.visibility='hidden';
      this.$.drawerlist.style.visibility='visible';
      this.$.searchmenu.style.visibility='hidden';
    }
    // Condition which shows the outwardreport page
    if(sessionStorage.getItem("curr_sess_roleflag")=="11"){
      this.$.flow.style.visibility='hidden';
      document.querySelector('app-homepage').setPage('outwardreport-card');
    }
    // Condition which shows the supplier approve card
    if(sessionStorage.getItem("curr_sess_roleflag")=="9"&&localStorage.getItem("curr_sess_wardflag")=="7"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='hidden';
      this.$.dynamicbutton.style.visibility='visible';
      document.querySelector('app-homepage').setPage('approvesupplier-card');
    }
    // Condition which shows the customer approve card
    if(sessionStorage.getItem("curr_sess_roleflag")=="9"&&localStorage.getItem("curr_sess_wardflag")=="8"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='hidden';
      this.$.dynamicbutton.style.visibility='visible';
      document.querySelector('app-homepage').setPage('approvecustomer-card');
    }
     // Condition which shows the customer approve card
    if(sessionStorage.getItem("curr_sess_roleflag")=="9"&&localStorage.getItem("curr_sess_wardflag")=="12"){
      this.$.flow.style.visibility='hidden';
      this.$.intentflow.style.visibility='hidden';
      this.$.dynamicbutton.style.visibility='visible';
      document.querySelector('app-homepage').setPage('approveuser-card');
    }
    // Function which shows the intent page according to the category
    if(sessionStorage.getItem("curr_sess_roleflag")=="4"){      
      if(localStorage.getItem("curr_sess_wardflag")=="3")
      this.$.intentview.style.visibility='visible';      
      if(localStorage.getItem("curr_sess_wardflag")=="3"&&localStorage.getItem("curr_sess_intenttoggleflag")=="1"){        
      this.$.intentview.style.visibility='visible';
      this.$.flow.style.visibility='hidden';      
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('Intent View');
      }
      if(localStorage.getItem("curr_sess_wardflag")=="3"&&localStorage.getItem("curr_sess_intenttoggleflag")=="0"){        
      this.$.intentflow.style.visibility='visible';
      this.$.intentview.style.visibility='visible';
      this.$.flow.style.visibility='hidden';
      document.querySelector('app-homepage').setPage('intenthome-page');
      document.querySelector('intenthome-page').setPage('View Intent');
      }
      if(localStorage.getItem("curr_sess_wardflag")=="4") {
      this.$.flow.style.visibility='hidden';
      localStorage.setItem("curr_sess_showpage", "Add Supplier");      
      this.page = "supplier-page";
      }
    }
  },
  /*when user click signout button it will clear the user session*/
  FnToggleSignin:function(){
    sessionStorage.setItem("loggeduser","null");
    sessionStorage.setItem("loggedrole","null");
    window.location.href="../index.html";
  },
  /*It will change the page according to the user login either inward/outward/search pages*/
  setPage:function(page){
    this.page=page;
  },
  /*Flow button visibility change according to the user login and card expand and shrink modes*/
  setVisible:function(flag){
    if(flag=="true")
      this.$.flowbutton.style.visibility='visible';
    if(flag=="false")
      this.$.flowbutton.style.visibility='hidden';
  },
  // Function which toggle the view of grn flow
  setFlowVisibility:function(flag){
    if(flag=="true")
      this.$.flow.style.visibility='visible';
    if(flag=="false")
      this.$.flow.style.visibility='hidden';
  },
  // Function which toggle the view of intent view toggle button
  FnSetIntentFlowVisibility:function(flag){
    if(flag=="true")
      this.$.intentview.style.visibility='visible';
    if(flag=="false")
      this.$.intentview.style.visibility='hidden';
  },
  // Function which set the title for the page
  setPageTitle:function(title){
    this.pagetitle=title;
  },
  // Function which toggle the view of promote button
  FnSetPromoteVisibility:function(flag){
    if(flag=="true")
      this.$.promotebutton.style.visibility='visible';
    if(flag=="false")
      this.$.promotebutton.style.visibility='hidden';
  },
   // Function which toggle the view of supply button
  FnSetSupplyVisibility:function(flag){
    if(flag=="true")
      this.$.supplybutton.style.visibility='visible';
    if(flag=="false")
      this.$.supplybutton.style.visibility='hidden';
  },
  // Function to toggle the view of intent flow card
  FnSetIntentFlowcardVisibility:function(flag){    
     if(flag=="true")
      this.$.intentflow.style.visibility='visible';
    if(flag=="false")
      this.$.intentflow.style.visibility='hidden';
  },
   FnSetDynamicButtonVisibility:function(flag){    
     if(flag=="true")
      this.$.dynamicbutton.style.visibility='visible';
    if(flag=="false")
      this.$.dynamicbutton.style.visibility='hidden';
  }
});
