@import "https://fonts.googleapis.com/css?family=Oswald|Roboto";
body {
    font-family: "Roboto",sans-serif;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
}
body::before
    {
	content:"";
	background: url(http://wallpaper-gallery.net/images/wallpapers-hd-pictures/wallpapers-hd-pictures-10.jpg) no-repeat center center;
	background-size:cover;
	position:fixed;
	margin:0;
	top:0;
	bottom:0;
	right:0;
	left:0;
	width:100%;
	height:100%;
	}
	
.table {
    display: table;
    height: 100%;
    width: 100%;
}
.table-cell {
    display: table-cell;
    transition: all 0.5s ease 0s;
    vertical-align: middle;
}
.container {
    background-color: rgb(153, 158, 222);
    height: 320px;
    margin: -160px auto 0;
    position: relative;
    top: 50%;
    transition: all 0.5s ease 0s;
    width: 600px;
}
.container .box {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
}
.container .box::before, .container .box::after {
    background-color: rgb(146, 151, 224);
    content: " ";
    height: 285px;
    left: 152px;
    position: absolute;
    top: 50px;
    transform: rotateX(52deg) rotateY(15deg) rotateZ(-38deg);
    transition: all 0.5s ease 0s;
    width: 300px;
}
.container .box::after {
    background-color: rgb(165, 170, 228);
    height: 180px;
    left: 80px;
    top: -10px;
    width: 320px;
}
.container .container-forms {
    position: relative;
}
.container .btn {
    background-color: rgb(255, 115, 179);
    color: rgb(255, 255, 255);
    cursor: pointer;
    margin: 0 auto;
    opacity: 1;
    text-align: center;
    transition: all 0.5s ease 0s;
    width: 60px;
}
.container .btn:hover {
    opacity: 0.7;
}
.container .btn, .container input {
    border-radius: 30px;
    padding: 10px 15px;
}
.container input {
    border: 1px solid rgb(243, 243, 243);
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.03);
    color: rgb(102, 102, 102);
    display: block;
    margin: 0 auto 15px;
    transition: all 0.3s ease 0s;
    width: 220px;
}
.container .container-forms .container-info {
    font-size: 0;
    text-align: left;
}
.container .container-forms .container-info .info-item {
    color: rgb(255, 255, 255);
    display: inline-block;
    font-size: 16px;
    height: 320px;
    opacity: 1;
    text-align: center;
    transition: all 0.3s ease 0s;
    vertical-align: top;
    width: 300px;
}
.container .container-forms .container-info .info-item p {
    font-size: 20px;
    margin: 20px;
}
.container .container-forms .container-info .info-item .btn {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(255, 255, 255);
}
.container .container-forms .container-info .info-item .table-cell {
    padding-right: 35px;
}
.container .container-forms .container-info .info-item:nth-child(2) .table-cell {
    padding-left: 35px;
    padding-right: 0;
}
.container .container-form {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    height: 380px;
    left: 30px;
    overflow: hidden;
    position: absolute;
    top: -30px;
    transition: all 0.5s ease 0s;
    width: 305px;
}
.container .container-form::before {
    color: rgb(83, 86, 173);
    content: "✔";
    font-size: 130px;
    left: 160px;
    opacity: 0;
    position: absolute;
    top: -50px;
    transition: all 0.5s ease 0s;
}
.container .container-form .btn {
    box-shadow: 5px 5px 10px rgba(255, 115, 179, 0.5);
    display: block;
    margin-top: 30px;
    position: relative;
    width: 120px;
}
.container .form-item {
    height: 100%;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: all 0.5s ease 0s;
    width: 100%;
}
.container .form-item.sign-up {
    left: -100%;
    opacity: 0;
    position: absolute;
}
.container.log-in .box::before {
    height: 265px;
    left: 180px;
    position: absolute;
    top: 62px;
}
.container.log-in .box::after {
    height: 220px;
    left: 192px;
    top: 22px;
    width: 324px;
}
.container.log-in .container-form {
    left: 265px;
}
.container.log-in .container-form .form-item.sign-up {
    left: 0;
    opacity: 1;
}
.container.log-in .container-form .form-item.log-in {
    left: -100%;
    opacity: 0;
}
.container.active {
    height: 140px;
    margin-top: -70px;
    width: 260px;
}
.container.active .container-form {
    height: 200px;
    left: 30px;
    width: 200px;
}
.container.active .container-form::before {
    color: rgb(83, 86, 173);
    content: "✔";
    font-size: 130px;
    left: 51px;
    opacity: 1;
    position: absolute;
    top: 5px;
}
.container.active input, .container.active .btn, .container.active .info-item {
    display: none;
    height: 0;
    margin: 0 auto;
    opacity: 0;
    padding: 0;
}
.container.active .form-item {
    height: 100%;
}
.container.active .container-forms .container-info .info-item {
    height: 0;
    opacity: 0;
}
.rabbit {
    bottom: 20px;
    fill: rgb(255, 255, 255);
    height: 50px;
    position: absolute;
    right: 20px;
    width: 50px;
    z-index: 3;
}