/*
html = "<center><a href='https://www.dropbox.com/s/ontue6xb7zm0tbv/" + code + ".pdf?raw=1' target='_blank'><b><font color='red'><<< OP% >>></font></b></a></br></br></br><table><tr><td><b>EPS (Uptrend)</b></br><img border='0' src='https://googledrive.com/host/0B1QBjXD_5GQxYTFDcWNXbm15dE0/" + code + "-EPS.JPG' /></td>";
html = html + "<td><b>ROE (5-30%)</b></br><img border='0' src='https://www.dropbox.com/s/92zqk8g94fiydfj/" + code + "-ROE.JPG?raw=1' /></td>";
html = html + "</tr><tr><td><b>NAV (Uptrend)</b></br><img border='0' src='https://www.dropbox.com/s/92zqk8g94fiydfj/" + code + "-NAV.JPG?raw=1' /></td>";
html = html + "<td><b>REV (Uptrend)</b></br><img border='0' src='https://www.dropbox.com/s/92zqk8g94fiydfj/" + code + "-REV.JPG?raw=1' /></td>";
html = html + "</tr></table></br>";
*/

html = "<center><img border='0' src='http://bigcharts.marketwatch.com/kaavio.Webhost/charts/big.chart?nosettings=1&symb=SG%3a" + code + "&uf=0&type=4&size=3&style=320&freq=1&entitlementtoken=0c33378313484ba9b46b8e24ded87dd6&time=6&rand=2109167176&compidx=aaaaa%3a0&ma=4&maval=20,50,200&lf=4&lf2=32&lf3=0&height=665&width=720&mocktick=1' />";

/*
if (typeof(code2) != 'undefined' && code2 != null) 
{ 
html = html + "</br><img border='0' src='https://chart.finance.yahoo.com/z?s=" + code2 + "&t=6m&q=c&l=on&z=l&p=m20,e10,p,m200' />";
} else {
html = html + "</br><img border='0' src='https://chart.finance.yahoo.com/z?s=" + code + ".SI&t=6m&q=c&l=on&z=l&p=m20,e10,p,m200' />";
}
html = html + "</br>";
*/

html = html + "<img border='0' src='http://bigcharts.marketwatch.com/kaavio.Webhost/charts/big.chart?nosettings=1&symb=SG%3a" + code + "&uf=0&type=4&size=3&style=320&freq=1&entitlementtoken=0c33378313484ba9b46b8e24ded87dd6&time=8&rand=545588347&compidx=aaaaa%3a0&ma=4&maval=20,50,200&lf=4&lf2=32&lf3=0&height=665&width=720&mocktick=1' />";
html = html + "<img border='0' src='http://bigcharts.marketwatch.com/kaavio.Webhost/charts/big.chart?nosettings=1&symb=SG%3a" + code + "&uf=0&type=4&size=3&style=320&freq=2&entitlementtoken=0c33378313484ba9b46b8e24ded87dd6&time=12&rand=1757217814&compidx=aaaaa%3a0&ma=4&maval=20,50,200&lf=4&lf2=32&lf3=0&height=665&width=720&mocktick=1' /></center>";

document.write(html);

function hideshowpost() {
var x = document.querySelectorAll('.spoiler');
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display == 'none') {
        x[i].style.display = '';
    } else {
        x[i].style.display = 'none';
    }
}

}
