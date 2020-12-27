// JavaScript Document
    
 //default
$(document).on('click', '.open-default', function(event) {
  event.preventDefault();
  $('#modal-default').iziModal('open');
});
$('#modal-default').iziModal();

//iframe
$(document).on('click', '.open-iframe1', function(event) {
  event.preventDefault();
  $('#modal-iframe1').iziModal('open', this);
});
$('#modal-iframe1').iziModal({
  //width:400, //横幅
  iframe: true, //iframeを利用
  iframeWidth:400,
  iframeHeight: 400, //iframeの高さ
  iframeURL: 'q1_top.html' //iframe内に表示するurl
});
    
$(document).on('click', '.open-iframe2', function(event) {
  event.preventDefault();
  $('#modal-iframe2').iziModal('open', this);
});
$('#modal-iframe2').iziModal({
  //width:400, //横幅
  iframe: true, //iframeを利用
  iframeWidth:400,
  iframeHeight: 400, //iframeの高さ
  iframeURL: 'q2_top.html' //iframe内に表示するurl
});
    
$(document).on('click', '.open-iframe3', function(event) {
  event.preventDefault();
  $('#modal-iframe3').iziModal('open', this);
});
$('#modal-iframe3').iziModal({
  //width:400, //横幅
  iframe: true, //iframeを利用
  iframeWidth:400,
  iframeHeight: 400, //iframeの高さ
  iframeURL: 'q3_top.html' //iframe内に表示するurl
});
    