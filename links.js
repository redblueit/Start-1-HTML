function BlurLinks(){

lnks=document.getElementsByTagName('a');
for(i=0;i<lnks.length;i++){
lnks[i].onfocus=new Function("this.blur()");
}

lnks=document.getElementsByTagName('area');
for(i=0;i<lnks.length;i++){
lnks[i].onfocus=new Function("this.blur()");
}
}

onload=BlurLinks;