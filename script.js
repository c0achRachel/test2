html,body {
	padding:0;
	margin:0;
	background:#fafafa;
	text-align:center;
}

body {
	padding-top:3em;
}

h1,
h2 {
	margin-bottom:3rem;
	font-family:sans-serif;
	color:#666;
}

h2 {
	margin-top:2em;
}

/*countdown clock*/
.clock {
	position:relative;
	font-family:monaco,consolas,"courier new",monospace;
	font-size:3.5rem;
	line-height:1.375;
}

.clock:before,
.clock:after {
	position:absolute;
	top:0;
	bottom:0;
	content:':';
	z-index:2;
	line-height:1.15;
	color:#333;
}

.clock:before {
	left:2.325em;
}

.clock:after {
	right:2.325em;
}

.clock span {
	position:relative;
	display:inline-block;
	padding:0 .25em;
	margin:0 .06125em;
	z-index:1;

	-webkit-transform:perspective(750);
	-moz-transform:perspective(750);
	-ms-transform:perspective(750);
	transform:perspective(750);

	-webkit-transform-style:preserve-3d;
	-moz-transform-style:preserve-3d;
	-ms-transform-style:preserve-3d;
	transform-style:preserve-3d;
}

.clock span:first-child {
	margin-left:0;
}

.clock span:last-child {
	margin-right:0;
}

.clock span:nth-child(2),
.clock span:nth-child(4) {
	margin-right:.3em;
}

.clock span:nth-child(3),
.clock span:nth-child(5) {
	margin-left:.3em;
}

.clock span:before,
.clock span:after {
	position:absolute;
	left:0;
	top:0;
	right:0;
	bottom:0;
	color:#eee;
	text-shadow:0 1px 0 #fff;
	background:#333;
	border-radius:.125em;
	outline:1px solid transparent; /* fix jagged edges in ff */

	-webkit-backface-visibility:hidden;
	-moz-backface-visibility:hidden;
	-ms-backface-visibility:hidden;
	backface-visibility:hidden;

	-webkit-transition:-webkit-transform .75s, opacity .75s;
	-moz-transition:-moz-transform .75s, opacity .75s;
	-ms-transition:-ms-transform .75s, opacity .75s;
	transition:transform .75s, opacity .75s;
}

.clock span:before {
	opacity:1;
	z-index:1;
	content:attr(data-old);

	-webkit-transform-origin:0 0;
	-moz-transform-origin:0 0;
	-ms-transform-origin:0 0;
	transform-origin:0 0;

	-webkit-transform:translate3d(0,0,0) rotateX(0);
	-moz-transform:translate3d(0,0,0) rotateX(0);
	-ms-transform:translate3d(0,0,0) rotateX(0);
	transform:translate3d(0,0,0) rotateX(0);
}

.clock span:after {
	opacity:0;
	z-index:2;
	content:attr(data-now);

	-webkit-transform-origin:0 100%;
	-moz-transform-origin:0 100%;
	-ms-transform-origin:0 100%;
	transform-origin:0 100%;

	-webkit-transform:translate3d(0,-102.5%,0) rotateX(90deg);
	-moz-transform:translate3d(0,-102.5%,0) rotateX(90deg);
	-ms-transform:translate3d(0,-102.5%,0) rotateX(90deg);
	transform:translate3d(0,-102.5%,0) rotateX(90deg);
}

.clock .flip:before {
	opacity:0;
	-webkit-transform:translate3d(0,102.5%,0) rotateX(-90deg);
	-moz-transform:translate3d(0,102.5%,0) rotateX(-90deg);
	-ms-transform:translate3d(0,102.5%,0) rotateX(-90deg);
	transform:translate3d(0,102.5%,0) rotateX(-90deg);
}

.clock .flip:after {
	opacity:1;
	-webkit-transform:translate3d(0,0,0) rotateX(0);
	-moz-transform:translate3d(0,0,0) rotateX(0);
	-ms-transform:translate3d(0,0,0) rotateX(0);
	transform:translate3d(0,0,0) rotateX(0);
}


