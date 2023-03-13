window.onload = function() {
	var imagelist = document.getElementById("imagelist");
	var imgs = document.getElementsByClassName("one-imgs");
	imagelist.style.width = 1000 * imgs.length + "px";
	var anniu = document.getElementById("one-anniu");
	var index = 0;
	var allA = document.getElementsByClassName("lianjie");
	
	allA[index].style.backgroundColor = "black";
	
	function setA() {
		if(index >= imgs.length - 1) {
			index = 0;
			imagelist.style.left = 0;
		}
		for(var i = 0; i < allA.length; i++) {
			allA[i].style.backgroundColor = "";
		}
		allA[index].style.backgroundColor = "black";
	};
	
	var timer;
	function autoChange() {
		timer = setInterval(function() {
			index++;
			index %= imgs.length;
			move(imagelist, "left", -1000 * index, 20, function() {
				setA();
			});
		}, 3000);
	}

	function getStyle(obj, name) {
		if(window.getComputedStyle) {
			return getComputedStyle(obj, null)[name];
		} else {
			return obj.currentStyle[name];
		}
	}

	function move(obj, attr, target, speed, callback) {
		clearInterval(obj.timer);
		var current = parseInt(getStyle(obj, attr));
		if(current > target) {
			speed = -speed;
		}
	
		obj.timer = setInterval(function() {
			var oldValue = parseInt(getStyle(obj, attr));
			var newValue = oldValue + speed;
			if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
				newValue = target;
			}
			obj.style[attr] = newValue + "px";
			if(newValue == target) {
				clearInterval(obj.timer);
				callback && callback();
			}
		}, 30);
	}
	autoChange();
};

