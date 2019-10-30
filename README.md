# XSLT local development

This project will allow you to transform XML files into html, using XSL.

To start run the command 
<pre>
  npm install
</pre>

Then run `grunt dev` which will set up a local server on port 8080

Inside the head are the links to the stylesheet and the JavaScript file – the stylesheet being created by a grunt task that converts the less into CSS. On load it will call the `transform method`, which takes in the name on your XSL file and XML file. In order to work, all XML files must be in the XML folder, and all XSL files must be in the XSL folder. The div with `id=”example”` is where the output from the XSL transformation will be displayed.
