

#        ^^^^^^77777777777777777777777777777777777777777777^^^^#
#      ^^^77777777777777777 SharePoint Intranet GAR 777777777777777^^#
#     ^^777777777777777777777777777777777777777777777777777777777^^#
#   ^7777777777777777777777777777777777777777777777^^#

### Summary ###
Office 365 & SharePoint Online Intranet
- Navigation menus 
- Search
- Designed for desktops, tablets, and mobile devices

## Intranet Functional Overview ##

# 0365 #:
# Intranet #:
# Audits #:
- Landing Page
- 'All Audits' Page (advanced filtering)
- Audit Case Page
# Records #:


<p align="center">Home</p>
<p align="center">
  <img width="600" 
  src="http://thecollaborationcorner.com/wp-content/uploads/2016/09/homepage.png"/>
</p>

<p align="center">News (Desktop)</p>
<p align="center">
  <img width="600" 
  src="http://thecollaborationcorner.com/wp-content/uploads/2016/08/o365_starterintranet_news.png"/>
</p>

<p align="center">News (Mobile)</p>
<p align="center">
  <img width="300" src="http://thecollaborationcorner.com/wp-content/uploads/2016/08/o365_starterintranet_news_mobile.png">
</p>

### Applies to ###
-  Office 365 E1 
- WILL NOT IMPACT OTHER SITE COLLECTIONS. "Site Collection Self-Contained" to not interfer with global tenant configuration (search/taxonomy/termstore configurations)




Page Types: 
-Home Page
-Static Page
-News Page
-Search Page

All pages are stored in the «Pages» library

# Frameworks and libraries #
Solutions Impelmented:
- TypeScript (code structure/definitions)
- Webpack (application bundling/packaging)
- PnP JS Core library (REST calls to SPO)
- PnP Remote Provisioning engine (site provisioning)
- PnP PowerShell cmdlets (site configuration/provisioning)
- Knockout JS (templating and UI components)
- Bootstrap (mobile support)
- Office UI Fabric (icons, fonts, styles)
- Node JS (dependencies management with npm)

## Prerequisites  ##
- Install latest release of [PnP PowerShell cmdlets SharePointPnPPowerShellOnline](https://github.com/OfficeDev/PnP-PowerShell/releases) This solution uses september 2016 release
- Install Node.js on your machine https://nodejs.org/en/
- Install the 'typings' Node JS client (`npm install typings --global`)
- Install the 'webpack' Node JS client (`npm install webpack --global`)
- Go to the ".\App" folder and install all dependencies listed in the package.json file by running the `npm install` cmd 
- Install TypeScript typings by running the "`typings install`" cmd from the ".\App" folder.
- Check if everything is OK by running the "`webpack`" cmd from the ".\App" folder. We shouldn't any errors here (just warnings)
- Create a site collection with the publishing template.

## Installation ##
- Download source code and extract to a folder
- Ensure all Prerequisites are installed
- Run PowerShell as administrator and execute the following: 

    $UserName = "username@email.com"
$Password = "notpassword"
$SiteUrl = "https://-------/sites/test2"

Set-Location "C:/ThisSourcePutHere"

$Script = ".\Deploy-Solution.ps1" 
& $Script -SiteUrl $SiteUrl -UserName $UserName -Password $Password -IncludeData


"`-Prod`" - production bundled version of the code
"`-IncludeData`" - adds sample data 

Navigations


Search

## Design and Mobile  ##
 Evidenciary 




# Feedback #


----------

<img  src="https://telemetry.sharepointpnp.com/pnp/solutions/Business.O365StarterIntranet" />
* [Part 1: Functional overview (How to use the solution?)](http://thecollaborationcorner.com/2016/08/22/part-1-functional-overview-how-to-use-the-solution/)
* [Part 2: Frameworks and libraries used (How it is implemented?)](http://thecollaborationcorner.com/2016/08/25/part-2-frameworks-and-libraries-used-how-it-is-implemented)
* [Part 3: Design and mobile implementation](http://thecollaborationcorner.com/2016/08/29/part-3-design-and-mobile-implementation)
* [Part 4: The navigation implementation](http://thecollaborationcorner.com/2016/08/31/part-4-the-navigation-implementation)
* [Part 5: Localization](http://thecollaborationcorner.com/2016/09/02/part-5-localization)
* [Part 6: The search implementation](http://thecollaborationcorner.com/2016/09/08/part-6-the-search-implementation)