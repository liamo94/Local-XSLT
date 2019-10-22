<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/Properties/Data/YourComponent">
		<head><title>Your XSL Component</title>
		</head>
		<xsl:comment>Local XSLT Development</xsl:comment>
		<div class="componentContainer">
		<h1>Local XSLT Development</h1>
		<p style="text-align: center">Currnently reading from XSL file</p>
			<xsl:apply-templates/>
		</div>
	</xsl:template>

	<xsl:template match="information">
	<div class="information">
			<h2><xsl:value-of select="name" disable-output-escaping="yes"/></h2>
			<p>Created on - <xsl:value-of select="created" disable-output-escaping="yes"/></p>
	</div>
	</xsl:template>
</xsl:stylesheet>