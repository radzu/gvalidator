GValidator - Javascript Validation library from OneGeek (http://www.onegeek.com.au)
----------------------------------------------------------------

GValidator is a lightweight javascript form validation library that automatically 
adds client-side validation to form elements, without needing to write a single line of javascript.

The aims of the project are to provide the following:

	* A user-friendly experience
    * A reusable and lightweight library            
    * Semantically clean code 
    * Standards compliant code
    * Cross browser compatibility
    * Code flexibility and extensibility   
    * promote adoption via ease of use


How to use GValidator
----------------------------------------------------------------
To use the library all you need to do is:

  * Copy the icons folder into your image directory
  * Set the ICON_DIR variable in gvalidator.js to point to this location
   
      i.e. ICON_DIR = '/images/icons';
  
  * Include the gvalidator.css script file in the header of the page
  
     <link rel="stylesheet" type="text/css" href="/css/gvalidator.css" media="screen"/>
    
  * Include the gvalidator.js script file at the bottom of the page, just before </body>
  
     i.e. <script type="text/javascript" src="js/gvalidator.js"></script>
    
  * The form is given a class attribute of "gform" to activate GValidator
  * The fields for validation are given various obvious class names depending on how we wish to validate them. 
    i.e. class="name", class="phone", class="text" etc.

There is no embedded JavaScript functions or invalid semantic markup here, just clean, straight-up XHTML.
    
    
Also
----------------------------------------------------------------
To get the latest, view or post bugs or learn more go to:
 * code.google.com/p/gvalidator


GValidator Change Log
----------------------------------------------------------------

1.0
--
  Initial Release of GValidator on Google Code