/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
html { height: 100%; }
body { 
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EEE;
}

@import "compass/css3";

$body-bg: #c1bdba;
$form-bg: #13232f;
$white: #ffffff;

$main: #1ab188;
$main-light: lighten($main,5%);
$main-dark: darken($main,5%);

$gray-light: #a0b3b0;
$gray: #ddd;

$thin: 300;
$normal: 400;
$bold: 600;
$br: 4px;

*, *:before, *:after {
  box-sizing: border-box;
}

html {
	overflow-y: scroll; 
}

body {
  background:$body-bg;
  font-family: 'Titillium Web', sans-serif;
}

a {
  text-decoration:none;
  color:$main;
  transition:.5s ease;
  &:hover {
    color:$main-dark;
  }
}

.form {
  background:rgba($form-bg,.9);
  padding: 40px;
  max-width:600px;
  margin:40px auto;
  border-radius:$br;
  box-shadow:0 4px 10px 4px rgba($form-bg,.3);
}

.tab-group {
  list-style:none;
  padding:0;
  margin:0 0 40px 0;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  li a {
    display:block;
    text-decoration:none;
    padding:15px;
    background:rgba($gray-light,.25);
    color:$gray-light;
    font-size:20px;
    float:left;
    width:50%;
    text-align:center;
    cursor:pointer;
    transition:.5s ease;
    &:hover {
      background:$main-dark;
      color:$white;
    }
  }
  .active a {
    background:$main;
    color:$white;
  }
}

.tab-content > div:last-child {
  display:none;
}


h1 {
  text-align:center;
  color:$white;
  font-weight:$thin;
  margin:0 0 40px;
}

label {
  position:absolute;
  transform:translateY(6px);
  left:13px;
  color:rgba($white,.5);
  transition:all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size:22px;
  .req {
  	margin:2px;
  	color:$main;
  }
}

label.active {
  transform:translateY(50px);
  left:2px;
  font-size:14px;
  .req {
    opacity:0;
  }
}

label.highlight {
	color:$white;
}

input, textarea {
  font-size:22px;
  display:block;
  width:100%;
  height:100%;
  padding:5px 10px;
  background:none;
  background-image:none;
  border:1px solid $gray-light;
  color:$white;
  border-radius:0;
  transition:border-color .25s ease, box-shadow .25s ease;
  &:focus {
		outline:0;
		border-color:$main;
  }
}

textarea {
  border:2px solid $gray-light;
  resize: vertical;
}

.field-wrap {
  position:relative;
  margin-bottom:40px;
}

.top-row {
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  > div {
    float:left;
    width:48%;
    margin-right:4%;
    &:last-child { 
      margin:0;
    }
  }
}

.button {
  border:0;
  outline:none;
  border-radius:0;
  padding:15px 0;
  font-size:2rem;
  font-weight:$bold;
  text-transform:uppercase;
  letter-spacing:.1em;
  background:$main;
  color:$white;
  transition:all.5s ease;
  -webkit-appearance: none;
  &:hover, &:focus {
    background:$main-dark;
  }
}

.button-block {
  display:block;
  width:100%;
}

.forgot {
  margin-top:-20px;
  text-align:right;
}

body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

  /*Purchase button*/
}
.btn12 {text-decoration:none!important;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;box-shadow: inset 0 0 0 2px orange;background-color:transparent;font-size:1rem;font-weight:400;padding:15px;text-decoration:none;text-align:center;text-transform:uppercase;font-family:'Poppins',sans-serif;font-weight:600;border-color:orange;color:black;z-index:1;transition:color 150ms ease-in-out;}

.btn12:hover,.btn12:focus{color:black;outline:0}

.btn12:after {
  content:'';
  position:absolute;
  display:block;
  top:0;
  left:50%;
  transform:translateX(-50%);
  width:0;
  height:100%;
  background:orange;
  color:black;
  z-index: -1;
  transition: width 450ms ease-in-out;
}

.btn12:hover {
  color:white;
}

.btn12:hover:after {
  width:110%
}
