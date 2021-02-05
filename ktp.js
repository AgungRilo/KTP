let valueJK = "";
let valueKW = "";
const nik = document.getElementById('nik');
const nama = document.getElementById('nama');
const ttl = document.getElementById('tempat');
const jenisKelamin = document.querySelectorAll('.jenisKelamin');
const golDar = document.getElementById('darah');
const alamat = document.getElementById('alamat');
const rtRw = document.getElementById('rtRw1');
const desa = document.getElementById('desa');
const kecamatan = document.getElementById('kecamatan');
const pekerjaan = document.getElementById('pekerjaan');
const wni= document.getElementById('wni');
const wna= document.getElementById('wna');
const kewarganegaraan1 = document.querySelectorAll('.kewarganegaraan');
const btn = document.getElementById('button');

for (var i = 0; i < kewarganegaraan1.length; i++) {
	let cek=i;
	kewarganegaraan1[i].addEventListener("change",(a)=>{
		for(var j=0; j < kewarganegaraan1.length; j++){
			if(j !== cek){
				kewarganegaraan1[j].checked = false;
			}
		}
	})
}

function ktp(){
	
	for (var i = 0; i < jenisKelamin.length; i++) {
		if (jenisKelamin[i].checked) {
			valueJK = jenisKelamin[i].value;
		}
	}
	for (var i = 0; i < kewarganegaraan1.length; i++) {
		if (kewarganegaraan1[i].checked) {
			valueKW = kewarganegaraan1[i].value;
		}
	}

	console.log(valueJK);
	console.log(valueKW);
	 if(nik.value.length>0 && nama.value.length>0 && ttl.value.length>0
		&& valueJK.length>0 && golDar.value.length>0 
	 	&& alamat.value.length>0 && rtRw.value.length>0 && desa.value.length>0
	 	&& kecamatan.value.length>0 
	 	&& pekerjaan.value.length>0 
	 	&& valueKW.length>0
	){
		cetak()
	nik.value="";
	nama.value="";
	ttl.value="";
	golDar.value="";
	alamat.value="";
	rtRw.value="";
	desa.value="";
	kecamatan.value="";
	pekerjaan.value="";
	for (var i = 0; i < jenisKelamin.length; i++) {
		jenisKelamin[i].checked = false;
	}
	for (var i = 0; i < kewarganegaraan1.length; i++) {
		kewarganegaraan1[i].checked = false;
	}
	}else{
		alert("Data harus diisi")
	}
}
function cetak(){
	document.getElementById('nikAgung').innerHTML = nik.value;
	document.getElementById('namaAgung').innerHTML = nama.value;
	document.getElementById('ttlAgung').innerHTML = ttl.value;
	document.getElementById('jenisKelaminAgung').innerHTML = valueJK;
	document.getElementById('darahAgung').innerHTML = golDar.value;
	document.getElementById('alamatAgung').innerHTML = alamat.value;
	document.getElementById('rtAgung').innerHTML = rtRw.value;
	document.getElementById('desaAgung').innerHTML = desa.value;
	document.getElementById('kecamatanAgung').innerHTML = kecamatan.value;
	document.getElementById('pekerjaanAgung').innerHTML = pekerjaan.value;
	document.getElementById('kewarganegaraanAgung').innerHTML = valueKW;
	for (var i = 0; i <jenisKelamin.length; i++) {
		if (jenisKelamin[i].checked) {
			document.getElementById("jenisKelaminAgung").innerHTML = jenisKelamin[i].value;
		}
	}
	for (var i = 0; i <kewarganegaraan1.length; i++) {
		if (kewarganegaraan1[i].checked) {
			document.getElementById("kewarganegaraanAgung").innerHTML = kewarganegaraan1[i].value;
		}
	}
} 
