/**
 * Created by praba on 2/12/2016.
 */
Polymer({is:"physicqualifyitemread-card",
  ready:function(){
    //Setting url to make request
    this.url=sessionStorage.getItem("curr_sess_url")+"physicqualifyitem-card";

  },
  FnComponentSize:function(){
      // alert('calling');
      this.querySelector('.repeatcard').style.width='120%';
      this.querySelector('#cont'+this.inwardno).style.width='40%';
      this.querySelector('#qty'+this.inwardno).style.width='40%';
      this.querySelector('textarea').style.width='50%'; 
      // this.querySelector('paper-icon-button').style.width='5%';      
    }
});
