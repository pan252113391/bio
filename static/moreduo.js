var map = new BMap.Map("container");  
map.centerAndZoom(new BMap.Point(121.462511,29.760082), 13);  
map.enableScrollWheelZoom(); 
var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE} 

map.addControl(new BMap.NavigationControl(opts));    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());   




var marker=new BMap.Marker(new BMap.Point(121.462511,29.760082));  
map.addOverlay(marker);  
var licontent = "<b>宁波宁南新城</b><br><br>";
licontent += "<span><strong>地址：</strong>宁波市奉化区恒丰路79-8</span><br><br>";
licontent += "<span><strong>电话：</strong>13757440501</span><br><br>";
licontent += "<span class=\"input\"><strong></strong>";
licontent += "<input class=\"outset\" type =\"text\" name=\"origin\" />";
licontent += "<input class=\"outset-but\" type =\"button\" value=\"公交\" onclick=\"gotobaidu(1)\" />";
licontent += "<input class=\"outset-but\" type =\"button\" value=\"驾车\"  onclick=\"gotobaidu(2)\"/>";
licontent += "<a class=\"gotob\" ";
licontent += "href =\"http://api.map.baidu.com/direction?destination=latlng:" + marker.getPosition().lat + "";
licontent += "," + marker.getPosition().lng + "|name:宁南新城" + "?ion=宁波" + "&output=html\" ";
licontent += "target=\"_blank\"></a></span>";

var hiddeninput="<input type=\"hidden\" value=\""+'宁南新城'+"\" name=\"region\" /><input type=\"hidden\" value=\"html\" name=\"output\" /><input type=\"hidden\" value=\"driving\" name=\"mode\" /><input type=\"hidden\" value=\"latlng:"+marker.getPosition().lat+","+marker.getPosition().lng+"|name:宁南新城"+"\" name=\"destination\" />";

var content1 ="<form id=\"gotobaiduform\" action=\"http://api.map.baidu.com/direction\" target=\"_blank\" method=\"get\">" + licontent +hiddeninput+"</form>";

var opts1 = { width: 300 };  
    
var  infoWindow = new BMap.InfoWindow(content1, opts1);  
marker.openInfoWindow(infoWindow);  
marker.addEventListener('click',function(){
    marker.openInfoWindow(infoWindow);
});  
  
function gotobaidu(type)  
{  
    if($.trim($("input[name=origin]").val())=="")  
    {  
        alert("请输入起点！");  
        return;  
    }else{  
        if(type==1)  
        {  
            $("input[name=mode]").val("transit");  
            $("#gotobaiduform")[0].submit();  
        }else if(type==2)  
        {      
            $("input[name=mode]").val("driving");          
            $("#gotobaiduform")[0].submit();  
        }  
    }  
} 