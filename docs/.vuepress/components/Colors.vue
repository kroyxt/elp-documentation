<template>
	<section class="Colors">
		<input 
			class="Colors__input" 
			type="text"
			v-model="input"
		>
		<button class="Colors__button">Convert</button>
	</section>
</template>

<script charset="utf-8">
export default {
	data() {
		return {
			input: "",
			meanings_: {
				vin: "0",
				fun: "1",
				ghyn: "2",
				khan: "3",
				zen: "4",
				son: "5",
				ʒihn: "6",
				ʃuhn: "7",
				dzyhn: "8",
				tsahn: "9",
				dʒehn: "A",
				tʃohn: "B",
				wil: "C",
				ei: 0,
				wa: 1,
				jo: 2,
				eu: 3,
				ai: 4,
				wo: 5,
				je: 6,
				au: 7,
				oi: 8,
				we: 9,
				ja: 10,
				ou: 11,
			},
			consonants_: [
				"v",
				"f",
				"gh",
				"kh",
				"z",
				"s",
				"ʒ",
				"ʃ",
				"dz",
				"ts",
				"dʒ",
				"tʃ",
			],
			vowels_: [
				"i",
				"u",
				"y",
				"a",
				"e",
				"o",
				"ih",
				"uh",
				"yh",
				"ah",
				"eh",
				"oh",
			],
			macrons_: {
				"\u0101":"ah",
				"\u0113":"eh",
				"\u012B":"ih",
				"\u014D":"oh",
				"\u016B":"uh",
				"\u0233":"yh",
				"\u0304":"h",
			},
			defaultMagnitude_: 100,
			referenceX_: 95.047,
			referenceY_: 100,
			referenceZ_: 108.883,
		}
	},
	methods: {
		$_meanings() {
			for (let consonant1 in this.consonants_) {
				for (let vowels1 in this.vowels_) {
					for (let consonant2 in this.consonants_) {
						this.meanings_[
							this.consonants_[consonant1] +
							this.vowels_[vowels1] +
							this.consonants_[consonant2]
						] =
							parseInt(consonant1, 10).toString(12) +
							parseInt(vowels1, 10).toString(12) +
							parseInt(consonant2, 10).toString(12);
					};
				};
			};
		},
		$_add12(num1, num2) {
			let num1 = num1.padStart(Math.max(num1.length, num2.length), '0'),
					num2 = num2.padStart(Math.max(num1.length, num2.length), '0'),
					out = '';
			for(let place in num1) {
				out = Math.max(
					parseInt(num1.charAt(num1.length - place -1), 12),
					parseInt(num2.charAt(num2.length - place -1), 12)
				).toString(12) + out;
			}
			return out;
		},

		$_toL(num) {
			let value = 0;

			for(let place in num) {
				value = value + parseInt(num.charAt(place), 12) / Math.pow(12, place + 1);
			}
			value = value * Math.pow(12, num.length) / (Math.pow(12, num.length) - 1) * 100;
			return value;
		},

		$_toC(num) {
			let value = 0;
		
			for(let place in num) {
				value = value + parseInt(num.charAt(place), 12) / Math.pow(12, place + );
			}

			value = (value + 1 / Math.pow(12, num.length)) * 2 * this.defaultMagnitude_;

			return value;
		},

		$_toh(num) {
			let value = 0;

			for(let place in num) {
				value = value + parseInt(num.charAt(place), 12) / Math.pow(12, place + 1);
			}

			value = value * 2 * Math.PI;
		},
		$_hexify(data) {
			return ('00' + Math.round(data).toString(16)).slice(-2);
		}

		$_cleanInputText(input) {

			let input = input.toLowerCase();

			while(input.indexOf(" ") > - 1) {
				input = input.replace(" ", "");
			}

			while(input.indexOf("sh") > - 1) {
				input = input.replace("sh", "ʃ");
			}

			while(input.indexOf("zh") > - 1) {
				input = input.replace("zh", "ʒ");
			}

			for(let macron in this.macrons_) {
				while(input.indexOf(macron) > - 1) {
					input = input.replace(macron, this.macrons_[macron]);
				}
			}
		}

		$_convert() {

			let outsideRGB = false;

			this.$_cleanInputText(this.input);

			let output = 'Invalid Input',
					color = [0, 0, 0],
					i = 0,
					array = [];

			while(input.length > 0) {
				if(i > input.length) {
					i = 0;
					input = input.substr(1);
				}
				i++;
				if(input.slice(0, i) in this.meanings_) {
					array.push(this.meanings_[input.slice(0, i)]);
					i = 0;
				}
			}

			if(array.filter(x => x === 'C';).length == 1) {
				let ram = array,
						array = [],
						mult = 0;
				for(let R in ram) {
					if(typeof(ram[R]) === 'number') {
						mult = mult + ram[R];
					} else {
						if(ram[R] !== 'C') {
							array.push(ram[R] + "".padEnd(mult * 3, "0"));
							mult = 0;
						} else {
							array.push("C");
						}
					}
				}
				array.push('C');

				ram = array;
				array = [];
				total = "0";
				unchanged = true;
				len = 999999999999;

				for(let R in ram) {
					if(ram[R]!=="C") {
						unchanged=false
						if(Math.ceil(ram[R].length/3)>=len){
							array.push(total);
							total="0";

						}
						len=Math.ceil(ram[R].length/3);
						total=add12(total,ram[R]);

					} else {
						if(!unchanged&&len<999999999999){
							array.push(total);
							total="0";
							len=999999999999;
						}
						array.push("C");
					}
				}

				array.pop();

				array.push(100);
				array.push(0);

				if (array[0]=="C") {
					array.unshift(50);
				}

				if (typeof(array[1])!=="number") {
					//CIELCh from inputs
					if(typeof(array[0])!=="number") {
						let L = toL(array[0]); //convets from a 0/12-11/12 scale t0 a 0-1 scale
					} else {
						let L = array[0];
					}
					if(typeof(array[3])!=="number") {
						let C = toC(array[3]); //convets from a 0/12-11/12 scale t0 a 1/12-1 scale
					} else {
						let C = array[3];
					}
					if(typeof(array[2])!=="number") {
						let h = toh(array[2]);
					} else {
						let h = array[2];
					}
					//CIELab form CIELCh
					let a = C * Math.cos(h),
							b = C * Math.sin(h);
					//CIELab to XYZ see http://www.easyrgb.com/en/math.php
					let Y = (L + 16) / 116,
							X = a / 500 + Y,
							Z = Y - b / 200;
					if (Math.pow(Y,3) > 0.008856) {
						Y = Math.pow(Y, 3);
					} else {
						Y = (Y - 16 / 116) / 7.787;
					}

					if (Math.pow(X,3) > 0.008856) {
						X = Math.pow(X, 3);
					} else {
						X = (X - 16 / 116) / 7.787;
					}

					if (Math.pow(Z, 3) > 0.008856) {
						Z = Math.pow(Z, 3);
					} else {
						Z = (Z - 16 / 116) / 7.787;
					}

					X = X * ReferenceX / 100;
					Y = Y * ReferenceY / 100;
					Z = Z * ReferenceZ / 100;

					//XYZ to sRGB see http://www.easyrgb.com/en/math.php

					let R = X *  3.2406 + Y * -1.5372 + Z * -0.4986,
							G = X * -0.9689 + Y *  1.8758 + Z *  0.0415,
							B = X *  0.0557 + Y * -0.2040 + Z *  1.0570;

					if (R > 0.0031308) {
						R = 1.055 * (Math.pow(R, 1 / 2.4 )) - 0.055;
					} else {
						R = 12.92 * R;
					}

					if (G > 0.0031308) {
						G = 1.055 * (Math.pow(G, 1 / 2.4 )) - 0.055;
					} else {
						G = 12.92 * G;
					}

					if (B > 0.0031308) {
						B = 1.055 * (Math.pow(B,1/2.4 )) - 0.055;
					} else {
						B = 12.92 * B;
					}

					R = R * 255;
					G = G * 255;
					B = B * 255;
					color = [R, G, B];
					//make sure RGB are all between 0-255
					if(Math.max(color[0], color[1], color[2], 255-color[0], 255-color[1], 255-color[2]) > 255) {
						outsideRGB=true;
					}

					color[0] = Math.max(Math.min(color[0], 255), 0);
					color[1] = Math.max(Math.min(color[1], 255), 0);
					color[2] = Math.max(Math.min(color[2], 255), 0);

					//set iutput as not error
					let output = "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588";
					if(outsideRGB){
						output=output+"!!!Aproximation!!!";
					}
				}
			}

			let hex = "#" + this.$_hexify(color[0]) + this.$_hexify(color[1]) + this.$_hexify(color[2]);
			console.log(hex);
			//document.getElementById("result").firstChild.nodeValue = output;
			//document.getElementById("result").style.color = hex;
		}
	},
}
</script>
