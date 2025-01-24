# MERN
Learning Mern Fullstack

# Github

Testing the ssh connection for this git repo

git Repo - MERN

github repo - narsss1234/MERN

we are using ssh connection

navigated to "~/.ssh" folder

bash shell

ssh-keygen

created a public and private key

added the public key in the github 

created a config file in .ssh folder locally

added

```
Host github.com
    User git
    IdentityFile ~/.ssh/id_<privatekey>
```

then tried to login using ssh command

```
ssh -T git@github.com
```

Then tried to clone the repo using ssh link

```
git clone git@github.com:narsss1234/MERN.git
```

# HTML
HTML -> HyperText Markup Language

Tags you need to know

<a> -> anchor(used for links)
<body> -> body of the html boilerplate
<br> -> break the line, go to next
<button>
<canvas>
<div>
<em>
<embed>
<footer>
<form>
<head> -> head of the html boilerplate
<header>
<h1> to <h6> -> header 1-6
<hr> -> a line draw to divide he page
<html> -> the outside fram of an html file
<ifram>
<img> -> to add an image to the html website
<input>
<label>
<li> -> list
<link>
<meta> -> write the metadata reuquired for the website
<nav>
<ol> -> ordered list
<option>
<p> -> paragraph
<script>
<section>
<select>
<span>
<strong>
<style>
<textarea>
<title> -> the title of the website
<ul> -> unordered list

<h1>Hello World!</h1>

# CSS

CSS -> Cascading Style Sheets

How to add CSS? There are three way to do it

1) inline -> <tag style="css" />

2) Internal -> <style>css</style>

3) External -> <link href="style.css"/>