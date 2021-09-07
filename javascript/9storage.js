localstorage
> presistent storage
> wrt to browser
> we have to remove manully 

localStorage.setItem("code",91)
undefined
localStorage.getItem("code")
"91"
localStorage.removeItem('code')
undefined
localStorage.getItem("code")
null


sessionStorage
> temp storage
> save wrt to tab
> remove as soon as tab close

sessionStorage.setItem('country','England')
undefined
sessionStorage.getItem('country')
"England"
sessionStorage.removeItem('country')
undefined
sessionStorage.getItem('country')
null

cookies
> save wrt to webiste
> expiresIn time


document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.902734628.1630902904; _gat_gtag_UA_131256843_1=1"
document.cookie="user=admin; expires=Sun, 06 Sep 2021 01:00:00 UTC"
"user=admin; expires=Sun, 06 Sep 2021 01:00:00 UTC"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.902734628.1630902904"
document.cookie="user=admin; expires=Sun, 08 Sep 2021 01:00:00 UTC"
"user=admin; expires=Sun, 08 Sep 2021 01:00:00 UTC"
document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.902734628.1630902904; user=admin"