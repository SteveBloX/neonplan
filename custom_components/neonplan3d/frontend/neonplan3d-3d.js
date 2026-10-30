var Nd=0,Vu=1,Ud=2;var _s=1,kd=2,bo=3,li=0,cn=1,ee=2,Fn=0,En=1,_e=2,Gu=3,Ms=4,Bd=5;var xr=100,zd=101,Vd=102,Gd=103,Hd=104,Wd=200,Xd=201,Yd=202,$d=203,Hu=204,Wu=205,qd=206,Kd=207,Zd=208,Jd=209,jd=210,Qd=211,tp=212,ep=213,np=214,Ha=0,Wa=1,Xa=2,oo=3,Ya=4,$a=5,qa=6,Ka=7,Xu=0,ip=1,rp=2,Hn=0,Yu=1,$u=2,qu=3,Ku=4,Zu=5,Ju=6,ju=7;var Qu=300,Yi=301,vr=302,wl=303,Tl=304,Ss=306,dr=1e3,Sn=1001,Za=1002,sn=1003,op=1004;var ws=1005;var Ye=1006,El=1007;var $i=1008;var An=1009,th=1010,eh=1011,xo=1012,Al=1013,Wn=1014,Xn=1015,Yn=1016,Rl=1017,Cl=1018,vo=1020,nh=35902,ih=35899,rh=1021,oh=1022,Ln=1023,ei=1026,qi=1027,sh=1028,Pl=1029,Ki=1030,Il=1031;var Fl=1033,Ts=33776,Es=33777,As=33778,Rs=33779,Ll=35840,Dl=35841,Ol=35842,Nl=35843,Ul=36196,kl=37492,Bl=37496,zl=37488,Vl=37489,Cs=37490,Gl=37491,Hl=37808,Wl=37809,Xl=37810,Yl=37811,$l=37812,ql=37813,Kl=37814,Zl=37815,Jl=37816,jl=37817,Ql=37818,tc=37819,ec=37820,nc=37821,ic=36492,rc=36494,oc=36495,sc=36283,ac=36284,Ps=36285,lc=36286;var ts=2300,Ja=2301,za=2302,Pu=2303,Iu=2400,Fu=2401,Lu=2402;var sp=3200;var ah=0,ap=1,Ti="",ke="srgb",es="srgb-linear",ns="linear",ye="srgb";var Va=7680;var lp=519,cp=512,up=513,hp=514,cc=515,fp=516,dp=517,uc=518,pp=519,lh=35044,ch=35048;var uh="300 es",Vn=2e3,is=2001;function Cb(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){let i=so("canvas");return i.style.display="block",i}var id={},ao=null;function rs(...i){let t="THREE."+i.shift();ao?ao("log",t,...i):console.log(t,...i)}function gp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=gp(i);let t="THREE."+i.shift();if(ao)ao("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=gp(i);let t="THREE."+i.shift();if(ao)ao("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fr(...i){let t=i.join(" ");t in id||(id[t]=!0,jt(...i))}function bp(i,t,e){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var xp={[Ha]:Wa,[Xa]:qa,[Ya]:Ka,[oo]:$a,[Wa]:Ha,[qa]:Xa,[Ka]:Ya,[$a]:oo},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var su=Math.PI/180,ja=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function Ib(i,t){return(i%t+t)%t}function au(i,t,e){return(1-e)*i+e*t}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mh=class mh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),o=this.x-t.x,s=this.y-t.y;return this.x=o*n-s*r+t.x,this.y=o*r+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;var ie=mh,ii=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,o,s,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=o[s+0],d=o[s+1],p=o[s+2],b=o[s+3];if(h!==b||l!==f||c!==d||u!==p){let g=l*f+c*d+u*p+h*b;g<0&&(f=-f,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),_=Math.sin(x);m=Math.sin(m*x)/_,a=Math.sin(a*x)/_,l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+b*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+p*a,h=h*m+b*a;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,o,s){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=o[s],f=o[s+1],d=o[s+2],p=o[s+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,o=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(o/2),f=l(n/2),d=l(r/2),p=l(o/2);switch(s){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],o=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(o-c)*d,this._z=(s-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(o-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(s-r)/d,this._x=(o+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-n*c,this._z=o*u+s*c+n*l-r*a,this._w=s*u-n*a-r*l-o*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,o=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,o=-o,s=-s,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+o*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gh=class gh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*r,this.y=o[1]*e+o[4]*n+o[7]*r,this.z=o[2]*e+o[5]*n+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=t.elements,s=1/(o[3]*e+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*r+o[12])*s,this.y=(o[1]*e+o[5]*n+o[9]*r+o[13])*s,this.z=(o[2]*e+o[6]*n+o[10]*r+o[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,o=t.x,s=t.y,a=t.z,l=t.w,c=2*(s*r-a*n),u=2*(a*e-o*r),h=2*(o*n-s*e);return this.x=e+l*c+s*h-a*u,this.y=n+l*u+a*c-o*h,this.z=r+l*h+o*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r,this.y=o[1]*e+o[5]*n+o[9]*r,this.z=o[2]*e+o[6]*n+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,o=t.z,s=e.x,a=e.y,l=e.z;return this.x=r*l-o*a,this.y=o*s-n*l,this.z=n*a-r*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lu.copy(this).projectOnVector(t),this.sub(lu)}reflect(t){return this.sub(lu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;var $=gh,lu=new $,rd=new ii,bh=class bh{constructor(t,e,n,r,o,s,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c)}set(t,e,n,r,o,s,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],_=r[4],v=r[7],M=r[2],T=r[5],C=r[8];return o[0]=s*b+a*x+l*M,o[3]=s*g+a*_+l*T,o[6]=s*m+a*v+l*C,o[1]=c*b+u*x+h*M,o[4]=c*g+u*_+h*T,o[7]=c*m+u*v+h*C,o[2]=f*b+d*x+p*M,o[5]=f*g+d*_+p*T,o[8]=f*m+d*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*s*u-e*a*c-n*o*u+n*a*l+r*o*c-r*s*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*s-a*c,f=a*l-u*o,d=c*o-s*l,p=e*h+n*f+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=h*b,t[1]=(r*c-u*n)*b,t[2]=(a*n-r*s)*b,t[3]=f*b,t[4]=(u*e-r*l)*b,t[5]=(r*o-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(s*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,o,s,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-r*c,r*l,-r*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cu.makeScale(t,e)),this}rotate(t){return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cu.makeRotation(-t)),this}translate(t,e){return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;var oe=bh,cu=new oe,od=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fb(){let i={enabled:!0,workingColorSpace:es,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ye&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ye&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?ns:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return fr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return fr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[es]:{primaries:t,whitePoint:n,transfer:ns,toXYZ:od,fromXYZ:sd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:od,fromXYZ:sd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var fe=Fb();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zr,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zr===void 0&&(zr=so("canvas")),zr.width=t.width,zr.height=t.height;let r=zr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=zr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Si(o[s]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lb=0,lo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(uu(r[s].image)):o.push(uu(r[s]))}else o=uu(r);n.url=o}return e||(t.images[this.uuid]=n),n}};function uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Db=0,hu=new $,pn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Sn,r=Sn,o=Ye,s=$i,a=Ln,l=An,c=i.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=zi(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hu).x}get height(){return this.source.getSize(hu).y}get depth(){return this.source.getSize(hu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dr:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dr:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Qu;pn.DEFAULT_ANISOTROPY=1;var xh=class xh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,o=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r+s[12]*o,this.y=s[1]*e+s[5]*n+s[9]*r+s[13]*o,this.z=s[2]*e+s[6]*n+s[10]*r+s[14]*o,this.w=s[3]*e+s[7]*n+s[11]*r+s[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,o,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,M=(m+1)/2,T=(u+f)/4,C=(h+b)/4,y=(p+g)/4;return _>v&&_>M?_<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(_),r=T/n,o=C/n):v>M?v<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(v),n=T/r,o=y/r):M<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),n=C/o,r=y/o),this.set(n,r,o,e),this}let x=Math.sqrt((g-p)*(g-p)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-b)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xh.prototype.isVector4=!0;var ze=xh,tl=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},o=new pn(r),s=n.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new lo(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},os=class extends pn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends pn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,n,r,o,s,a,l,c,u,h,f,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,o,s,a,l,c,u,h,f,d,p,b,g)}set(t,e,n,r,o,s,a,l,c,u,h,f,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Vr.setFromMatrixColumn(t,0).length(),o=1/Vr.setFromMatrixColumn(t,1).length(),s=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,o=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let f=s*u,d=s*h,p=a*u,b=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-b*c,e[9]=-a*l,e[2]=b-f*c,e[6]=p+d*c,e[10]=s*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,b=c*h;e[0]=f+b*a,e[4]=p*a-d,e[8]=s*c,e[1]=s*h,e[5]=s*u,e[9]=-a,e[2]=d*a-p,e[6]=b+f*a,e[10]=s*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,b=c*h;e[0]=f-b*a,e[4]=-s*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=s*u,e[9]=b-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){let f=s*u,d=s*h,p=a*u,b=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+b,e[1]=l*h,e[5]=b*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*u,e[4]=b-f*h,e[8]=p*h+d,e[1]=h,e[5]=s*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-b*h}else if(t.order==="XZY"){let f=s*l,d=s*c,p=a*l,b=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+b,e[5]=s*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=b*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ob,t,Nb)}lookAt(t,e,n){let r=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Oi.crossVectors(n,_n),Oi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Oi.crossVectors(n,_n)),Oi.normalize(),fa.crossVectors(_n,Oi),r[0]=Oi.x,r[4]=fa.x,r[8]=_n.x,r[1]=Oi.y,r[5]=fa.y,r[9]=_n.y,r[2]=Oi.z,r[6]=fa.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,o=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],_=n[7],v=n[11],M=n[15],T=r[0],C=r[4],y=r[8],E=r[12],S=r[1],w=r[5],F=r[9],D=r[13],A=r[2],R=r[6],P=r[10],L=r[14],I=r[3],O=r[7],B=r[11],z=r[15];return o[0]=s*T+a*S+l*A+c*I,o[4]=s*C+a*w+l*R+c*O,o[8]=s*y+a*F+l*P+c*B,o[12]=s*E+a*D+l*L+c*z,o[1]=u*T+h*S+f*A+d*I,o[5]=u*C+h*w+f*R+d*O,o[9]=u*y+h*F+f*P+d*B,o[13]=u*E+h*D+f*L+d*z,o[2]=p*T+b*S+g*A+m*I,o[6]=p*C+b*w+g*R+m*O,o[10]=p*y+b*F+g*P+m*B,o[14]=p*E+b*D+g*L+m*z,o[3]=x*T+_*S+v*A+M*I,o[7]=x*C+_*w+v*R+M*O,o[11]=x*y+_*F+v*P+M*B,o[15]=x*E+_*D+v*L+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[12],s=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*f,_=a*d-c*h,v=a*f-l*h,M=s*d-c*u,T=s*f-l*u,C=s*h-a*u;return e*(b*x-g*_+m*v)-n*(p*x-g*M+m*T)+r*(p*_-b*M+m*C)-o*(p*v-b*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],o=t[1],s=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(s*u-a*c)-n*(o*u-a*l)+r*(o*c-s*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],o=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*s,_=e*l-r*s,v=e*c-o*s,M=n*l-r*a,T=n*c-o*a,C=r*c-o*l,y=u*b-h*p,E=u*g-f*p,S=u*m-d*p,w=h*g-f*b,F=h*m-d*b,D=f*m-d*g,A=x*D-_*F+v*w+M*S-T*E+C*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=(a*D-l*F+c*w)*R,t[1]=(r*F-n*D-o*w)*R,t[2]=(b*C-g*T+m*M)*R,t[3]=(f*T-h*C-d*M)*R,t[4]=(l*S-s*D-c*E)*R,t[5]=(e*D-r*S+o*E)*R,t[6]=(g*v-p*C-m*_)*R,t[7]=(u*C-f*v+d*_)*R,t[8]=(s*F-a*S+c*y)*R,t[9]=(n*S-e*F-o*y)*R,t[10]=(p*T-b*v+m*x)*R,t[11]=(h*v-u*T-d*x)*R,t[12]=(a*E-s*w-l*y)*R,t[13]=(e*w-n*E+r*y)*R,t[14]=(b*_-p*M-g*x)*R,t[15]=(u*M-h*_+f*x)*R,this}scale(t){let e=this.elements,n=t.x,r=t.y,o=t.z;return e[0]*=n,e[4]*=r,e[8]*=o,e[1]*=n,e[5]*=r,e[9]*=o,e[2]*=n,e[6]*=r,e[10]*=o,e[3]*=n,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),o=1-n,s=t.x,a=t.y,l=t.z,c=o*s,u=o*a;return this.set(c*s+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,o,s){return this.set(1,n,o,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,o=e._x,s=e._y,a=e._z,l=e._w,c=o+o,u=s+s,h=a+a,f=o*c,d=o*u,p=o*h,b=s*u,g=s*h,m=a*h,x=l*c,_=l*u,v=l*h,M=n.x,T=n.y,C=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+v)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-v)*T,r[5]=(1-(f+m))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(p+_)*C,r[9]=(g-x)*C,r[10]=(1-(f+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let s=Vr.set(r[0],r[1],r[2]).length(),a=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Un.copy(this);let c=1/s,u=1/a,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=l,this}makePerspective(t,e,n,r,o,s,a=Vn,l=!1){let c=this.elements,u=2*o/(e-t),h=2*o/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=o/(s-o),b=s*o/(s-o);else if(a===Vn)p=-(s+o)/(s-o),b=-2*s*o/(s-o);else if(a===is)p=-s/(s-o),b=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,o,s,a=Vn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(s-o),b=s/(s-o);else if(a===Vn)p=-2/(s-o),b=-(s+o)/(s-o);else if(a===is)p=-1/(s-o),b=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Sl.prototype.isMatrix4=!0;var Ee=Sl,Vr=new $,Un=new Ee,Ob=new $(0,0,0),Nb=new $(1,1,1),Oi=new $,fa=new $,_n=new $,ad=new Ee,ld=new ii,Vi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ad.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ad,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ld.setFromEuler(this),this.setFromQuaternion(ld,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ub=0,cd=new $,Gr=new ii,bi=new Ee,da=new $,Xo=new $,kb=new $,Bb=new ii,ud=new $(1,0,0),hd=new $(0,1,0),fd=new $(0,0,1),dd={type:"added"},zb={type:"removed"},Hr={type:"childadded",child:null},fu={type:"childremoved",child:null},xn=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new Vi,n=new ii,r=new $(1,1,1);function o(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new oe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(t,e){return Gr.setFromAxisAngle(t,e),this.quaternion.premultiply(Gr),this}rotateX(t){return this.rotateOnAxis(ud,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(fd,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ud,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Xo,da,this.up):bi.lookAt(da,Xo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(bi),this.quaternion.premultiply(Gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dd),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zb),fu.child=t,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dd),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,kb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Bb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*r,o[13]+=n-o[1]*e-o[5]*n-o[9]*r,o[14]+=r-o[2]*e-o[6]*n-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));r.material=a}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(o(t.animations,l))}}if(e){let a=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),d=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function s(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new $(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vb={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,o=null,s=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},pa={h:0,s:0,l:0};function du(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var q=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=Ib(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,s=2*n-o;this.r=du(s,o,t+1/3),this.g=du(s,o,t),this.b=du(s,o,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=ke){function n(o){o!==void 0&&parseFloat(o)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(o,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=vp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=ro(t.r),this.g=ro(t.g),this.b=ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return fe.workingToColorSpace(dn.copy(this),t),Math.round(pe(dn.r*255,0,255))*65536+Math.round(pe(dn.g*255,0,255))*256+Math.round(pe(dn.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(dn.copy(this),e);let n=dn.r,r=dn.g,o=dn.b,s=Math.max(n,r,o),a=Math.min(n,r,o),l,c,u=(a+s)/2;if(a===s)l=0,c=0;else{let h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-n)/h+2;break;case o:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=ke){fe.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,r=dn.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(pa);let n=au(Ni.h,pa.h,e),r=au(Ni.s,pa.s,e),o=au(Ni.l,pa.l,e);return this.setHSL(n,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*r,this.g=o[1]*e+o[4]*n+o[7]*r,this.b=o[2]*e+o[5]*n+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new q;q.NAMES=vp;var ho=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new q(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ri=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new $,xi=new $,pu=new $,vi=new $,Wr=new $,Xr=new $,pd=new $,mu=new $,gu=new $,bu=new $,xu=new ze,vu=new ze,yu=new ze,Mi=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),kn.subVectors(t,e),r.cross(kn);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,n,r,o){kn.subVectors(r,e),xi.subVectors(n,e),pu.subVectors(t,e);let s=kn.dot(kn),a=kn.dot(xi),l=kn.dot(pu),c=xi.dot(xi),u=xi.dot(pu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(s*u-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,r,o,s,a,l){return this.getBarycoord(t,e,n,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,r,o,s){return xu.setScalar(0),vu.setScalar(0),yu.setScalar(0),xu.fromBufferAttribute(t,e),vu.fromBufferAttribute(t,n),yu.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(xu,o.x),s.addScaledVector(vu,o.y),s.addScaledVector(yu,o.z),s}static isFrontFacing(t,e,n,r){return kn.subVectors(n,e),xi.subVectors(t,e),kn.cross(xi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),kn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,o=this.c,s,a;Wr.subVectors(r,n),Xr.subVectors(o,n),mu.subVectors(t,n);let l=Wr.dot(mu),c=Xr.dot(mu);if(l<=0&&c<=0)return e.copy(n);gu.subVectors(t,r);let u=Wr.dot(gu),h=Xr.dot(gu);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(Wr,s);bu.subVectors(t,o);let d=Wr.dot(bu),p=Xr.dot(bu);if(p>=0&&d<=p)return e.copy(o);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Xr,a);let g=u*p-d*h;if(g<=0&&h-u>=0&&d-p>=0)return pd.subVectors(o,r),a=(h-u)/(h-u+(d-p)),e.copy(r).addScaledVector(pd,a);let m=1/(g+b+f);return s=b*m,a=f*m,e.copy(n).addScaledVector(Wr,s).addScaledVector(Xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Bn):Bn.fromBufferAttribute(o,s),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let r=t.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),ga.subVectors(this.max,Yo),Yr.subVectors(t.a,Yo),$r.subVectors(t.b,Yo),qr.subVectors(t.c,Yo),Ui.subVectors($r,Yr),ki.subVectors(qr,$r),lr.subVectors(Yr,qr);let e=[0,-Ui.z,Ui.y,0,-ki.z,ki.y,0,-lr.z,lr.y,Ui.z,0,-Ui.x,ki.z,0,-ki.x,lr.z,0,-lr.x,-Ui.y,Ui.x,0,-ki.y,ki.x,0,-lr.y,lr.x,0];return!_u(e,Yr,$r,qr,ga)||(e=[1,0,0,0,1,0,0,0,1],!_u(e,Yr,$r,qr,ga))?!1:(ba.crossVectors(Ui,ki),e=[ba.x,ba.y,ba.z],_u(e,Yr,$r,qr,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new $,new $,new $,new $,new $,new $,new $,new $],Bn=new $,ma=new vn,Yr=new $,$r=new $,qr=new $,Ui=new $,ki=new $,lr=new $,Yo=new $,ga=new $,ba=new $,cr=new $;function _u(i,t,e,n,r){for(let o=0,s=i.length-3;o<=s;o+=3){cr.fromArray(i,o);let a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=t.dot(cr),c=e.dot(cr),u=n.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Xe=new $,xa=new ie,Gb=0,wn=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ss=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var pr=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Et=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hb=new vn,$o=new $,Mu=new $,Gi=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Hb.setFromPoints(t).getCenter(n);let r=0;for(let o=0,s=t.length;o<s;o++)r=Math.max(r,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);let e=$o.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($o,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(Mu)),this.expandByPoint($o.copy(t.center).sub(Mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wb=0,Pn=new Ee,Su=new xn,Kr=new $,Mn=new vn,qo=new vn,rn=new $,Ot=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cb(t)?pr:ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new oe().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Su.lookAt(t),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let o=t[r];e.setXYZ(r,o.x,o.y,o.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let o=e[n];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let o=0,s=e.length;o<s;o++){let a=e[o];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Mn.min,qo.min),Mn.expandByPoint(rn),rn.addVectors(Mn.max,qo.max),Mn.expandByPoint(rn)):(Mn.expandByPoint(qo.min),Mn.expandByPoint(qo.max))}Mn.getCenter(n);let r=0;for(let o=0,s=t.count;o<s;o++)rn.fromBufferAttribute(t,o),r=Math.max(r,n.distanceToSquared(rn));if(e)for(let o=0,s=e.length;o<s;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(t,c),rn.add(Kr)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,o=e.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new $,l[y]=new $;let c=new $,u=new $,h=new $,f=new ie,d=new ie,p=new ie,b=new $,g=new $;function m(y,E,S){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),f.fromBufferAttribute(o,y),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,S),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(b.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(w),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(w),a[y].add(b),a[E].add(b),a[S].add(b),l[y].add(g),l[E].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,E=x.length;y<E;++y){let S=x[y],w=S.start,F=S.count;for(let D=w,A=w+F;D<A;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let _=new $,v=new $,M=new $,T=new $;function C(y){M.fromBufferAttribute(r,y),T.copy(M);let E=a[y];_.copy(E),_.sub(M.multiplyScalar(M.dot(E))).normalize(),v.crossVectors(T,E);let w=v.dot(l[y])<0?-1:1;s.setXYZW(y,_.x,_.y,_.z,w)}for(let y=0,E=x.length;y<E;++y){let S=x[y],w=S.start,F=S.count;for(let D=w,A=w+F;D<A;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new $,o=new $,s=new $,a=new $,l=new $,c=new $,u=new $,h=new $;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,o),h.subVectors(r,o),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*u;for(let m=0;m<u;m++)f[p++]=c[d++]}return new wn(f,u,h)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,l=s.length;a<l;a++){let c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let o=t.morphAttributes;for(let c in o){let u=[],h=o[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,u=s.length;c<u;c++){let h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},nl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},bn=new $,as=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),r=we(r,this.array),o=we(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wu=new $,Xb=new $,Yb=new oe,zn=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=wu.subVectors(n,e).cross(Xb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yb.getNormalMatrix(t),r=this.coplanarPoint(wu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$b=0,oi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=En,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hu,this.blendDst=Wu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){let s=[];for(let a in o){let l=o[a];delete l.metadata,s.push(l)}return s}if(e){let o=r(t.textures),s=r(t.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new q().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fo=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zr,Ko=new $,Jr=new $,jr=new $,Qr=new ie,Zo=new ie,yp=new Ee,va=new $,Jo=new $,ya=new $,md=new ie,Tu=new ie,gd=new ie,ls=class extends xn{constructor(t=new fo){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Ot;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(e,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new as(n,3,0,!1)),Zr.setAttribute("uv",new as(n,2,3,!1))}this.geometry=Zr,this.material=t,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),yp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-jr.z);let n=this.material.rotation,r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));let s=this.center;_a(va.set(-.5,-.5,0),jr,s,Jr,r,o),_a(Jo.set(.5,-.5,0),jr,s,Jr,r,o),_a(ya.set(.5,.5,0),jr,s,Jr,r,o),md.set(0,0),Tu.set(1,0),gd.set(1,1);let a=t.ray.intersectTriangle(va,Jo,ya,!1,Ko);if(a===null&&(_a(Jo.set(-.5,.5,0),jr,s,Jr,r,o),Tu.set(0,1),a=t.ray.intersectTriangle(va,ya,Jo,!1,Ko),a===null))return;let l=t.ray.origin.distanceTo(Ko);l<t.near||l>t.far||e.push({distance:l,point:Ko.clone(),uv:Mi.getInterpolation(Ko,va,Jo,ya,md,Tu,gd,new ie),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _a(i,t,e,n,r,o){Qr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Zo.x=o*Qr.x-r*Qr.y,Zo.y=r*Qr.x+o*Qr.y):Zo.copy(Qr),i.copy(t),i.x+=Zo.x,i.y+=Zo.y,i.applyMatrix4(yp)}var _i=new $,Eu=new $,Ma=new $,Sa=new $,mr=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Eu.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(Eu);let o=t.distanceTo(e)*.5,s=-this.direction.dot(Ma),a=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),u=Math.abs(1-s*s),h,f,d,p;if(u>0)if(h=s*l-a,f=s*a-l,p=o*u,h>=0)if(f>=-p)if(f<=p){let b=1/u;h*=b,f*=b,d=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=o,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f=-o,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-s*o+a)),f=h>0?-o:Math.min(Math.max(-o,-l),o),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(h=Math.max(0,-(s*o+a)),f=h>0?o:Math.min(Math.max(-o,-l),o),d=-h*h+f*(f+2*l)+c);else f=s>0?-o:o,h=Math.max(0,-(s*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Eu).addScaledVector(Ma,f),d}intersectSphere(t,e){if(t.radius<0)return null;_i.subVectors(t.center,this.origin);let n=_i.dot(this.direction),r=_i.dot(_i)-n*n,o=t.radius*t.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,o,s,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(o=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(o=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),n>s||o>r||((o>n||isNaN(n))&&(n=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,r,o){let s=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-s.x,f=t.y-s.y,d=t.z-s.z,p=e.x-s.x,b=e.y-s.y,g=e.z-s.z,m=n.x-s.x,x=n.y-s.y,_=n.z-s.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(u),C,y,E,S,w,F,D,A,R,P,L,I;if(v>=M&&v>=T?(E=l,F=h,R=p,I=m,l>=0?(C=c,y=u,S=f,w=d,D=b,A=g,P=x,L=_):(C=u,y=c,S=d,w=f,D=g,A=b,P=_,L=x)):M>=T?(E=c,F=f,R=b,I=x,c>=0?(C=u,y=l,S=d,w=h,D=g,A=p,P=_,L=m):(C=l,y=u,S=h,w=d,D=p,A=g,P=m,L=_)):(E=u,F=d,R=g,I=_,u>=0?(C=l,y=c,S=h,w=f,D=p,A=b,P=m,L=x):(C=c,y=l,S=f,w=h,D=b,A=p,P=x,L=m)),E===0)return null;let O=C/E,B=y/E,z=1/E,G=S-O*F,H=w-B*F,X=D-O*R,j=A-B*R,nt=P-O*I,Y=L-B*I,V=nt*j-Y*X,K=G*Y-H*nt,et=X*H-j*G;if(r){if(V<0||K<0||et<0)return null}else if((V<0||K<0||et<0)&&(V>0||K>0||et>0))return null;let tt=V+K+et;if(tt===0)return null;let st=z*(V*F+K*R+et*I);return(tt>0?st<0:st>0)?null:this.at(st/tt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},bd=new Ee,ur=new mr,wa=new Gi,xd=new $,Ta=new $,Ea=new $,Aa=new $,Au=new $,Ra=new $,vd=new $,Ca=new $,vt=class extends xn{constructor(t=new Ot,e=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(o&&a){Ra.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(Au.fromBufferAttribute(h,t),s?Ra.addScaledVector(Au,u):Ra.addScaledVector(Au.sub(e),u))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(o),ur.copy(t.ray).recast(t.near),!(wa.containsPoint(ur.origin)===!1&&(ur.intersectSphere(wa,xd)===null||ur.origin.distanceToSquared(xd)>(t.far-t.near)**2))&&(bd.copy(o).invert(),ur.copy(t.ray).applyMatrix4(bd),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ur)))}_computeIntersections(t,e,n){let r,o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let T=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);r=Pa(this,m,t,n,c,u,h,T,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);r=Pa(this,s,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,b=f.length;p<b;p++){let g=f[p],m=s[g.materialIndex],x=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,M=_;v<M;v+=3){let T=v,C=v+1,y=v+2;r=Pa(this,m,t,n,c,u,h,T,C,y),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,_=g+1,v=g+2;r=Pa(this,s,t,n,c,u,h,x,_,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function qb(i,t,e,n,r,o,s,a){let l;if(t.side===cn?l=n.intersectTriangle(s,o,r,!0,a):l=n.intersectTriangle(r,o,s,t.side===li,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Pa(i,t,e,n,r,o,s,a,l,c){i.getVertexPosition(a,Ta),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Aa);let u=qb(i,t,e,n,Ta,Ea,Aa,vd);if(u){let h=new $;Mi.getBarycoord(vd,Ta,Ea,Aa,h),r&&(u.uv=Mi.getInterpolatedAttribute(r,a,l,c,h,new ie)),o&&(u.uv1=Mi.getInterpolatedAttribute(o,a,l,c,h,new ie)),s&&(u.normal=Mi.getInterpolatedAttribute(s,a,l,c,h,new $),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};Mi.getNormal(Ta,Ea,Aa,f.normal),u.face=f,u.barycoord=h}return u}var il=class extends pn{constructor(t=null,e=1,n=1,r,o,s,a,l,c=sn,u=sn,h,f){super(null,s,a,l,c,u,r,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=new Gi,Kb=new ie(.5,.5),Ia=new $,cs=class{constructor(t=new zn,e=new zn,n=new zn,r=new zn,o=new zn,s=new zn){this.planes=[t,e,n,r,o,s]}set(t,e,n,r,o,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let r=this.planes,o=t.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],h=o[5],f=o[6],d=o[7],p=o[8],b=o[9],g=o[10],m=o[11],x=o[12],_=o[13],v=o[14],M=o[15];if(r[0].setComponents(c-s,d-u,m-p,M-x).normalize(),r[1].setComponents(c+s,d+u,m+p,M+x).normalize(),r[2].setComponents(c+a,d+h,m+b,M+_).normalize(),r[3].setComponents(c-a,d-h,m-b,M-_).normalize(),n)r[4].setComponents(l,f,g,v).normalize(),r[5].setComponents(c-l,d-f,m-g,M-v).normalize();else if(r[4].setComponents(c-l,d-f,m-g,M-v).normalize(),e===Vn)r[5].setComponents(c+l,d+f,m+g,M+v).normalize();else if(e===is)r[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){hr.center.set(0,0,0);let e=Kb.distanceTo(t.center);return hr.radius=.7071067811865476+e,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ia.x=r.normal.x>0?t.max.x:t.min.x,Ia.y=r.normal.y>0?t.max.y:t.min.y,Ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ze=class extends oi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},rl=new $,ol=new $,yd=new Ee,jo=new mr,Fa=new Gi,Ru=new $,_d=new $,sl=class extends xn{constructor(t=new Ot,e=new Ze){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,o=e.count;r<o;r++)rl.fromBufferAttribute(e,r-1),ol.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=rl.distanceTo(ol);t.setAttribute("lineDistance",new Et(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=o,t.ray.intersectsSphere(Fa)===!1)return;yd.copy(r).invert(),jo.copy(t.ray).applyMatrix4(yd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=u.getX(b),x=u.getX(b+1),_=La(this,t,jo,l,m,x,b);_&&e.push(_)}if(this.isLineLoop){let b=u.getX(p-1),g=u.getX(d),m=La(this,t,jo,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let b=d,g=p-1;b<g;b+=c){let m=La(this,t,jo,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=La(this,t,jo,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function La(i,t,e,n,r,o,s){let a=i.geometry.attributes.position;if(rl.fromBufferAttribute(a,r),ol.fromBufferAttribute(a,o),e.distanceSqToSegment(rl,ol,Ru,_d)>n)return;Ru.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ru);if(!(c<t.near||c>t.far))return{distance:c,point:_d.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new $,Sd=new $,qe=class extends sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,o=e.count;r<o;r+=2)Md.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Md.distanceTo(Sd);t.setAttribute("lineDistance",new Et(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wi=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wd=new Ee,Du=new mr,Da=new Gi,Oa=new $,si=class extends xn{constructor(t=new Ot,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=o,t.ray.intersectsSphere(Da)===!1)return;wd.copy(r).invert(),Du.copy(t.ray).applyMatrix4(wd);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=f,b=d;p<b;p++){let g=c.getX(p);Oa.fromBufferAttribute(h,g),Td(Oa,g,l,r,t,e,this)}}else{let f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=f,b=d;p<b;p++)Oa.fromBufferAttribute(h,p),Td(Oa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Td(i,t,e,n,r,o,s){let a=Du.distanceSqToPoint(i);if(a<e){let l=new $;Du.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var us=class extends pn{constructor(t=[],e=Yi,n,r,o,s,a,l,c,u){super(t,e,n,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends pn{constructor(t,e,n,r,o,s,a,l,c){super(t,e,n,r,o,s,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends pn{constructor(t,e,n=Wn,r,o,s,a=sn,l=sn,c,u=ei,h=1){if(u!==ei&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,o,s,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},al=class extends ai{constructor(t,e=Wn,n=Yi,r,o,s=sn,a=sn,l,c=ei){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,o,s,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hs=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},po=class i extends Ot{constructor(t=1,e=1,n=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,s,o,0),p("z","y","x",1,-1,n,e,-t,s,o,1),p("x","z","y",1,1,t,n,e,r,s,2),p("x","z","y",1,-1,t,n,-e,r,s,3),p("x","y","z",1,-1,t,e,n,r,o,4),p("x","y","z",-1,-1,t,e,-n,r,o,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function p(b,g,m,x,_,v,M,T,C,y,E){let S=v/C,w=M/y,F=v/2,D=M/2,A=T/2,R=C+1,P=y+1,L=0,I=0,O=new $;for(let B=0;B<P;B++){let z=B*w-D;for(let G=0;G<R;G++){let H=G*S-F;O[b]=H*x,O[g]=z*_,O[m]=A,c.push(O.x,O.y,O.z),O[b]=0,O[g]=0,O[m]=T>0?1:-1,u.push(O.x,O.y,O.z),h.push(G/C),h.push(1-B/y),L+=1}}for(let B=0;B<y;B++)for(let z=0;z<C;z++){let G=f+z+R*B,H=f+z+R*(B+1),X=f+(z+1)+R*(B+1),j=f+(z+1)+R*B;l.push(G,H,j),l.push(H,X,j),I+=6}a.addGroup(d,I,E),d+=I,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fs=class i extends Ot{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let o=[],s=[],a=[],l=[],c=new $,u=new ie;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),s.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(s[f]/t+1)/2,u.y=(s[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Zb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,o=_p(i,0,r,e,!0),s=[];if(!o||o.next===o.prev)return s;let a,l,c;if(n&&(o=ex(i,t,o,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<r;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ds(o,s,e,a,l,c,0),s}function _p(i,t,e,n,r){let o;if(r===fx(i,t,e,n)>0)for(let s=t;s<e;s+=n)o=Ed(s/n|0,i[s],i[s+1],o);else for(let s=e-n;s>=t;s-=n)o=Ed(s/n|0,i[s],i[s+1],o);return o&&mo(o,o.next)&&(ms(o),o=o.next),o}function gr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||Be(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ds(i,t,e,n,r,o,s){if(!i)return;!s&&o&&sx(i,n,r,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?jb(i,n,r,o):Jb(i)){t.push(l.i,i.i,c.i),ms(i),i=c.next,a=c.next;continue}if(i=c,i===a){s?s===1?(i=Qb(gr(i),t),ds(i,t,e,n,r,o,2)):s===2&&tx(i,t,e,n,r,o):ds(gr(i),t,e,n,r,o,1);break}}}function Jb(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,o=e.x,s=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,o,s),h=Math.min(a,l,c),f=Math.max(r,o,s),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Qo(r,a,o,l,s,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function jb(i,t,e,n){let r=i.prev,o=i,s=i.next;if(Be(r,o,s)>=0)return!1;let a=r.x,l=o.x,c=s.x,u=r.y,h=o.y,f=s.y,d=Math.min(a,l,c),p=Math.min(u,h,f),b=Math.max(a,l,c),g=Math.max(u,h,f),m=Ou(d,p,t,e,n),x=Ou(b,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=x;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&Qo(a,u,l,h,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&Qo(a,u,l,h,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=b&&_.y>=p&&_.y<=g&&_!==r&&_!==s&&Qo(a,u,l,h,c,f,_.x,_.y)&&Be(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==s&&Qo(a,u,l,h,c,f,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qb(i,t){let e=i;do{let n=e.prev,r=e.next.next;!mo(n,r)&&Sp(n,e,e.next,r)&&ps(n,r)&&ps(r,n)&&(t.push(n.i,e.i,r.i),ms(e),ms(e.next),e=i=r),e=e.next}while(e!==i);return gr(e)}function tx(i,t,e,n,r,o){let s=i;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&cx(s,a)){let l=wp(s,a);s=gr(s,s.next),l=gr(l,l.next),ds(s,t,e,n,r,o,0),ds(l,t,e,n,r,o,0);return}a=a.next}s=s.next}while(s!==i)}function ex(i,t,e,n){let r=[];for(let o=0,s=t.length;o<s;o++){let a=t[o]*n,l=o<s-1?t[o+1]*n:i.length,c=_p(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(lx(c))}r.sort(nx);for(let o=0;o<r.length;o++)e=ix(r[o],e);return e}function nx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function ix(i,t){let e=rx(i,t);if(!e)return t;let n=wp(e,i);return gr(n,n.next),gr(e,e.next)}function rx(i,t){let e=t,n=i.x,r=i.y,o=-1/0,s;if(mo(i,e))return e;do{if(mo(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>o&&(o=h,s=e.x<e.next.x?e:e.next,h===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0;e=s;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mp(r<c?n:o,r,l,c,r<c?o:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);ps(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&ox(s,e)))&&(s=e,u=h)}e=e.next}while(e!==a);return s}function ox(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function sx(i,t,e,n){let r=i;do r.z===0&&(r.z=Ou(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,ax(r)}function ax(i){let t,e=1;do{let n=i,r;i=null;let o=null;for(t=0;n;){t++;let s=n,a=0;for(let c=0;c<e&&(a++,s=s.nextZ,!!s);c++);let l=e;for(;a>0||l>0&&s;)a!==0&&(l===0||!s||n.z<=s.z)?(r=n,n=n.nextZ,a--):(r=s,s=s.nextZ,l--),o?o.nextZ=r:i=r,r.prevZ=o,o=r;n=s}o.nextZ=null,e*=2}while(t>1);return i}function Ou(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mp(i,t,e,n,r,o,s,a){return(r-s)*(t-a)>=(i-s)*(o-a)&&(i-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(o-a)>=(r-s)*(n-a)}function Qo(i,t,e,n,r,o,s,a){return!(i===s&&t===a)&&Mp(i,t,e,n,r,o,s,a)}function cx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ux(i,t)&&(ps(i,t)&&ps(t,i)&&hx(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||mo(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mo(i,t){return i.x===t.x&&i.y===t.y}function Sp(i,t,e,n){let r=Ua(Be(i,t,e)),o=Ua(Be(i,t,n)),s=Ua(Be(e,n,i)),a=Ua(Be(e,n,t));return!!(r!==o&&s!==a||r===0&&Na(i,e,t)||o===0&&Na(i,n,t)||s===0&&Na(e,i,n)||a===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ua(i){return i>0?1:i<0?-1:0}function ux(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ps(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function hx(i,t){let e=i,n=!1,r=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&r<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wp(i,t){let e=Nu(i.i,i.x,i.y),n=Nu(t.i,t.x,t.y),r=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ed(i,t,e,n){let r=Nu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ms(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(i,t,e,n){let r=0;for(let o=t,s=e-n;o<e;o+=n)r+=(i[s]-i[o])*(i[o+1]+i[s+1]),s=o;return r}var Uu=class{static triangulate(t,e,n=2){return Zb(t,e,n)}},gs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,o=0;o<e;r=o++)n+=t[r].x*t[o].y-t[o].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],o=[];Ad(t),Rd(n,t);let s=t.length;e.forEach(Ad);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,Rd(n,e[l]);let a=Uu.triangulate(n,r);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Ad(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gn=class i extends Ot{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let o=t/2,s=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<u;m++){let x=m*f-s;for(let _=0;_<c;_++){let v=_*h-o;p.push(v,-x,0),b.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let _=x+c*m,v=x+c*(m+1),M=x+1+c*(m+1),T=x+1+c*m;d.push(_,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new Et(p,3)),this.setAttribute("normal",new Et(b,3)),this.setAttribute("uv",new Et(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},bs=class i extends Ot{constructor(t=.5,e=1,n=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/r,d=new $,p=new ie;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=o+g/n*s;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,u.push(p.x,p.y)}h+=f}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,_=x,v=x+n+1,M=x+n+2,T=x+1;a.push(_,v,T),a.push(v,M,T)}}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Cd(r))r.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Cd(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();t[e][n]=o}else t[e][n]=r.slice();else t[e][n]=r}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=yr(i[e]);for(let r in n)t[r]=n[r]}return t}function Cd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Tp={clone:yr,merge:mn},px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new q().setHex(r.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[n].value=new $().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(r.value);break;case"m3":this.uniforms[n].value=new oe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var cl=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function to(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],o=e[n-1];n:{t:{let s;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=r,r=e[++n],t<r)break t}s=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=o,o=e[--n-1],t>=o)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(r=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=t*r;for(let s=0;s!==r;++s)e[s]=n[o+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iu,endingEnd:Iu}}intervalChanged_(t,e,n){let r=this.parameterPositions,o=t-2,s=t+1,a=r[o],l=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Fu:o=t,a=2*e-n;break;case Lu:o=r.length-2,a=e+r[o]-r[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fu:s=t,l=2*n-e;break;case Lu:s=1,l=n+r[1]-r[0];break;default:s=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=s*u}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-f*g+2*f*b-f*p,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*p+1,_=(-1-d)*g+(1.5+d)*b+.5*p,v=d*g-d*b;for(let M=0;M!==a;++M)o[M]=m*s[u+M]+x*s[c+M]+_*s[l+M]+v*s[h+M];return o}},fl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)o[f]=s[c+f]*h+s[l+f]*u;return o}},dl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends Hi{interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)o[g]=s[c+g]*b+s[l+g]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let b=s[c+p],g=s[l+p],m=d*f+p*2,x=h[m],_=h[m+1],v=t*f+p*2,M=u[v],T=u[v+1],C=bx(n,e,x,M,r);o[p]=Ep(C,b,_,T,g)}return o}};function Ep(i,t,e,n,r){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*r}function gx(i,t,e,n,r){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(r-n)}function bx(i,t,e,n,r){let o=(i-t)/(r-t);for(let s=0;s<8;s++){let a=Ep(o,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=gx(o,t,e,n,r);if(Math.abs(l)<1e-10)break;o=Math.max(0,Math.min(1,o-a/l))}return o}var Tn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Cu(t.settings)&&(n.settings={inTangents:to(t.settings.inTangents,Array),outTangents:to(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ts:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case Pu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return Pu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Cu(this.settings)&&(Pd(this.settings.inTangents,t),Pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,o=0,s=r-1;for(;o!==r&&n[o]<t;)++o;for(;s!==-1&&n[s]>e;)--s;if(++s,o!==0||s!==r){o>=s&&(s=Math.max(s,1),o=s-1);let a=this.getValueSize();this.times=n.slice(o,s),this.values=this.values.slice(o*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,o=n.length;o===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(r!==void 0&&Pb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===za,o=t.length-1,s=1;for(let a=1;a<o;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let b=e[h+p];if(b!==e[f+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];let h=a*n,f=s*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++s}}if(o>0){t[s]=t[o];for(let a=o*n,l=s*n,c=0;c!==n;++c)e[l+c]=e[a+c];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Cu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ja;var Wi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ts;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};ml.prototype.ValueTypeName="color";var gl=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};gl.prototype.ValueTypeName="number";var bl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)ii.slerpFlat(o,0,s,c-a,s,c,l);return o}},xs=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new bl(this.times,this.values,this.getValueSize(),t)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=ts;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Tn{constructor(t,e,n,r){super(t,e,n,r)}};xl.prototype.ValueTypeName="vector";var Ga={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Id(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Id(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Id(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var vl=class{constructor(t,e,n){let r=this,o=!1,s=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ap=new vl,go=class{constructor(t){this.manager=t!==void 0?t:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,o){n.load(t,r,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};go.DEFAULT_MATERIAL_NAME="__DEFAULT";var eo=new WeakMap,yl=class extends go{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let o=this,s=Ga.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(t),setTimeout(function(){e&&e(s),o.manager.itemEnd(t)},0);else{let h=eo.get(s);h===void 0&&(h=[],eo.set(s,h)),h.push({onLoad:e,onError:r})}return s}let a=so("img");function l(){u(),e&&e(this);let h=eo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}eo.delete(this),o.manager.itemEnd(t)}function c(h){u(),r&&r(h),Ga.remove(`image:${t}`);let f=eo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}eo.delete(this),o.manager.itemError(t),o.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ga.add(`image:${t}`,a),o.manager.itemStart(t),a.src=t,a}};var br=class extends go{constructor(t){super(t)}load(t,e,n,r){let o=new pn,s=new yl(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,r),o}};var ka=new $,Ba=new ii,Qn=new $,vs=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,Ba,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ka,Ba,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ba,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new $,Fd=new ie,Ld=new ie,on=class extends vs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Fd,Ld),e.subVectors(Ld,Fd)}setViewOffset(t,e,n,r,o,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(su*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,e-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var In=class extends vs{constructor(t=-1,e=1,n=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=n-t,s=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var no=-90,io=1,_l=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(no,io,t,e);r.layers=this.layers,this.add(r);let o=new on(no,io,t,e);o.layers=this.layers,this.add(o);let s=new on(no,io,t,e);s.layers=this.layers,this.add(s);let a=new on(no,io,t,e);a.layers=this.layers,this.add(a);let l=new on(no,io,t,e);l.layers=this.layers,this.add(l);let c=new on(no,io,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,o,s,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ml=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fh="\\[\\]\\.:\\/",xx=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",vx="[^"+fh.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",dh),_x=/(WCOD+)?/.source.replace("WCOD",vx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),wx=new RegExp("^"+yx+_x+Mx+Sx+"$"),Tx=["material","materials","bones","map"],ku=class{constructor(t,e,n){let r=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xx,"")}static parseTrackName(t){let e=wx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let o=n.nodeName.substring(r+1);Tx.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let s=0;s<o.length;s++){let a=o[s];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[r];if(s===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=ku;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CT=new Float32Array(1);var Dd=new Ee,ys=class{constructor(t,e,n=0,r=1/0){this.ray=new mr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dd),this}intersectObject(t,e=!0,n=[]){return Bu(t,this,n,e),n.sort(Od),n}intersectObjects(t,e=!0,n=[]){for(let r=0,o=t.length;r<o;r++)Bu(t[r],this,n,e);return n.sort(Od),n}};function Od(i,t){return i.distance-t.distance}function Bu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let o=i.children;for(let s=0,a=o.length;s<a;s++)Bu(o[s],t,e,!0)}}var vh=class vh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=r,this}};vh.prototype.isMatrix2=!0;var zu=vh;function ph(i,t,e,n){let r=Ex(n);switch(e){case rh:return i*t;case sh:return i*t/r.components*r.byteLength;case Pl:return i*t/r.components*r.byteLength;case Ki:return i*t*2/r.components*r.byteLength;case Il:return i*t*2/r.components*r.byteLength;case oh:return i*t*3/r.components*r.byteLength;case Ln:return i*t*4/r.components*r.byteLength;case Fl:return i*t*4/r.components*r.byteLength;case Ts:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Ol:return Math.max(i,8)*Math.max(t,8)/2;case Ul:case kl:case zl:case Vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:case Cs:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ic:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ps:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ex(i){switch(i){case An:case th:return{byteLength:1,components:1};case xo:case eh:case Yn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Wn:case Al:case Xn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kp(){let i=null,t=!1,e=null,n=null;function r(o,s){n=i.requestAnimationFrame(r),e(o,s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Rx(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],b=h[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,h[f]=b)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let b=h[d];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_v=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Av=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,py=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ny=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ky=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Fx,alphatest_fragment:Lx,alphatest_pars_fragment:Dx,aomap_fragment:Ox,aomap_pars_fragment:Nx,batching_pars_vertex:Ux,batching_vertex:kx,begin_vertex:Bx,beginnormal_vertex:zx,bsdfs:Vx,iridescence_fragment:Gx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:$x,color_fragment:qx,color_pars_fragment:Kx,color_pars_vertex:Zx,color_vertex:Jx,common:jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:tv,displacementmap_pars_vertex:ev,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:rv,colorspace_fragment:ov,colorspace_pars_fragment:sv,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:uv,envmap_physical_pars_fragment:_v,envmap_vertex:hv,fog_vertex:fv,fog_pars_vertex:dv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:bv,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:Mv,lights_toon_pars_fragment:Sv,lights_phong_fragment:wv,lights_phong_pars_fragment:Tv,lights_physical_fragment:Ev,lights_physical_pars_fragment:Av,lights_fragment_begin:Rv,lights_fragment_maps:Cv,lights_fragment_end:Pv,lightprobes_pars_fragment:Iv,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Ov,map_fragment:Nv,map_pars_fragment:Uv,map_particle_fragment:kv,map_particle_pars_fragment:Bv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Hv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:Yv,normal_fragment_begin:$v,normal_fragment_maps:qv,normal_pars_fragment:Kv,normal_pars_vertex:Zv,normal_vertex:Jv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:ry,premultiplied_alpha_fragment:oy,project_vertex:sy,dithering_fragment:ay,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:hy,shadowmap_pars_vertex:fy,shadowmap_vertex:dy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:by,skinnormal_vertex:xy,specularmap_fragment:vy,specularmap_pars_fragment:yy,tonemapping_fragment:_y,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:wy,uv_pars_fragment:Ty,uv_pars_vertex:Ey,uv_vertex:Ay,worldpos_vertex:Ry,background_vert:Cy,background_frag:Py,backgroundCube_vert:Iy,backgroundCube_frag:Fy,cube_vert:Ly,cube_frag:Dy,depth_vert:Oy,depth_frag:Ny,distance_vert:Uy,distance_frag:ky,equirect_vert:By,equirect_frag:zy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Hy,meshbasic_frag:Wy,meshlambert_vert:Xy,meshlambert_frag:Yy,meshmatcap_vert:$y,meshmatcap_frag:qy,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Jy,meshphong_frag:jy,meshphysical_vert:Qy,meshphysical_frag:t1,meshtoon_vert:e1,meshtoon_frag:n1,points_vert:i1,points_frag:r1,shadow_vert:o1,shadow_frag:s1,sprite_vert:a1,sprite_frag:l1},At={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},ui={basic:{uniforms:mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:mn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:mn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:mn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new q(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:mn([At.points,At.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:mn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:mn([At.common,At.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:mn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:mn([At.sprite,At.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distance:{uniforms:mn([At.common,At.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distance_vert,fragmentShader:ce.distance_frag},shadow:{uniforms:mn([At.lights,At.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var hc={r:0,b:0,g:0},c1=new Ee,Zp=new oe;Zp.set(-1,0,0,0,1,0,0,0,1);function u1(i,t,e,n,r,o){let s=new q(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let _=x.isScene===!0?x.background:null;if(_&&_.isTexture){let v=x.backgroundBlurriness>0;_=t.get(_,v)}return _}function p(x){let _=!1,v=d(x);v===null?g(s,a):v&&v.isColor&&(g(v,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Ss)?(c===void 0&&(c=new vt(new po(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:yr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zp),c.material.toneMapped=fe.getTransfer(v.colorSpace)!==ye,(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new vt(new Gn(2,2),new Je({name:"BackgroundMaterial",uniforms:yr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=fe.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,_){x.getRGB(hc,hh(i)),e.buffers.color.setClear(hc.r,hc.g,hc.b,_,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,_=1){s.set(x),a=_,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(s,a)},render:p,addToRenderList:b,dispose:m}}function h1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),o=r,s=!1;function a(w,F,D,A,R){let P=!1,L=h(w,A,D,F);o!==L&&(o=L,c(o.object)),P=d(w,A,D,R),P&&p(w,A,D,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(P||s)&&(s=!1,v(w,F,D,A),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,F,D,A){let R=A.wireframe===!0,P=n[F.id];P===void 0&&(P={},n[F.id]=P);let L=w.isInstancedMesh===!0?w.id:0,I=P[L];I===void 0&&(I={},P[L]=I);let O=I[D.id];O===void 0&&(O={},I[D.id]=O);let B=O[R];return B===void 0&&(B=f(l()),O[R]=B),B}function f(w){let F=[],D=[],A=[];for(let R=0;R<e;R++)F[R]=0,D[R]=0,A[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:D,attributeDivisors:A,object:w,attributes:{},index:null}}function d(w,F,D,A){let R=o.attributes,P=F.attributes,L=0,I=D.getAttributes();for(let O in I)if(I[O].location>=0){let z=R[O],G=P[O];if(G===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(G=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(G=w.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;L++}return o.attributesNum!==L||o.index!==A}function p(w,F,D,A){let R={},P=F.attributes,L=0,I=D.getAttributes();for(let O in I)if(I[O].location>=0){let z=P[O];z===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),R[O]=G,L++}o.attributes=R,o.attributesNum=L,o.index=A}function b(){let w=o.newAttributes;for(let F=0,D=w.length;F<D;F++)w[F]=0}function g(w){m(w,0)}function m(w,F){let D=o.newAttributes,A=o.enabledAttributes,R=o.attributeDivisors;D[w]=1,A[w]===0&&(i.enableVertexAttribArray(w),A[w]=1),R[w]!==F&&(i.vertexAttribDivisor(w,F),R[w]=F)}function x(){let w=o.newAttributes,F=o.enabledAttributes;for(let D=0,A=F.length;D<A;D++)F[D]!==w[D]&&(i.disableVertexAttribArray(D),F[D]=0)}function _(w,F,D,A,R,P,L){L===!0?i.vertexAttribIPointer(w,F,D,R,P):i.vertexAttribPointer(w,F,D,A,R,P)}function v(w,F,D,A){b();let R=A.attributes,P=D.getAttributes(),L=F.defaultAttributeValues;for(let I in P){let O=P[I];if(O.location>=0){let B=R[I];if(B===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),B!==void 0){let z=B.normalized,G=B.itemSize,H=t.get(B);if(H===void 0)continue;let X=H.buffer,j=H.type,nt=H.bytesPerElement,Y=j===i.INT||j===i.UNSIGNED_INT||B.gpuType===Al;if(B.isInterleavedBufferAttribute){let V=B.data,K=V.stride,et=B.offset;if(V.isInstancedInterleavedBuffer){for(let tt=0;tt<O.locationSize;tt++)m(O.location+tt,V.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let tt=0;tt<O.locationSize;tt++)g(O.location+tt);i.bindBuffer(i.ARRAY_BUFFER,X);for(let tt=0;tt<O.locationSize;tt++)_(O.location+tt,G/O.locationSize,j,z,K*nt,(et+G/O.locationSize*tt)*nt,Y)}else{if(B.isInstancedBufferAttribute){for(let V=0;V<O.locationSize;V++)m(O.location+V,B.meshPerAttribute);w.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let V=0;V<O.locationSize;V++)g(O.location+V);i.bindBuffer(i.ARRAY_BUFFER,X);for(let V=0;V<O.locationSize;V++)_(O.location+V,G/O.locationSize,j,z,G*nt,G/O.locationSize*V*nt,Y)}}else if(L!==void 0){let z=L[I];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(O.location,z);break;case 3:i.vertexAttrib3fv(O.location,z);break;case 4:i.vertexAttrib4fv(O.location,z);break;default:i.vertexAttrib1fv(O.location,z)}}}}x()}function M(){E();for(let w in n){let F=n[w];for(let D in F){let A=F[D];for(let R in A){let P=A[R];for(let L in P)u(P[L].object),delete P[L];delete A[R]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;let F=n[w.id];for(let D in F){let A=F[D];for(let R in A){let P=A[R];for(let L in P)u(P[L].object),delete P[L];delete A[R]}}delete n[w.id]}function C(w){for(let F in n){let D=n[F];for(let A in D){let R=D[A];if(R[w.id]===void 0)continue;let P=R[w.id];for(let L in P)u(P[L].object),delete P[L];delete R[w.id]}}}function y(w){for(let F in n){let D=n[F],A=w.isInstancedMesh===!0?w.id:0,R=D[A];if(R!==void 0){for(let P in R){let L=R[P];for(let I in L)u(L[I].object),delete L[I];delete R[P]}delete D[A],Object.keys(D).length===0&&delete n[F]}}}function E(){S(),s=!0,o!==r&&(o=r,c(o.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function f1(i,t,e){let n;function r(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function s(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function d1(i,t,e,n){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==An&&C!==Xn&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,maxSamples:M,samples:T}}function p1(i){let t=this,e=null,n=0,r=!1,o=!1,s=new zn,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||o&&!g)o?u(null):c();else{let x=o?0:n,_=x*4,v=m.clippingState||null;l.value=v,v=u(p,f,_,d);for(let M=0;M!==_;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,p){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=d;_!==b;++_,v+=4)s.copy(h[_]).applyMatrix4(x,a),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var _o=4,m1=6,g1=20,b1=256,Is=new In,Rp=new q,yh=null,_h=0,Mh=0,Sh=!1,x1=new $,_r=new $,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,o={}){let{size:s=256,position:a=x1}=o;yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yh,_h,Mh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Yn,format:Ln,colorSpace:es,depthBuffer:!1},r=Cp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v1(o)),this._blurMaterial=_1(o,t,e),this._ggxMaterial=y1(o,t,e)}return r}_compileMaterial(t){let e=new vt(new Ot,t);this._renderer.compile(e,Is)}_sceneToCubeUV(t,e,n,r,o){let l=new on(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Rp),h.toneMapping=Hn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new po,new Ht({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(Rp),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[_],o.y,o.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[_],o.z)):(l.up.set(0,c[_],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[_]));let M=this._cubeSize;yo(r,v*M,_>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(b,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Yi||t.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Is)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;let l=s.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-_o?n-p+_o:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,yo(o,g,m,3*b,2*b),r.setRenderTarget(o),r.render(a,Is),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,yo(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,Is)}_blur(t,e,n,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,o,e,n,s),this._blurPass(o,t,n,n,s)}_blurPass(t,e,n,r,o){let s=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=o,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-_o?r-this._lodMax+_o:0),f=4*(this._cubeSize-u);yo(e,h,f,3*u,2*u),s.setRenderTarget(e),s.render(l,Is)}};function v1(i){let t=[],e=[],n=i,r=i-_o+1+m1;for(let o=0;o<r;o++){let s=Math.pow(2,n);t.push(s);let a=1/(s-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),b=new Float32Array(d*f*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,_=m>2?0:-1,v=[x,_,0,x+2/3,_,0,x+2/3,_+1,0,x,_,0,x+2/3,_+1,0,x,_+1,0];p.set(v,d*f*m);for(let M=0;M<f;M++){let T=u[M*2]*2-1,C=u[M*2+1]*2-1;m===0?_r.set(1,C,T):m===1?_r.set(-T,1,-C):m===2?_r.set(-T,C,1):m===3?_r.set(-1,C,-T):m===4?_r.set(-T,-1,C):_r.set(T,C,-1),_r.toArray(b,(m*f+M)*d)}}let g=new Ot;g.setAttribute("position",new wn(p,d)),g.setAttribute("outputDirection",new wn(b,d)),e.push(new vt(g,null)),n>_o&&n--}return{lodMeshes:e,sizeLods:t}}function Cp(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function y1(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function _1(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:g1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Pp(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ip(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new us(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new po(5,5,5),o=new Je({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Fn});o.uniforms.tEquirect.value=e;let s=new vt(r,o),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Ye),new _l(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let o=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,r);t.setRenderTarget(o)}};function M1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?s(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===wl||d===Tl)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new pc(p.height);return b.fromEquirectangularTexture(i,f),t.set(f,b),f.addEventListener("dispose",c),a(b.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){let d=f.mapping,p=d===wl||d===Tl,b=d===Yi||d===vr;if(p||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new dc(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new dc(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===wl?f.mapping=Yi:d===Tl&&(f.mapping=vr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function S1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&fr("WebGLRenderer: "+n+" extension not supported."),r}}}function w1(i,t,e,n){let r={},o=new WeakMap;function s(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",s),delete r[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let _=0,v=x.length;_<v;_+=3){let M=x[_+0],T=x[_+1],C=x[_+2];f.push(M,T,T,C,C,M)}}else{let x=p.array;b=p.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let M=_+0,T=_+1,C=_+2;f.push(M,T,T,C,C,M)}}let g=new(p.count>=65535?pr:ss)(f,1);g.version=b;let m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){let f=o.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function T1(i,t,e){let n;function r(h){n=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,f){i.drawElements(n,f,o,h*s),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,o,h*s,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,h,0,d);let b=0;for(let g=0;g<d;g++)b+=f[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function E1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,a){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Qt("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function A1(i,t,e){let n=new WeakMap,r=new ze;function o(s,a,l){let c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),b===!0&&(_=3);let v=a.attributes.position.count*_,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*M*4*h),C=new os(T,v,M,h);C.type=Xn,C.needsUpdate=!0;let y=_*4;for(let S=0;S<h;S++){let w=g[S],F=m[S],D=x[S],A=v*M*4*S;for(let R=0;R<w.count;R++){let P=R*y;d===!0&&(r.fromBufferAttribute(w,R),T[A+P+0]=r.x,T[A+P+1]=r.y,T[A+P+2]=r.z,T[A+P+3]=0),p===!0&&(r.fromBufferAttribute(F,R),T[A+P+4]=r.x,T[A+P+5]=r.y,T[A+P+6]=r.z,T[A+P+7]=0),b===!0&&(r.fromBufferAttribute(D,R),T[A+P+8]=r.x,T[A+P+9]=r.y,T[A+P+10]=r.z,T[A+P+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new ie(v,M)},n.set(a,f),a.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function R1(i,t,e,n,r){let o=new WeakMap;function s(c){let u=r.render.frame,h=c.geometry,f=t.get(c,h);if(o.get(f)!==u&&(t.update(f),o.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==u&&(d.update(),o.set(d,u))}return f}function a(){o=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}var C1={[Yu]:"LINEAR_TONE_MAPPING",[$u]:"REINHARD_TONE_MAPPING",[qu]:"CINEON_TONE_MAPPING",[Ku]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function P1(i,t,e,n,r,o){let s=new $e(t,e,{type:i,depthBuffer:r,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ot;c.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new vt(c,u),f=new In(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],_=!1;this.setSize=function(v,M){s.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<x.length;T++){let C=x[T];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){x=v,_=x.length>0&&x[0].isRenderPass===!0;let M=s.width,T=s.height;x.length>0&&a===null&&(a=new $e(M,T,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new $e(M,T,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<x.length;C++){let y=x[C];y.setSize&&y.setSize(M,T)}},this.begin=function(v,M){if(b||v.toneMapping===Hn&&x.length===0)return!1;if(m=M,M!==null){let T=M.width,C=M.height;(s.width!==T||s.height!==C)&&this.setSize(T,C)}return _===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Hn,!0},this.hasRenderPass=function(){return _},this.end=function(v,M){v.toneMapping=g,b=!0;let T=s,C=a;for(let y=0;y<x.length;y++){let E=x[y];E.enabled!==!1&&(E.render(v,C,T,M),E.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},fe.getTransfer(d)===ye&&(u.defines.SRGB_TRANSFER="");let y=C1[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(h,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Jp=new pn,Eh=new ai(1,1),jp=new os,Qp=new el,t0=new us,Fp=[],Lp=[],Dp=new Float32Array(16),Op=new Float32Array(9),Np=new Float32Array(4);function So(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,o=Fp[r];if(o===void 0&&(o=new Float32Array(r),Fp[r]=o),t!==0){n.toArray(o,0);for(let s=1,a=0;s!==t;++s)a+=e,i[s].toArray(o,a)}return o}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gc(i,t){let e=Lp[t];e===void 0&&(e=new Int32Array(t),Lp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function I1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function F1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function L1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function D1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function O1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),Qe(e,n)}}function N1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Op.set(n),i.uniformMatrix3fv(this.addr,!1,Op),Qe(e,n)}}function U1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),Qe(e,n)}}function k1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function B1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function z1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function V1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function G1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function W1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Y1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Eh.compareFunction=e.isReversedDepthBuffer()?uc:cc,o=Eh):o=Jp,e.setTexture2D(t||o,r)}function $1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Qp,r)}function q1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||t0,r)}function K1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||jp,r)}function Z1(i){switch(i){case 5126:return I1;case 35664:return F1;case 35665:return L1;case 35666:return D1;case 35674:return O1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return k1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return H1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return K1}}function J1(i,t){i.uniform1fv(this.addr,t)}function j1(i,t){let e=So(t,this.size,2);i.uniform2fv(this.addr,e)}function Q1(i,t){let e=So(t,this.size,3);i.uniform3fv(this.addr,e)}function t_(i,t){let e=So(t,this.size,4);i.uniform4fv(this.addr,e)}function e_(i,t){let e=So(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n_(i,t){let e=So(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i_(i,t){let e=So(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function r_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function c_(i,t){i.uniform2uiv(this.addr,t)}function u_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function f_(i,t,e){let n=this.cache,r=t.length,o=gc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));let s;this.type===i.SAMPLER_2D_SHADOW?s=Eh:s=Jp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||s,o[a])}function d_(i,t,e){let n=this.cache,r=t.length,o=gc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||Qp,o[s])}function p_(i,t,e){let n=this.cache,r=t.length,o=gc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||t0,o[s])}function m_(i,t,e){let n=this.cache,r=t.length,o=gc(e,r);je(n,o)||(i.uniform1iv(this.addr,o),Qe(n,o));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||jp,o[s])}function g_(i){switch(i){case 5126:return J1;case 35664:return j1;case 35665:return Q1;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return r_;case 35667:case 35671:return o_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}var Ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z1(e.type)}},Rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(t,e[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Up(i,t){i.seq.push(t),i.map[t.id]=t}function b_(i,t,e){let n=i.name,r=n.length;for(wh.lastIndex=0;;){let o=wh.exec(n),s=wh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Up(e,c===void 0?new Ah(a,i,t):new Rh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ch(a),Up(e,h)),e=h}}}var Mo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=t.getActiveUniform(e,s),l=t.getUniformLocation(e,a.name);b_(a,l,this)}let r=[],o=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(t,e,n,r){let o=this.map[e];o!==void 0&&o.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let o=0,s=e.length;o!==s;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,o=t.length;r!==o;++r){let s=t[r];s.id in e&&n.push(s)}return n}};function kp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x_=37297,v_=0;function y_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let s=r;s<o;s++){let a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}var Bp=new oe;function __(i){fe._getMatrix(Bp,fe.workingColorSpace,i);let t=`mat3( ${Bp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case ns:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+o+`

`+y_(i.getShaderSource(t),a)}else return o}function M_(i,t){let e=__(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var S_={[Yu]:"Linear",[$u]:"Reinhard",[qu]:"Cineon",[Ku]:"ACESFilmic",[Ju]:"AgX",[ju]:"Neutral",[Zu]:"Custom"};function w_(i,t){let e=S_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new $;function T_(){fe.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function A_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let o=i.getActiveAttrib(t,r),s=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[s]={type:o.type,location:i.getAttribLocation(t,s),locationSize:a}}return e}function Ls(i){return i!==""}function Vp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(C_,I_)}var P_=new Map;function I_(i,t){let e=ce[t];if(e===void 0){let n=P_.get(t);if(n!==void 0)e=ce[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(i){return i.replace(F_,L_)}function L_(i,t,e,n){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var D_={[_s]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function O_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Yi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var k_={[vr]:"ENVMAP_MODE_REFRACTION"};function B_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function V_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let r=i.getContext(),o=e.defines,s=e.vertexShader,a=e.fragmentShader,l=O_(e),c=U_(e),u=B_(e),h=V_(e),f=G_(e),d=E_(e),p=A_(o),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ls).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(g=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ce.tonemapping_pars_fragment:"",e.toneMapping!==Hn?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),T_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),s=Ph(s),s=Vp(s,e),s=Gp(s,e),a=Ph(a),a=Vp(a,e),a=Gp(a,e),s=Hp(s),a=Hp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=x+g+s,v=x+m+a,M=kp(r,r.VERTEX_SHADER,_),T=kp(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,T),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(w){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(b)||"",D=r.getShaderInfoLog(M)||"",A=r.getShaderInfoLog(T)||"",R=F.trim(),P=D.trim(),L=A.trim(),I=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,T);else{let B=zp(r,M,"vertex"),z=zp(r,T,"fragment");Qt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+R+`
`+B+`
`+z)}else R!==""?jt("WebGLProgram: Program Info Log:",R):(P===""||L==="")&&(O=!1);O&&(w.diagnostics={runnable:I,programLog:R,vertexShader:{log:P,prefix:g},fragmentShader:{log:L,prefix:m}})}r.deleteShader(M),r.deleteShader(T),y=new Mo(r,b),E=R_(r,b)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,x_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v_++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}var W_=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fh(t),e.set(t,n)),n}},Fh=class{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}};function X_(i){return i===Ki||i===Cs||i===Ps}function Y_(i,t,e,n,r,o){let s=new co,a=new Ih,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,E,S,w,F,D){let A=w.fog,R=F.geometry,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?w.environment:null,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I=t.get(y.envMap||P,L),O=I&&I.mapping===Ss?I.image.height:null,B=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&jt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,G=z!==void 0?z.length:0,H=0;R.morphAttributes.position!==void 0&&(H=1),R.morphAttributes.normal!==void 0&&(H=2),R.morphAttributes.color!==void 0&&(H=3);let X,j,nt,Y;if(B){let Ce=ui[B];X=Ce.vertexShader,j=Ce.fragmentShader}else{X=y.vertexShader,j=y.fragmentShader;let Ce=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Ce,xe),nt=Ce.id,Y=xe.id}let V=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),et=F.isInstancedMesh===!0,tt=F.isBatchedMesh===!0,st=!!y.map,ct=!!y.matcap,ut=!!I,gt=!!y.aoMap,Nt=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,zt=!!y.normalMap,Ut=!!y.displacementMap,te=!!y.emissiveMap,he=!!y.metalnessMap,Ae=!!y.roughnessMap,Z=y.anisotropy>0,Ie=y.clearcoat>0,be=y.dispersion>0,W=y.retroreflectivity>0,U=y.iridescence>0,it=y.sheen>0,at=y.transmission>0,ht=Z&&!!y.anisotropyMap,xt=Ie&&!!y.clearcoatMap,yt=Ie&&!!y.clearcoatNormalMap,ft=Ie&&!!y.clearcoatRoughnessMap,pt=U&&!!y.iridescenceMap,_t=U&&!!y.iridescenceThicknessMap,Xt=it&&!!y.sheenColorMap,Tt=it&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,Yt=!!y.specularColorMap,Jt=!!y.specularIntensityMap,ae=at&&!!y.transmissionMap,Q=at&&!!y.thicknessMap,St=!!y.gradientMap,dt=!!y.alphaMap,wt=y.alphaTest>0,It=!!y.alphaHash,bt=!!y.extensions,$t=Hn;y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&($t=i.toneMapping);let Vt={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:j,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:tt,batchingColor:tt&&F._colorsTexture!==null,instancing:et,instancingColor:et&&F.instanceColor!==null,instancingMorph:et&&F.morphTexture!==null,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:ct,envMap:ut,envMapMode:ut&&I.mapping,envMapCubeUVHeight:O,aoMap:gt,lightMap:Nt,bumpMap:Ft,normalMap:zt,displacementMap:Ut,emissiveMap:te,normalMapObjectSpace:zt&&y.normalMapType===ap,normalMapTangentSpace:zt&&y.normalMapType===ah,packedNormalMap:zt&&y.normalMapType===ah&&X_(y.normalMap.format),metalnessMap:he,roughnessMap:Ae,anisotropy:Z,anisotropyMap:ht,clearcoat:Ie,clearcoatMap:xt,clearcoatNormalMap:yt,clearcoatRoughnessMap:ft,dispersion:be,retroreflection:W,iridescence:U,iridescenceMap:pt,iridescenceThicknessMap:_t,sheen:it,sheenColorMap:Xt,sheenRoughnessMap:Tt,specularMap:Mt,specularColorMap:Yt,specularIntensityMap:Jt,transmission:at,transmissionMap:ae,thicknessMap:Q,gradientMap:St,opaque:y.transparent===!1&&y.blending===En&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:wt,alphaHash:It,combine:y.combine,mapUv:st&&p(y.map.channel),aoMapUv:gt&&p(y.aoMap.channel),lightMapUv:Nt&&p(y.lightMap.channel),bumpMapUv:Ft&&p(y.bumpMap.channel),normalMapUv:zt&&p(y.normalMap.channel),displacementMapUv:Ut&&p(y.displacementMap.channel),emissiveMapUv:te&&p(y.emissiveMap.channel),metalnessMapUv:he&&p(y.metalnessMap.channel),roughnessMapUv:Ae&&p(y.roughnessMap.channel),anisotropyMapUv:ht&&p(y.anisotropyMap.channel),clearcoatMapUv:xt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(y.sheenRoughnessMap.channel),specularMapUv:Mt&&p(y.specularMap.channel),specularColorMapUv:Yt&&p(y.specularColorMap.channel),specularIntensityMapUv:Jt&&p(y.specularIntensityMap.channel),transmissionMapUv:ae&&p(y.transmissionMap.channel),thicknessMapUv:Q&&p(y.thicknessMap.channel),alphaMapUv:dt&&p(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(zt||Z),vertexNormals:!!R.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(st||dt),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&zt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:K,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:H,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ee,flipSided:y.side===cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)E.push(S),E.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(m(E,y),x(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){s.disableAll(),E.instancing&&s.enable(0),E.instancingColor&&s.enable(1),E.instancingMorph&&s.enable(2),E.matcap&&s.enable(3),E.envMap&&s.enable(4),E.normalMapObjectSpace&&s.enable(5),E.normalMapTangentSpace&&s.enable(6),E.clearcoat&&s.enable(7),E.iridescence&&s.enable(8),E.alphaTest&&s.enable(9),E.vertexColors&&s.enable(10),E.vertexAlphas&&s.enable(11),E.vertexUv1s&&s.enable(12),E.vertexUv2s&&s.enable(13),E.vertexUv3s&&s.enable(14),E.vertexTangents&&s.enable(15),E.anisotropy&&s.enable(16),E.alphaHash&&s.enable(17),E.batching&&s.enable(18),E.dispersion&&s.enable(19),E.retroreflection&&s.enable(24),E.batchingColor&&s.enable(20),E.gradientMap&&s.enable(21),E.packedNormalMap&&s.enable(22),E.vertexNormals&&s.enable(23),y.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.reversedDepthBuffer&&s.enable(4),E.skinning&&s.enable(5),E.morphTargets&&s.enable(6),E.morphNormals&&s.enable(7),E.morphColors&&s.enable(8),E.premultipliedAlpha&&s.enable(9),E.shadowMapEnabled&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),E.decodeVideoTextureEmissive&&s.enable(20),E.alphaToCoverage&&s.enable(21),E.numLightProbeGrids>0&&s.enable(22),E.hasPositionAttribute&&s.enable(23),y.push(s.mask)}function _(y){let E=d[y.type],S;if(E){let w=ui[E];S=Tp.clone(w.uniforms)}else S=y.uniforms;return S}function v(y,E){let S=u.get(E);return S!==void 0?++S.usedTimes:(S=new H_(i,E,y,r),c.push(S),u.set(E,S)),S}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function C(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:C}}function $_(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function n(s){i.delete(s)}function r(s,a,l){i.get(s)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:o}}function q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yp(){let i=[],t=0,e=[],n=[],r=[];function o(){t=0,e.length=0,n.length=0,r.length=0}function s(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:f.id,object:f,geometry:d,material:p,materialVariant:s(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},i[t]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=p,x.materialVariant=s(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let _=a(f,d,p,b,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(f,d,p,b,g,m){let x=a(f,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function u(f,d){e.length>1&&e.sort(f||q_),n.length>1&&n.sort(d||Xp),r.length>1&&r.sort(d||Xp)}function h(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:o,push:l,unshift:c,finish:h,sort:u}}function K_(){let i=new WeakMap;function t(n,r){let o=i.get(n),s;return o===void 0?(s=new Yp,i.set(n,[s])):r>=o.length?(s=new Yp,o.push(s)):s=o[r],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new q};break;case"SpotLight":e={position:new $,direction:new $,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new q,groundColor:new q};break;case"RectAreaLight":e={color:new q,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j_=0;function Q_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tM(i){let t=new Z_,e=J_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let r=new $,o=new Ee,s=new Ee;function a(c){let u=0,h=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,_=0,v=0,M=0,T=0,C=0,y=0,E=0,S=0;c.sort(Q_);for(let F=0,D=c.length;F<D;F++){let A=c[F],R=A.color,P=A.intensity,L=A.distance,I=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ki?I=A.shadow.map.texture:I=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)u+=R.r*P,h+=R.g*P,f+=R.b*P;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],P);S++}else if(A.isSunLight){let O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,z=e.get(A);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=I;let G=B.getViewportCount();for(let H=0;H<G;H++)n.sunShadowMatrix[b+H]=B.getMatrix(H),n.sunShadowCascade[b+H]=B._cascadeData[H];b+=G,p++}n.sun[d]=O,d++}else if(A.isDirectionalLight){let O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let B=A.shadow,z=e.get(A);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[g]=z,n.directionalShadowMap[g]=I,n.directionalShadowMatrix[g]=A.shadow.matrix,M++}n.directional[g]=O,g++}else if(A.isSpotLight){let O=t.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(R).multiplyScalar(P),O.distance=L,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[x]=O;let B=A.shadow;if(A.map&&(n.spotLightMap[y]=A.map,y++,B.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=B.matrix,A.castShadow){let z=e.get(A);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=I,C++}x++}else if(A.isRectAreaLight){let O=t.get(A);O.color.copy(R).multiplyScalar(P),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[_]=O,_++}else if(A.isPointLight){let O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let B=A.shadow,z=e.get(A);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=I,n.pointShadowMatrix[m]=A.shadow.matrix,T++}n.point[m]=O,m++}else if(A.isHemisphereLight){let O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(P),O.groundColor.copy(A.groundColor).multiplyScalar(P),n.hemi[v]=O,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let w=n.hash;(w.sunLength!==d||w.directionalLength!==g||w.pointLength!==m||w.spotLength!==x||w.rectAreaLength!==_||w.hemiLength!==v||w.numSunShadows!==p||w.numDirectionalShadows!==M||w.numPointShadows!==T||w.numSpotShadows!==C||w.numSpotMaps!==y||w.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=_,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,w.sunLength=d,w.directionalLength=g,w.pointLength=m,w.spotLength=x,w.rectAreaLength=_,w.hemiLength=v,w.numSunShadows=p,w.numDirectionalShadows=M,w.numPointShadows=T,w.numSpotShadows=C,w.numSpotMaps=y,w.numLightProbes=S,n.version=j_++)}function l(c,u){let h=0,f=0,d=0,p=0,b=0,g=0,m=u.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){let v=c[x];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),h++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function $p(i){let t=new tM(i),e=[],n=[],r=[];function o(f){h.camera=f,e.length=0,n.length=0,r.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:a,pushLightProbeGrid:l}}function eM(i){let t=new WeakMap;function e(r,o=0){let s=t.get(r),a;return s===void 0?(a=new $p(i),t.set(r,[a])):o>=s.length?(a=new $p(i),s.push(a)):a=s[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rM=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],oM=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],qp=new Ee,Fs=new $,Th=new $;function sM(i,t,e){let n=new cs,r=new ie,o=new ie,s=new ze,a=new cl,l=new ul,c={},u=e.maxTextureSize,h={[li]:cn,[cn]:li,[ee]:ee},f=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ot;p.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new vt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let m=this.type;this.render=function(T,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===kd&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let E=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Fn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let D=m!==this.type;D&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(R=>R.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,R=T.length;A<R;A++){let P=T[A],L=P.shadow;if(L===void 0){jt("WebGLShadowMap:",P,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let I=L.getFrameExtents();r.multiply(I),o.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/I.x),r.x=o.x*I.x,L.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/I.y),r.y=o.y*I.y,L.mapSize.y=o.y));let O=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=O,L.map===null||D===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===bo){if(P.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new $e(r.x,r.y,{format:Ki,type:Yn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),L.map.texture.name=P.name+".shadowMap",L.map.depthTexture=new ai(r.x,r.y,Xn),L.map.depthTexture.name=P.name+".shadowMapDepth",L.map.depthTexture.format=ei,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=sn,L.map.depthTexture.magFilter=sn}else P.isPointLight?(L.map=new pc(r.x),L.map.depthTexture=new al(r.x,Wn)):(L.map=new $e(r.x,r.y),L.map.depthTexture=new ai(r.x,r.y,Wn)),L.map.depthTexture.name=P.name+".shadowMap",L.map.depthTexture.format=ei,this.type===_s?(L.map.depthTexture.compareFunction=O?uc:cc,L.map.depthTexture.minFilter=Ye,L.map.depthTexture.magFilter=Ye):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=sn,L.map.depthTexture.magFilter=sn);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let B=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();P.isPointLight!==!0&&L.updateMatrices(P,y);for(let z=0;z<B;z++){let G=L.getCamera(z);if(P.isPointLight){let H=L.camera,X=L.matrix,j=P.distance||H.far;j!==H.far&&(H.far=j,H.updateProjectionMatrix()),Fs.setFromMatrixPosition(P.matrixWorld),H.position.copy(Fs),Th.copy(H.position),Th.add(rM[z]),H.up.copy(oM[z]),H.lookAt(Th),H.updateMatrixWorld(),X.makeTranslation(-Fs.x,-Fs.y,-Fs.z),qp.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),L._frustum.setFromProjectionMatrix(qp,H.coordinateSystem,H.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());let H=L.getViewport(z);s.set(o.x*H.x,o.y*H.y,o.x*H.z,o.y*H.w),F.viewport(s)}n=L.getFrustum(z),v(C,y,G,P,this.type)}L.isPointLightShadow!==!0&&this.type===bo&&x(L,y),L.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,S,w)};function x(T,C){let y=t.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new $e(r.x,r.y,{format:Ki,type:Yn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,y,f,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,y,d,b,null)}function _(T,C,y,E){let S=null,w=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)S=w;else if(S=y.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=S.uuid,D=C.uuid,A=c[F];A===void 0&&(A={},c[F]=A);let R=A[D];R===void 0&&(R=S.clone(),A[D]=R,C.addEventListener("dispose",M)),S=R}if(S.visible=C.visible,S.wireframe=C.wireframe,E===bo?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,y.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let F=i.properties.get(S);F.light=y}return S}function v(T,C,y,E,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===bo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let D=t.update(T),A=T.material;if(Array.isArray(A)){let R=D.groups;for(let P=0,L=R.length;P<L;P++){let I=R[P],O=A[I.materialIndex];if(O&&O.visible){let B=_(T,O,E,S);T.onBeforeShadow(i,T,C,y,D,B,I),i.renderBufferDirect(y,null,D,B,T,I),T.onAfterShadow(i,T,C,y,D,B,I)}}}else if(A.visible){let R=_(T,A,E,S);T.onBeforeShadow(i,T,C,y,D,R,null),i.renderBufferDirect(y,null,D,R,T,null),T.onAfterShadow(i,T,C,y,D,R,null)}}let F=T.children;for(let D=0,A=F.length;D<A;D++)v(F[D],C,y,E,S)}function M(T){T.target.removeEventListener("dispose",M);for(let y in c){let E=c[y],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function aM(i,t){function e(){let Q=!1,St=new ze,dt=null,wt=new ze(0,0,0,0);return{setMask:function(It){dt!==It&&!Q&&(i.colorMask(It,It,It,It),dt=It)},setLocked:function(It){Q=It},setClear:function(It,bt,$t,Vt,Ce){Ce===!0&&(It*=Vt,bt*=Vt,$t*=Vt),St.set(It,bt,$t,Vt),wt.equals(St)===!1&&(i.clearColor(It,bt,$t,Vt),wt.copy(St))},reset:function(){Q=!1,dt=null,wt.set(-1,0,0,0)}}}function n(){let Q=!1,St=!1,dt=null,wt=null,It=null;return{setReversed:function(bt){if(St!==bt){let $t=t.get("EXT_clip_control");bt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),St=bt;let Vt=It;It=null,this.setClear(Vt)}},getReversed:function(){return St},setTest:function(bt){bt?V(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(bt){dt!==bt&&!Q&&(i.depthMask(bt),dt=bt)},setFunc:function(bt){if(St&&(bt=xp[bt]),wt!==bt){switch(bt){case Ha:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case oo:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=bt}},setLocked:function(bt){Q=bt},setClear:function(bt){It!==bt&&(It=bt,St&&(bt=1-bt),i.clearDepth(bt))},reset:function(){Q=!1,dt=null,wt=null,It=null,St=!1}}}function r(){let Q=!1,St=null,dt=null,wt=null,It=null,bt=null,$t=null,Vt=null,Ce=null;return{setTest:function(xe){Q||(xe?V(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(xe){St!==xe&&!Q&&(i.stencilMask(xe),St=xe)},setFunc:function(xe,Nn,Jn){(dt!==xe||wt!==Nn||It!==Jn)&&(i.stencilFunc(xe,Nn,Jn),dt=xe,wt=Nn,It=Jn)},setOp:function(xe,Nn,Jn){(bt!==xe||$t!==Nn||Vt!==Jn)&&(i.stencilOp(xe,Nn,Jn),bt=xe,$t=Nn,Vt=Jn)},setLocked:function(xe){Q=xe},setClear:function(xe){Ce!==xe&&(i.clearStencil(xe),Ce=xe)},reset:function(){Q=!1,St=null,dt=null,wt=null,It=null,bt=null,$t=null,Vt=null,Ce=null}}}let o=new e,s=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,T=null,C=null,y=new q(0,0,0),E=0,S=!1,w=null,F=null,D=null,A=null,R=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,I=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=I>=1):O.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=I>=2);let B=null,z={},G=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),X=new ze().fromArray(G),j=new ze().fromArray(H);function nt(Q,St,dt,wt){let It=new Uint8Array(4),bt=i.createTexture();i.bindTexture(Q,bt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<dt;$t++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return bt}let Y={};Y[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),V(i.DEPTH_TEST),s.setFunc(oo),Ft(!1),zt(Vu),V(i.CULL_FACE),gt(Fn);function V(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function K(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function et(Q,St){return f[Q]!==St?(i.bindFramebuffer(Q,St),f[Q]=St,Q===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),Q===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St),!0):!1}function tt(Q,St){let dt=p,wt=!1;if(Q){dt=d.get(St),dt===void 0&&(dt=[],d.set(St,dt));let It=Q.textures;if(dt.length!==It.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,$t=It.length;bt<$t;bt++)dt[bt]=i.COLOR_ATTACHMENT0+bt;dt.length=It.length,wt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(dt)}function st(Q){return b!==Q?(i.useProgram(Q),b=Q,!0):!1}let ct={[xr]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};ct[Gd]=i.MIN,ct[Hd]=i.MAX;let ut={[Wd]:i.ZERO,[Xd]:i.ONE,[Yd]:i.SRC_COLOR,[Hu]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Zd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[$d]:i.ONE_MINUS_SRC_COLOR,[Wu]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[ep]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(Q,St,dt,wt,It,bt,$t,Vt,Ce,xe){if(Q===Fn){g===!0&&(K(i.BLEND),g=!1);return}if(g===!1&&(V(i.BLEND),g=!0),Q!==Bd){if(Q!==m||xe!==S){if((x!==xr||M!==xr)&&(i.blendEquation(i.FUNC_ADD),x=xr,M=xr),xe)switch(Q){case En:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _e:i.blendFunc(i.ONE,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case En:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _e:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gu:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ms:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",Q);break}_=null,v=null,T=null,C=null,y.set(0,0,0),E=0,m=Q,S=xe}return}It=It||St,bt=bt||dt,$t=$t||wt,(St!==x||It!==M)&&(i.blendEquationSeparate(ct[St],ct[It]),x=St,M=It),(dt!==_||wt!==v||bt!==T||$t!==C)&&(i.blendFuncSeparate(ut[dt],ut[wt],ut[bt],ut[$t]),_=dt,v=wt,T=bt,C=$t),(Vt.equals(y)===!1||Ce!==E)&&(i.blendColor(Vt.r,Vt.g,Vt.b,Ce),y.copy(Vt),E=Ce),m=Q,S=!1}function Nt(Q,St){Q.side===ee?K(i.CULL_FACE):V(i.CULL_FACE);let dt=Q.side===cn;St&&(dt=!dt),Ft(dt),Q.blending===En&&Q.transparent===!1?gt(Fn):gt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),s.setFunc(Q.depthFunc),s.setTest(Q.depthTest),s.setMask(Q.depthWrite),o.setMask(Q.colorWrite);let wt=Q.stencilWrite;a.setTest(wt),wt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),te(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(Q){w!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),w=Q)}function zt(Q){Q!==Nd?(V(i.CULL_FACE),Q!==F&&(Q===Vu?i.cullFace(i.BACK):Q===Ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),F=Q}function Ut(Q){Q!==D&&(L&&i.lineWidth(Q),D=Q)}function te(Q,St,dt){Q?(V(i.POLYGON_OFFSET_FILL),(A!==St||R!==dt)&&(A=St,R=dt,s.getReversed()&&(St=-St),i.polygonOffset(St,dt))):K(i.POLYGON_OFFSET_FILL)}function he(Q){Q?V(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Ae(Q){Q===void 0&&(Q=i.TEXTURE0+P-1),B!==Q&&(i.activeTexture(Q),B=Q)}function Z(Q,St,dt){dt===void 0&&(B===null?dt=i.TEXTURE0+P-1:dt=B);let wt=z[dt];wt===void 0&&(wt={type:void 0,texture:void 0},z[dt]=wt),(wt.type!==Q||wt.texture!==St)&&(B!==dt&&(i.activeTexture(dt),B=dt),i.bindTexture(Q,St||Y[Q]),wt.type=Q,wt.texture=St)}function Ie(){let Q=z[B];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function U(){try{i.texSubImage2D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function it(){try{i.texSubImage3D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function xt(){try{i.texStorage2D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function yt(){try{i.texStorage3D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function ft(){try{i.texImage2D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function pt(){try{i.texImage3D(...arguments)}catch(Q){Qt("WebGLState:",Q)}}function _t(Q){return h[Q]!==void 0?h[Q]:i.getParameter(Q)}function Xt(Q,St){h[Q]!==St&&(i.pixelStorei(Q,St),h[Q]=St)}function Tt(Q){X.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),X.copy(Q))}function Mt(Q){j.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),j.copy(Q))}function Yt(Q,St){let dt=c.get(St);dt===void 0&&(dt=new WeakMap,c.set(St,dt));let wt=dt.get(Q);wt===void 0&&(wt=i.getUniformBlockIndex(St,Q.name),dt.set(Q,wt))}function Jt(Q,St){let wt=c.get(St).get(Q);l.get(St)!==wt&&(i.uniformBlockBinding(St,wt,Q.__bindingPointIndex),l.set(St,wt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,z={},f={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,_=null,v=null,M=null,T=null,C=null,y=new q(0,0,0),E=0,S=!1,w=null,F=null,D=null,A=null,R=null,X.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:V,disable:K,bindFramebuffer:et,drawBuffers:tt,useProgram:st,setBlending:gt,setMaterial:Nt,setFlipSided:Ft,setCullFace:zt,setLineWidth:Ut,setPolygonOffset:te,setScissorTest:he,activeTexture:Ae,bindTexture:Z,unbindTexture:Ie,compressedTexImage2D:be,compressedTexImage3D:W,texImage2D:ft,texImage3D:pt,pixelStorei:Xt,getParameter:_t,updateUBOMapping:Yt,uniformBlockBinding:Jt,texStorage2D:xt,texStorage3D:yt,texSubImage2D:U,texSubImage3D:it,compressedTexSubImage2D:at,compressedTexSubImage3D:ht,scissor:Tt,viewport:Mt,reset:ae}}function lM(i,t,e,n,r,o,s){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(W,U){return p?new OffscreenCanvas(W,U):so("canvas")}function g(W,U,it){let at=1,ht=be(W);if((ht.width>it||ht.height>it)&&(at=it/Math.max(ht.width,ht.height)),at<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){let xt=Math.floor(at*ht.width),yt=Math.floor(at*ht.height);f===void 0&&(f=b(xt,yt));let ft=U?b(xt,yt):f;return ft.width=xt,ft.height=yt,ft.getContext("2d").drawImage(W,0,0,xt,yt),jt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+xt+"x"+yt+")."),ft}else return"data"in W&&jt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),W;return W}function m(W){return W.generateMipmaps}function x(W){i.generateMipmap(W)}function _(W){return W.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?i.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(W,U,it,at,ht,xt=!1){if(W!==null){if(i[W]!==void 0)return i[W];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let yt;at&&(yt=t.get("EXT_texture_norm16"),yt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=U;if(U===i.RED&&(it===i.FLOAT&&(ft=i.R32F),it===i.HALF_FLOAT&&(ft=i.R16F),it===i.UNSIGNED_BYTE&&(ft=i.R8),it===i.UNSIGNED_SHORT&&yt&&(ft=yt.R16_EXT),it===i.SHORT&&yt&&(ft=yt.R16_SNORM_EXT)),U===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(ft=i.R8UI),it===i.UNSIGNED_SHORT&&(ft=i.R16UI),it===i.UNSIGNED_INT&&(ft=i.R32UI),it===i.BYTE&&(ft=i.R8I),it===i.SHORT&&(ft=i.R16I),it===i.INT&&(ft=i.R32I)),U===i.RG&&(it===i.FLOAT&&(ft=i.RG32F),it===i.HALF_FLOAT&&(ft=i.RG16F),it===i.UNSIGNED_BYTE&&(ft=i.RG8),it===i.UNSIGNED_SHORT&&yt&&(ft=yt.RG16_EXT),it===i.SHORT&&yt&&(ft=yt.RG16_SNORM_EXT)),U===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(ft=i.RG8UI),it===i.UNSIGNED_SHORT&&(ft=i.RG16UI),it===i.UNSIGNED_INT&&(ft=i.RG32UI),it===i.BYTE&&(ft=i.RG8I),it===i.SHORT&&(ft=i.RG16I),it===i.INT&&(ft=i.RG32I)),U===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),it===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),it===i.UNSIGNED_INT&&(ft=i.RGB32UI),it===i.BYTE&&(ft=i.RGB8I),it===i.SHORT&&(ft=i.RGB16I),it===i.INT&&(ft=i.RGB32I)),U===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),it===i.UNSIGNED_INT&&(ft=i.RGBA32UI),it===i.BYTE&&(ft=i.RGBA8I),it===i.SHORT&&(ft=i.RGBA16I),it===i.INT&&(ft=i.RGBA32I)),U===i.RGB&&(it===i.UNSIGNED_SHORT&&yt&&(ft=yt.RGB16_EXT),it===i.SHORT&&yt&&(ft=yt.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),U===i.RGBA){let pt=xt?ns:fe.getTransfer(ht);it===i.FLOAT&&(ft=i.RGBA32F),it===i.HALF_FLOAT&&(ft=i.RGBA16F),it===i.UNSIGNED_BYTE&&(ft=pt===ye?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&yt&&(ft=yt.RGBA16_EXT),it===i.SHORT&&yt&&(ft=yt.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function M(W,U){let it;return W?U===null||U===Wn||U===vo?it=i.DEPTH24_STENCIL8:U===Xn?it=i.DEPTH32F_STENCIL8:U===xo&&(it=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===Wn||U===vo?it=i.DEPTH_COMPONENT24:U===Xn?it=i.DEPTH_COMPONENT32F:U===xo&&(it=i.DEPTH_COMPONENT16),it}function T(W,U){return m(W)===!0||W.isFramebufferTexture&&W.minFilter!==sn&&W.minFilter!==Ye?Math.log2(Math.max(U.width,U.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?U.mipmaps.length:1}function C(W){let U=W.target;U.removeEventListener("dispose",C),E(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&h.delete(U)}function y(W){let U=W.target;U.removeEventListener("dispose",y),w(U)}function E(W){let U=n.get(W);if(U.__webglInit===void 0)return;let it=W.source,at=d.get(it);if(at){let ht=at[U.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(W),Object.keys(at).length===0&&d.delete(it)}n.remove(W)}function S(W){let U=n.get(W);i.deleteTexture(U.__webglTexture);let it=W.source,at=d.get(it);delete at[U.__cacheKey],s.memory.textures--}function w(W){let U=n.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),n.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(U.__webglFramebuffer[at]))for(let ht=0;ht<U.__webglFramebuffer[at].length;ht++)i.deleteFramebuffer(U.__webglFramebuffer[at][ht]);else i.deleteFramebuffer(U.__webglFramebuffer[at]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[at])}else{if(Array.isArray(U.__webglFramebuffer))for(let at=0;at<U.__webglFramebuffer.length;at++)i.deleteFramebuffer(U.__webglFramebuffer[at]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let at=0;at<U.__webglColorRenderbuffer.length;at++)U.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[at]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let it=W.textures;for(let at=0,ht=it.length;at<ht;at++){let xt=n.get(it[at]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(it[at])}n.remove(W)}let F=0;function D(){F=0}function A(){return F}function R(W){F=W}function P(){let W=F;return W>=r.maxTextures&&jt("WebGLTextures: Trying to use "+(W+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,W}function L(W){let U=[];return U.push(W.wrapS),U.push(W.wrapT),U.push(W.wrapR||0),U.push(W.magFilter),U.push(W.minFilter),U.push(W.anisotropy),U.push(W.internalFormat),U.push(W.format),U.push(W.type),U.push(W.generateMipmaps),U.push(W.premultiplyAlpha),U.push(W.flipY),U.push(W.unpackAlignment),U.push(W.colorSpace),U.join()}function I(W,U){let it=n.get(W);if(W.isVideoTexture&&Z(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&it.__version!==W.version){let at=W.image;if(at===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(it,W,U);return}}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+U)}function O(W,U){let it=n.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){K(it,W,U);return}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+U)}function B(W,U){let it=n.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){K(it,W,U);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+U)}function z(W,U){let it=n.get(W);if(W.isCubeDepthTexture!==!0&&W.version>0&&it.__version!==W.version){et(it,W,U);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+U)}let G={[dr]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},H={[sn]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[El]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},X={[cp]:i.NEVER,[pp]:i.ALWAYS,[up]:i.LESS,[cc]:i.LEQUAL,[hp]:i.EQUAL,[uc]:i.GEQUAL,[fp]:i.GREATER,[dp]:i.NOTEQUAL};function j(W,U){if(U.type===Xn&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===Ye||U.magFilter===El||U.magFilter===ws||U.magFilter===$i||U.minFilter===Ye||U.minFilter===El||U.minFilter===ws||U.minFilter===$i)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(W,i.TEXTURE_WRAP_S,G[U.wrapS]),i.texParameteri(W,i.TEXTURE_WRAP_T,G[U.wrapT]),(W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY)&&i.texParameteri(W,i.TEXTURE_WRAP_R,G[U.wrapR]),i.texParameteri(W,i.TEXTURE_MAG_FILTER,H[U.magFilter]),i.texParameteri(W,i.TEXTURE_MIN_FILTER,H[U.minFilter]),U.compareFunction&&(i.texParameteri(W,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(W,i.TEXTURE_COMPARE_FUNC,X[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===sn||U.minFilter!==ws&&U.minFilter!==$i||U.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||n.get(U).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(W,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,r.getMaxAnisotropy())),n.get(U).__currentAnisotropy=U.anisotropy}}}function nt(W,U){let it=!1;W.__webglInit===void 0&&(W.__webglInit=!0,U.addEventListener("dispose",C));let at=U.source,ht=d.get(at);ht===void 0&&(ht={},d.set(at,ht));let xt=L(U);if(xt!==W.__cacheKey){ht[xt]===void 0&&(ht[xt]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,it=!0),ht[xt].usedTimes++;let yt=ht[W.__cacheKey];yt!==void 0&&(ht[W.__cacheKey].usedTimes--,yt.usedTimes===0&&S(U)),W.__cacheKey=xt,W.__webglTexture=ht[xt].texture}return it}function Y(W,U,it){return Math.floor(Math.floor(W/it)/U)}function V(W,U,it,at){let xt=W.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,U.width,U.height,it,at,U.data);else{xt.sort((Xt,Tt)=>Xt.start-Tt.start);let yt=0;for(let Xt=1;Xt<xt.length;Xt++){let Tt=xt[yt],Mt=xt[Xt],Yt=Tt.start+Tt.count,Jt=Y(Mt.start,U.width,4),ae=Y(Tt.start,U.width,4);Mt.start<=Yt+1&&Jt===ae&&Y(Mt.start+Mt.count-1,U.width,4)===Jt?Tt.count=Math.max(Tt.count,Mt.start+Mt.count-Tt.start):(++yt,xt[yt]=Mt)}xt.length=yt+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),pt=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,U.width);for(let Xt=0,Tt=xt.length;Xt<Tt;Xt++){let Mt=xt[Xt],Yt=Math.floor(Mt.start/4),Jt=Math.ceil(Mt.count/4),ae=Yt%U.width,Q=Math.floor(Yt/U.width),St=Jt,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,ae,Q,St,dt,it,at,U.data)}W.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function K(W,U,it){let at=i.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),U.isData3DTexture&&(at=i.TEXTURE_3D);let ht=nt(W,U),xt=U.source;e.bindTexture(at,W.__webglTexture,i.TEXTURE0+it);let yt=n.get(xt);if(xt.version!==yt.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&U.image instanceof ImageBitmap)===!1){let dt=fe.getPrimaries(fe.workingColorSpace),wt=U.colorSpace===Ti?null:fe.getPrimaries(U.colorSpace),It=U.colorSpace===Ti||dt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment);let pt=g(U.image,!1,r.maxTextureSize);pt=Ie(U,pt);let _t=o.convert(U.format,U.colorSpace),Xt=o.convert(U.type),Tt=v(U.internalFormat,_t,Xt,U.normalized,U.colorSpace,U.isVideoTexture);j(at,U);let Mt,Yt=U.mipmaps,Jt=U.isVideoTexture!==!0,ae=yt.__version===void 0||ht===!0,Q=xt.dataReady,St=T(U,pt);if(U.isDepthTexture)Tt=M(U.format===qi,U.type),ae&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Tt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,_t,Xt,null));else if(U.isDataTexture)if(Yt.length>0){Jt&&ae&&e.texStorage2D(i.TEXTURE_2D,St,Tt,Yt[0].width,Yt[0].height);for(let dt=0,wt=Yt.length;dt<wt;dt++)Mt=Yt[dt],Jt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,_t,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,Tt,Mt.width,Mt.height,0,_t,Xt,Mt.data);U.generateMipmaps=!1}else Jt?(ae&&e.texStorage2D(i.TEXTURE_2D,St,Tt,pt.width,pt.height),Q&&V(U,pt,_t,Xt)):e.texImage2D(i.TEXTURE_2D,0,Tt,pt.width,pt.height,0,_t,Xt,pt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){Jt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,Yt[0].width,Yt[0].height,pt.depth);for(let dt=0,wt=Yt.length;dt<wt;dt++)if(Mt=Yt[dt],U.format!==Ln)if(_t!==null)if(Jt){if(Q)if(U.layerUpdates.size>0){let It=ph(Mt.width,Mt.height,U.format,U.type);for(let bt of U.layerUpdates){let $t=Mt.data.subarray(bt*It/Mt.data.BYTES_PER_ELEMENT,(bt+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,bt,Mt.width,Mt.height,1,_t,$t)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,pt.depth,_t,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Tt,Mt.width,Mt.height,pt.depth,0,Mt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,pt.depth,_t,Xt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Tt,Mt.width,Mt.height,pt.depth,0,_t,Xt,Mt.data);U.layerUpdates.size>0&&U.clearLayerUpdates()}else{Jt&&ae&&e.texStorage2D(i.TEXTURE_2D,St,Tt,Yt[0].width,Yt[0].height);for(let dt=0,wt=Yt.length;dt<wt;dt++)Mt=Yt[dt],U.format!==Ln?_t!==null?Jt?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Tt,Mt.width,Mt.height,0,Mt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,_t,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,dt,Tt,Mt.width,Mt.height,0,_t,Xt,Mt.data)}else if(U.isDataArrayTexture)if(Jt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,pt.width,pt.height,pt.depth),Q)if(U.layerUpdates.size>0){let dt=ph(pt.width,pt.height,U.format,U.type);for(let wt of U.layerUpdates){let It=pt.data.subarray(wt*dt/pt.data.BYTES_PER_ELEMENT,(wt+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,pt.width,pt.height,1,_t,Xt,It)}U.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,_t,Xt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,pt.width,pt.height,pt.depth,0,_t,Xt,pt.data);else if(U.isData3DTexture)Jt?(ae&&e.texStorage3D(i.TEXTURE_3D,St,Tt,pt.width,pt.height,pt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,_t,Xt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,pt.width,pt.height,pt.depth,0,_t,Xt,pt.data);else if(U.isFramebufferTexture){if(ae)if(Jt)e.texStorage2D(i.TEXTURE_2D,St,Tt,pt.width,pt.height);else{let dt=pt.width,wt=pt.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,Tt,dt,wt,0,_t,Xt,null),dt>>=1,wt>>=1}}else if(U.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),pt.parentNode!==dt){dt.appendChild(pt),h.add(U),dt.onpaint=wt=>{let It=wt.changedElements;for(let bt of h)It.includes(bt.image)&&(bt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,pt);else{let It=i.RGBA,bt=i.RGBA,$t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,It,bt,$t,pt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Jt&&ae){let dt=be(Yt[0]);e.texStorage2D(i.TEXTURE_2D,St,Tt,dt.width,dt.height)}for(let dt=0,wt=Yt.length;dt<wt;dt++)Mt=Yt[dt],Jt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,_t,Xt,Mt):e.texImage2D(i.TEXTURE_2D,dt,Tt,_t,Xt,Mt);U.generateMipmaps=!1}else if(Jt){if(ae){let dt=be(pt);e.texStorage2D(i.TEXTURE_2D,St,Tt,dt.width,dt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Xt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Tt,_t,Xt,pt);m(U)&&x(at),yt.__version=xt.version,U.onUpdate&&U.onUpdate(U)}W.__version=U.version}function et(W,U,it){if(U.image.length!==6)return;let at=nt(W,U),ht=U.source;e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+it);let xt=n.get(ht);if(ht.version!==xt.__version||at===!0){e.activeTexture(i.TEXTURE0+it);let yt=fe.getPrimaries(fe.workingColorSpace),ft=U.colorSpace===Ti?null:fe.getPrimaries(U.colorSpace),pt=U.colorSpace===Ti||yt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let _t=U.isCompressedTexture||U.image[0].isCompressedTexture,Xt=U.image[0]&&U.image[0].isDataTexture,Tt=[];for(let bt=0;bt<6;bt++)!_t&&!Xt?Tt[bt]=g(U.image[bt],!0,r.maxCubemapSize):Tt[bt]=Xt?U.image[bt].image:U.image[bt],Tt[bt]=Ie(U,Tt[bt]);let Mt=Tt[0],Yt=o.convert(U.format,U.colorSpace),Jt=o.convert(U.type),ae=v(U.internalFormat,Yt,Jt,U.normalized,U.colorSpace),Q=U.isVideoTexture!==!0,St=xt.__version===void 0||at===!0,dt=ht.dataReady,wt=T(U,Mt);j(i.TEXTURE_CUBE_MAP,U);let It;if(_t){Q&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ae,Mt.width,Mt.height);for(let bt=0;bt<6;bt++){It=Tt[bt].mipmaps;for(let $t=0;$t<It.length;$t++){let Vt=It[$t];U.format!==Ln?Yt!==null?Q?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Vt.width,Vt.height,Yt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,ae,Vt.width,Vt.height,0,Vt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,0,0,Vt.width,Vt.height,Yt,Jt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t,ae,Vt.width,Vt.height,0,Yt,Jt,Vt.data)}}}else{if(It=U.mipmaps,Q&&St){It.length>0&&wt++;let bt=be(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ae,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Xt){Q?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Tt[bt].width,Tt[bt].height,Yt,Jt,Tt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Tt[bt].width,Tt[bt].height,0,Yt,Jt,Tt[bt].data);for(let $t=0;$t<It.length;$t++){let Ce=It[$t].image[bt].image;Q?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,Ce.width,Ce.height,Yt,Jt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,ae,Ce.width,Ce.height,0,Yt,Jt,Ce.data)}}else{Q?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Yt,Jt,Tt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,ae,Yt,Jt,Tt[bt]);for(let $t=0;$t<It.length;$t++){let Vt=It[$t];Q?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,0,0,Yt,Jt,Vt.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,$t+1,ae,Yt,Jt,Vt.image[bt])}}}m(U)&&x(i.TEXTURE_CUBE_MAP),xt.__version=ht.version,U.onUpdate&&U.onUpdate(U)}W.__version=U.version}function tt(W,U,it,at,ht,xt){let yt=o.convert(it.format,it.colorSpace),ft=o.convert(it.type),pt=v(it.internalFormat,yt,ft,it.normalized,it.colorSpace),_t=n.get(U),Xt=n.get(it);if(Xt.__renderTarget=U,!_t.__hasExternalTextures){let Tt=Math.max(1,U.width>>xt),Mt=Math.max(1,U.height>>xt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,xt,pt,Tt,Mt,U.depth,0,yt,ft,null):e.texImage2D(ht,xt,pt,Tt,Mt,0,yt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,W),Ae(U)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,ht,Xt.__webglTexture,0,he(U)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,ht,Xt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(W,U,it){if(i.bindRenderbuffer(i.RENDERBUFFER,W),U.depthBuffer){let at=U.depthTexture,ht=at&&at.isDepthTexture?at.type:null,xt=M(U.stencilBuffer,ht),yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(U)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(U),xt,U.width,U.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(U),xt,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,xt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,W)}else{let at=U.textures;for(let ht=0;ht<at.length;ht++){let xt=at[ht],yt=o.convert(xt.format,xt.colorSpace),ft=o.convert(xt.type),pt=v(xt.internalFormat,yt,ft,xt.normalized,xt.colorSpace);Ae(U)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(U),pt,U.width,U.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(U),pt,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,pt,U.width,U.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(W,U,it){let at=U.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,W),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(U.depthTexture);if(ht.__renderTarget=U,(!ht.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),at){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,U.depthTexture.addEventListener("dispose",C)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),j(i.TEXTURE_CUBE_MAP,U.depthTexture);let _t=o.convert(U.depthTexture.format),Xt=o.convert(U.depthTexture.type),Tt;U.depthTexture.format===ei?Tt=i.DEPTH_COMPONENT24:U.depthTexture.format===qi&&(Tt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Tt,U.width,U.height,0,_t,Xt,null)}}else I(U.depthTexture,0);let xt=ht.__webglTexture,yt=he(U),ft=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,pt=U.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(U.depthTexture.format===ei)Ae(U)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ft,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ft,xt,0);else if(U.depthTexture.format===qi)Ae(U)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pt,ft,xt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,pt,ft,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(W){let U=n.get(W),it=W.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==W.depthTexture){let at=W.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),at){let ht=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,at.removeEventListener("dispose",ht)};at.addEventListener("dispose",ht),U.__depthDisposeCallback=ht}U.__boundDepthTexture=at}if(W.depthTexture&&!U.__autoAllocateDepthBuffer)if(it)for(let at=0;at<6;at++)ct(U.__webglFramebuffer[at],W,at);else{let at=W.texture.mipmaps;at&&at.length>0?ct(U.__webglFramebuffer[0],W,0):ct(U.__webglFramebuffer,W,0)}else if(it){U.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer[at]),U.__webglDepthbuffer[at]===void 0)U.__webglDepthbuffer[at]=i.createRenderbuffer(),st(U.__webglDepthbuffer[at],W,!1);else{let ht=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=U.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,xt)}}else{let at=W.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=i.createRenderbuffer(),st(U.__webglDepthbuffer,W,!1);else{let ht=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=U.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(W,U,it){let at=n.get(W);U!==void 0&&tt(at.__webglFramebuffer,W,W.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&ut(W)}function Nt(W){let U=W.texture,it=n.get(W),at=n.get(U);W.addEventListener("dispose",y);let ht=W.textures,xt=W.isWebGLCubeRenderTarget===!0,yt=ht.length>1;if(yt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=U.version,s.memory.textures++),xt){it.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(U.mipmaps&&U.mipmaps.length>0){it.__webglFramebuffer[ft]=[];for(let pt=0;pt<U.mipmaps.length;pt++)it.__webglFramebuffer[ft][pt]=i.createFramebuffer()}else it.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){it.__webglFramebuffer=[];for(let ft=0;ft<U.mipmaps.length;ft++)it.__webglFramebuffer[ft]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ft=0,pt=ht.length;ft<pt;ft++){let _t=n.get(ht[ft]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),s.memory.textures++)}if(W.samples>0&&Ae(W)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let ft=0;ft<ht.length;ft++){let pt=ht[ft];it.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[ft]);let _t=o.convert(pt.format,pt.colorSpace),Xt=o.convert(pt.type),Tt=v(pt.internalFormat,_t,Xt,pt.normalized,pt.colorSpace,W.isXRRenderTarget===!0),Mt=he(W);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Tt,W.width,W.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,it.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),W.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),st(it.__webglDepthRenderbuffer,W,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),j(i.TEXTURE_CUBE_MAP,U);for(let ft=0;ft<6;ft++)if(U.mipmaps&&U.mipmaps.length>0)for(let pt=0;pt<U.mipmaps.length;pt++)tt(it.__webglFramebuffer[ft][pt],W,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,pt);else tt(it.__webglFramebuffer[ft],W,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(U)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ft=0,pt=ht.length;ft<pt;ft++){let _t=ht[ft],Xt=n.get(_t),Tt=i.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(Tt=W.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Xt.__webglTexture),j(Tt,_t),tt(it.__webglFramebuffer,W,_t,i.COLOR_ATTACHMENT0+ft,Tt,0),m(_t)&&x(Tt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(ft=W.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,at.__webglTexture),j(ft,U),U.mipmaps&&U.mipmaps.length>0)for(let pt=0;pt<U.mipmaps.length;pt++)tt(it.__webglFramebuffer[pt],W,U,i.COLOR_ATTACHMENT0,ft,pt);else tt(it.__webglFramebuffer,W,U,i.COLOR_ATTACHMENT0,ft,0);m(U)&&x(ft),e.unbindTexture()}W.depthBuffer&&ut(W)}function Ft(W){let U=W.textures;for(let it=0,at=U.length;it<at;it++){let ht=U[it];if(m(ht)){let xt=_(W),yt=n.get(ht).__webglTexture;e.bindTexture(xt,yt),x(xt),e.unbindTexture()}}}let zt=[],Ut=[];function te(W){if(W.samples>0){if(Ae(W)===!1){let U=W.textures,it=W.width,at=W.height,ht=i.COLOR_BUFFER_BIT,xt=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(W),ft=U.length>1;if(ft)for(let _t=0;_t<U.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let pt=W.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let _t=0;_t<U.length;_t++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);let Xt=n.get(U[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,it,at,0,0,it,at,ht,i.NEAREST),l===!0&&(zt.length=0,Ut.length=0,zt.push(i.COLOR_ATTACHMENT0+_t),W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&(zt.push(xt),Ut.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<U.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,yt.__webglColorRenderbuffer[_t]);let Xt=n.get(U[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.storeMultisampledDepthBuffer===!1&&l){let U=W.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[U])}}}function he(W){return Math.min(r.maxSamples,W.samples)}function Ae(W){let U=n.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function Z(W){let U=s.render.frame;u.get(W)!==U&&(u.set(W,U),W.update())}function Ie(W,U){let it=W.colorSpace,at=W.format,ht=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||it!==es&&it!==Ti&&(fe.getTransfer(it)===ye?(at!==Ln||ht!==An)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",it)),U}function be(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(c.width=W.naturalWidth||W.width,c.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(c.width=W.displayWidth,c.height=W.displayHeight):(c.width=W.width,c.height=W.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=D,this.getTextureUnits=A,this.setTextureUnits=R,this.setTexture2D=I,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=gt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cM(i,t){function e(n,r=Ti){let o,s=fe.getTransfer(r);if(n===An)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return i.BYTE;if(n===eh)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===oh)return i.RGB;if(n===Ln)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===sh)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Ts||n===Es||n===As||n===Rs)if(s===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ts)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ts)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Ol||n===Nl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===kl||n===Bl||n===zl||n===Vl||n===Cs||n===Gl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ul||n===kl)return s===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Bl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===zl)return o.COMPRESSED_R11_EAC;if(n===Vl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Cs)return o.COMPRESSED_RG11_EAC;if(n===Gl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hl||n===Wl||n===Xl||n===Yl||n===$l||n===ql||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Hl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return s===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===rc||n===oc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ic)return s===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===ac||n===Ps||n===lc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===sc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ps)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var uM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:uM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vt(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends ni{constructor(t,e){super();let n=this,r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Lh,m={},x=e.getContextAttributes(),_=null,v=null,M=[],T=[],C=new ie,y=null,E=null,S=new on;S.viewport=new ze;let w=new on;w.viewport=new ze;let F=[S,w],D=new Ml,A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let V=M[Y];return V===void 0&&(V=new uo,M[Y]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Y){let V=M[Y];return V===void 0&&(V=new uo,M[Y]=V),V.getGripSpace()},this.getHand=function(Y){let V=M[Y];return V===void 0&&(V=new uo,M[Y]=V),V.getHandSpace()};function P(Y){let V=T.indexOf(Y.inputSource);if(V===-1)return;let K=M[V];K!==void 0&&(K.update(Y.inputSource,Y.frame,c||s),K.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",I);for(let Y=0;Y<M.length;Y++){let V=T[Y];V!==null&&(T[Y]=null,M[Y].disconnect(V))}A=null,R=null,g.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(_),d=null,f=null,h=null,r=null,v=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",L),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,et=null,tt=null;x.depth&&(tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=x.stencil?qi:ei,et=x.stencil?vo:Wn);let st={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:o};h=this.getBinding(),f=h.createProjectionLayer(st),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new $e(f.textureWidth,f.textureHeight,{format:Ln,type:An,depthTexture:new ai(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let K={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $e(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),nt.setContext(r),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(Y){for(let V=0;V<Y.removed.length;V++){let K=Y.removed[V],et=T.indexOf(K);et>=0&&(T[et]=null,M[et].disconnect(K))}for(let V=0;V<Y.added.length;V++){let K=Y.added[V],et=T.indexOf(K);if(et===-1){for(let st=0;st<M.length;st++)if(st>=T.length){T.push(K),et=st;break}else if(T[st]===null){T[st]=K,et=st;break}if(et===-1)break}let tt=M[et];tt&&tt.connect(K)}}let O=new $,B=new $;function z(Y,V,K){O.setFromMatrixPosition(V.matrixWorld),B.setFromMatrixPosition(K.matrixWorld);let et=O.distanceTo(B),tt=V.projectionMatrix.elements,st=K.projectionMatrix.elements,ct=tt[14]/(tt[10]-1),ut=tt[14]/(tt[10]+1),gt=(tt[9]+1)/tt[5],Nt=(tt[9]-1)/tt[5],Ft=(tt[8]-1)/tt[0],zt=(st[8]+1)/st[0],Ut=ct*Ft,te=ct*zt,he=et/(-Ft+zt),Ae=he*-Ft;if(V.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(he),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),tt[10]===-1)Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let Z=ct+he,Ie=ut+he,be=Ut-Ae,W=te+(et-Ae),U=gt*ut/Ie*Z,it=Nt*ut/Ie*Z;Y.projectionMatrix.makePerspective(be,W,U,it,Z,Ie),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function G(Y,V){V===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(V.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let V=Y.near,K=Y.far;g.texture!==null&&(g.depthNear>0&&(V=g.depthNear),g.depthFar>0&&(K=g.depthFar)),D.near=w.near=S.near=V,D.far=w.far=S.far=K,(A!==D.near||R!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),A=D.near,R=D.far),D.layers.mask=Y.layers.mask|6,S.layers.mask=D.layers.mask&-5,w.layers.mask=D.layers.mask&-3;let et=Y.parent,tt=D.cameras;G(D,et);for(let st=0;st<tt.length;st++)G(tt[st],et);tt.length===2?z(D,S,w):D.projectionMatrix.copy(S.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),H(Y,D,et)};function H(Y,V,K){K===null?Y.matrix.copy(V.matrixWorld):(Y.matrix.copy(K.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(V.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(V.projectionMatrix),Y.projectionMatrixInverse.copy(V.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ja*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return m[Y]};let X=null;function j(Y,V){if(u=V.getViewerPose(c||s),p=V,u!==null){let K=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;K.length!==D.cameras.length&&(D.cameras.length=0,et=!0);for(let ut=0;ut<K.length;ut++){let gt=K[ut],Nt=null;if(d!==null)Nt=d.getViewport(gt);else{let zt=h.getViewSubImage(f,gt);Nt=zt.viewport,ut===0&&(t.setRenderTargetTextures(v,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(v))}let Ft=F[ut];Ft===void 0&&(Ft=new on,Ft.layers.enable(ut),Ft.viewport=new ze,F[ut]=Ft),Ft.matrix.fromArray(gt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(gt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ut===0&&(D.matrix.copy(Ft.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),et===!0&&D.cameras.push(Ft)}let tt=r.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let ut=h.getDepthInformation(K[0]);ut&&ut.isValid&&ut.texture&&g.init(ut,r.renderState)}if(tt&&tt.includes("camera-access")&&b){t.state.unbindTexture(),h=n.getBinding();for(let ut=0;ut<K.length;ut++){let gt=K[ut].camera;if(gt){let Nt=m[gt];Nt||(Nt=new hs,m[gt]=Nt);let Ft=h.getCameraImage(gt);Nt.sourceTexture=Ft}}}}for(let K=0;K<M.length;K++){let et=T[K],tt=M[K];et!==null&&tt!==void 0&&tt.update(et,V,c||s)}X&&X(Y,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),p=null}let nt=new Kp;nt.setAnimationLoop(j),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}},fM=new Ee,e0=new oe;e0.set(-1,0,0,0,1,0,0,0,1);function dM(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,hh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,_,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),b(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),_=x.envMap,v=x.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(e0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pM(i,t,e,n){let r={},o={},s=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=r[v.id];T===void 0&&(g(v),T=u(v),r[v.id]=T,v.addEventListener("dispose",x));let C=M.program;n.updateUBOMapping(v,C);let y=t.render.frame;o[v.id]!==y&&(f(v),o[v.id]=y)}function u(v){let M=h();v.__bindingPointIndex=M;let T=i.createBuffer(),C=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=r[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,E=T.length;y<E;y++){let S=T[y];if(Array.isArray(S))for(let w=0,F=S.length;w<F;w++)d(S[w],y,w,C);else d(S,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,T,C){if(b(v,M,T,C)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let S=0;for(let w=0;w<E.length;w++){let F=E[w],D=m(F);p(F,v.__data,S),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(S+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function b(v,M,T,C){let y=v.value,E=M+"_"+T;if(C[E]===void 0)return typeof y=="number"||typeof y=="boolean"?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{let S=C[E];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function g(v){let M=v.uniforms,T=0,C=16;for(let E=0,S=M.length;E<S;E++){let w=Array.isArray(M[E])?M[E]:[M[E]];for(let F=0,D=w.length;F<D;F++){let A=w[F],R=Array.isArray(A.value)?A.value:[A.value];for(let P=0,L=R.length;P<L;P++){let I=R[P],O=m(I),B=T%C,z=B%O.boundary,G=B+z;T+=z,G!==0&&C-G<O.storage&&(T+=C-G),A.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=O.storage}}}let y=T%C;return y>0&&(T+=C-y),v.__size=T,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let T=s.indexOf(M.__bindingPointIndex);s.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function _(){for(let v in r)i.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:_}}var mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function gM(){return ci===null&&(ci=new il(mM,16,16,Ki,Yn),ci.name="DFG_LUT",ci.minFilter=Ye,ci.magFilter=Ye,ci.wrapS=Sn,ci.wrapT=Sn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Mr=class{constructor(t={}){let{canvas:e=mp(),context:n=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;let b=d,g=new Set([Fl,Il,Pl]),m=new Set([An,Wn,xo,vo,Rl,Cl]),x=new Uint32Array(4),_=new Int32Array(4),v=new $,M=null,T=null,C=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1,F=null,D=null,A=null,R=null;this._outputColorSpace=ke;let P=0,L=0,I=null,O=-1,B=null,z=new ze,G=new ze,H=null,X=new q(0),j=0,nt=e.width,Y=e.height,V=1,K=null,et=null,tt=new ze(0,0,nt,Y),st=new ze(0,0,nt,Y),ct=!1,ut=new cs,gt=!1,Nt=!1,Ft=new Ee,zt=new $,Ut=new ze,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function Ae(){return I===null?V:1}let Z=n;function Ie(k,J){return e.getContext(k,J)}let be,W,U,it,at,ht,xt,yt,ft,pt,_t,Xt,Tt,Mt,Yt,Jt,ae,Q,St,dt,wt,It,bt;try{let k={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),Z===null){let J="webgl2";if(Z=Ie(J,k),Z===null)throw Ie(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(k){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),Qt("WebGLRenderer: "+k.message),k}function $t(){be=new S1(Z),be.init(),wt=new cM(Z,be),W=new d1(Z,be,t,wt),U=new aM(Z,be),W.reversedDepthBuffer&&f&&U.buffers.depth.setReversed(!0),D=Z.createFramebuffer(),A=Z.createFramebuffer(),R=Z.createFramebuffer(),it=new E1(Z),at=new $_,ht=new lM(Z,be,U,at,W,wt,it),xt=new M1(S),yt=new Rx(Z),It=new h1(Z,yt),ft=new w1(Z,yt,it,It),pt=new R1(Z,ft,yt,It,it),Q=new A1(Z,W,ht),Yt=new p1(at),_t=new Y_(S,xt,be,W,It,Yt),Xt=new dM(S,at),Tt=new K_,Mt=new eM(be),ae=new u1(S,xt,U,pt,p,l),Jt=new sM(S,pt,W),bt=new pM(Z,it,W,U),St=new f1(Z,be,it),dt=new T1(Z,be,it),it.programs=_t.programs,S.capabilities=W,S.extensions=be,S.properties=at,S.renderLists=Tt,S.shadowMap=Jt,S.state=U,S.info=it}b!==An&&(E=new P1(b,e.width,e.height,a,r,o));let Vt=new Dh(S,Z);this.xr=Vt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let k=be.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=be.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(k){k!==void 0&&(V=k,this.setSize(nt,Y,!1))},this.getSize=function(k){return k.set(nt,Y)},this.setSize=function(k,J,lt=!0){if(Vt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=k,Y=J,e.width=Math.floor(k*V),e.height=Math.floor(J*V),lt===!0&&(e.style.width=k+"px",e.style.height=J+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,k,J)},this.getDrawingBufferSize=function(k){return k.set(nt*V,Y*V).floor()},this.setDrawingBufferSize=function(k,J,lt){nt=k,Y=J,V=lt,e.width=Math.floor(k*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,k,J)},this.setEffects=function(k){if(b===An){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let J=0;J<k.length;J++)if(k[J].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(z)},this.getViewport=function(k){return k.copy(tt)},this.setViewport=function(k,J,lt,rt){k.isVector4?tt.set(k.x,k.y,k.z,k.w):tt.set(k,J,lt,rt),U.viewport(z.copy(tt).multiplyScalar(V).round())},this.getScissor=function(k){return k.copy(st)},this.setScissor=function(k,J,lt,rt){k.isVector4?st.set(k.x,k.y,k.z,k.w):st.set(k,J,lt,rt),U.scissor(G.copy(st).multiplyScalar(V).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(k){U.setScissorTest(ct=k)},this.setOpaqueSort=function(k){K=k},this.setTransparentSort=function(k){et=k},this.getClearColor=function(k){return k.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(k=!0,J=!0,lt=!0){let rt=0;if(k){let ot=!1;if(I!==null){let Pt=I.texture.format;ot=g.has(Pt)}if(ot){let Pt=I.texture.type,Dt=m.has(Pt),Rt=ae.getClearColor(),kt=ae.getClearAlpha(),Gt=Rt.r,le=Rt.g,ue=Rt.b;Dt?(x[0]=Gt,x[1]=le,x[2]=ue,x[3]=kt,Z.clearBufferuiv(Z.COLOR,0,x)):(_[0]=Gt,_[1]=le,_[2]=ue,_[3]=kt,Z.clearBufferiv(Z.COLOR,0,_))}else rt|=Z.COLOR_BUFFER_BIT}J&&(rt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(rt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&Z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),F=k},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),ae.dispose(),Tt.dispose(),Mt.dispose(),at.dispose(),xt.dispose(),pt.dispose(),It.dispose(),bt.dispose(),_t.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",qf),Vt.removeEventListener("sessionend",Kf),ar.stop()};function Ce(k){k.preventDefault(),rs("WebGLRenderer: Context Lost."),w=!0}function xe(){rs("WebGLRenderer: Context Restored."),w=!1;let k=it.autoReset,J=Jt.enabled,lt=Jt.autoUpdate,rt=Jt.needsUpdate,ot=Jt.type;$t(),it.autoReset=k,Jt.enabled=J,Jt.autoUpdate=lt,Jt.needsUpdate=rt,Jt.type=ot}function Nn(k){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Jn(k){let J=k.target;J.removeEventListener("dispose",Jn),Mb(J)}function Mb(k){Sb(k),at.remove(k)}function Sb(k){let J=at.get(k).programs;J!==void 0&&(J.forEach(function(lt){_t.releaseProgram(lt)}),k.isShaderMaterial&&_t.releaseShaderCache(k))}this.renderBufferDirect=function(k,J,lt,rt,ot,Pt){J===null&&(J=te);let Dt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Rt=Eb(k,J,lt,rt,ot);U.setMaterial(rt,Dt);let kt=lt.index,Gt=1;if(rt.wireframe===!0){if(kt=ft.getWireframeAttribute(lt),kt===void 0)return;Gt=2}let le=lt.drawRange,ue=lt.attributes.position,Bt=le.start*Gt,ve=(le.start+le.count)*Gt;Pt!==null&&(Bt=Math.max(Bt,Pt.start*Gt),ve=Math.min(ve,(Pt.start+Pt.count)*Gt)),kt!==null?(Bt=Math.max(Bt,0),ve=Math.min(ve,kt.count)):ue!=null&&(Bt=Math.max(Bt,0),ve=Math.min(ve,ue.count));let We=ve-Bt;if(We<0||We===1/0)return;It.setup(ot,rt,Rt,lt,kt);let Fe,Re=St;if(kt!==null&&(Fe=yt.get(kt),Re=dt,Re.setIndex(Fe)),ot.isMesh)rt.wireframe===!0?(U.setLineWidth(rt.wireframeLinewidth*Ae()),Re.setMode(Z.LINES)):Re.setMode(Z.TRIANGLES);else if(ot.isLine){let hn=rt.linewidth;hn===void 0&&(hn=1),U.setLineWidth(hn*Ae()),ot.isLineSegments?Re.setMode(Z.LINES):ot.isLineLoop?Re.setMode(Z.LINE_LOOP):Re.setMode(Z.LINE_STRIP)}else ot.isPoints?Re.setMode(Z.POINTS):ot.isSprite&&Re.setMode(Z.TRIANGLES);if(ot.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Re.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let hn=ot._multiDrawStarts,Lt=ot._multiDrawCounts,gn=ot._multiDrawCount,ge=kt?yt.get(kt).bytesPerElement:1,Cn=at.get(rt).currentProgram.getUniforms();for(let jn=0;jn<gn;jn++)Cn.setValue(Z,"_gl_DrawID",jn),Re.render(hn[jn]/ge,Lt[jn])}else if(ot.isInstancedMesh)Re.renderInstances(Bt,We,ot.count);else if(lt.isInstancedBufferGeometry){let hn=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Lt=Math.min(lt.instanceCount,hn);Re.renderInstances(Bt,We,Lt)}else Re.render(Bt,We)};function $f(k,J,lt,rt){F!==null&&k.isNodeMaterial&&F.setObject(rt,k),gt===!0&&Yt.setState(k,lt,!1),k.transparent===!0&&k.side===ee&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,ha(k,J,rt),k.side=li,k.needsUpdate=!0,ha(k,J,rt),k.side=ee):ha(k,J,rt)}this.compile=function(k,J,lt=null){lt===null&&(lt=k),F!==null&&F.renderStart(k,J,lt),T=Mt.get(lt),T.init(J),y.push(T),lt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(T.pushLight(ot),ot.castShadow&&T.pushShadow(ot))}),k!==lt&&k.traverseVisible(function(ot){ot.isLight&&ot.layers.test(J.layers)&&(T.pushLight(ot),ot.castShadow&&T.pushShadow(ot))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Nt=this.localClippingEnabled,gt=Yt.init(this.clippingPlanes,Nt),gt===!0&&Yt.setGlobalState(this.clippingPlanes,J),F!==null&&Jt.render(T.state.shadowsArray,lt,J);let rt=new Set;return k.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Pt=ot.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Rt=Pt[Dt];$f(Rt,lt,J,ot),rt.add(Rt)}else $f(Pt,lt,J,ot),rt.add(Pt)}),T=y.pop(),F!==null&&F.renderEnd(),rt},this.compileAsync=function(k,J,lt=null){let rt=this.compile(k,J,lt);return new Promise(ot=>{function Pt(){if(rt.forEach(function(Dt){let kt=at.get(Dt).currentProgram;(kt===void 0||kt.isReady())&&rt.delete(Dt)}),rt.size===0){ot(k);return}setTimeout(Pt,10)}be.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ru=null;function wb(k){ru&&ru(k)}function qf(){ar.stop()}function Kf(){ar.start()}let ar=new Kp;ar.setAnimationLoop(wb),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(k){ru=k,Vt.setAnimationLoop(k),k===null?ar.stop():ar.start()},Vt.addEventListener("sessionstart",qf),Vt.addEventListener("sessionend",Kf),this.render=function(k,J){if(J!==void 0&&J.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F!==null&&F.renderStart(k,J);let lt=Vt.enabled===!0&&Vt.isPresenting===!0,rt=E!==null&&(I===null||lt)&&E.begin(S,I);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(J),J=Vt.getCamera()),k.isScene===!0&&k.onBeforeRender(S,k,J,I),T=Mt.get(k,y.length),T.init(J),T.state.textureUnits=ht.getTextureUnits(),y.push(T),Ft.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ut.setFromProjectionMatrix(Ft,Vn,J.reversedDepth),Nt=this.localClippingEnabled,gt=Yt.init(this.clippingPlanes,Nt),M=Tt.get(k,C.length),M.init(),C.push(M),Vt.enabled===!0&&Vt.isPresenting===!0){let Dt=S.xr.getDepthSensingMesh();Dt!==null&&ou(Dt,J,-1/0,S.sortObjects)}ou(k,J,0,S.sortObjects),M.finish(),F!==null&&F.updateLights(T.state.lightsArray),S.sortObjects===!0&&M.sort(K,et),he=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,he&&ae.addToRenderList(M,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&Yt.beginShadows();let ot=T.state.shadowsArray;if(Jt.render(ot,k,J),gt===!0&&Yt.endShadows(),(rt&&E.hasRenderPass())===!1){let Dt=M.opaque,Rt=M.transmissive;if(T.setupLights(),J.isArrayCamera){let kt=J.cameras;if(Rt.length>0)for(let Gt=0,le=kt.length;Gt<le;Gt++){let ue=kt[Gt];Jf(Dt,Rt,k,ue)}he&&ae.render(k);for(let Gt=0,le=kt.length;Gt<le;Gt++){let ue=kt[Gt];Zf(M,k,ue,ue.viewport)}}else Rt.length>0&&Jf(Dt,Rt,k,J),he&&ae.render(k),Zf(M,k,J)}I!==null&&L===0&&(ht.updateMultisampleRenderTarget(I),ht.updateRenderTargetMipmap(I)),rt&&E.end(S),k.isScene===!0&&k.onAfterRender(S,k,J),It.resetDefaultState(),O=-1,B=null,y.pop(),y.length>0?(T=y[y.length-1],ht.setTextureUnits(T.state.textureUnits),gt===!0&&Yt.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,F!==null&&F.renderEnd()};function ou(k,J,lt,rt){if(k.visible===!1)return;if(k.layers.test(J.layers)){if(k.isGroup)lt=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(J);else if(k.isLightProbeGrid)T.pushLightProbeGrid(k);else if(k.isLight)T.pushLight(k),k.castShadow&&T.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(ut)){rt&&Ut.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ft);let Dt=pt.update(k),Rt=k.material;Rt.visible&&M.push(k,Dt,Rt,lt,Ut.z,null,J)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(ut))){let Dt=pt.update(k),Rt=k.material;if(rt&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Ut.copy(k.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Ut.copy(Dt.boundingSphere.center)),Ut.applyMatrix4(k.matrixWorld).applyMatrix4(Ft)),Array.isArray(Rt)){let kt=Dt.groups;for(let Gt=0,le=kt.length;Gt<le;Gt++){let ue=kt[Gt],Bt=Rt[ue.materialIndex];Bt&&Bt.visible&&M.push(k,Dt,Bt,lt,Ut.z,ue,J)}}else Rt.visible&&M.push(k,Dt,Rt,lt,Ut.z,null,J)}}let Pt=k.children;for(let Dt=0,Rt=Pt.length;Dt<Rt;Dt++)ou(Pt[Dt],J,lt,rt)}function Zf(k,J,lt,rt){let{opaque:ot,transmissive:Pt,transparent:Dt}=k;T.setupLightsView(lt),gt===!0&&Yt.setGlobalState(S.clippingPlanes,lt),rt&&U.viewport(z.copy(rt)),ot.length>0&&ua(ot,J,lt),Pt.length>0&&ua(Pt,J,lt),Dt.length>0&&ua(Dt,J,lt),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Jf(k,J,lt,rt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[rt.id]===void 0){let Bt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[rt.id]=new $e(1,1,{generateMipmaps:!0,type:Bt?Yn:An,minFilter:$i,samples:Math.max(4,W.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Pt=T.state.transmissionRenderTarget[rt.id],Dt=rt.viewport||z;Pt.setSize(Dt.z*S.transmissionResolutionScale,Dt.w*S.transmissionResolutionScale);let Rt=S.getRenderTarget(),kt=S.getActiveCubeFace(),Gt=S.getActiveMipmapLevel();S.setRenderTarget(Pt),S.getClearColor(X),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),he&&ae.render(lt);let le=S.toneMapping;S.toneMapping=Hn;let ue=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),T.setupLightsView(rt),gt===!0&&Yt.setGlobalState(S.clippingPlanes,rt),ua(k,lt,rt),ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ve=0,We=J.length;ve<We;ve++){let Fe=J[ve],{object:Re,geometry:hn,material:Lt,group:gn}=Fe;if(Lt.side===ee&&Re.layers.test(rt.layers)){let ge=Lt.side;Lt.side=cn,Lt.needsUpdate=!0,jf(Re,lt,rt,hn,Lt,gn),Lt.side=ge,Lt.needsUpdate=!0,Bt=!0}}Bt===!0&&(ht.updateMultisampleRenderTarget(Pt),ht.updateRenderTargetMipmap(Pt))}S.setRenderTarget(Rt,kt,Gt),S.setClearColor(X,j),ue!==void 0&&(rt.viewport=ue),S.toneMapping=le}function ua(k,J,lt){let rt=J.isScene===!0?J.overrideMaterial:null;for(let ot=0,Pt=k.length;ot<Pt;ot++){let Dt=k[ot],{object:Rt,geometry:kt,group:Gt}=Dt,le=Dt.material;le.allowOverride===!0&&rt!==null&&(le=rt),Rt.layers.test(lt.layers)&&jf(Rt,J,lt,kt,le,Gt)}}function jf(k,J,lt,rt,ot,Pt){F!==null&&ot.isNodeMaterial&&F.setObject(k,ot),k.onBeforeRender(S,J,lt,rt,ot,Pt),k.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),ot.onBeforeRender(S,J,lt,rt,k,Pt),ot.transparent===!0&&ot.side===ee&&ot.forceSinglePass===!1?(ot.side=cn,ot.needsUpdate=!0,S.renderBufferDirect(lt,J,rt,ot,k,Pt),ot.side=li,ot.needsUpdate=!0,S.renderBufferDirect(lt,J,rt,ot,k,Pt),ot.side=ee):S.renderBufferDirect(lt,J,rt,ot,k,Pt),k.onAfterRender(S,J,lt,rt,ot,Pt)}function ha(k,J,lt){J.isScene!==!0&&(J=te);let rt=at.get(k),ot=T.state.lights,Pt=T.state.shadowsArray,Dt=ot.state.version,Rt=_t.getParameters(k,ot.state,Pt,J,lt,T.state.lightProbeGridArray),kt=_t.getProgramCacheKey(Rt),Gt=rt.programs;rt.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?J.environment:null,rt.fog=J.fog;let le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;rt.envMap=xt.get(k.envMap||rt.environment,le),rt.envMapRotation=rt.environment!==null&&k.envMap===null?J.environmentRotation:k.envMapRotation,Gt===void 0&&(k.addEventListener("dispose",Jn),Gt=new Map,rt.programs=Gt);let ue=Gt.get(kt);if(ue!==void 0){if(rt.currentProgram===ue&&rt.lightsStateVersion===Dt)return td(k,Rt),ue}else Rt.uniforms=_t.getUniforms(k),F!==null&&k.isNodeMaterial&&F.build(k,lt,Rt),k.onBeforeCompile(Rt,S),ue=_t.acquireProgram(Rt,kt),Gt.set(kt,ue),rt.uniforms=Rt.uniforms;let Bt=rt.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Bt.clippingPlanes=Yt.uniform),td(k,Rt),rt.needsLights=Rb(k),rt.lightsStateVersion=Dt,rt.needsLights&&(Bt.ambientLightColor.value=ot.state.ambient,Bt.lightProbe.value=ot.state.probe,Bt.sunLights.value=ot.state.sun,Bt.sunLightShadows.value=ot.state.sunShadow,Bt.directionalLights.value=ot.state.directional,Bt.directionalLightShadows.value=ot.state.directionalShadow,Bt.spotLights.value=ot.state.spot,Bt.spotLightShadows.value=ot.state.spotShadow,Bt.rectAreaLights.value=ot.state.rectArea,Bt.ltc_1.value=ot.state.rectAreaLTC1,Bt.ltc_2.value=ot.state.rectAreaLTC2,Bt.pointLights.value=ot.state.point,Bt.pointLightShadows.value=ot.state.pointShadow,Bt.hemisphereLights.value=ot.state.hemi,Bt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Bt.sunShadowCascade.value=ot.state.sunShadowCascade,Bt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Bt.spotLightMatrix.value=ot.state.spotLightMatrix,Bt.spotLightMap.value=ot.state.spotLightMap,Bt.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=T.state.lightProbeGridArray.length>0,rt.currentProgram=ue,rt.uniformsList=null,ue}function Qf(k){if(k.uniformsList===null){let J=k.currentProgram.getUniforms();k.uniformsList=Mo.seqWithValue(J.seq,k.uniforms)}return k.uniformsList}function td(k,J){let lt=at.get(k);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function Tb(k,J){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;v.setFromMatrixPosition(J.matrixWorld);for(let lt=0,rt=k.length;lt<rt;lt++){let ot=k[lt];if(ot.texture!==null&&ot.boundingBox.containsPoint(v))return ot}return null}function Eb(k,J,lt,rt,ot){J.isScene!==!0&&(J=te),ht.resetTextureUnits();let Pt=J.fog,Dt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?J.environment:null,Rt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fe.workingColorSpace,kt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Gt=xt.get(rt.envMap||Dt,kt),le=rt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ue=!!lt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Bt=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,We=!!lt.morphAttributes.color,Fe=Hn;rt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Fe=S.toneMapping);let Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,hn=Re!==void 0?Re.length:0,Lt=at.get(rt),gn=T.state.lights;if(gt===!0&&(Nt===!0||k!==B)){let Pe=k===B&&rt.id===O;Yt.setState(rt,k,Pe)}let ge=!1;rt.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==gn.state.version||Lt.outputColorSpace!==Rt||ot.isBatchedMesh&&Lt.batching===!1||!ot.isBatchedMesh&&Lt.batching===!0||ot.isBatchedMesh&&Lt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Lt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Lt.instancing===!1||!ot.isInstancedMesh&&Lt.instancing===!0||ot.isSkinnedMesh&&Lt.skinning===!1||!ot.isSkinnedMesh&&Lt.skinning===!0||ot.isInstancedMesh&&Lt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Lt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Lt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Lt.instancingMorph===!1&&ot.morphTexture!==null||Lt.envMap!==Gt||rt.fog===!0&&Lt.fog!==Pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Yt.numPlanes||Lt.numIntersection!==Yt.numIntersection)||Lt.vertexAlphas!==le||Lt.vertexTangents!==ue||Lt.morphTargets!==Bt||Lt.morphNormals!==ve||Lt.morphColors!==We||Lt.toneMapping!==Fe||Lt.morphTargetsCount!==hn||!!Lt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Lt.__version=rt.version);let Cn=Lt.currentProgram;ge===!0&&(Cn=ha(rt,J,ot),F&&rt.isNodeMaterial&&F.onUpdateProgram(rt,Cn,Lt));let jn=!1,Fi=!1,kr=!1,Se=Cn.getUniforms(),Ge=Lt.uniforms;if(U.useProgram(Cn.program)&&(jn=!0,Fi=!0,kr=!0),rt.id!==O&&(O=rt.id,Fi=!0),Lt.needsLights){let Pe=Tb(T.state.lightProbeGridArray,ot);Lt.lightProbeGrid!==Pe&&(Lt.lightProbeGrid=Pe,Fi=!0)}if(jn||B!==k){U.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Se.setValue(Z,"projectionMatrix",k.projectionMatrix),Se.setValue(Z,"viewMatrix",k.matrixWorldInverse);let Di=Se.map.cameraPosition;Di!==void 0&&Di.setValue(Z,zt.setFromMatrixPosition(k.matrixWorld)),W.logarithmicDepthBuffer&&Se.setValue(Z,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Se.setValue(Z,"isOrthographic",k.isOrthographicCamera===!0),B!==k&&(B=k,Fi=!0,kr=!0)}if(Lt.needsLights&&(gn.state.sunShadowMap.length>0&&Se.setValue(Z,"sunShadowMap",gn.state.sunShadowMap,ht),gn.state.directionalShadowMap.length>0&&Se.setValue(Z,"directionalShadowMap",gn.state.directionalShadowMap,ht),gn.state.spotShadowMap.length>0&&Se.setValue(Z,"spotShadowMap",gn.state.spotShadowMap,ht),gn.state.pointShadowMap.length>0&&Se.setValue(Z,"pointShadowMap",gn.state.pointShadowMap,ht)),ot.isSkinnedMesh){Se.setOptional(Z,ot,"bindMatrix"),Se.setOptional(Z,ot,"bindMatrixInverse");let Pe=ot.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Se.setValue(Z,"boneTexture",Pe.boneTexture,ht))}ot.isBatchedMesh&&(Se.setOptional(Z,ot,"batchingTexture"),Se.setValue(Z,"batchingTexture",ot._matricesTexture,ht),Se.setOptional(Z,ot,"batchingIdTexture"),Se.setValue(Z,"batchingIdTexture",ot._indirectTexture,ht),Se.setOptional(Z,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Se.setValue(Z,"batchingColorTexture",ot._colorsTexture,ht));let Li=lt.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Q.update(ot,lt,Cn),(Fi||Lt.receiveShadow!==ot.receiveShadow)&&(Lt.receiveShadow=ot.receiveShadow,Se.setValue(Z,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&J.environment!==null&&(Ge.envMapIntensity.value=J.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=gM()),Fi){if(Se.setValue(Z,"toneMappingExposure",S.toneMappingExposure),Lt.needsLights&&Ab(Ge,kr),Pt&&rt.fog===!0&&Xt.refreshFogUniforms(Ge,Pt),Xt.refreshMaterialUniforms(Ge,rt,V,Y,T.state.transmissionRenderTarget[k.id]),Lt.needsLights&&Lt.lightProbeGrid){let Pe=Lt.lightProbeGrid;Ge.probesSH.value=Pe.texture,Ge.probesMin.value.copy(Pe.boundingBox.min),Ge.probesMax.value.copy(Pe.boundingBox.max),Ge.probesResolution.value.copy(Pe.resolution)}Mo.upload(Z,Qf(Lt),Ge,ht)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Mo.upload(Z,Qf(Lt),Ge,ht),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Se.setValue(Z,"center",ot.center),Se.setValue(Z,"modelViewMatrix",ot.modelViewMatrix),Se.setValue(Z,"normalMatrix",ot.normalMatrix),Se.setValue(Z,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let Pe=rt.uniformsGroups;for(let Di=0,Br=Pe.length;Di<Br;Di++){let nd=Pe[Di];bt.update(nd,Cn),bt.bind(nd,Cn)}}return Cn}function Ab(k,J){k.ambientLightColor.needsUpdate=J,k.lightProbe.needsUpdate=J,k.sunLights.needsUpdate=J,k.sunLightShadows.needsUpdate=J,k.directionalLights.needsUpdate=J,k.directionalLightShadows.needsUpdate=J,k.pointLights.needsUpdate=J,k.pointLightShadows.needsUpdate=J,k.spotLights.needsUpdate=J,k.spotLightShadows.needsUpdate=J,k.rectAreaLights.needsUpdate=J,k.hemisphereLights.needsUpdate=J}function Rb(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(k,J,lt){let rt=at.get(k);rt.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),at.get(k.texture).__webglTexture=J,at.get(k.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:lt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,J){let lt=at.get(k);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(k,J=0,lt=0){I=k,P=J,L=lt;let rt=null,ot=!1,Pt=!1;if(k){let Rt=at.get(k);if(Rt.__useDefaultFramebuffer!==void 0){U.bindFramebuffer(Z.FRAMEBUFFER,Rt.__webglFramebuffer),z.copy(k.viewport),G.copy(k.scissor),H=k.scissorTest,U.viewport(z),U.scissor(G),U.setScissorTest(H),O=-1;return}else if(Rt.__webglFramebuffer===void 0)ht.setupRenderTarget(k);else if(Rt.__hasExternalTextures)ht.rebindTextures(k,at.get(k.texture).__webglTexture,at.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let le=k.depthTexture;if(Rt.__boundDepthTexture!==le){if(le!==null&&at.has(le)&&(k.width!==le.image.width||k.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(k)}}let kt=k.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);let Gt=at.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Gt[J])?rt=Gt[J][lt]:rt=Gt[J],ot=!0):k.samples>0&&ht.useMultisampledRTT(k)===!1?rt=at.get(k).__webglMultisampledFramebuffer:Array.isArray(Gt)?rt=Gt[lt]:rt=Gt,z.copy(k.viewport),G.copy(k.scissor),H=k.scissorTest}else z.copy(tt).multiplyScalar(V).floor(),G.copy(st).multiplyScalar(V).floor(),H=ct;if(lt!==0&&(rt=D),U.bindFramebuffer(Z.FRAMEBUFFER,rt)&&U.drawBuffers(k,rt),U.viewport(z),U.scissor(G),U.setScissorTest(H),ot){let Rt=at.get(k.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+J,Rt.__webglTexture,lt)}else if(Pt){let Rt=J;for(let kt=0;kt<k.textures.length;kt++){let Gt=at.get(k.textures[kt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,lt,Rt)}}else if(k!==null&&lt!==0){let Rt=at.get(k.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Rt.__webglTexture,lt)}O=-1};function ed(k){let J=at.get(k);return(J.__readFormat!==k.format||J.__readType!==k.type)&&(J.__readFormat=k.format,J.__readType=k.type,J.__formatReadable=W.textureFormatReadable(k.format),J.__typeReadable=W.textureTypeReadable(k.type)),J}this.readRenderTargetPixels=function(k,J,lt,rt,ot,Pt,Dt,Rt=0){if(!(k&&k.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=at.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt){U.bindFramebuffer(Z.FRAMEBUFFER,kt);try{let Gt=k.textures[Rt],le=Gt.format,ue=Gt.type;k.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Bt=ed(Gt);if(Bt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=k.width-rt&&lt>=0&&lt<=k.height-ot&&Z.readPixels(J,lt,rt,ot,wt.convert(le),wt.convert(ue),Pt)}finally{let Gt=I!==null?at.get(I).__webglFramebuffer:null;U.bindFramebuffer(Z.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(k,J,lt,rt,ot,Pt,Dt,Rt=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=at.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Dt!==void 0&&(kt=kt[Dt]),kt)if(J>=0&&J<=k.width-rt&&lt>=0&&lt<=k.height-ot){U.bindFramebuffer(Z.FRAMEBUFFER,kt);let Gt=k.textures[Rt],le=Gt.format,ue=Gt.type;k.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Rt);let Bt=ed(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pt.byteLength,Z.STREAM_READ),Z.readPixels(J,lt,rt,ot,wt.convert(le),wt.convert(ue),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let We=I!==null?at.get(I).__webglFramebuffer:null;U.bindFramebuffer(Z.FRAMEBUFFER,We);let Fe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await bp(Z,Fe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,ve),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(ve),Z.deleteSync(Fe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,J=null,lt=0){let rt=Math.pow(2,-lt),ot=Math.floor(k.image.width*rt),Pt=Math.floor(k.image.height*rt),Dt=J!==null?J.x:0,Rt=J!==null?J.y:0;ht.setTexture2D(k,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,lt,0,0,Dt,Rt,ot,Pt),U.unbindTexture()},this.copyTextureToTexture=function(k,J,lt=null,rt=null,ot=0,Pt=0){let Dt,Rt,kt,Gt,le,ue,Bt,ve,We,Fe=k.isCompressedTexture?k.mipmaps[Pt]:k.image;if(lt!==null)Dt=lt.max.x-lt.min.x,Rt=lt.max.y-lt.min.y,kt=lt.isBox3?lt.max.z-lt.min.z:1,Gt=lt.min.x,le=lt.min.y,ue=lt.isBox3?lt.min.z:0;else{let Ge=Math.pow(2,-ot);Dt=Math.floor(Fe.width*Ge),Rt=Math.floor(Fe.height*Ge),k.isDataArrayTexture?kt=Fe.depth:k.isData3DTexture?kt=Math.floor(Fe.depth*Ge):kt=1,Gt=0,le=0,ue=0}rt!==null?(Bt=rt.x,ve=rt.y,We=rt.z):(Bt=0,ve=0,We=0);let Re=wt.convert(J.format),hn=wt.convert(J.type),Lt;J.isData3DTexture?(ht.setTexture3D(J,0),Lt=Z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ht.setTexture2DArray(J,0),Lt=Z.TEXTURE_2D_ARRAY):(ht.setTexture2D(J,0),Lt=Z.TEXTURE_2D),U.activeTexture(Z.TEXTURE0),U.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),U.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),U.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment);let gn=U.getParameter(Z.UNPACK_ROW_LENGTH),ge=U.getParameter(Z.UNPACK_IMAGE_HEIGHT),Cn=U.getParameter(Z.UNPACK_SKIP_PIXELS),jn=U.getParameter(Z.UNPACK_SKIP_ROWS),Fi=U.getParameter(Z.UNPACK_SKIP_IMAGES);U.pixelStorei(Z.UNPACK_ROW_LENGTH,Fe.width),U.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Fe.height),U.pixelStorei(Z.UNPACK_SKIP_PIXELS,Gt),U.pixelStorei(Z.UNPACK_SKIP_ROWS,le),U.pixelStorei(Z.UNPACK_SKIP_IMAGES,ue);let kr=k.isDataArrayTexture||k.isData3DTexture,Se=J.isDataArrayTexture||J.isData3DTexture;if(k.isDepthTexture){let Ge=at.get(k),Li=at.get(J),Pe=at.get(Ge.__renderTarget),Di=at.get(Li.__renderTarget);U.bindFramebuffer(Z.READ_FRAMEBUFFER,Pe.__webglFramebuffer),U.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Br=0;Br<kt;Br++)kr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(k).__webglTexture,ot,ue+Br),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(J).__webglTexture,Pt,We+Br)),Z.blitFramebuffer(Gt,le,Dt,Rt,Bt,ve,Dt,Rt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);U.bindFramebuffer(Z.READ_FRAMEBUFFER,null),U.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ot!==0||k.isRenderTargetTexture||at.has(k)){let Ge=at.get(k),Li=at.get(J);U.bindFramebuffer(Z.READ_FRAMEBUFFER,A),U.bindFramebuffer(Z.DRAW_FRAMEBUFFER,R);for(let Pe=0;Pe<kt;Pe++)kr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ge.__webglTexture,ot,ue+Pe):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ge.__webglTexture,ot),Se?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Li.__webglTexture,Pt,We+Pe):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Li.__webglTexture,Pt),ot!==0?Z.blitFramebuffer(Gt,le,Dt,Rt,Bt,ve,Dt,Rt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Se?Z.copyTexSubImage3D(Lt,Pt,Bt,ve,We+Pe,Gt,le,Dt,Rt):Z.copyTexSubImage2D(Lt,Pt,Bt,ve,Gt,le,Dt,Rt);U.bindFramebuffer(Z.READ_FRAMEBUFFER,null),U.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Se?k.isDataTexture||k.isData3DTexture?Z.texSubImage3D(Lt,Pt,Bt,ve,We,Dt,Rt,kt,Re,hn,Fe.data):J.isCompressedArrayTexture?Z.compressedTexSubImage3D(Lt,Pt,Bt,ve,We,Dt,Rt,kt,Re,Fe.data):Z.texSubImage3D(Lt,Pt,Bt,ve,We,Dt,Rt,kt,Re,hn,Fe):k.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pt,Bt,ve,Dt,Rt,Re,hn,Fe.data):k.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pt,Bt,ve,Fe.width,Fe.height,Re,Fe.data):Z.texSubImage2D(Z.TEXTURE_2D,Pt,Bt,ve,Dt,Rt,Re,hn,Fe);U.pixelStorei(Z.UNPACK_ROW_LENGTH,gn),U.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ge),U.pixelStorei(Z.UNPACK_SKIP_PIXELS,Cn),U.pixelStorei(Z.UNPACK_SKIP_ROWS,jn),U.pixelStorei(Z.UNPACK_SKIP_IMAGES,Fi),Pt===0&&J.generateMipmaps&&Z.generateMipmap(Lt),U.unbindTexture()},this.initRenderTarget=function(k){at.get(k).__webglFramebuffer===void 0&&ht.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ht.setTextureCube(k,0):k.isData3DTexture?ht.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ht.setTexture2DArray(k,0):ht.setTexture2D(k,0),U.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,U.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function n0(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function i0(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let o=t[r];o<=0||(i[r*3]=Math.min(1,n[0]*o),i[r*3+1]=Math.min(1,n[1]*o),i[r*3+2]=Math.min(1,n[2]*o))}}function r0(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var bM=[],Oh=new Map,xM=0;function Ds(i){bM=i,Oh=new Map(i.flatMap(t=>t.items.map(e=>[vM(t.id,e.id),e]))),xM++}function vM(i,t){return`pack:${i}:${t}`}function Nh(i){return i.startsWith("pack:")}function Os(i){return Nh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Uh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function kh(i){return i==="robot_vacuum"||Nh(i)&&i.endsWith(":robot_vacuum")}function Ns(i){return i.z>.05}function o0(i){let t=(i?.parts??[]).filter(e=>e.shape==="cyl"&&Ns(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var yM={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Bh(i){return Me(i)?.parts.find(t=>t.screen)}function Me(i){if(!Nh(i))return;let t=Oh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=yM[e];return r?Oh.get(`pack:${r}:${n.join(":")}`):void 0}function Ke(i,t){let e=Me(t.type);if(t.mount_y!=null)return t.mount_y;let n=c0(t,i.height);if(n!==null)return n;if(t.type==="lamp_wall")return bc;if(s0.has(t.type))return Math.max(0,i.height-a0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return Sr(i,t)+l0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?Sr(i,t):wr(t)||Sr(i,t)}}function Sr(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>qt([t.x,t.z],n.points))?0:Us(i,t.x,t.z)}var wo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function $n(i){return i==="hedge"||i==="fence"||i==="pergola"}function vc(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!$n(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function yc(i){return[...i.rooms,...vc(i)]}function MM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",o=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of i.points){let h=o(c,u);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function SM(i,t,e,n){return Tr(i,t)+wo[t.type]-ks(i,t,e,n)}var zh=-.2,xc={set:!1,level:zh};function h0(i){let t=i?.settings.terrain??null;xc={set:t?.level!=null,level:t?.level??zh}}function To(i,t){return xc.level}function f0(i){return i.elevation>.3?0:xc.set?xc.level-i.elevation:zh}function Tr(i,t){return f0(i)+(t.offset??0)}function ks(i,t,e,n){return t.type==="pool"?0:MM(t,e,n)}function Us(i,t,e){let n=(i.outdoor??[]).filter(o=>!$n(o.type)&&o.type!=="pool"&&qt([t,e],o.points)),r=[...n].reverse().find(o=>o.cut)??n[0];return r?SM(i,r,t,e):f0(i)}function Bs(i,t){return Tr(i,t)+(t.above?d0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function wM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?d0(i):1.5}function Vh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!$n(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>qt(n,e.points)))}function Gh(i,t){return!t.above&&!Vh(i,t)?zs(i,t)-.05:Bs(i,t)-wM(t)}function zs(i,t){return Bs(i,t)-.15}function d0(i){return i.height&&i.height>.3?i.height:1.2}var TM={type:"none",pitch:35,overhang:.4},aR={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...TM}};var p0=.3;var m0=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),bc=1.75;var s0=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function a0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var g0=new Set(["stairs","stairs_u"]);function b0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,o=r-1,s=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/o;return{n,k:r,steps1:o,steps2:s,gap:a,fw:l,landing:c,run:u,rise:e/n}}function x0(i){return m0.has(i)||!!Me(i)?.light}var EM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function wr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return i.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var u0=.04,AM=1.2;function l0(i,t,e,n=0){let r=0;for(let o of i.furniture)!(EM.has(o.type)||Me(o.type)?.surface)||!qt([t,e],Ji(o))||o.type==="worktop"&&n>0&&o.h-u0>=AM&&n<=o.h-u0-.02||(r=Math.max(r,o.h));return r}var _c=new Set(["wall_switch","wall_socket"]),RM=4;function v0(i){let t=(i.gangs??[]).slice(0,RM);return t.length?t:[{entity:null}]}function c0(i,t){return i.type==="wifi_ap"?i.variant==="wall"?2.1:Math.max(0,t-i.h):i.type==="water_heater"?i.variant==="wall"?1.1:0:null}var _M=new Set([...m0,"radiator","ac_unit","awning","gate","fireplace","printer_3d","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","oven","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function Eo(i){return i.type==="fridge"&&!!i.door_left&&i.door_left!=="none"}function Mc(i){let t=Math.max(.5,i.w),e=Math.max(.1,i.d),n=Math.max(.8,i.h),r=Math.max(.3,Math.min(t-.3,t*.55)),o=Math.max(.3,Math.min(n-.4,i.fire_height??.7)),s=Math.max(0,Math.min(n-o-.15,i.fire_y??.4));return{x0:-r/2,x1:r/2,y0:s,y1:s+o,zBack:-e/2+Math.min(.08,e*.25),zFront:e/2}}var CM=["double","single","sliding"];function y0(i){return CM.includes(i??"")?i:"double"}var PM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],IM=["standard","bars","glass_wall"];function Zi(i,t){return i.type==="door"?i.style&&PM.includes(i.style)?i.style:t?"front":"interior":i.style&&IM.includes(i.style)?i.style:"standard"}function _0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",o=i-.04,s=Math.min(1.05,Math.max(.6,o-(r?.6:.3))),a=(o-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=o-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function M0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function un(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[o,s]=i[(e+1)%i.length];t+=n*s-o*r}return t/2}function qn(i){return Math.abs(un(i))}function Ei(i){let t=un(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((o,s)=>o+s[0],0)/r,i.reduce((o,s)=>o+s[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[o,s]=i[r],[a,l]=i[(r+1)%i.length],c=o*l-a*s;e+=(o+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function S0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,o]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function w0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[o,s]of i)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),r=Math.max(r,s);return{x0:t,z0:e,x1:n,z1:r}}function Ji(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,o=i.d/2;return[[-r,-o],[r,-o],[r,o],[-r,o]].map(([s,a])=>[i.x+s*e-a*n,i.z+s*n+a*e])}function qt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[o,s]=t[n],[a,l]=t[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(e=!e)}return e}function Er(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],o=n*n+r*r,s=o>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/o)):0;return i.h0+(i.h1-i.h0)*s}var Ve=(i,t)=>[i[0]-t[0],i[1]-t[1]],hi=(i,t)=>[i[0]+t[0],i[1]+t[1]],Dn=(i,t)=>[i[0]*t,i[1]*t],Ro=(i,t)=>i[0]*t[0]+i[1]*t[1],Ao=(i,t)=>i[0]*t[1]-i[1]*t[0],Vs=i=>Math.hypot(i[0],i[1]),Rn=i=>{let t=Vs(i)||1;return[i[0]/t,i[1]/t]},Hh=i=>[-i[1],i[0]],T0=i=>[i[1],-i[0]];function fi(i,t,e=[]){let n=t.eps??.005,r=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let w=0;w<s.length;w++)if(Math.abs(s[w][0]-S[0])<=n&&Math.abs(s[w][1]-S[1])<=n)return w;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of i){let w=S.points;if(w.length<3||Math.abs(un(w))<1e-6)continue;let F=un(w)>0,D=w.map(a);for(let A=0;A<w.length;A++){let R=D[A],P=D[(A+1)%w.length];R!==P&&l.push(F?{u:R,v:P,room:S.id,edge:A,forward:!0}:{u:P,v:R,room:S.id,edge:A,forward:!1})}}let c=o.map(S=>[a(S.a),a(S.b)]),u=new Set;for(let S of i){let w=S.points;w.length<3||(S.wall_splits??[]).forEach((F,D)=>{if(!F||D>=w.length)return;let A=w[D],R=Ve(w[(D+1)%w.length],A),P=Vs(R);for(let L of F)L>n&&L<P-n&&u.add(a(hi(A,Dn(R,L/P))))})}let h=[];for(let S of l){let w=s[S.u],F=s[S.v],D=Ve(F,w),A=Vs(D),R=Dn(D,1/A),P=[];for(let I=0;I<s.length;I++){if(I===S.u||I===S.v)continue;let O=Ve(s[I],w),B=Ro(O,R);B<=n||B>=A-n||Math.abs(Ao(R,O))<=n&&P.push({t:B,id:I})}P.sort((I,O)=>I.t-O.t);let L=[{t:0,id:S.u},...P,{t:A,id:S.v}];for(let I=0;I+1<L.length;I++){let O=L[I],B=L[I+1],z=S.forward?O.t:A-B.t,G=S.forward?B.t:A-O.t;h.push({u:O.id,v:B.id,room:S.room,edge:S.edge,t0:z,t1:G})}}let f=new Map;for(let S of h){let w=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,F=f.get(w);F||f.set(w,F=[]),F.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of h){let w=`${S.room}:${S.edge}`;p.set(w,[...p.get(w)??[],S.t0].sort((F,D)=>F-D))}let b=S=>{let w=i.find(D=>D.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(w))return w;let F=p.get(`${S.room}:${S.edge}`)??[];return w[F.indexOf(S.t0)]??null},g=S=>{let w=S.map(b).filter(D=>typeof D=="number"&&D>0);if(w.length)return Math.min(...w);let F=S.map(D=>i.find(A=>A.id===D.room)?.ceiling_height);return F.every(D=>typeof D=="number"&&D>0)?Math.max(...F):void 0},m=S=>{let w=S.map(F=>i.find(D=>D.id===F.room)?.wall_thickness?.[F.edge]).filter(F=>typeof F=="number"&&F>0);return w.length?Math.max(...w):void 0},x=S=>{for(let w of S){let F=i.find(P=>P.id===w.room),D=F?.wall_slopes?.[w.edge];if(!F||!D)continue;let A=F.points[w.edge],R=F.points[(w.edge+1)%F.points.length];return{p:[A[0],A[1]],q:[R[0],R[1]],h0:Math.max(.05,D[0]),h1:Math.max(.05,D[1])}}},_=S=>S.some(w=>b(w)===0),v=S=>{let w=x(S);return w?{height:Math.max(w.h0,w.h1),slope:w}:{height:g(S)}},M=[],T=[];for(let S of f.values()){let w=S[0],F=S.find(D=>D!==w&&D.u===w.v&&D.v===w.u&&D.room!==w.room);for(let D of S)D!==w&&D!==F&&D.room!==w.room&&r.push(`overlap:${w.room}:${D.room}`);if(_(F?[w,F]:[w])){F&&M.push([w.room,F.room]);continue}if(F){let D=m([w,F])??t.interior;T.push({a:w.u,b:w.v,left:D/2,right:D/2,exterior:!1,roomLeft:w.room,roomRight:F.room,sources:[d(w),d(F)],...v([w,F])})}else T.push({a:w.u,b:w.v,left:0,right:m([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[d(w)],...v([w])})}let C=S=>Rn(Ve(s[S.b],s[S.a]));for(let S of T){if(S.exterior||S.free)continue;let w=new Set;for(let D of[S.a,S.b])for(let A of T)!A.exterior||A.free||A.a!==D&&A.b!==D||Math.abs(Ao(C(S),C(A)))>1e-6||(A.roomLeft===S.roomLeft?w.add("left"):A.roomLeft===S.roomRight&&w.add("right"));if(w.size!==1)continue;let F=S.left+S.right;w.has("left")?(S.left=0,S.right=F):(S.left=F,S.right=0)}o.forEach((S,w)=>{let[F,D]=c[w];if(F===D)return;let A=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],R=i.find(I=>I.points.length>=3&&qt(A,I.points))?.id??null,P=(S.thickness??t.interior)/2,L=typeof S.height=="number"&&S.height>0?S.height:void 0;T.push({free:S.id,a:F,b:D,left:P,right:P,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:L})}),T=LM(T,s,u);let y=OM(T,s);return{walls:T.map((S,w)=>{let F=s[S.a],D=s[S.b],A=y.get(`${w}:a`),R=y.get(`${w}:b`),P=NM([A.right,R.left,D,R.right,A.left,F],1e-6);return{id:FM(F,D),a:[F[0],F[1]],b:[D[0],D[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:P,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function FM(i,t){let e=o=>Math.round(o*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function E0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function LM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=E0(l)),c.a!==s&&(c=E0(c)),l.a===c.b)continue;let u=Rn(Ve(t[l.b],t[l.a])),h=Rn(Ve(t[c.b],t[c.a]));if(Math.abs(Ao(u,h))>1e-6||Ro(u,h)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:DM(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function DM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function OM(i,t){let e=new Map;i.forEach((r,o)=>{let s=Rn(Ve(t[r.b],t[r.a])),a=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:Dn(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[r,o]of e){let s=t[r];o.sort((c,u)=>c.angle-u.angle);let a=c=>({left:hi(s,Dn(Hh(c.d),c.left)),right:hi(s,Dn(T0(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let u=o[c],h=o[(c+1)%o.length],f=hi(s,Dn(Hh(u.d),u.left)),d=hi(s,Dn(T0(h.d),h.right)),p=Ao(u.d,h.d);if(Math.abs(p)<1e-4)continue;let b=Ao(Ve(d,f),h.d)/p,g=hi(f,Dn(u.d,b));Vs(Ve(g,s))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function NM(i,t){let e=i.filter((r,o)=>Vs(Ve(r,i[(o+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let o=e[(r+e.length-1)%e.length],s=e[r],a=e[(r+1)%e.length],l=Ve(s,o),c=Ve(a,s);if(Math.abs(Ao(Rn(l),Rn(c)))<1e-7&&Ro(l,c)>0){e=e.filter((u,h)=>h!==r),n=!0;break}}}return e}function Wh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],o=Rn(Ve(r,n));return hi(n,Dn(o,e))}function A0(i,t){let e=Ve(i.b,i.a),n=Hh(Rn(e)),r=a=>t.some(l=>l.points.length>=3&&qt(a,l.points)),o=0,s=0;for(let a of[.2,.5,.8]){let l=hi(i.a,Dn(e,a));r(hi(l,Dn(n,i.left+.2)))&&o++,r(Ve(l,Dn(n,i.right+.2)))&&s++}return o>=2&&s===0?!0:s>=2&&o===0?!1:null}function Co(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=Rn(Ve(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,hi(r.a,[-o[1],o[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Po(i,t,e){if(!t.wall)return UM(i,e.room,e.edge,t.offset);let n=i.find(o=>o.free===t.wall);if(!n)return null;let r=Wh(e.room,0,t.offset);return{wall:n,s:Ro(Ve(r,n.a),Rn(Ve(n.b,n.a)))}}function Xh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Rn(Ve(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of i)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||Ro(Rn(Ve(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function UM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Wh(t,e,n);return{wall:r,s:Ro(Ve(s,r.a),Rn(Ve(r.b,r.a)))}}return null}function Sc(i,t,e,n){let r=t.rotation*Math.PI/180,o=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,t.d),a=null;for(let c of i){let u=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(u<.05)continue;let h=[(c.b[0]-c.a[0])/u,(c.b[1]-c.a[1])/u],f=(t.x-c.a[0])*h[0]+(t.z-c.a[1])*h[1];if(f<-.02||f>u+.02)continue;let d=[-h[1],h[0]],p=(t.x-c.a[0])*d[0]+(t.z-c.a[1])*d[1],b=o[0]*d[0]+o[1]*d[1]>=0?1:-1;if(Math.abs(o[0]*d[0]+o[1]*d[1])<.5)continue;let g=b>0?c.left:-c.right,m=p>-c.right-1e-4&&p<c.left+1e-4,x=Math.abs(p-(g+b*(s/2)));if(!m&&x>.03||a&&x>=a.off)continue;let _=c.a[0]+h[0]*f,v=c.a[1]+h[1]*f,M=m?g+b*(s/2):p,T=c.slope?Er(c.slope,t.x,t.z):Math.min(e,c.height??e);a={x:_+d[0]*M,z:v+d[1]*M,top:T,off:x}}if(!a)return{x:t.x,z:t.z,y:n};let l=t.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-t.h-.02)):n;return{x:a.x,z:a.z,y:l}}var ji=Math.PI/180;function Qi(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*ji;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Tc(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],o=e?-i.s:i.s;return[i.p[0]+n*i.c-r*o,i.p[1]+n*o+r*i.c]}function tn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),o=Qi(i),s=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=o?(l,c)=>Tc(o,s(l,c)):s;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function $h(i,t,e,n=1e-6){let[r,o]=pi(i,t,e),s=tn({...i,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&o>=-n&&o<=s.w+n}function en(i){let t=tn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=D0(t,e,n,r,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(r+o))):t/2,a=e+s*r;return{vr:s,rh:a,y:l=>l<=s?e+l*r:n+(t-l)*o}}function C0(i,t){let e=r=>!r.open&&!r.dormer&&(r.shape==="gable"||r.shape==="hip"||r.shape==="halfhip")&&!Qi(r),n=[];for(let r of i){if(!e(r)||!((r.bridge??0)>.05))continue;let o=tn(r),s=en(r),a=t(r),l=(c,u)=>c.axis==="z"?u[0]:u[1];for(let c of i){if(c===r||!e(c)||c.axis!==r.axis)continue;let u=tn(c),h=en(c),f=Math.abs(u.u1-o.u0)<.05?0:Math.abs(u.u0-o.u1)<.05?1:null;if(f===null)continue;let d=f===0?o.u0:o.u1,p=l(r,o.at(d,s.vr));if(Math.abs(p-l(c,u.at(d,h.vr)))>.06||Math.abs(s.rh-h.rh)>.06)continue;let b=t(c),g=(M,T,C)=>[-Math.max(0,C.a),T.w+Math.max(0,C.b)].map(y=>({v:y,c:l(M,T.at(d,y))})).sort((y,E)=>y.c-E.c),m=g(r,o,a),x=g(c,u,b),_=Math.max(.1,Math.min(r.bridge,Math.abs(u.u1-u.u0)-.1)),v=d+(f===0?-_:_);for(let M of[0,1]){if((M===0?x[0].c-m[0].c:m[1].c-x[1].c)<.3)continue;let C=m[M===0?0:1],y=x[M===0?0:1],[E,S]=o.at(d,s.vr),[w,F]=o.at(d,C.v),[D,A]=u.at(v,y.v);n.push({section:r.id,pts:[[E,s.rh,S],[w,s.y(C.v),F],[D,h.y(y.v),A]]})}}}return n}function qh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Kh=.14;function P0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Zh(i,t){return en(i).rh-Kh>t+.01}function I0(i,t,e,n){let r=null,o=Math.max(0,i.settings.roof.overhang??0);for(let s of qh(i)){if(s.open||n!==void 0&&!Zh(s,n)||!$h(s,t,e)||s.points&&s.points.length>=3&&!qt([t,e],s.points))continue;let[a,l]=pi(s,t,e),c=s.shape==="flat"||s.shape==="parapet",u=Math.max(0,s.overhang??o),f=((c?null:Ws(Rr(s,{u0:u,u1:u,a:u,b:u}),a,l))??en(s).y(l))-Kh;r=r===null?f:Math.max(r,f)}return r}function Ec(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(o=>[o[0],o[1]]);let n=qn(i)>=0?1:-1,r=[];for(let o=0;o<e;o++){let s=i[(o+e-1)%e],a=i[o],l=i[(o+1)%e],c=R0([a[0]-s[0],a[1]-s[1]]),u=R0([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],f=[u[1]*n,-u[0]*n],d=h[0]+f[0],p=h[1]+f[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function R0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function F0(i,t){if(i.points&&i.points.length>=3)return Ec(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,o=Math.max(i.z0,i.z1)+t,s=Qi(i);return[[e,r],[n,r],[n,o],[e,o]].map(a=>Tc(s,a))}function L0(i,t,e,n){let r=fi(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let o=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,s=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let f of[h.a,h.b])s.set(o(f),[...s.get(o(f))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let f=[h.a,h.b],d=h.b;for(;;){let p=(s.get(o(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=o(p.a)===o(d)?p.b:p.a,o(d)===o(f[0])))break;f.push(d)}f.length>=3&&o(d)===o(f[0])&&(!c||Math.abs(qn(f))>Math.abs(qn(c)))&&(c=f)}if(!c)return null;let u=[];for(let h=0;h<c.length;h++){let f=c[(h+c.length-1)%c.length],d=c[h],p=c[(h+1)%c.length],b=(d[0]-f[0])*(p[1]-d[1])-(d[1]-f[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&u.push(d)}return u.length>=3?Ec(u,e):null}var Gs=Math.tan(30*ji);function D0(i,t,e,n,r){let o=Math.min(i*.3,n>1e-6?2.4/n:i*.3),s=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+o*n,l=e+s*r,c=Math.min(i-s,Math.max(o,(l-a+Gs*(i-s+o))/(2*Gs))),u=a+(c-o)*Gs;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=o?t+f*n:f<=c?a+(f-o)*Gs:f<=i-s?l+(i-s-f)*Gs:e+(i-f)*r}}function Rr(i,t){let e=tn(i),n=en(i),r=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(I,O)=>[I,O,n.y(O)],u=c(a,-o),h=c(l,-o),f=c(l,r+s),d=c(a,r+s),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji);if(i.shape==="pent"){let I=[u,h,f,d],O=[[0,n.y(0)],[r,n.y(r)]];return{faces:[I],rim:I,ridges:[[f,d]],gable:O,gables:[O,O]}}if(i.shape==="pyramid"){let I=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[u,h,I],[h,f,I],[f,d,I],[d,u,I]],rim:[u,h,f,d],ridges:[[u,I],[d,I],[h,I],[f,I]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let I=D0(r,i.eave_a,i.eave_b,p,b),O=[[0,n.y(0)],[I.vla,I.yla],[I.vr,I.rh],[r-I.vlb,I.ylb],[r,n.y(r)]],B=[a,I.vla,I.yla],z=[l,I.vla,I.yla],G=[a,r-I.vlb,I.ylb],H=[l,r-I.vlb,I.ylb],X=[a,I.vr,I.rh],j=[l,I.vr,I.rh];return{faces:[[u,h,z,B],[B,z,j,X],[X,j,H,G],[G,H,f,d]],rim:[u,h,z,j,H,f,d,G,X,B],ridges:[[X,j],[B,z],[G,H]],gable:O,gables:[O,O]}}let[g,m]=Ac(i)??["gable","gable"],x=Jh(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],v=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],T=[a,x.vbh,x.yh],C=[l,x.vah,x.yh],y=[l,x.vbh,x.yh],E=g==="halfhip",S=m==="halfhip",w=[[u,h,...S?[C]:[],v,_,...E?[M]:[]],[_,v,...S?[y]:[],f,d,...E?[T]:[]]];g==="hip"&&w.push([d,u,_]),E&&w.push([T,M,_]),m==="hip"&&w.push([h,f,v]),S&&w.push([C,y,v]);let F=[u,h,...m==="gable"?[v]:S?[C,y]:[],f,d,...g==="gable"?[_]:E?[T,M]:[]],D=[[_,v]];g==="hip"&&D.push([u,_],[d,_]),E&&D.push([M,_],[T,_]),m==="hip"&&D.push([h,v],[f,v]),S&&D.push([C,v],[y,v]);let A=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],R=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],P=I=>I==="gable"?A:I==="halfhip"?R:null,L=[P(g),P(m)];return{faces:w,rim:F,ridges:D,gable:L[0]??L[1],gables:L}}function Ac(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Jh(i,t){let e=tn(i),n=en(i),r=e.w,o=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ji),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ji),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),u=c+(n.rh-c)*.55,h=o>1e-6?Math.min(n.vr,(u-i.eave_a)/o):n.vr,f=s>1e-6?Math.max(n.vr,r-(u-i.eave_b)/s):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-u)/Math.max(.2,o)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:u,vah:h,vbh:f}}function Ws(i,t,e){let n=null;for(let r of i.faces){if(!qt([t,e],r.map(x=>[x[0],x[1]])))continue;let[o,s]=r,a=r.slice(2).find(x=>Math.abs((s[0]-o[0])*(x[1]-o[1])-(s[1]-o[1])*(x[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],c=s[2]-o[2],u=s[1]-o[1],h=a[0]-o[0],f=a[2]-o[2],d=a[1]-o[1],p=c*d-u*f,b=u*h-l*d,g=l*f-c*h;if(Math.abs(b)<1e-9)continue;let m=o[2]-(p*(t-o[0])+g*(e-o[1]))/b;n=n===null?m:Math.min(n,m)}return n}function pi(i,t,e){let[n,r]=Tc(Qi(i),[t,e],!0),o=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?s-n:n-o]}function Yh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ar(i,t){let[e,n]=Tc(Qi(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||r(s)<r(t)*1.5||$h(s,e,n)&&(!o||r(s)<r(o))&&(o=s);return o}function jh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=tn(t),n=en(t).rh,r=Rr(i,{u0:0,u1:0,a:0,b:0}),o=en(i),s=b=>{let[g,m]=e.at(b,e.w/2),[x,_]=pi(i,g,m);return Ws(r,x,_)??o.y(_)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,h=Math.abs(c-l),f=c;for(let b=.5;b<h;b+=.05)if(s(l+u*b)>=n-.02){f=l+u*b;break}if(Math.abs(f-c)<.05)return t;let d=Qi(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=f:p.x0=f:c===e.u1?p.z1=f:p.z0=f,p}function O0(i,t){let e=jh(i,t),n=tn(e),r=en(e),o=Rr(i,{u0:0,u1:0,a:0,b:0}),s=en(i),a=f=>{let[d,p]=n.at(f,n.w/2),[b,g]=pi(i,d,p);return Ws(o,b,g)??s.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],h=Math.max(1,Math.ceil(c/.15));for(let f=0;f<h;f++){let d=c*f/h,p=c*(f+1)/h,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,_=-1/0;for(let y=0;y<=40;y++){let E=n.w*y/40;r.y(E)>m+.02&&(x=Math.min(x,E),_=Math.max(_,E))}if(!(_-x>.05))continue;let v=n.at(b,x),M=n.at(g,_),T=pi(i,v[0],v[1]),C=pi(i,M[0],M[1]);u.push({u0:Math.min(T[0],C[0]),u1:Math.max(T[0],C[0]),v0:Math.min(T[1],C[1]),v1:Math.max(T[1],C[1])})}return u}function di(i,t,e,n){let r=s=>n?s[t]<=e+1e-9:s[t]>=e-1e-9,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c&&o.push(a),c!==u){let h=(e-a[t])/(l[t]-a[t]);o.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return o}function Qh(i,t){let e=di(i,0,t.u0,!0),n=di(i,0,t.u1,!1),r=di(di(i,0,t.u0,!1),0,t.u1,!0),o=di(r,1,t.v0,!0),s=di(r,1,t.v1,!1);return[e,n,o,s].filter(a=>a.length>=3&&Math.abs(qn(a.map(l=>[l[0],l[1]])))>1e-6)}function Rc(i,t,e){let n=tn(t),r=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(u=>r.some(h=>qt(u,h.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-s)))?0:e,b:o(a.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function tf(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function kM(i){return en(i).rh}function N0(i,t,e){let n=i.settings.roof.sections??[],r=n.filter(l=>e.includes(l.id)).map(l=>Ar(n,l)??l);if(!r.length)return t.id;let o=Math.max(...r.map(l=>kM(l))),s=l=>l.rooms.some(c=>c.points.length>=3&&r.some(u=>{let[h,f]=c.points.reduce((d,p)=>[d[0]+p[0]/c.points.length,d[1]+p[1]/c.points.length],[0,0]);return $h(u,h,f)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<o-.3&&s(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}function wc(i,[t,e,n]){let r=s=>t*s[0]+e*s[1]+n,o=[];for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],c=r(a),u=r(l);if(c>=-1e-9&&o.push(a),c>=-1e-9!=u>=-1e-9){let h=c/(c-u);o.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return o}function Hs(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],o=t,s=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(s)&&(s=p,o=d)}if(Math.abs(s)<1e-9)return null;let a=o[0]-t[0],l=o[1]-t[1],c=e[2]-t[2],u=o[2]-t[2],h=(c*l-u*r)/s,f=(n*u-a*c)/s;return[h,f,t[2]-h*t[0]-f*t[1]]}var Io=i=>Math.abs(qn(i.map(t=>[t[0],t[1]])));function Cc(i){let t=un(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=Math.hypot(o[0]-r[0],o[1]-r[1]);if(s<1e-7)continue;let a=-(o[1]-r[1])*t/s,l=(o[0]-r[0])*t/s;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function BM(i,t){let e=Hs(i),n=Hs(t.poly);if(!e||!n||Io(t.poly)<1e-6)return null;let r=[...Cc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function U0(i,t){let e=[i];for(let n of t){let r=[];for(let o of e){let s=BM(o,n),a=s?o:[];for(let c of s??[])a=wc(a,c);if(a.length<3||Io(a)<1e-6){r.push(o);continue}let l=o;for(let[c,u,h]of Cc(a)){let f=wc(l,[-c,-u,-h]);if(f.length>=3&&Io(f)>1e-6&&r.push(f),l=wc(l,[c,u,h]),l.length<3)break}}e=r}return e}function ef(i,t,e){let n=[[0,1]],r=o=>[i[0]+(t[0]-i[0])*o,i[1]+(t[1]-i[1])*o,i[2]+(t[2]-i[2])*o];for(let o of e){let s=Hs(o.poly);if(!s||Io(o.poly)<1e-6)continue;let a=Cc(o.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>s[0]*d[0]+s[1]*d[1]+s[2]-d[2],c=l(i),u=l(t)-c;a.push([c-.01,u]),Number.isFinite(o.depth)&&a.push([o.depth-c,-u]);let h=0,f=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(f=-1);continue}let b=-d/p;p>0?h=Math.max(h,b):f=Math.min(f,b)}f-h<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,h)],[Math.max(d,f),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([o,s])=>[r(o),r(s)])}function k0(i,t){let e=Hs(i),n=Hs(t);if(!e||!n||Io(t)<1e-6)return null;let r=[...i];for(let c of Cc(t))r=wc(r,c);if(r.length<3)return null;let o=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),s=[];for(let c=0;c<r.length;c++){let u=r[c],h=r[(c+1)%r.length],f=o(u),d=o(h);if(f<0!=d<0){let p=f/(f-d);s.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p,u[2]+(h[2]-u[2])*p])}}if(s.length<2)return null;let a=s[0],l=s[s.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function B0(i,t){let e=tn(i),n=o=>o.map(([s,a,l])=>{let[c,u]=e.at(s,a);return[c,u,l]}),r=[];for(let o of t){let s=di(di(di(di(o,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);s.length>=3&&Io(s)>1e-6&&r.push({poly:n(s),depth:1/0});for(let a of Qh(o,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Kh})}return r}function nf(i,t){return t.map(e=>({poly:e.poly.map(([n,r,o])=>[...pi(i,n,r),o]),depth:e.depth}))}function z0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Ar(i,t)!==e&&Ar(i,e)!==t}function V0(i,t){if(t.dormer||t.open||!Ac(t)||Qi(t)||Ar(i,t))return null;let e=tn(t),n=en(t).rh,r=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of i){if(s===t||s.dormer||s.open||Qi(s)||s.axis===t.axis||s.shape==="flat"||s.shape==="parapet"||s.shape==="pent")continue;let a=en(s).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(s)>r(t)||r(s)===r(t)&&i.indexOf(s)<i.indexOf(t))))continue;let c=Yh(s),[u,h]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[f,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Yh(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<f-.05||g>d+.05)continue;let m=G0(t,s),x=null;e.u0<u-.05&&e.u1>=u-.05&&e.u1<=m+.05?x=1:e.u1>h+.05&&e.u0<=h+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!o||r(s)>r(o.host))&&(o={host:s,end:x})}return o}function G0(i,t){let e=tn(t),n=e.at(e.u0,en(t).vr);return i.axis==="x"?n[0]:n[1]}function H0(i,t){let e=G0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Yh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function rf(i,t){return t.rooms.some(e=>e.points.length>=3)?L0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function of(i,t){if(i.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=rf(i,t);return!!e&&e.some(([n,r])=>To(n,r)-t.elevation>-.15)}function W0(i,t,e,n,r){return!e||!of(i,t)?!1:n<Math.min(t.height,To(r[0],r[1])-t.elevation)-.05}function Fo(i,t){let e=un(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let o=t[r],s=t[(r+1)%t.length],a=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],h=l[(c+1)%l.length],f=a(u),d=a(h);if(f>=0&&n.push(u),f>=0!=d>=0){let p=f/(f-d);n.push([u[0]+(h[0]-u[0])*p,u[1]+(h[1]-u[1])*p])}}}return n}function X0(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],o=i[(e+2)%i.length],s=(r[0]-n[0])*(o[1]-r[1])-(r[1]-n[1])*(o[0]-r[0]);if(!(Math.abs(s)<1e-9)){if(t&&Math.sign(s)!==t)return!1;t=Math.sign(s)}}return!0}var Kn=1e-4;function sf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Y0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],o=[n[0]-e[0],n[1]-e[1]],s=r[0]*o[1]-r[1]*o[0];if(Math.abs(s)<1e-12)return null;let a=((e[0]-i[0])*o[1]-(e[1]-i[1])*o[0])/s,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/s;return a>Kn&&a<1-Kn&&l>-Kn&&l<1+Kn?a:null}function af(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r;if(o<1e-12)return null;let s=((i[0]-t[0])*n+(i[1]-t[1])*r)/o;return s<=Kn||s>=1-Kn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(o)<Kn?s:null}function zM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let o=0;o<t.length;o++){let s=t[o],a=t[(o+1)%t.length];if(Y0(n,r,s,a)!==null||af(s,n,r)!==null||af(n,s,a)!==null||Math.hypot(n[0]-s[0],n[1]-s[1])<Kn)return!0}}return qt(i[0],t)||qt(t[0],i)}function VM(i){let t=i.map(o=>sf(o)>=0?o:[...o].reverse()),e=[];t.forEach((o,s)=>{for(let a=0;a<o.length;a++){let l=o[a],c=o[(a+1)%o.length],u=[0,1];t.forEach((h,f)=>{if(f!==s)for(let d=0;d<h.length;d++){let p=h[d],b=h[(d+1)%h.length],g=Y0(l,c,p,b)??af(p,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Kn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],p=Math.hypot(d[0]-f[0],d[1]-f[1]),b=[(f[0]+d[0])/2+(d[1]-f[1])/p*.001,(f[1]+d[1])/2-(d[0]-f[0])/p*.001];t.some((g,m)=>m!==s&&qt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Kn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Kn)||e.push([f,d])}}});let n=[],r=new Set;for(let o=0;o<e.length;o++){if(r.has(o))continue;r.add(o);let s=[e[o][0]],a=e[o][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-s[0][0],a[1]-s[0][1])<.001);l++){let c=e.findIndex(([u],h)=>!r.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;r.add(c),s.push(e[c][0]),a=e[c][1]}s.length>=3&&sf(s)>1e-6&&n.push(s)}return n}function $0(i){let t=i.filter(o=>o.length>=3),e=t.map((o,s)=>s),n=o=>e[o]===o?o:e[o]=n(e[o]);for(let o=0;o<t.length;o++)for(let s=o+1;s<t.length;s++)n(o)!==n(s)&&zM(t[o],t[s])&&(e[n(s)]=n(o));let r=new Map;return t.forEach((o,s)=>r.set(n(s),[...r.get(n(s))??[],o])),[...r.values()].flatMap(o=>o.length===1?o:VM(o))}function GM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r,s=o?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o)):0;return Math.hypot(i[0]-t[0]-n*s,i[1]-t[1]-r*s)}function q0(i,t,e=.03){return i.every(n=>qt(n,t)||t.some((r,o)=>GM(n,r,t[(o+1)%t.length])<=e))}function K0(i,t){let e=sf(i)>=0?i:[...i].reverse(),n=(r,o)=>{let s=Math.hypot(o[0]-r[0],o[1]-r[1])||1;return[-(o[1]-r[1])/s,(o[0]-r[0])/s]};return e.map((r,o)=>{let s=n(e[(o-1+e.length)%e.length],r),a=n(r,e[(o+1)%e.length]),l=1+s[0]*a[0]+s[1]*a[1];return l<.1?r:[r[0]+(s[0]+a[0])/l*t,r[1]+(s[1]+a[1])/l*t]})}function cf(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Lo=(i,t)=>!!i.fix&&i.fix.includes(t);function lf(i,t,e,n){let r=new Map,o=i.filter(c=>Lo(c,t)).map(c=>({p:c,e:cf(c,t,e)})),s=Math.min(.05,.1*e);for(let{p:c,e:u}of o)t!=="h"&&Math.abs((u[0]+u[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:u,e:h}of o)r.has(u)||h[0]>a+(a===0?s:.001)||t==="h"&&h[1]>=e-.01&&h[0]>.01||(r.set(u,"lo"),a=Math.max(a,h[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:u,e:h}of o)r.has(u)||e-h[1]>l+(l>0?.001:t==="h"?.01:s)||(r.set(u,"hi"),l=Math.max(l,e-h[0]),c=!0)}for(let{p:c}of o)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Cr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function Z0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Pc(n))return[Cr(t,n),Cr(e,n)];let r=n.side.get(i)??"lo",o=e-t;if(r==="mid")return[n.s/2-o/2,n.s/2+o/2];if(r==="free"){let s=Cr((t+e)/2,n);return[s-o/2,s+o/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Pc(i){return i.lo>0||i.hi>0}function Ic(i,t,e,n){let[r,o,s]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-o)<.001&&Math.abs(n-s)<.001)return i.parts;let a={w:lf(i.parts,"w",r,t),d:lf(i.parts,"d",o,e),h:lf(i.parts,"h",s,n)},l={w:!Pc(a.w)&&i.parts.some(c=>Lo(c,"w")),d:!Pc(a.d)&&i.parts.some(c=>Lo(c,"d")),h:!Pc(a.h)&&i.parts.some(c=>Lo(c,"h"))};return i.parts.map(c=>{let u=x=>{let _=a[x],[v,M]=cf(c,x,_.s0);return Lo(c,x)&&!l[x]?Z0(c,v,M,_):[Cr(v,_),Cr(M,_)]},[h,f]=u("w"),[d,p]=u("d"),[b,g]=u("h"),m={...c,x:(h+f)/2/t-.5,w:(f-h)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(C,y,E,S,w)=>{let F=a[C],D=y??S,A=E??w,R=(D-A/2+.5)*F.s0,P=(D+A/2+.5)*F.s0;if(!Lo(c,C)||l[C])return[Cr(R,F),Cr(P,F)];let[L,I]=cf(c,C,F.s0),[O]=Z0(c,L,I,F),B=O-L;return[R+B,P+B]},[_,v]=x("w",c.tx,c.tw,c.x,c.w),[M,T]=x("d",c.tz,c.td,c.z,c.d);m.tx=(_+v)/2/t-.5,m.tw=(v-_)/t,m.tz=(M+T)/2/e-.5,m.td=(T-M)/e}return m})}var HM=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var WM=["wall","pole","pillar","parcel","bank"];function j0(i){return HM.includes(i.variant??"")?i.variant:"bin240"}function Q0(i){return WM.includes(i.variant??"")?i.variant:"wall"}var He=["#3a3f47","#3a3f47"],Pr=["#23262b","#23262b"],Zn=["#5a3b25","#5a3b25"],Ne=["#1f4fa8","#1f4fa8"],tr=["#e3b616","#e3b616"],de=["#2f7d3b","#2f7d3b"],J0={default:{rest:He,bio:Zn,paper:Ne,plastic:tr,glass:de,garden:de,recycling:tr,other:He},DE:{rest:Pr,bio:Zn,paper:Ne,plastic:tr,glass:de,garden:de,recycling:tr},AT:{rest:He,bio:Zn,paper:[He[0],"#c0262d"],plastic:tr,glass:de,garden:de},CH:{rest:["#d8d8d8","#d8d8d8"],bio:de,paper:Ne,plastic:He,glass:de,garden:de},NL:{rest:He,bio:de,paper:Ne,plastic:["#3a3f47","#e57a1f"],glass:de,garden:de},BE:{rest:He,bio:de,paper:Ne,plastic:Ne,glass:de,garden:de},GB:{rest:Pr,bio:["#3a3f47","#5a3b25"],paper:Ne,plastic:Ne,glass:Pr,garden:Zn,recycling:Ne},US:{rest:Pr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},CA:{rest:Pr,bio:de,paper:Ne,plastic:Ne,glass:Ne,garden:de,recycling:Ne},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:He,bio:Zn,paper:[He[0],"#e3b616"],plastic:[He[0],"#e3b616"],recycling:[He[0],"#e3b616"],glass:de,garden:de},IT:{rest:He,bio:Zn,paper:Ne,plastic:tr,glass:de,garden:de},ES:{rest:He,bio:Zn,paper:Ne,plastic:tr,glass:de,garden:de},PT:{rest:He,bio:Zn,paper:Ne,plastic:tr,glass:de,garden:de},DK:{rest:Pr,bio:de,paper:Ne,plastic:He,glass:de,garden:de},SE:{rest:Pr,bio:Zn,paper:Ne,plastic:He,glass:de,garden:de},NO:{rest:He,bio:Zn,paper:Ne,plastic:He,glass:de,garden:de},FI:{rest:He,bio:Zn,paper:Ne,plastic:He,glass:de,garden:de}},tm="DE";function em(){return tm}function XM(i,t){return J0[t]?.[i]??J0.default[i]??He}function nm(i,t=tm){let e=XM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var er=Wt(3662079,.95),uf=Wt(3662079,1),Ai=Wt(5995775,.34),im=Wt(5995775,.22),Fc=[-.55,.83],ne=-1,Lc=16,nr=32,rm=48,hf=64,re=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,o=r,s=r,a,l=ne,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,o.r,o.g,o.b,s.r,s.g,s.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ot;return t.setAttribute("position",new Et(this.p,3)),t.setAttribute("color",new Et(this.c,3)),t.setAttribute("fold",new Et(this.f,1)),this.uv&&t.setAttribute("uv",new Et(this.uv,2)),this.tile&&t.setAttribute("tile",new Et(this.tile,2)),t.computeBoundingSphere(),t}},Ue=class{p=[];c=[];f=[];seg(t,e,n=er,r=ne){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,o){let[s,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||o<0)return this.seg(s,a,n,ne);if(s[1]>=r-1e-6)return this.seg(s,a,n,o);let l=(r-s[1])/(a[1]-s[1]),c=[s[0]+(a[0]-s[0])*l,r,s[2]+(a[2]-s[2])*l];this.seg(s,c,n,ne),this.seg(c,a,n,o)}geometry(){let t=new Ot;return t.setAttribute("position",new Et(this.p,3)),t.setAttribute("color",new Et(this.c,3)),t.setAttribute("fold",new Et(this.f,1)),t}};function om(i,t,e,n){let o=i.uv?2:0,s=(h,f)=>{let d=h*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((p,b)=>p+(f.p[b]-p)*d),c:h.c.map((p,b)=>p+(f.c[b]-p)*d),uv:h.uv&&f.uv?h.uv.map((p,b)=>p+(f.uv[b]-p)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let p=0;p<3;p++){let b=h*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=f[p].p[g],i.c[b*3+g]=f[p].c[g];if(i.uv&&f[p].uv)for(let g=0;g<o;g++)i.uv[b*2+g]=f[p].uv[g];if(i.tile&&f[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=f[p].tile[g];i.f[b]=d}},c=(h,f)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(f),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},u=i.p.length/9;for(let h=t;h<u;h++){let f=[s(h,0),s(h,1),s(h,2)],d=f.map(y=>y.p[1]>e+1e-6),p=f.map(y=>y.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let y=0;y<3;y++)i.f[h*3+y]=n;continue}let b=i.f[h*3],g=(y,E)=>a(y,E,(e-y.p[1])/(E.p[1]-y.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),_=f[x],v=f[(x+1)%3],M=f[(x+2)%3],T=g(_,v),C=g(M,_);m===1?(l(h,[_,T,C],n),c([T,v,M],b),c([T,M,C],b)):(l(h,[_,T,C],b),c([T,v,M],n),c([T,M,C],n))}}function sm(i,t,e,n){let r=i.p.length/6;for(let o=t;o<r;o++){let s=i.p.slice(o*6,o*6+3),a=i.p.slice(o*6+3,o*6+6),[l,c]=s[1]<=a[1]?[s,a]:[a,s];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[o*2]=n,i.f[o*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[o*6+d]=l[d],i.p[o*6+3+d]=h[d];let f=i.c.slice(o*6,o*6+3);i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var Kt=Math.PI/180;function Wt(i,t){let e=new q(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function YM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function nn(i,t=[]){let e=i.map(([n,r])=>new ie(n,r));return gs.triangulateShape(e,t.map(n=>n.map(([r,o])=>new ie(r,o))))}function am(i,t,e,n,r,o,s){let a=new q(s),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],_=b[1]-p[1],v=Math.hypot(x,_);if(v<1e-6)continue;let T=.8+.28*((_/v*Fc[0]-x/v*Fc[1]+1)/2),C=(g[0]+m[0]-p[0]-b[0])/2*(-_/v)+(g[1]+m[1]-p[1]-b[1])/2*(x/v),y=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,r-n)))),E=Wt(o,l(n)*T).lerp(a,y),S=Wt(o,l(r)*T).lerp(a,y);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],E,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],E,S,E)}let[c,u,h,f]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[h[0],r,h[1]],a))}function lm(i,t,e,n,r,o,s,a,l,c){let u=new q(l),h=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;h.push({y:o+Math.cos(m)*s,s:r+Math.sin(m)*s})}let f=(g,m)=>{let x=t(g,h[m%c].s);return[x[0],h[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,_,v)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),T=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),C=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*_[0]+T*_[1]+C*_[2]<0?i.tri(g,x,m,v):i.tri(g,m,x,v)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=Wt(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*s),v=t((e+n)/2,r),M=[_[0]-v[0],Math.cos(m)*s,_[1]-v[1]];b(f(e,g),f(n,g+1),f(n,g),M,x),b(f(e,g),f(e,g+1),f(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let _=t(g,r),v=[_[0],o,_[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let T=0;T<c;T++)b(v,f(g,T),f(g,T+1),M,u)}}function De(i,t,e,n,r,o,s={}){let a=typeof n=="number"?()=>n:p=>Math.max(e+.002,n(p[0],p[1])),l=s.aoFrom??e,c=s.fold??ne,u=p=>.5+.5*Math.min(1,Math.max(0,(p-l)/1.6)),h=(s.holes??[]).map(p=>YM(p)>0?[...p].reverse():p),f=h.length?[...t,...h.flat()]:t,d=s.topFace===!1&&!s.bottom?[]:nn(t,h);if(s.topFace!==!1){let p=new q(o);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],a(x),x[1]],[v[0],a(v),v[1]],[_[0],a(_),_[1]],p,p,p,void 0,s.topFold??c)}}if(s.bottom){let p=Wt(r,.55);for(let[b,g,m]of d){let x=f[b],_=f[g],v=f[m];i.tri([x[0],e,x[1]],[_[0],e,_[1]],[v[0],e,v[1]],p,p,p,void 0,c)}}for(let p of[t,...h])for(let b=0;b<p.length;b++){let g=p[b],m=p[(b+1)%p.length],x=m[0]-g[0],_=m[1]-g[1],v=Math.hypot(x,_);if(v<1e-6||s.skipSide?.(g,m))continue;let T=.8+.28*((_/v*Fc[0]-x/v*Fc[1]+1)/2),C=a(g),y=a(m),E=Wt(r,u(e)*T),S=Wt(r,u(C)*T),w=Wt(r,u(y)*T);i.tri([g[0],e,g[1]],[g[0],C,g[1]],[m[0],y,m[1]],E,S,w,void 0,c),i.tri([g[0],e,g[1]],[m[0],y,m[1]],[m[0],e,m[1]],E,w,E,void 0,c)}}var $M=1516088,qM=2504542,KM=2767456,ZM=3426426,cm=2854835,um=16756768;function dm(i){return Math.max(.1,Math.min(.24,i*.06))}function JM(i){return Math.max(.2,i-2*dm(i))}function Dc(i,t,e,n,r=null){let o=t.rotation*Kt,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=Math.max(0,Math.min(1,n)),u=(L,I,O)=>[t.x+l*L*s-O*a,e+I,t.z+l*L*a+O*s],h=new q($M),f=new q(qM),d=new q(KM),p=new q(ZM),b=(L,I,O,B)=>{i.tri(L,I,O,B),i.tri(L,O,I,B)},g=(L,I,O,B,z)=>{b(L,I,O,z),b(L,O,B,z)},m=(L,I,O,B,z,G,H,X)=>{g(u(L,B,z),u(I,B,z),u(I,B,G),u(L,B,G),X),g(u(L,O,G),u(I,O,G),u(I,B,G),u(L,B,G),H),g(u(L,O,z),u(I,O,z),u(I,B,z),u(L,B,z),H),g(u(L,O,z),u(L,O,G),u(L,B,G),u(L,B,z),H),g(u(I,O,z),u(I,O,G),u(I,B,G),u(I,B,z),H)},x=(L,I,O,B)=>{let z=u(L[0],L[1],L[2]),G=u(I[0],I[1],I[2]),H=[G[0]-z[0],G[1]-z[1],G[2]-z[2]],X=Math.hypot(...H)||1,j=[H[0]/X,H[1]/X,H[2]/X],nt=Math.abs(j[1])>.9?[1,0,0]:[0,1,0],Y=fm(hm(j,nt),O),V=fm(hm(j,Y),O),K=[[1,1],[-1,1],[-1,-1],[1,-1]],et=(tt,st)=>[tt[0]+Y[0]*K[st][0]+V[0]*K[st][1],tt[1]+Y[1]*K[st][0]+V[1]*K[st][1],tt[2]+Y[2]*K[st][0]+V[2]*K[st][1]];for(let tt=0;tt<4;tt++){let st=(tt+1)%4;g(et(z,tt),et(G,tt),et(G,st),et(z,st),B)}},_=Math.max(.6,t.w),v=Math.max(.05,Math.min(.5,t.d)),M=Math.max(.6,t.h),T=dm(_),C=JM(_),y=y0(t.variant),E=_/2,S=Math.max(v,T)/2,w=M+.12;for(let L of[-1,1]){let I=L<0?-E:E-T;m(I,I+T,0,w,-S,S,h,f),m(I-.02,I+T+.02,w,w+.05,-S-.02,S+.02,f,f)}r!==null&&m(-E+T*.3,-E+T*.7,M*.62,M*.62+.07,S,S+.025,new q(r?um:cm),new q(r?um:cm));let F=.14,D=M,A=(L,I,O,B,z)=>{let G=(X,j)=>[L+O*X,j,I+B*X];for(let X of[F,(F+D)/2,D])x(G(0,X),G(z,X),.022,p);x(G(.02,F),G(.02,D),.022,p),x(G(z-.02,F),G(z-.02,D),.022,p);let H=Math.max(2,Math.round(z/.13));for(let X=1;X<H;X++)x(G(z*X/H,F),G(z*X/H,D),.011,d)};if(y==="sliding"){let L=S+.04,I=c*C;A(-E+T+I,L,1,0,C),x([-E+T,.02,L],[E+C,.02,L],.015,p);return}let R=c*(Math.PI/2);if(y==="single"){A(-E+T,0,Math.cos(R),Math.sin(R),C);return}let P=C/2-.01;A(-E+T,0,Math.cos(R),Math.sin(R),P),A(E-T,0,-Math.cos(R),Math.sin(R),P)}function hm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function fm(i,t){let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e*t,i[1]/e*t,i[2]/e*t]}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=Wt(5995775,.3),Ct=Wt(5995775,.17),Zt=Wt(3662079,.45),rr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=pf(n)}rotated(t,e,n){let r=n*Kt,o=Math.cos(r),s=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*o-(c-e)*s,e+(l-t)*s+(c-e)*o))}box(t,e,n,r,o,s,a,l=a,c=null){if(e-t<1e-4||s-o<1e-4||r-n<1e-4)return;let u=[this.tf(t,o),this.tf(t,s),this.tf(e,s),this.tf(e,o)];De(this.buf,ff(u),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,r,c)}loft(t,e,n,r,o,s=o,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==ff(l)&&(l.reverse(),c.reverse()),am(this.buf,l,c,n,r,o,s),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],r,r,a),this.line(l[u],c[u],n,r,a)}pad(t,e,n,r,o,s,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(s-o)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,o,s,a,l,u);this.loft([t+c,e-c,o+c,s-c],[t,e,o,s],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,o,s,a,a,u),this.loft([t,e,o,s],[t+c,e-c,o+c,s-c],r-c,r,a,l)}lyingCyl(t,e,n,r,o,s,a,l,c=l,u=12,h=null){let f=Math.min(a,o-r)/2;if(f<1e-4||s<1e-4)return;let d=(r+o)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(lm(this.buf,g,p-s/2,p+s/2,b,d,f,l,c,u),h)for(let m of[p-s/2,p+s/2])for(let x=0;x<u;x++){let _=x/u*Math.PI*2,v=(x+1)/u*Math.PI*2;this.line(g(m,b+Math.sin(_)*f),g(m,b+Math.sin(v)*f),d+Math.cos(_)*f,d+Math.cos(v)*f,h)}}cyl(t,e,n,r,o,s,a=s,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(De(this.buf,ff(u),r,o,s,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],o,o,c)}seg(t,e,n,r,o,s,a=mt){this.line(this.tf(t,n),this.tf(r,s),e,o,a)}line(t,e,n,r,o){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],o,ne)}outline(t,e,n,r){for(let o=0;o<4;o++){let s=t[o],a=t[(o+1)%4];this.line(s,a,n,n,r),this.line(s,s,e,n,r)}}};function pf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function ff(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Ir(i,t,e,n,r,o,s=N.metal,a=!1){let l=t/2-o-r,c=e/2-o-r;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,s):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,s)}}function Ys(i,t,e,n,r,o,s,a=null,l=!1){let c=(e-t)/s;for(let u=1;u<s;u++){let h=t+c*u;i.seg(h,n,o,h,r,o,Ct)}for(let u=0;u<s;u++){let h=t+c*(u+.5),f=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),f,o+.012,h+Math.min(.1,c/4),f,o+.012,Zt);else{let d=s>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,o+.012,d,f+.08,o+.012,Zt)}}}function pm(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,h=Math.min(.24,e*.28);Ir(i,t,e,.07,.05,.05,N.wood,!0),i.pad(o,s,.07,u-.08,a+.02,l,N.fabric,N.fabricTop,.04,mt),i.loft([o,s,a,a+h],[o+.01,s-.01,a,a+h*.5],u-.08,n,N.fabric,N.fabricTop,mt),i.pad(o,o+c,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt),i.pad(s-c,s,u-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,mt);let d=(s-c-(o+c))/r;for(let p=0;p<r;p++){let b=o+c+d*p+.02,g=b+d-.04;i.pad(b,g,u-.08,u+.05,a+h+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,g-.01,a+h*.55,a+h+.14],[b+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,N.cushion)}}function mm(i,t,e,n,r){let o=-t/2,s=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),u=Math.min(.24,c*.28),h=Math.min(.2,c*.24),f=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(y,E)=>i.loft([y-.015,y+.015,E-.015,E+.015],[y-.025,y+.025,E-.025,E+.025],0,.07,N.wood);b(o+.06,a+.06),b(s-.06,a+.06),r||b(s-.06,a+c-.06);for(let y of p)b(y*(t/2-.06),l-.06),b(y*(t/2-c+.06),l-.06);i.pad(o,s,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,mt);for(let y of p){let[E,S]=y<0?[o+.02,o+c]:[s-c,s-.02];i.pad(E,S,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,mt)}i.loft([o,s,a,a+u],[o+.01,s-.01,a,a+u*.5],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p)y<0?i.loft([o,o+u,a+u,l],[o,o+u*.5,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,mt):i.loft([s-u,s,a+u,l],[s-u*.5,s,a+u,l-.01],f-.08,n,N.fabric,N.fabricTop,mt);for(let y of p){let[E,S]=y<0?[o+u,o+c]:[s-c,s-u];i.pad(E,S,f-.08,d,l-h,l,N.fabric,N.fabricTop,.04,mt)}r||i.pad(s-h,s,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,mt);let g=o+u,m=r?s-u:s-h,x=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/x;for(let y=0;y<x;y++){let E=g+_*y+.02,S=E+_-.04;i.pad(E,S,f-.08,f+.05,a+u+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([E+.01,S-.01,a+u*.55,a+u+.14],[E+.03,S-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,N.cushion)}let v=a+c,M=l-h;if(M-v<.2)return;let T=Math.max(1,Math.round((M-v)/.62)),C=(M-v)/T;for(let y of p)for(let E=0;E<T;E++){let S=v+C*E+.02,w=S+C-.04;y<0?(i.pad(o+u+.02,o+c-.04,f-.08,f+.05,S,w,N.cushion,N.cushion,.04),i.loft([o+u*.55,o+u+.14,S+.01,w-.01],[o+u*.4,o+u*.4+.06,S+.03,w-.03],f+.03,n*.93,N.cushion)):(i.pad(s-c+.04,s-u-.02,f-.08,f+.05,S,w,N.cushion,N.cushion,.04),i.loft([s-u-.14,s-u*.55,S+.01,w-.01],[s-u*.4-.06,s-u*.4,S+.03,w-.03],f+.03,n*.93,N.cushion))}}function jM(i,t,e,n){let r=-e/2,o=e/2,s=-t/2,a=t/2,l=Math.min(.32,n*.36);Ir(i,t,e,.08,.06,.03,N.wood,!0),i.box(s,a,.08,l,r+.06,o,N.wood,N.woodTop,mt),i.pad(s+.03,a-.03,l,l+.2,r+.08,o-.03,N.white,N.whiteTop,.03),i.box(s,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,mt),i.box(s,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Ct);let c=l+.2,u=r+(e-.1)*.36;i.pad(s+.01,a-.01,c-.1,c+.05,u,o-.01,N.cushion,N.fabricTop,.025,Ct),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let h=t>1.2?2:1,f=(t-.2)/h;for(let d=0;d<h;d++){let p=s+.1+f*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+f-.03,b,b+g],c,c+.06,N.whiteTop),i.loft([p+.03,p+f-.03,b,b+g],[p+.03+m,p+f-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Ct)}}function QM(i,t,e,n){let r=Math.min(.46,n*.52);Ir(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,mt)}function t2(i,t,e,n){Ir(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,Zt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function e2(i,t,e,n){let r=-t/2,o=t/2;i.box(r,o,n-.035,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let s=Math.min(.42,t*.32);i.box(o-s,o,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(o-s,l,a,o,l,a,Ct);for(let l of[n*.2,n*.5,n*.82])i.seg(o-s/2-.07,l,a+.012,o-s/2+.07,l,a+.012,Zt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,Zt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function ir(i,t,e,n,r,o=null,s=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),Ys(i,-t/2,t/2,.08,n,e/2-.02,r,o,s)}function n2(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let o=Math.max(2,Math.round(n/.38));for(let s=0;s<=o;s++){let a=Math.min(n-.025,n/o*s);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Ct),s<o){let l=-t/2+.025+.04,c=s*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,h=n/o-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=u+.006,c++}}}}function i2(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ir(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function r2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ct);let o=t/2-.06;i.seg(o,r+.08,e/2+.015,o,r+.4,e/2+.015,Zt),i.seg(o,r-.4,e/2+.015,o,r-.08,e/2+.015,Zt)}var Oc=(i,t)=>Wt(parseInt(i.slice(1),16),t).getHex(),Xs=!1;function ym(i){Xs=i}function _m(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let o=.62/n;i[e]*=o,i[e+1]*=o,i[e+2]*=o}}function o2(i,t,e,n,r,o){let s=f=>{let d=Math.max(...new q(f).toArray());return Oc(f,d>.05?Math.max(1,.62/d):1)},a=Xs?s(o[0]):Oc(o[0],.55),l=Xs?s(o[1]):Oc(o[1],.8),c=Oc(o[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Ct),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Ct),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Ct),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let f=Math.min(t,e)*.32;i.cyl(0,0,f,0,n*.9,a,a,16,mt),i.cyl(0,0,f*1.08,n*.9,n,l,c,16,Ct),i.box(-f*.5,f*.5,n*.62,n*.8,f*.7,f*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Ct);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Ct),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Ct);return}let u=Math.min(.2,n*.19),h=-e/2;for(let f of[-1,1])i.lyingCyl("x",f*(t/2-.05),h+u/2+.01,0,u,.05,u,N.dark,N.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,l,c,Ct),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,Zt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ct))}function s2(i,t,e,n,r,o,s){let a=t/r;i.box(-t/2,t/2,0,n,-e/2,e/2,s?N.metal:N.white,s?N.metal:N.whiteTop,mt);for(let l=0;l<r;l++){let c=-t/2+a*(l+.5);if(l&&i.seg(-t/2+a*l,n*.06,e/2+.001,-t/2+a*l,n*.94,e/2+.001,Ct),!o)i.box(c-a*.34,c+a*.34,n*.16,n*.84,e/2,e/2+.006,N.white,N.whiteTop,Ct),i.seg(c-a*.3,n*.5,e/2+.007,c+a*.3,n*.5,e/2+.007,Ct);else if(s)i.box(c-a*.4,c+a*.4,n*.12,n*.9,e/2,e/2+.018,N.metal,N.metal,Ct),i.seg(c-a*.36,n*.86,e/2+.019,c+a*.36,n*.86,e/2+.019,Ct);else{let u=Math.min(a,n)*.34;i.lyingCyl("z",c,e/2+.002,n/2-u,n/2+u,.004,u*2,N.dark,N.dark,14,Ct),i.seg(c-u*.45,n/2,e/2+.0045,c-u*.45+.004,n/2,e/2+.0045,mt),i.seg(c+u*.45-.004,n/2,e/2+.0045,c+u*.45,n/2,e/2+.0045,mt)}}}function a2(i,t,e,n,r){if(r){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,mt);let s=Math.min(t,n)*.3;for(let a=0;a<20;a++){let l=a/20*Math.PI*2,c=(a+1)/20*Math.PI*2;i.seg(Math.cos(l)*s,n/2+Math.sin(l)*s,e/2+.002,Math.cos(c)*s,n/2+Math.sin(c)*s,e/2+.002,Ct)}return}let o=Math.min(t,e)/2;i.cyl(0,0,o,0,n,N.white,N.whiteTop,24,mt),i.cyl(0,0,o*.5,n,n+.01,N.metal,N.metal,12)}function l2(i,t,e,n,r){if(r){i.pad(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,.05,mt),i.box(-t*.18,t*.18,n*.8,n*.88,e/2,e/2+.006,N.dark);for(let s of[-t*.2,t*.2])i.cyl(s,0,.012,-.12,0,N.metal,N.metal,6);return}let o=Math.min(t,e)/2;i.cyl(0,0,o,.04,n-.05,N.white,N.whiteTop,20,mt),i.cyl(0,0,o*.85,n-.05,n,N.white,N.whiteTop,20);for(let s=0;s<3;s++){let a=s/3*Math.PI*2;i.cyl(Math.cos(a)*o*.7,Math.sin(a)*o*.7,.03,0,.04,N.dark,N.dark,6)}i.box(-o*.3,o*.3,n*.55,n*.65,o-.01,o+.01,N.dark)}function c2(i,t,e,n){i.box(-t/2,t/2,0,.08,-e/2,e/2,N.body,N.bodyTop,mt),i.box(-t/2+.07,t/2-.07,.03,.064,e/2,e/2+.004,N.dark);for(let o of[-1,1])for(let s of[-1,1])i.box(o<0?-t/2:t/2-.024,o<0?-t/2+.024:t/2,.08,n-.05,s<0?-e/2:e/2-.024,s<0?-e/2+.024:e/2,N.metal,N.metal,mt);i.box(-t/2+.024,t/2-.024,.08,n-.05,-e/2,-e/2+.01,N.dark),i.box(-t/2,t/2,n-.05,n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t/2+.024,.09,e/2,-t/2+.024,n-.055,e/2,Zt),i.seg(t/2-.024,.09,e/2,t/2-.024,n-.055,e/2,Zt)}function u2(i,t,e,n,r){let o=Mc({w:t,d:e,h:n,fire_height:r.fire_height,fire_y:r.fire_y}),s=e/2;i.box(-t/2,o.x0,0,n,-e/2,s,N.body,N.bodyTop,Ct),i.box(o.x1,t/2,0,n,-e/2,s,N.body,N.bodyTop,Ct),i.box(o.x0,o.x1,0,o.y0,-e/2,s,N.body,N.bodyTop,Ct),i.box(o.x0,o.x1,o.y1,n,-e/2,s,N.body,N.bodyTop,Ct),i.box(o.x0,o.x1,o.y0,o.y1,-e/2,o.zBack,N.dark);let a=.035;i.box(o.x0-a,o.x1+a,o.y1,o.y1+a,s,s+.02,N.metal,N.metal,mt),i.box(o.x0-a,o.x1+a,o.y0-a,o.y0,s,s+.02,N.metal,N.metal,mt),i.box(o.x0-a,o.x0,o.y0,o.y1,s,s+.02,N.metal,N.metal,mt),i.box(o.x1,o.x1+a,o.y0,o.y1,s,s+.02,N.metal,N.metal,mt),i.box(o.x0-.12,o.x1+.12,0,.025,s,s+.28,N.metal,N.metal,Ct);let l=s+.012;i.seg(o.x0,(o.y0+o.y1)/2,l,o.x1,(o.y0+o.y1)/2,l,Ct),i.seg(0,o.y0,l,0,o.y1,l,Ct);let c=o.y0+.01;i.lyingCyl("x",0,o.zBack+.12,c,c+.09,(o.x1-o.x0)*.7,.09,N.wood,N.woodTop,8),i.lyingCyl("x",0,o.zBack+.26,c,c+.08,(o.x1-o.x0)*.55,.08,N.wood,N.woodTop,8)}function h2(i,t,e,n,r){let o=N.metal,s=Wt(N.metal,1.25).getHex(),a=Wt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Ct),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,o,s,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,o,s,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Ct),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,o,s,12,Ct),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,o,s,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,s,Ct),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,o,s,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let u=-t/2+t/3*l+.015,h=n/2*c+.015;i.box(u,u+t/3-.03,h,h+n/2-.03,e/2,e/2+.01,a,s,Ct),i.box(u+.04,u+t/3-.07,h+n/2-.09,h+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,o,s,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,o,s,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function gm(i,t,e,n,r=!1){let o=e/2-Mm;i.box(-t/2,t/2,.02,n,-e/2,o,N.body,N.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,o-.05,N.dark);for(let s of[.35,.7,1.05,1.4])if(!(s>n-.15)){if(r){i.seg(-t/2+.03,s,o+.001,t/2-.03,s,o+.001,Ct);continue}i.seg(-t/2+.03,s,o+.001,-.03,s,o+.001,Ct),i.seg(.03,s,o+.001,t/2-.03,s,o+.001,Ct)}}var Mm=.06;function Sm(i,t,e,n){let r=t.rotation*Kt,o=Math.cos(r),s=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(A,R,P)=>[t.x+A*o-P*s,R,t.z+A*s+P*o],c=(A,R,P,L,I)=>{i.tri(A,R,P,I),i.tri(A,P,L,I),i.tri(A,P,R,I),i.tri(A,L,P,I)},u=(A,R,P,L)=>{let I=l(A[0],A[1],A[2]),O=l(R[0],R[1],R[2]),B=O[0]-I[0],z=O[1]-I[1],G=O[2]-I[2],H=Math.hypot(B,z,G)||1,X=[B/H,z/H,G/H],j=Math.abs(X[1])>.9?[1,0,0]:[0,1,0],nt=[X[1]*j[2]-X[2]*j[1],X[2]*j[0]-X[0]*j[2],X[0]*j[1]-X[1]*j[0]],Y=Math.hypot(nt[0],nt[1],nt[2])||1,V=[nt[0]/Y*P,nt[1]/Y*P,nt[2]/Y*P],K=[X[1]*V[2]-X[2]*V[1],X[2]*V[0]-X[0]*V[2],X[0]*V[1]-X[1]*V[0]],et=[[1,1],[-1,1],[-1,-1],[1,-1]],tt=(st,ct)=>[st[0]+V[0]*et[ct][0]+K[0]*et[ct][1],st[1]+V[1]*et[ct][0]+K[1]*et[ct][1],st[2]+V[2]*et[ct][0]+K[2]*et[ct][1]];for(let st=0;st<4;st++){let ct=(st+1)%4;i.tri(tt(I,st),tt(O,st),tt(O,ct),L),i.tri(tt(I,st),tt(O,ct),tt(I,ct),L)}},h=(A,R,P,L,I,O,B,z)=>{c(l(A,L,I),l(R,L,I),l(R,L,O),l(A,L,O),z),c(l(A,P,O),l(R,P,O),l(R,L,O),l(A,L,O),B),c(l(A,P,I),l(R,P,I),l(R,P,O),l(A,P,O),B),c(l(A,P,I),l(A,P,O),l(A,L,O),l(A,L,I),B),c(l(R,P,I),l(R,P,O),l(R,L,O),l(R,L,I),B)},f=new q(N.body),d=new q(N.bodyTop),p=new q(N.accent),b=new q(1929098),g=new q(995141),m=(A,R,P,L,I)=>{let O=(B,z,G)=>[B[0]+(z[0]-B[0])*G,B[1]+(z[1]-B[1])*G,B[2]+(z[2]-B[2])*G];for(let B=0;B<I;B++){let z=O(A,R,B/I),G=O(A,R,(B+1)/I),H=O(P,L,(B+1)/I),X=O(P,L,B/I);c(l(z[0],z[1],z[2]),l(G[0],G[1],G[2]),l(H[0],H[1],H[2]),l(X[0],X[1],X[2]),B%2?b:g)}},x=t.w/2,_=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),T=(t.awning_pitch??12)*Math.PI/180,C=(A,R)=>{t.awning_valance!==!1&&m([-x+.04,A,R+.01],[x-.04,A,R+.01],[-x+.04,A-.2,R+.01],[x-.04,A-.2,R+.01],M)},y=t.variant??"arm";if(y==="side"){let A=e,R=.05,P=0,L=-x+.08+a*(t.w-.16);h(-x,-x+.1,0,A+.05,P-.05,P+.05,f,d),h(x-.06,x,0,A+.05,P-.03,P+.03,f,d),a>.01&&m([-x+.1,A,P],[-x+.1,R,P],[L,A,P],[L,R,P],Math.max(4,Math.round((A-R)/.3))),u([L,R,P],[L,A,P],.02,p);return}if(y==="vertical"){let A=_,R=Math.min(t.d/2,_+v);h(-x,x,e,e+v,A,R,f,d);let P=(A+R)/2;for(let I of[-x+.02,x-.02])u([I,.02,P],[I,e,P],.02,p);let L=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,P],[x-.04,e,P],[-x+.04,L,P],[x-.04,L,P],M),u([-x+.03,L,P],[x-.03,L,P],.025,p);return}if(y==="pergola"){let A=t.d/2-.05,R=e+v,P=R-(A-_)*Math.tan(T);h(-x,x,e,R,_,_+v,f,d);for(let O of[-x+.05,x-.05])u([O,R,_+v],[O,P,A],.035,p),u([O,0,A],[O,P,A],.045,f);u([-x+.05,P,A],[x-.05,P,A],.035,p);let L=_+v+a*(A-_-v),I=R-(L-_)*Math.tan(T)+.04;a>.01&&m([-x+.08,R+.04,_+v],[x-.08,R+.04,_+v],[-x+.08,I,L],[x-.08,I,L],M),u([-x+.08,I,L],[x-.08,I,L],.025,p);return}let E=_,S=_+v;h(-x,x,e,e+v,E,S,f,d);let w=[S-.02,e+v*.35];if(y==="drop"){let A=Math.max(.3,t.d-v),R=[S,w[1]-A],P=a*(Math.PI/2+T),L=[R[0]+Math.sin(P)*A,R[1]+Math.cos(P)*A];for(let I of[-x+.08,x-.08])u([I,R[1],R[0]],[I,L[1],L[0]],.018,p);a>.01&&m([-x+.04,w[1],w[0]],[x-.04,w[1],w[0]],[-x+.04,L[1],L[0]],[x-.04,L[1],L[0]],M),u([-x+.02,L[1],L[0]],[x-.02,L[1],L[0]],.03,p),a>.05&&C(L[1],L[0]);return}let F=Math.max(0,t.d-v)*a,D=[w[0]+F,w[1]-F*Math.tan(T)];if(F>.01){m([-x+.04,w[1],w[0]],[x-.04,w[1],w[0]],[-x+.04,D[1],D[0]],[x-.04,D[1],D[0]],M);let A=Math.max(.3,(t.d-v)/2+.05);for(let R of[-1,1]){let P=R*(x-.12),L=[P,e+.02,S-.04],I=[P,D[1]-.02,D[0]],O=Math.hypot(I[2]-L[2],I[1]-L[1]),B=Math.sqrt(Math.max(0,A*A-(O/2)**2)),z=[P-R*Math.min(B,x-.15),(L[1]+I[1])/2,(L[2]+I[2])/2];u(L,z,.018,p),u(z,I,.018,p)}}u([-x+.02,D[1],D[0]],[x-.02,D[1],D[0]],.03,p),F>.05&&C(D[1],D[0])}function wm(i,t,e,n,r,o=!1,s=1/0){let a=i.p.length;f2(i,t,e,n,r,o,s),t.mirror&&bf(i,a)}function f2(i,t,e,n,r,o,s){let a=t.rotation*Kt,l=Math.cos(a),c=Math.sin(a),u=t.mirror?-1:1,h=(T,C)=>[t.x+u*T*l-C*c,t.z+u*T*c+C*l],f=e+.05,d=Math.min(e+t.h-.02,s);if(d<=f+.01)return;let p=new q(.75,.1,.14),b=new q(N.dark),g=new q(N.accent),m=(o?t.w:t.w/2)-.006,x=(T,C,y)=>{let E=y/_,S=new q(2043212).lerp(p,E),w=new q(N.body).lerp(p,E*.8),F=Math.cos(y),D=Math.sin(y),A=(I,O)=>h(T+C*(I*F-O*D),t.d/2+I*D+O*F),R=(I,O,B,z)=>{let[G,H,X,j]=I;i.tri([G[0],O,G[1]],[H[0],O,H[1]],[X[0],B,X[1]],z),i.tri([G[0],O,G[1]],[X[0],B,X[1]],[j[0],B,j[1]],z)},P=(I,O,B,z,G,H,X,j=X)=>{let nt=[A(I,H),A(O,H),A(O,G),A(I,G)];R([nt[0],nt[1],nt[1],nt[0]],B,z,j),R([nt[3],nt[2],nt[2],nt[3]],B,z,X),R([nt[0],nt[3],nt[3],nt[0]],B,z,X),R([nt[1],nt[2],nt[2],nt[1]],B,z,X),R([nt[0],nt[1],nt[2],nt[3]],z,z,X),R([nt[3],nt[2],nt[1],nt[0]],B,B,X)};P(0,m,f,d,-Mm,0,w,S);let L=(I,O)=>{Math.min(O,d)>I+.01&&P(m-.05,m-.03,I,Math.min(O,d),.005,.025,g)};if(o){let I=e+t.h*.62;L(I+.08,I+.4),L(I-.4,I-.08),I<d&&P(0,m,I-.004,I+.004,.001,.005,b)}else L(e+t.h*.45,e+t.h*.75);return P},_=1.83;if(o){x(-t.w/2,1,n*_);return}x(-t.w/2,1,n*_)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,b),x(t.w/2,-1,r*_)(.06,m-.06,e+t.h*.52,e+t.h*.86,.001,.005,b)}function d2(i,t,e,n){ir(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,mt);for(let[r,o,s]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=o*e/.62;i.cyl(a,l,s,n,n+.004,N.dark,1451583,12,Zt)}}function p2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt);let r=e/2-.02,o=n-.16,s=Math.max(.2,n-.24),a=.3;i.box(-t*.14,t*.14,o+.03,o+.08,r,r+.008,N.dark,N.dark,Zt);for(let l of[-.37,-.25,.25,.37]){let c=l*t/.6;i.box(c-.016,c+.016,o+.035,o+.065,r,r+.02,N.metal,N.metal,Ct)}i.seg(-t/2,o,r,t/2,o,r,Ct),i.box(-t/2+.03,t/2-.03,a,s,r,r+.01,N.dark,N.dark,Zt),i.seg(-t/2+.08,s-.05,r+.025,t/2-.08,s-.05,r+.025,Zt),i.seg(-t/2,a-.02,r,t/2,a-.02,r,Ct),i.seg(-t*.2,.2,r+.012,t*.2,.2,r+.012,Zt)}function m2(i,t,e,n){ir(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,Zt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function g2(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,Zt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function b2(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,mt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,o,s,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,o,s,.05,a,Zt),i.seg(r,n,o,s,n,a,Zt),i.seg(s,.05,a,s,n,a,Zt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,Zt)}function x2(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function v2(i,t,e,n){ir(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,Zt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,Zt)}function y2(i,t,e,n){ir(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),o=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+o,-e/2+.12,-e/2+.16,N.dark,N.dark,Zt)}function _2(i,t,e,n){let r=Math.min(t,e)/2,o=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,o,N.pot,N.pot,10,mt),i.cyl(0,0,r*.08,o,n*.55,N.wood,N.wood,6);let s=4;for(let a=0;a<s;a++){let l=a/(s-1),c=r*(.95-.55*l),u=o+(n-o)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-o)*.16,N.plant,N.plantTop,8,a===s-1?Ct:null)}}function M2(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,o,s,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,o,s,.014,a,mt)}function S2(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),o=n/r,s=e/r;for(let u=0;u<r;u++){let h=e/2-s*u,f=h-s,d=o*(u+1);i.box(-t/2,t/2,0,d,f,h,N.wood,N.woodTop),i.seg(-t/2,d,h,t/2,d,h,mt)}i.seg(-t/2,0,e/2,-t/2,o,e/2,mt);for(let u of[-t/2,t/2])i.seg(u,o,e/2,u,n,-e/2+s,Ct);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,o+a,e/2-s/2,l,o*c+a,e/2-s*(c-.5),Zt);for(let u=0;u<c;u+=3){let h=e/2-s*(u+.5),f=o*(u+1);i.seg(l,f,h,l,f+a,h,Ct)}}function w2(i,t,e,n){let{k:r,steps1:o,steps2:s,fw:a,landing:l,run:c,rise:u}=b0(t,e,n),h=-t/2,f=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let C=0;C<o;C++){let y=e/2-c*C,E=u*(C+1);i.box(h,f,0,E,y-c,y,N.wood,N.woodTop),i.seg(h,E,y,f,E,y,mt)}i.seg(h,0,e/2,h,u,e/2,mt);let g=u*r,m=.2;i.box(h,f,0,g,-e/2,b,N.wood,N.woodTop),i.box(f,p,Math.max(0,g-m),g,-e/2,b,N.wood,N.woodTop),i.seg(h,g,b,f,g,b,mt);for(let C=0;C<s;C++){let y=b+c*C,E=u*(r+1+C);i.box(d,p,Math.max(0,E-u-m),E,y,y+c,N.wood,N.woodTop),i.seg(d,E,y,p,E,y,mt)}i.seg(h,u,e/2,h,g,b,Ct),i.seg(p,g,b,p,n,b+c*(s-1),Ct);let x=.9,_=f-.03,v=d+.03,M=b-.03,T=Math.max(1,s-4);i.seg(_,u+x,e/2-c/2,_,g+x,M,Zt),i.seg(_,g+x,M,v,g+x,M,Zt),i.seg(v,g+x,M,v,u*(r+T)+x,b+c*(T-.5),Zt);for(let C=0;C<o;C+=3){let y=e/2-c*(C+.5);i.seg(_,u*(C+1),y,_,u*(C+1)+x,y,Ct)}for(let C of[_,v])i.seg(C,g,M,C,g+x,M,Ct);for(let C=2;C<T;C+=3){let y=b+c*(C+.5);i.seg(v,u*(r+1+C),y,v,u*(r+1+C)+x,y,Ct)}}function T2(i,t,e,n){Ir(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),Ys(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function E2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),o=e/2-.02;for(let s=1;s<r;s++){let a=.06+(n-.06)/r*s;i.seg(-t/2,a,o,t/2,a,o,Ct)}for(let s=0;s<r;s++){let a=.06+(n-.06)/r*(s+.5);i.seg(-.08,a,o+.012,.08,a,o+.012,Zt)}}function A2(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,mt),Ys(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let o=0;o<r;o++){let s=-t/2+t/r*(o+.5);i.box(s-.015,s+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function bm(i,t,e,n,r){let s=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+s,N.wood,N.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,mt),i.box(-t/2+(r?s:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+s,N.cushion,N.cushion,Ct),r&&(i.box(-t/2,-t/2+s,0,.45-.06,-e/2+s,e/2,N.wood,N.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,mt),i.box(-t/2+a,-t/2+s,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Ct))}function R2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Ct),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,mt)}function C2(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function P2(i,t,e,n){Ir(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,mt)}function I2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,mt),Ys(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function F2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,Zt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Zt);for(let o of[.85,1.45])i.seg(-t/2,o,r,t/2,o,r,Ct);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Zt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Zt)}function L2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),Ys(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function D2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Zt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,mt)}function xm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,mt);let o=e/2-.012;i.seg(-t/2,n-.14,o,t/2,n-.14,o,Ct),i.seg(t/2-.16,n-.07,o,t/2-.08,n-.07,o,Zt);let s=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,s+Math.sin(u)*a,o,Math.cos(h)*a,s+Math.sin(h)*a,o,Zt),r||i.seg(Math.cos(u)*a*.72,s+Math.sin(u)*a*.72,o,Math.cos(h)*a*.72,s+Math.sin(h)*a*.72,o,Ct)}}function O2(i,t,e,n){for(let s of[-1,1])for(let a of[-1,1])i.box(s*(t/2)-(s>0?.05:0),s*(t/2)+(s<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let s of[.25,n-.55])i.box(-t/2,t/2,s,s+.08,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.04,t/2-.04,s+.08,s+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Ct),i.box(-t/2+.05,t/2-.05,s+.24,s+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let o=t/2-.35;for(let s of[o-.18,o+.18])i.seg(s,0,e/2+.02,s,n-.15,e/2+.02,mt);for(let s=.3;s<n-.2;s+=.28)i.seg(o-.18,s,e/2+.02,o+.18,s,e/2+.02,Ct)}function N2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,mt)}function U2(i,t,e,n){Ir(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Ct)}function k2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,Zt)}function B2(i,t,e,n){let r=mf;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,mt);let o=Math.max(3,Math.round(t/.1));for(let s=1;s<o;s++){let a=-t/2+t/o*s;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ct)}}function z2(i,t,e,n){let r=gf;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ct),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Zt)}function Do(i,t,e,n,r,o=20){for(let s=0;s<o;s++){let a=s/o*Math.PI*2,l=(s+1)/o*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Zt)}}function V2(i,t,e,n,r){let s=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.25,1.1+n*.15,s+.004,-t*.25,1.1+n*.85,s+.004,Zt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,s,s+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),Do(i,0,1.1+n*.66,Math.min(t,n)*.22,s+.004),i.seg(-t*.08,1.1+n*.66,s+.005,t*.08,1.1+n*.66,s+.005,Zt);for(let a of[-1,1])Do(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Zt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ct)}function G2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,mt);for(let s of[-t*.4,-t*.25,-t*.1])i.seg(s,.05+r*2+.003,-r,s,.05+r*2+.003,r,Ct);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let o=Math.min(t*.2,e*.45)*.95;for(let s=0;s<16;s++){let a=s/16*Math.PI*2,l=(s+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*o,n*.83,Math.sin(a)*o,t*.28+Math.cos(l)*o,n*.83,Math.sin(l)*o,Zt)}}function H2(i,t,e,n,r){let o=Math.min(t,e)/2;if(i.cyl(0,0,o*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,o,n*.08,n*.78,N.dark,N.body,18,mt),i.cyl(0,0,o*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=o*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,mt),Do(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,o*.45,n*.84,n*.95,N.dark,N.metal,16,mt);let s=o*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*s,n*.955,Math.sin(l)*s,Math.cos(c)*s,n*.955,Math.sin(c)*s,Zt)}i.box(-.02,.02,n*.95,n,-o*.35,o*.35,N.dark,N.body)}function W2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),o=-t*.15,s=n*.53;Do(i,o,s,r,e/2+.004,24),Do(i,o,s,r*.55,e/2+.004,16),i.seg(o-r,s,e/2+.005,o+r,s,e/2+.005,Ct),i.seg(o,s-r,e/2+.005,o,s+r,e/2+.005,Ct),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Zt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ct)}function X2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,mt);for(let o of[-1,1])Do(i,o*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Zt);for(let o of[-1,1])i.box(o*t*.25-t*.18,o*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Ct)}function Y2(i,t,e,n){let r=p0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function $2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Zt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ct)}function q2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,mt);let o=Math.min(t,n)*.28,s=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*o,s+Math.sin(c)*o,e/2+.003,Math.cos(u)*o,s+Math.sin(u)*o,e/2+.003,Zt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function K2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ct),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ct),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Zt)}function Z2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Zt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ct);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Zt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let o=Math.max(2,Math.round((n-.06)/.3)),s=(n-.06)/o;for(let a=0;a<o;a++)i.box(-t/2,t/2,.06+a*s+.004,.06+(a+1)*s,-e/2,e/2,N.white,N.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Zt)}}var mf=.12,gf=2.05;function Tm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function xf(i,t){let e=J2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function J2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),o=Bh(i.type);if(o){let l=t?Ke(t,i):0,c=(o.x-o.w/2)*e,u=(o.x+o.w/2)*e,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+o.y*r+h,y1:l+(o.y+o.h)*r-h,z:(o.z+o.d/2)*n}}let s=t&&i.type!=="fridge_smart"?Ke(t,i)-wr(i):0,a=j2(i,e,n,r,t);return a?{...a,y0:a.y0+s,y1:a.y1+s}:null}function j2(i,t,e,n,r){if(i.type==="pool_pump"){let o=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+o*2,z:o+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let o=Math.min(t,e)/2;return{x0:-o*.4,x1:o*.4,y0:n*.85,y1:n*.94,z:o*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let o=Math.min(t*.8,1.45),s=o*.56;return{x0:-o/2+.02,x1:o/2-.02,y0:n+.12,y1:n+.08+s,z:-e/2+.165}}if(i.type==="tv_wall"){let o=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:o+.02,y1:o+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let o=r?Ke(r,i):0;return{x0:.06,x1:t/2-.06,y0:o+n*.52+.01,y1:o+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:mf+.02,y1:mf+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:gf+.015,y1:gf+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let o=(n-.14)/2+.04,s=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-s,x1:s,y0:o-s,y1:o+s,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Q2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=Me(i.type);if(!t?.parts.length)return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function tS(i,t,e,n,r,o=!1,s=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new q(1-r,1-r,1-r),c=new q(1,1,1),u=s+.003;if(o){let b=v=>[v[0],u,v[1]],m=(v,M,T)=>t(Math.cos(v/24*2*Math.PI)*M,Math.sin(v/24*2*Math.PI)*T),x=i.p.length,_=b(t(0,0));for(let v=0;v<24;v++){let M=b(m(v,e/2,n/2)),T=b(m(v+1,e/2,n/2)),C=b(m(v,e/2+a,n/2+a)),y=b(m(v+1,e/2+a,n/2+a));i.tri(_,M,T,l),i.tri(M,C,y,l,c,c),i.tri(M,y,T,l,c,l)}pf(t)&&bf(i,x);return}let h=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],u,b[1]],p=i.p.length;i.tri(d(h[0]),d(h[1]),d(h[2]),l),i.tri(d(h[0]),d(h[2]),d(h[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(h[b]),d(f[b]),d(f[g]),l,c,c),i.tri(d(h[b]),d(f[g]),d(h[g]),l,c,l)}pf(t)&&bf(i,p)}function Nc(i,t,e,n,r=0,o=!1){eS(i,t,e,n,r,o)}function bf(i,t){let e=(n,r,o)=>{if(n)for(let s=0;s<o;s++){let a=r+o+s,l=r+2*o+s,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function eS(i,t,e,n,r,o=!1){let s=Me(n.type)?0:r-wr(n);if(Me(n.type)||Math.abs(s)<.001)return vm(i,t,e,n,r,o);let a=i.p.length,l=t.p.length,c=e.p.length;vm(i,t,r<.05?e:new re,n,0);for(let u=a+1;u<i.p.length;u+=3)i.p[u]+=s;for(let u=l+1;u<t.p.length;u+=3)t.p[u]+=s;if(r<0)for(let u=c+1;u<e.p.length;u+=3)e.p[u]+=s}function vm(i,t,e,n,r,o=!1){let s=n.rotation*Kt,a=Math.cos(s),l=Math.sin(s),c=n.mirror?-1:1,u=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],h=new rr(i,t,u),f=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":pm(h,f,d,p,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":pm(h,f,d,p,1);break;case"sofa_l":mm(h,f,d,p,!1);break;case"sofa_u":mm(h,f,d,p,!0);break;case"bed":jM(h,f,d,p);break;case"chair":QM(h,f,d,p);break;case"table":t2(h,f,d,p);break;case"desk":e2(h,f,d,p);break;case"nightstand":ir(h,f,d,p,1,p*.72,!0),h.seg(-f/2,p*.5,d/2-.02,f/2,p*.5,d/2-.02,Ct);break;case"wardrobe":ir(h,f,d,p,Math.max(2,Math.round(f/.5)),p*.5);break;case"shelf":n2(h,f,d,p);break;case"kitchen":i2(h,f,d,p);break;case"fridge":Eo(n)?gm(h,f,d,p,!0):r2(h,f,d,p);break;case"fridge_smart":gm(h,f,d,p);break;case"waste_bin":{let b=i.c.length;o2(h,f,d,p,j0(n),nm(n,em())),Xs&&_m(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;h2(h,f,d,p,Q0(n));let m=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"wifi_ap":a2(h,f,d,p,n.variant==="wall");return;case"water_heater":if(l2(h,f,d,p,n.variant==="wall"),n.variant==="wall")return;break;case"wall_switch":case"wall_socket":{let b=i.p.length,g=t.p.length;s2(h,f,d,p,v0(n).length,n.type==="wall_socket",n.variant==="outdoor");let m=wr(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;return}case"awning":return;case"printer_3d":c2(h,f,d,p);break;case"fireplace":u2(h,f,d,p,n);break;case"gate":o&&Dc(i,n,r,0);return;case"stove":d2(h,f,d,p);break;case"oven":p2(h,f,d,p);break;case"sink":m2(h,f,d,p);break;case"bathtub":g2(h,f,d,p);break;case"shower":b2(h,f,d,p);break;case"wc":x2(h,f,d,p);break;case"washbasin":v2(h,f,d,p);break;case"tv_board":y2(h,f,d,p);break;case"plant":_2(h,f,d,p);break;case"rug":M2(h,f,d);return;case"stairs":S2(h,f,d,p);break;case"stairs_u":w2(h,f,d,p);break;case"stairwell":return;case"sideboard":T2(h,f,d,p);break;case"dresser":E2(h,f,d,p);break;case"tall_cabinet":ir(h,f,d,p,1,p*.5);break;case"coat_rack":A2(h,f,d,p);break;case"bench":bm(h,f,d,p,!1);break;case"corner_bench":bm(h,f,d,p,!0);break;case"bar_stool":R2(h,f,d,p);break;case"office_chair":C2(h,f,d,p);break;case"stool":P2(h,f,d,p);break;case"kitchen_wall":I2(h,f,d,p);return;case"kitchen_tall":F2(h,f,d,p);break;case"island":L2(h,f,d,p);break;case"worktop":h.box(-f/2,f/2,Math.max(0,p-.04),p,-d/2,d/2,N.whiteTop,N.whiteTop,mt);return;case"dishwasher":D2(h,f,d,p);break;case"washer":xm(h,f,d,p,!1);break;case"dryer":xm(h,f,d,p,!0);break;case"bunk_bed":O2(h,f,d,p);break;case"table_round":N2(h,f,d,p);break;case"coffee_table":U2(h,f,d,p);break;case"tv_wall":k2(h,f,d,p);return;case"parking":{let g=[[-f/2,-d/2],[f/2,-d/2],[f/2,d/2],[-f/2,d/2]];for(let m=0;m<4;m++)h.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Ct);h.seg(-f*.15,.012,d/2-.45,0,.012,d/2-.2,mt),h.seg(0,.012,d/2-.2,f*.15,.012,d/2-.45,mt);return}case"robot_vacuum":h.box(-f*.45,f*.45,0,p,-d/2,-d/2+d*.3,N.white,N.whiteTop,mt),h.box(-f*.2,f*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,N.accent);return;case"radiator":B2(h,f,d,p);return;case"ac_unit":z2(h,f,d,p);return;case"inverter":V2(h,f,d,p,n.variant??null);return;case"grid_point":$2(h,f,d,p);break;case"wallbox":q2(h,f,d,p);return;case"pool_pump":G2(h,f,d,p);break;case"pool_filter":H2(h,f,d,p,n.variant??null);break;case"pool_heat_pump":W2(h,f,d,p);break;case"pool_dosing":X2(h,f,d,p);break;case"pool_valve":Y2(h,f,d,p);return;case"meter":K2(h,f,d,p);return;case"home_battery":if(Z2(h,f,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=Me(n.type);if(b){let g=Os(n.type),m=g?x=>Uh(g,x):kh(n.type)&&!o?Ns:null;if($s(h,b,f,d,p,r,null,null,m),r>.05)return}else h.box(-f/2,f/2,0,p,-d/2,d/2,N.body,N.bodyTop,mt)}}tS(e,u,f,d,n.type==="plant"?.35:.5,Q2(n),Math.min(0,r))}function Em(i){return!!Me(i)?.parts.some(t=>t.color?.startsWith("#")||t.top?.startsWith("#"))}function df(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function $s(i,t,e,n,r,o,s,a=null,l=null){let c=!!a;for(let u of Ic(t,e,n,r)){if(l?.(u)||a&&!a(u))continue;let h=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,f=h.glow&&s!==null,d=f?s:df(h.color,!1)??N.body,p=f?s:df(h.top,!1)??df(h.color,!0)??Wt(d,1.25).getHex(),b=o+h.y*r,g=o+Math.min(r,(h.y+h.h)*r),m=i.colors.length,x=h.edges==="glow"?er:h.edges==="faint"?Ct:h.edges?mt:null,_=h.rot?i.rotated(h.x*e,h.z*n,h.rot):i;if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))_.lyingCyl(h.axis,h.x*e,h.z*n,b,g,h.axis==="x"?h.w*e:h.d*n,h.axis==="x"?h.d*n:h.w*e,d,p,14,x);else if(h.shape==="cyl")_.cyl(h.x*e,h.z*n,Math.min(h.w*e,h.d*n)/2,b,g,d,p,14,x);else if(h.shape==="loft"){let v=h.tx??h.x,M=h.tz??h.z,T=h.tw??h.w,C=h.td??h.d;_.loft([(h.x-h.w/2)*e,(h.x+h.w/2)*e,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(v-T/2)*e,(v+T/2)*e,(M-C/2)*n,(M+C/2)*n],b,g,d,p,x)}else _.box((h.x-h.w/2)*e,(h.x+h.w/2)*e,b,g,(h.z-h.d/2)*n,(h.z+h.d/2)*n,d,p,x);Xs&&!f&&!c&&(h.color?.startsWith("#")||h.top?.startsWith("#"))&&_m(i.colors,m)}}function Am(i,t,e,n,r,o){let s=o*Kt,a=Math.cos(s),l=Math.sin(s),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],u=new rr(i,new Ue,c),h=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Rm(i,t,e,n,r){let o=o0(t)*n,s=new rr(i,new Ue,(c,u)=>[c,u-o]);$s(s,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Ns);let a=0,l=0;for(let c of Ic(t,e,n,r)){if(!Ns(c))continue;let u=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&u>a&&(a=u),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function qs(i,t,e,n,r,o=s=>!!s.glow){let s=e.rotation*Kt,a=Math.cos(s),l=Math.sin(s),c=e.mirror?-1:1,u=(h,f)=>[e.x+c*h*a-f*l,e.z+c*h*l+f*a];$s(new rr(i,new Ue,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,o)}function Cm(i,t,e,n,r,o){let s=nS(t,e,o,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*Kt,l=Math.cos(a),c=Math.sin(a),u=n.mirror?-1:1,h=(f,d)=>[n.x+u*f*l-d*c,n.z+u*f*c+d*l];$s(new rr(i,new Ue,h),{...t,parts:s},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function nS(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),o=i.parts.filter(a=>Uh(t,a)),s;if(t==="curtain")s=o.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...o.map(c=>c.y+c.h)),l=Math.max(.02,1-r);s=o.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return s}function Pm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),o=Math.max(.005,t.h),s=0,a=0,l=0,c=0;for(let g of Ic(i,n,r,o)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*o,v=Math.min(o,(g.y+g.h)*o),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,v-_));s+=M,a+=m*M,l+=(_+v)/2*M,c+=x*M}if(!s)return null;let u=a/s,h=c/s,f=t.rotation*Kt,d=Math.cos(f),p=Math.sin(f),b=t.mirror?-1:1;return[t.x+b*u*d-h*p,e+l/s,t.z+b*u*p+h*d]}function Uc(i,t,e,n,r){let o=e.rotation*Kt,s=Math.cos(o),a=Math.sin(o),l=e.mirror?-1:1,c=(u,h)=>[e.x+l*u*s-h*a,e.z+l*u*a+h*s];$s(new rr(i,new Ue,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var iS={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function rS(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],o=e[1]-t[1],s=Math.hypot(r,o)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],h=u[0]-l[0],f=u[1]-l[1],d=Math.hypot(h,f)||1;if(Math.abs((r*f-o*h)/(s*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+h*p-n[0],l[1]+f*p-n[1])<.4}))}function Fm(i,t){return t.type==="pool"?zs(i,t):Tr(i,t)+($n(t.type)?.01:wo[t.type])}function Ks(i){return un(i)>=0?i:[...i].reverse()}function oS(i,t){let e=i[t];if($n(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let o=i[r];r===t||!(o.cut&&r>t||o.type==="pool")||o.points.length<3||o.points.every(s=>qt(s,e.points))&&n.push(Ks(o.points))}return n}function Im(i,t,e,n,r,o,s,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){De(i,Ks([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,o,s,a,{aoFrom:r-1});return}let p=(v,M)=>[t[0]+f*M,v,t[1]+d*M],b=(v,M)=>[e[0]+f*M,v+l,e[1]+d*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,ne),i.tri(v[0],v[2],v[3],M,M,M,void 0,ne),i.tri(v[0],v[2],v[1],M,M,M,void 0,ne),i.tri(v[0],v[3],v[2],M,M,M,void 0,ne)},m=new q(a),x=new q(Wt(s,.9)),_=new q(Wt(s,.6));g([p(o,1),b(o,1),b(o,-1),p(o,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],_),g([p(r,1),b(r,1),b(o,1),p(o,1)],x),g([p(r,-1),b(r,-1),b(o,-1),p(o,-1)],x),g([p(r,1),p(r,-1),p(o,-1),p(o,1)],x),g([b(r,1),b(r,-1),b(o,-1),b(o,1)],x)}function Lm(i,t,e,n){let r=e.outdoor??[];r.forEach((o,s)=>{if(o.points.length<3)return;let a=Tr(e,o),l=(x,_)=>a-ks(e,o,x,_),c=a-(o.type==="pool"?0:o.slope??0),u=$n(o.type)&&o.height?o.height:wo[o.type],h={...iS[o.type],top:u},f=Ks(o.points),d=Wt(h.edge,h.edgeAlpha),p=o.open&&(o.type==="fence"||o.type==="pergola")?f.length-1:-1,b=x=>{if(o.outline!==!1)for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,ne)}},g=n??i,m=new q(n?1734832:h.color);switch(o.type){case"pool":{let x=new q(h.side),_=new q(Wt(h.side,.55)),v=new q(932440),M=zs(e,o),T=Bs(e,o),C=Gh(e,o);for(let[y,E,S]of nn(f)){let w=f[y],F=f[E],D=f[S];(n?g:i).tri([w[0],M,w[1]],[D[0],M,D[1]],[F[0],M,F[1]],m,m,m,void 0,ne),i.tri([w[0],C,w[1]],[D[0],C,D[1]],[F[0],C,F[1]],v,v,v,void 0,ne)}for(let y=0;y<f.length;y++){let E=f[y],S=f[(y+1)%f.length];i.tri([S[0],C,S[1]],[S[0],T,S[1]],[E[0],T,E[1]],_,x,x,void 0,ne),i.tri([S[0],C,S[1]],[E[0],T,E[1]],[E[0],C,E[1]],_,x,_,void 0,ne)}if(!o.above&&Vh(e,o)){let y=new q(660258),E=new q(396054),S=C-.2,w=Math.min(a,T);for(let F=0;F<f.length;F++){let D=f[F],A=f[(F+1)%f.length];i.tri([D[0],S,D[1]],[D[0],w,D[1]],[A[0],w,A[1]],E,y,y,void 0,ne),i.tri([D[0],S,D[1]],[A[0],w,A[1]],[A[0],S,A[1]],E,y,E,void 0,ne)}for(let[F,D,A]of nn(f)){let R=f[F],P=f[D],L=f[A];i.tri([R[0],S,R[1]],[P[0],S,P[1]],[L[0],S,L[1]],E,E,E,void 0,ne)}if(o.outline!==!1)for(let F=0;F<f.length;F++){let D=f[F],A=f[(F+1)%f.length];t.seg([D[0],S,D[1]],[A[0],S,A[1]],Wt(h.edge,h.edgeAlpha*.35),ne),t.seg([D[0],S,D[1]],[D[0],w,D[1]],Wt(h.edge,h.edgeAlpha*.25),ne)}}if(T>a+.02){let y=new q(2044240),E=new q(1187123);for(let S=0;S<f.length;S++){let w=f[S],F=f[(S+1)%f.length];i.tri([w[0],a,w[1]],[w[0],T,w[1]],[F[0],T,F[1]],E,y,y,void 0,ne),i.tri([w[0],a,w[1]],[F[0],T,F[1]],[F[0],a,F[1]],E,y,E,void 0,ne)}b(()=>a+.005)}if(b(()=>T),b(()=>M+.005),o.outline!==!1)for(let y=0;y<f.length;y++){let E=f[y],S=f[(y+1)%f.length];t.seg([E[0],C+.005,E[1]],[S[0],C+.005,S[1]],Wt(h.edge,h.edgeAlpha*.4),ne)}break}case"fence":{for(let x=0;x<f.length;x++){if(x===p)continue;let _=f[x],v=f[(x+1)%f.length],M=Math.hypot(v[0]-_[0],v[1]-_[1]),T=Math.max(1,Math.round(M/2)),C=p>=0&&x===p-1?T:T-1;for(let y=0;y<=C;y++){let E=y/T,S=_[0]+(v[0]-_[0])*E,w=_[1]+(v[1]-_[1])*E,F=l(S,w);De(i,Ks([[S-.04,w-.04],[S+.04,w-.04],[S+.04,w+.04],[S-.04,w+.04]]),F,F+h.top,h.side,h.color)}for(let y of[.35,.85])t.seg([_[0],l(_[0],_[1])+y*h.top,_[1]],[v[0],l(v[0],v[1])+y*h.top,v[1]],d,ne)}break}case"pergola":{let x=h.top;for(let[_,v]of f){let M=l(_,v);De(i,Ks([[_-.06,v-.06],[_+.06,v-.06],[_+.06,v+.06],[_-.06,v+.06]]),M,M+x,h.side,h.color)}for(let _=0;_<f.length;_++){if(_===p)continue;let v=f[_],M=f[(_+1)%f.length],T=l(v[0],v[1])+x;if(Im(i,v,M,.12,T-.16,T,h.side,h.color,l(M[0],M[1])-l(v[0],v[1])),o.bracing){let C=l(v[0],v[1]),y=l(M[0],M[1]);t.seg([v[0],C+.25,v[1]],[M[0],y+x-.25,M[1]],d,ne),t.seg([M[0],y+.25,M[1]],[v[0],C+x-.25,v[1]],d,ne)}}if(S0(f)){let _=w0(f),v=_.x1-_.x0,M=_.z1-_.z0,T=v>=M,C=T?v:M,y=Math.max(1,Math.round(C/.6));for(let E=1;E<y;E++){let S=(T?_.x0:_.z0)+C*E/y,w=T?[S,_.z0+.06]:[_.x0+.06,S],F=T?[S,_.z1-.06]:[_.x1-.06,S],D=l(w[0],w[1])+x;Im(i,w,F,.06,D-.04,D+.08,h.side,h.color,l(F[0],F[1])-l(w[0],w[1]))}}if(o.glazed&&n){let _=new q(11068671),v=(M,T)=>l(M,T)+x+.09;for(let[M,T,C]of nn(f)){let y=f[M],E=f[T],S=f[C];n.tri([y[0],v(y[0],y[1]),y[1]],[S[0],v(S[0],S[1]),S[1]],[E[0],v(E[0],E[1]),E[1]],_,_,_,void 0,ne)}}b((_,v)=>l(_,v)+x+.004);break}case"balcony":{De(i,f,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),b(()=>a+h.top+.004);let _=o.height&&o.height>.3?o.height:1,v=Wt(9417983,.42),M=Wt(3662079,.55);for(let T=0;T<f.length;T++){let C=f[T],y=f[(T+1)%f.length];if(rS(e,C,y))continue;let E=Math.hypot(y[0]-C[0],y[1]-C[1]),S=a+h.top;t.seg([C[0],S+_,C[1]],[y[0],S+_,y[1]],M,ne),t.seg([C[0],S+.1,C[1]],[y[0],S+.1,y[1]],v,ne);let w=Math.max(1,Math.round(E/.12));for(let F=0;F<=w;F++){let D=F/w,A=C[0]+(y[0]-C[0])*D,R=C[1]+(y[1]-C[1])*D;t.seg([A,S,R],[A,S+_,R],F===0||F===w?M:v,ne)}}break}default:{let x=(v,M)=>l(v,M)+h.top,_=oS(r,s);if(De(i,f,c,o.slope?x:a+h.top,h.side,h.color,{aoFrom:c,holes:_}),b((v,M)=>x(v,M)+.004),o.type==="hedge"&&b((v,M)=>l(v,M)+.004),o.outline!==!1)for(let v of _)for(let M=0;M<v.length;M++){let T=v[M],C=v[(M+1)%v.length];t.seg([T[0],x(T[0],T[1])+.004,T[1]],[C[0],x(C[0],C[1])+.004,C[1]],d,ne)}}}})}var Bc=Math.PI/180,sS=1.13,aS=1.72,vf=.025,Fr=.07,Dm=.25;function Om(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:r}=fi(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let s=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,u=-s/l,h=Math.min(n.height,o.height??n.height),f=o.sources.find(b=>b.room_id===o.roomLeft)?.edge??null,d={floorId:n.id,room:o.roomLeft,edge:f,free:!!o.free},p=(b,g,m,x)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:m,es:[0,1,0],n:x,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:d});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return e}var yf="ground";function Oo(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Nm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],o=Oo(i),s=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Us(o,s,a)):t.base??0;return{key:yf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function lS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Dr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>cS(x,Rc(i,x,x.overhang??t.overhang)));let e=lS(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(_=>_[0])),r=e.rooms.flatMap(x=>x.points.map(_=>_[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=e.elevation+e.height;if(t.type==="flat")return[Um("main",null,s,l,a,c,u+Dm)];let h=a-s>=c-l,f=t.ridge==="short"?!h:h,d=(f?c-l:a-s)/2,p=d*Math.tan(t.pitch*Bc),b=(x,_,v)=>f?[x,u+v,(l+c)/2+_]:[(s+a)/2+_,u+v,x],[g,m]=f?[s,a]:[l,c];return[-1,1].map(x=>kc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function cS(i,t){let e=tn(i),n=en(i),r=(_,v,M)=>{let[T,C]=e.at(_,v);return[T,M,C]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-o),v=e.at(l,e.w+s);return[Um(i.id,i.id,Math.min(_[0],v[0]),Math.min(_[1],v[1]),Math.max(_[0],v[0]),Math.max(_[1],v[1]),i.eave_a+Dm)]}if(i.shape==="pent")return[kc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,e.w+s,n.y(e.w+s)),i.pitch_a,()=>[0,c])];let u=Ac(i),h=u?Jh(i,u):null,f=i.shape==="pyramid"||u?.[0]==="hip",d=i.shape==="pyramid"||u?.[1]==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:f?h.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?h.d1:0,g=f?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let _=Math.hypot(n.vr+o,n.rh-n.y(-o));x.push(kc(`${i.id}:a`,i.id,"a",r(a,-o,n.y(-o)),r(l,-o,n.y(-o)),r(a,n.vr,n.rh),i.pitch_a,v=>[g*(v/_),c-m*(v/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));x.push(kc(`${i.id}:b`,i.id,"b",r(l,e.w+s,n.y(e.w+s)),r(a,e.w+s,n.y(e.w+s)),r(l,n.vr,n.rh),i.pitch_b,v=>[m*(v/_),c-g*(v/_)]))}if(f||d){let _=n.y(-o),v=n.y(e.w+s),M=[];f&&M.push([`${i.id}:c`,"c",r(a,e.w+s,v),r(a,-o,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-o,_),r(l,e.w+s,v),r(e.u1-b,n.vr,n.rh)]);for(let[T,C,y,E,S]of M){let w=uS(T,i.id,C,y,E,S);w&&x.push(w)}}return x}function uS(i,t,e,n,r,o){let s=Zs(Lr(r,n));if(s<.3)return null;let a=or(Lr(r,n)),l=Lr(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Zs(u);if(h<.3)return null;let f=or(u),d=or(zm(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=or([-f[0],0,-f[2]]),b=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Bc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:s,ls:h,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/h));return[c*x,s-(s-c)*x]},facing:[p[0],p[2]]}}function kc(i,t,e,n,r,o,s,a){let l=or(Lr(r,n)),c=or(Lr(o,n)),u=or(zm(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=or([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:Zs(Lr(r,n)),ls:Zs(Lr(o,n)),pitch:s,span:a,facing:[h[0],h[2]]}}function Um(i,t,e,n,r,o,s){let a=r-e>=o-n,l=a?r-e:o-n,c=a?o-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function km(i){let t=i.module_w||sS,e=i.module_h||aS;return i.portrait===!1?[e,t]:[t,e]}function hS(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Bm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Bc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Bc:0}function fS(i,t){let[,e]=km(t),n=Bm(i,t);return i.wall?e*Math.cos(n)+vf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+vf}function Or(i,t,e=!1){let[n,r]=km(t),o=[],s=Bm(i,t),a=r*Math.cos(s),l=fS(i,t),c=hS(t),u=Math.max(1,...c),h=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?u-b:t.align==="center"?(u-b)/2:0;for(let x=0;x<b;x++){let _=`${g}:${x}`,v=h.has(_);if(v&&!e)continue;let M=t.u+(x+m)*(n+vf),T=t.v+g*l,C=M+n,y=T+(i.flat||i.wall?a:r);if(f){if(!(p((M+C)/2,T)&&p((M+C)/2,y)))continue}else if(![[M,T],[C,T],[C,y],[M,y]].every(([A,R])=>p(A,R)))continue;if(i.wall&&s>.001){let A=Fr+r*Math.sin(s),[R,P]=t.flip?[A,Fr]:[Fr,A],L=[d(M,T,R),d(C,T,R),d(C,y,P),d(M,y,P)],I=t.flip?T:y,O=[M+.05,C-.05].map(B=>[d(B,I,0),d(B,I,A)]);o.push({corners:L,posts:O,cell:_,skipped:v});continue}if(!i.flat){o.push({corners:[d(M,T,Fr),d(C,T,Fr),d(C,y,Fr),d(M,y,Fr)],posts:[],cell:_,skipped:v});continue}let E=.15,S=E+r*Math.sin(s),[w,F]=t.flip?[y,T]:[T,y],D=[d(M,w,E),d(C,w,E),d(C,F,S),d(M,F,S)];o.push({corners:D,posts:[M+.05,C-.05].flatMap(A=>[[d(A,w,0),d(A,w,E)],[d(A,F,0),d(A,F,S)]]),cell:_,skipped:v})}}),o}function Lr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Zs(i){return Math.hypot(i[0],i[1],i[2])}function or(i){let t=Zs(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function zm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var dS=.78,pS=1.18;function mS(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||dS,module_h:i.h||pS}}function zc(i,t){let e=Or(i,mS(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Vc(i,t,e){let n=t?zc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,o=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>o)continue;let l=a.rooms.find(c=>qt([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var No=1712952,Uo=2239816,Wm=1318193,mi=Wt(3662079,.9),Nr=Wt(5995775,.45),Oe=.14,gS=9427199,bS=13226982,xS=14936565,vS={black:{glass:new q(329483),edge:Wt(9082544,.32),cells:Wt(2766160,.22)},blue:{glass:new q(1386842),edge:Wt(10467583,.55),cells:Wt(4025599,.35)}},yS=Wt(13226982,.5),_S=Wt(13226982,.85),MS=Wt(16757575,.95),Vm=new q(2845583),Gm=new q(1713986),SS=new q(3662079).multiplyScalar(.35),Hm=new q(4871791);function wS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Xm(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:AS(i),r=e?.type==="custom"?RS(i,e.sections??[],e.overhang):n?[n]:[];return ES(i,r),TS(i,r,t),r}function TS(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let r=new Map(Dr(i).map(o=>[o.key,o]));for(let o of n){let s=r.get(o.face),a=s?zc(s,o):null;if(!s||!a)continue;let l=s.section?t.find(P=>P.sections?.includes(s.section)):t[0];if(!l)continue;let c=o.float?Vc(i,s,o):null,u=c&&c.floor.id!==l.floor.id&&c.floor.elevation<l.floor.elevation?c.floor:null,h=u?u.elevation:l.floor.elevation+l.base,f=P=>[P[0],P[1]-h,P[2]],[d,p,b,g]=a.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},x=!!c&&(u!==null||c.floor.id===l.floor.id),_=u?(l.winBelow??=new Map).get(u.id)??l.winBelow.set(u.id,{floor:u,solid:new re,lines:new Ue,glass:new re}).get(u.id):x?l.win??={solid:new re,lines:new Ue,glass:new re}:l.winRoof??={solid:new re,lines:new Ue,glass:new re},v=(P,L)=>[P[0]+s.n[0]*L,P[1]+s.n[1]*L,P[2]+s.n[2]*L],M=(P,L,I)=>[P[0]+(L[0]-P[0])*I,P[1]+(L[1]-P[1])*I,P[2]+(L[2]-P[2])*I],T=m.open>.02||m.tilt>.02?MS:_S,C=[d,p,b,g].map(P=>v(P,.06)),y=[d,p,b,g].map(P=>v(P,-.02));for(let P=0;P<4;P++){_.lines.seg(C[P],C[(P+1)%4],T);let L=(P+1)%4;_.solid.tri(y[P],y[L],C[L],Hm),_.solid.tri(y[P],C[L],C[P],Hm)}let E=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*Kt,S=Math.hypot(b[0]-p[0],b[1]-p[1],b[2]-p[2]),w=P=>{let L=s.es;return[P[0]-L[0]*S*Math.cos(E)+s.n[0]*S*Math.sin(E),P[1]-L[1]*S*Math.cos(E)+s.n[1]*S*Math.sin(E),P[2]-L[2]*S*Math.cos(E)+s.n[2]*S*Math.sin(E)]},F=v(g,.065),D=v(b,.065),A=w(F),R=w(D);_.glass.tri(A,R,D,Vm),_.glass.tri(A,D,F,Vm);for(let[P,L]of[[A,R],[R,D],[D,F],[F,A]])_.lines.seg(P,L,T);if(m.cover>.02){let P=Math.min(1,m.cover),L=v(M(F,A,P),.01),I=v(M(D,R,P),.01),O=v(F,.01),B=v(D,.01);_.solid.tri(L,I,B,Gm),_.solid.tri(L,B,O,Gm);let z=Math.max(1,Math.round(S*P/.05));for(let G=1;G<=z;G++){let H=G/z;_.lines.seg(v(M(O,L,H),.004),v(M(B,I,H),.004),SS)}}}}function ES(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Dr(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let s=o.section?t.find(a=>a.sections?.includes(o.section)):t[0];s&&_f(s.solid,s.lines,o,r,s.floor.elevation+s.base)}}function _f(i,t,e,n,r){let o=c=>[c[0],c[1]-r,c[2]],s=vS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Or(e,n)){let[u,h,f,d]=c.corners.map(o);i.tri(u,h,f,s.glass),i.tri(u,f,d,s.glass),i.tri(u,f,h,s.glass),i.tri(u,d,f,s.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,_)=>[m[0]+(x[0]-m[0])*_,m[1]+(x[1]-m[1])*_,m[2]+(x[2]-m[2])*_],g=[u,h,f,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],s.edge);for(let m=1;m<a;m++)t.seg(p(b(u,h,m/a)),p(b(d,f,m/a)),s.cells);for(let m=1;m<l;m++)t.seg(p(b(u,d,m/l)),p(b(h,f,m/l)),s.cells);for(let[m,x]of c.posts)t.seg(o(m),o(x),yS)}}function AS(i){let t=i.settings.roof,e=wS(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(w=>w[0])),r=e.rooms.flatMap(S=>S.points.map(w=>w[1])),o=i.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...r)-o,c=Math.max(...r)+o,u=new re,h=new Ue;if(t.type==="flat"){De(u,[[s,l],[a,l],[a,c],[s,c]],0,.25,No,Uo,{bottom:!0});let S=.252;for(let[w,F]of[[[s,l],[a,l]],[[a,l],[a,c]],[[a,c],[s,c]],[[s,c],[s,l]]])h.seg([w[0],S,w[1]],[F[0],S,F[1]],mi),h.seg([w[0],0,w[1]],[F[0],0,F[1]],Nr);return{floor:e,base:e.height,solid:u,lines:h,glass:new re}}let f=a-s>=c-l,d=t.ridge==="short"?!f:f,p=(d?c-l:a-s)/2,b=p*Math.tan(t.pitch*Kt),g=(S,w,F)=>d?[S,F,(l+c)/2+w]:[(s+a)/2+w,F,S],[m,x]=d?[s,a]:[l,c],_=new q(Uo),v=new q(No),M=(S,w,F,D,A)=>{u.tri(S,w,F,A),u.tri(S,F,D,A)};for(let S of[-1,1]){M(g(m,S*p,0),g(x,S*p,0),g(x,0,b),g(m,0,b),_),M(g(m,S*p,-Oe),g(m,0,b-Oe),g(x,0,b-Oe),g(x,S*p,-Oe),v),M(g(m,S*p,-Oe),g(x,S*p,-Oe),g(x,S*p,0),g(m,S*p,0),v);for(let w of[m,x])M(g(w,S*p,-Oe),g(w,S*p,0),g(w,0,b),g(w,0,b-Oe),v);h.seg(g(m,S*p,0),g(x,S*p,0),Nr);for(let w of[m,x])h.seg(g(w,S*p,0),g(w,0,b),Nr)}let T=t.overhang,C=new q(Wm),y=p-T,E=y*Math.tan(t.pitch*Kt);for(let S of[m+T,x-T])u.tri(g(S,-y,-Oe),g(S,y,-Oe),g(S,0,E-Oe),C),u.tri(g(S,y,-Oe),g(S,-y,-Oe),g(S,0,E-Oe),C);return h.seg(g(m,0,b+.004),g(x,0,b+.004),mi),{floor:e,base:e.height,solid:u,lines:h,glass:new re}}function RS(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,o=new Map(Dr(i).map(l=>[l.key,l])),s=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(s.map(l=>{let c=Ar(t,l),u=c?null:V0(t,l),h=c?jh(c,l):u?H0(l,u):l,f=Rc(i,c?h:l,h.overhang??e),d=u?{...f,[u.end===0?"u0":"u1"]:0}:f,p=!h.open&&h.shape!=="flat"&&h.shape!=="parapet";return[l,{parent:c,junction:u,drawn:h,ov:d,covers:p?B0(h,Rr(h,d).faces):[]}]}));for(let l of s){let c=a.get(l),u=tf(i,l)??n[0],h=l.open?`${u.id}:open`:u.id,f=r.get(h);f||r.set(h,f={floor:u,base:0,solid:new re,lines:new Ue,glass:new re,sections:[],lift:!l.open}),f.sections.push(l.id);let d=c.parent,p=u.elevation+u.height>l.base+.05&&!l.dormer&&!d,b=t.filter(v=>v!==l&&Ar(t,v)===l).flatMap(v=>O0(l,v));for(let v of i.settings.roof.windows??[]){let M=o.get(v.face),T=M&&M.section===l.id?zc(M,v):null;if(!T)continue;let C=T.map(y=>pi(l,y[0],y[2]));b.push({u0:Math.min(...C.map(y=>y[0])),u1:Math.max(...C.map(y=>y[0])),v0:Math.min(...C.map(y=>y[1])),v1:Math.max(...C.map(y=>y[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let v=tn(g),M=Rr(d,{u0:0,u1:0,a:0,b:0}),T=C=>{let[y,E]=v.at(C,v.w/2),[S,w]=pi(d,y,E);return Ws(M,S,w)??en(d).y(w)};m=T(v.u0)<=T(v.u1)?0:1}let x=s.filter(v=>z0(t,l,v)),_=x.length?{covers:nf(g,x.flatMap(v=>a.get(v).covers)),lines:nf(g,x.filter(v=>s.indexOf(v)>s.indexOf(l)).flatMap(v=>a.get(v).covers)),wallU:c.junction?[tn(l).u0,tn(l).u1]:null}:null;CS(f.solid,f.lines,g,c.ov,u.elevation,f.glass,p,b,m,_)}for(let l of C0(s,c=>a.get(c).ov)){let c=s.find(x=>x.id===l.section),u=tf(i,c)??n[0],h=r.get(u.id);if(!h)continue;let f=(x,_=0)=>[x[0],x[1]-u.elevation-_,x[2]],[d,p,b]=l.pts,g=new q(Uo),m=new q(No);h.solid.tri(f(d),f(p),f(b),g),h.solid.tri(f(d,Oe),f(b,Oe),f(p,Oe),m);for(let[x,_]of[[p,b]])h.solid.tri(f(x),f(_),f(_,Oe),m),h.solid.tri(f(x),f(_,Oe),f(x,Oe),m),h.lines.seg(f(x),f(_),Nr);h.lines.seg(f(d,-.004),f(b,-.004),mi),h.lines.seg(f(d,-.004),f(p,-.004),mi)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function CS(i,t,e,n,r,o=i,s=!1,a=[],l=null,c=null){let u=tn(e),h=en(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,f.a),p=Math.max(0,f.b),b=u.w,g=u.u0-Math.max(0,f.u0),m=u.u1+Math.max(0,f.u1),x=(P,L,I)=>{let[O,B]=u.at(P,L);return[O,I-r,B]},_=new q(Uo),v=new q(No),M=new q(Wm),T=(P,L)=>{for(let I=1;I+1<P.length;I++)i.tri(P[0],P[I],P[I+1],L)},C=[],y=[],E=[],S=[null,null],w=[];if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,L=e.shape==="parapet",I=e.points&&e.points.length>=3?F0(e,L?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):L?[u.at(u.u0,0),u.at(u.u1,0),u.at(u.u1,b),u.at(u.u0,b)]:[u.at(g,-d),u.at(m,-d),u.at(m,b+p),u.at(g,b+p)];De(i,I,P-r,P-r+.25,No,Uo,{bottom:!0});for(let O=0;O<I.length;O++){let B=I[O],z=I[(O+1)%I.length];t.seg([B[0],P-r+.252,B[1]],[z[0],P-r+.252,z[1]],mi),t.seg([B[0],P-r,B[1]],[z[0],P-r,z[1]],Nr)}if(L){let O=H=>qn(H)>=0?H:[...H].reverse(),B=O(I),z=Ec(B,-.2),G=B.length;for(let H=0;H<G;H++){let X=O([B[H],B[(H+1)%G],z[(H+1)%G],z[H]]);De(i,X,P-r+.25,P-r+.65,No,Uo),t.seg([B[H][0],P-r+.652,B[H][1]],[B[(H+1)%G][0],P-r+.652,B[(H+1)%G][1]],mi),t.seg([z[H][0],P-r+.652,z[H][1]],[z[(H+1)%G][0],P-r+.652,z[(H+1)%G][1]],mi)}}}else{let P=Rr(e,f);C=P.faces;for(let L of a)C=C.flatMap(I=>Qh(I,L));if(y=P.rim,E=P.ridges,S=P.gables,c){for(let L of C)for(let I of c.lines){let O=k0(L,I.poly);if(O)for(let[B,z]of ef(O[0],O[1],c.covers.filter(G=>G!==I)))w.push([B,z])}C=C.flatMap(L=>U0(L,c.covers))}}let F=!!e.open,D=new q(gS);for(let P of C){if(F){for(let L=1;L+1<P.length;L++)o.tri(x(P[0][0],P[0][1],P[0][2]),x(P[L][0],P[L][1],P[L][2]),x(P[L+1][0],P[L+1][1],P[L+1][2]),D);continue}T(P.map(([L,I,O])=>x(L,I,O)),_),T(P.map(([L,I,O])=>x(L,I,O-Oe)),v)}let A=(P,L)=>c?ef(P,L,c.covers):[[P,L]];for(let P=0;P<y.length;P++)for(let[[L,I,O],[B,z,G]]of A(y[P],y[(P+1)%y.length]))F||T([x(L,I,O),x(B,z,G),x(B,z,G-Oe),x(L,I,O-Oe)],v),t.seg(x(L,I,O),x(B,z,G),F?mi:Nr);if(F){PS(i,t,u,h,f,x,r);return}for(let[P,L]of E)for(let[[I,O,B],[z,G,H]]of A(P,L))t.seg(x(I,O,B+.004),x(z,G,H+.004),mi);for(let[[P,L,I],[O,B,z]]of w)t.seg(x(P,L,I+.004),x(O,B,z+.004),mi);let R=e.base;if(!s){for(let P of[0,1]){let L=S[P];if(!L||l!==null&&l!==P)continue;let I=IS(L,R-Oe),O=P===0?u.u0:u.u1;I.length>=3&&T(I.map(([B,z])=>x(O,B,z)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[P,L]=c?.wallU??[u.u0,u.u1];for(let I of[0,b]){let O=h.y(I)-Oe;O>R+.02&&T([x(P,I,R),x(L,I,R),x(L,I,O),x(P,I,O)],M)}}else if(e.eave_a>R+.02)for(let[P,L,I,O]of[[u.u0,0,u.u1,0],[u.u1,0,u.u1,b],[u.u1,b,u.u0,b],[u.u0,b,u.u0,0]])T([x(P,L,R),x(I,O,R),x(I,O,e.eave_a),x(P,L,e.eave_a)],M)}}function PS(i,t,e,n,r,o,s){let a=e.w,l=.12,c=.16,u=r.a>0,h=r.b>0,f=r.u0>0,d=r.u1>0,p=(m,x,_,v,M,T)=>{let C=[e.at(m,_),e.at(x,_),e.at(x,v),e.at(m,v)],y=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);De(i,y<0?[...C].reverse():C,M-s,T-s,bS,xS,{bottom:!0})},b=s;for(let[m,x]of[[0,u],[a,h]]){if(!x)continue;let _=n.y(m)-.03,v=m===0?0:a-l;p(e.u0,e.u1,v,v+l,_-c,_),t.seg(o(e.u0,m,_-c),o(e.u1,m,_-c),Nr)}for(let[m,x]of[[e.u0,f],[e.u1-l,d]])if(x)for(let _=0;_<6;_++){let v=a*_/6,M=a*(_+1)/6,T=Math.min(n.y(v),n.y(M))-.03;p(m,m+l,v,M,T-c,T)}let g=[];for(let[m,x]of[[0,u],[a-l,h]]){if(!x)continue;let _=e.u1-e.u0-l,v=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=v;M++){let T=e.u0+_*M/v;M===0&&!f||M===v&&!d||g.push([T,m])}}if(!u&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&f||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let _=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,_)}}function IS(i,t){let e=[];for(let o=0;o<i.length;o++){let[s,a]=i[o];a>=t&&e.push([s,a]);let l=i[o+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([s+(l[0]-s)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Js={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Ym={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},an=.2,FS=-.06,LS=.01,js=8,Gc=.42,Mf=.42;function Zm(i,t,e,n=[],r=[],o){let{walls:s,open:a}=fi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(R,P,L,I)=>{let O=I?.slope?Math.min(L,Er(I.slope,R,P)):L,B=o?o(R,P):null;return B===null?O:Math.max(.05,Math.min(O,B))},c=(R,P)=>{let L=o?o(R,P):null;return L!==null&&L<FS},u=(R,P,L,I,O,B)=>{if(!o&&!B?.slope)return O;let z=O,G=Math.max(2,Math.ceil((I-L)/.25)+1);for(let H=0;H<G;H++){let X=L+(I-L)*H/(G-1);z=Math.min(z,l(R[0]+P[0]*X,R[1]+P[1]*X,O,B))}return z},h=new re(!0,!0),f=[],d=new Ue,p=[];for(let R of i.rooms){if(R.points.length<3)continue;let P=Hc(R.points),L=Ym[R.floor_material]??Ym.wood,I=new q(L.color),O=n.flatMap(j=>{if(q0(j,P))return[j];if(!X0(j))return[];let nt=Fo(P,j);return nt.length>=3&&Math.abs(qn(nt))>.01?[Hc(nt)]:[]}),B=$0(O).map(j=>K0(Hc(j),.003));p.push(...B);let z=[...P,...B.flat()],G=h.count;for(let[j,nt,Y]of nn(P,B)){let V=z[j],K=z[nt],et=z[Y];h.tri([V[0],0,V[1]],[et[0],0,et[1]],[K[0],0,K[1]],I,I,I,[V[0],V[1],et[0],et[1],K[0],K[1]],ne,L.tile)}f.push({roomId:R.id,start:G,end:h.count,color:L.color});let H=new q(Js.slab),X=j=>{for(let nt=0;nt<j.length;nt++){let Y=j[nt],V=j[(nt+1)%j.length];h.tri([Y[0],-an,Y[1]],[Y[0],0,Y[1]],[V[0],0,V[1]],H),h.tri([Y[0],-an,Y[1]],[V[0],0,V[1]],[V[0],-an,V[1]],H)}};X(P);for(let j of B){X([...Hc(j)].reverse());for(let nt=0;nt<j.length;nt++){let Y=j[nt],V=j[(nt+1)%j.length];d.seg([Y[0],.006,Y[1]],[V[0],.006,V[1]],er),d.seg([Y[0],-an,Y[1]],[V[0],-an,V[1]],Ai)}}}let b=new Map,g=[],m=new Map,x=new Map;for(let R of s){if(!R.free)continue;let P=A0(R,i.rooms);P!==null&&x.set(R,P)}for(let R of s){let P="interior",L=null,I=x.get(R);if(R.exterior||I!==void 0){let B=R.b[0]-R.a[0],z=R.b[1]-R.a[1],G=Math.hypot(B,z)||1,H=I===!1?-1:1,X=[H*z/G,-H*B/G],j=(Math.round(Math.atan2(X[1],X[0])/(2*Math.PI)*js)%js+js)%js;P=`s${j}`;let nt=j/js*2*Math.PI;L=[Math.cos(nt),Math.sin(nt)]}let O=b.get(P);O===void 0&&(O=g.length,b.set(P,O),g.push(L)),m.set(R,O)}let _=new Map,v=[];for(let R of i.openings){let P=Co(R,i.rooms,i.walls??[]);if(!P)continue;let L=Po(s,R,P);if(!L)continue;let{wall:I,s:O}=L,B=Xc([I.b[0]-I.a[0],I.b[1]-I.a[1]]),z=Math.hypot(I.b[0]-I.a[0],I.b[1]-I.a[1]),G=O-R.width/2<-1e-6?Xh(s,I,!1):null,H=O+R.width/2>z+1e-6?Xh(s,I,!0):null,X=te=>te?Math.hypot(te.b[0]-te.a[0],te.b[1]-te.a[1]):0,j=-X(G),nt=z+X(H),Y=Math.min(R.width,nt-j),V=Math.max(j,Math.min(nt-Y,O-Y/2)),K=P.room.points,et=x.get(I),tt=I.free?et??B[0]*(K[1][0]-K[0][0])+B[1]*(K[1][1]-K[0][1])>0:I.exterior||I.roomLeft===R.room_id,st=[-B[1],B[0]],ct=tt?st:[-st[0],-st[1]],ut=Math.min(u(I.a,B,V,V+Y,Qs(I,i.height),I)-.02,R.sill+R.height),gt=Math.max(0,Math.min(R.sill,ut-.1)),Nt=[ct[1],-ct[0]],Ft=B[0]*Nt[0]+B[1]*Nt[1]>0,zt={opening:R,bucket:m.get(I),start:[I.a[0]+B[0]*V,I.a[1]+B[1]*V],axis:B,width:Y,toRoom:ct,faceRoom:tt?I.left:I.right,faceOut:tt?I.right:I.left,sill:gt,top:ut,hingeAtStart:R.hinge==="left"===Ft,exterior:I.exterior||et!==void 0};v.push(zt);let Ut=_.get(I);Ut||_.set(I,Ut=[]),Ut.push({s0:V,s1:V+Y,sill:gt,top:ut,info:zt});for(let te of[G,H]){if(!te)continue;let he=be=>(I.a[0]+B[0]*be-te.a[0])*B[0]+(I.a[1]+B[1]*be-te.a[1])*B[1],Ae=Math.max(0,he(V)),Z=Math.min(X(te),he(V+Y));if(Z-Ae<1e-4)continue;let Ie=_.get(te);Ie||_.set(te,Ie=[]),Ie.push({s0:Ae,s1:Z,sill:gt,top:ut,info:zt,cont:!0})}}let M=Math.min(i.cut_height,i.height),T=new re;for(let R of s){let P=m.get(R),L=Xc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),I=(_.get(R)??[]).sort((V,K)=>V.s0-K.s0),O=Qs(R,i.height),B=[],z=[-1/0,...new Set(I.flatMap(V=>[V.s0,V.s1])).values(),1/0].sort((V,K)=>V-K);for(let V=0;V+1<z.length;V++){let K=z[V],et=z[V+1];if(et-K<1e-6)continue;let tt=Number.isFinite(K)&&Number.isFinite(et)?(K+et)/2:Number.isFinite(K)?K+1:et-1,st=I.filter(gt=>gt.s0<tt&&gt.s1>tt).map(gt=>[gt.sill,gt.top]).sort((gt,Nt)=>gt[0]-Nt[0]),ct=[],ut=-an;for(let[gt,Nt]of st)gt>ut+1e-4&&ct.push([ut,gt<1e-4?-LS:gt]),ut=Math.max(ut,Nt);O>ut+1e-4&&ct.push([ut,O]),B.push({t0:K,t1:et,ranges:ct})}let G=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),H=(o||R.slope)&&u(R.a,L,0,G,O,R)<O-.001,X=H?B.flatMap(V=>{let K=Math.max(V.t0,-.5),et=Math.min(V.t1,G+.5),tt=Math.max(1,Math.ceil((et-K)/.3));return Array.from({length:tt},(st,ct)=>({t0:ct===0?V.t0:K+(et-K)*ct/tt,t1:ct===tt-1?V.t1:K+(et-K)*(ct+1)/tt,ranges:V.ranges,inner0:ct>0,inner1:ct<tt-1}))}):B.map(V=>({...V,inner0:!1,inner1:!1})),j=V=>(V[0]-R.a[0])*L[0]+(V[1]-R.a[1])*L[1],nt=V=>{if(!o)return[V];let K=Sf(R.footprint,R.a,L,V.t0,V.t1),et=K.filter(([ut,gt])=>c(ut,gt)).length;if(et===0)return[V];if(et===K.length)return[];let tt=Math.max(V.t0,-.5),st=Math.min(V.t1,G+.5),ct=Math.max(1,Math.ceil((st-tt)/.05));return Array.from({length:ct},(ut,gt)=>({t0:gt===0?V.t0:tt+(st-tt)*gt/ct,t1:gt===ct-1?V.t1:tt+(st-tt)*(gt+1)/ct,ranges:V.ranges,inner0:gt>0||V.inner0,inner1:gt<ct-1||V.inner1})).filter(ut=>!Sf(R.footprint,R.a,L,ut.t0,ut.t1).every(([gt,Nt])=>c(gt,Nt)))},Y=V=>{let K=ut=>l(R.a[0]+L[0]*ut,R.a[1]+L[1]*ut,O,R),et=Math.max(V.t0,0),tt=Math.min(V.t1,G);if(tt-et<.01||(K(et)-M)*(K(tt)-M)>=0)return[V];let st=K(tt)>M;for(let ut=0;ut<24;ut++){let gt=(et+tt)/2;K(gt)>M===st?tt=gt:et=gt}let ct=st?tt:et;return[{...V,t1:ct,inner1:!0},{...V,t0:ct,inner0:!0}]};for(let V of H?X.flatMap(nt).flatMap(Y):X){let K=Sf(R.footprint,R.a,L,V.t0,V.t1);if(K.length<3)continue;let et=(ct,ut)=>Math.abs(j(ct)-ut)<1e-4,tt=(ct,ut)=>V.inner0&&et(ct,V.t0)&&et(ut,V.t0)||V.inner1&&et(ct,V.t1)&&et(ut,V.t1),st=H?Math.min(...K.map(([ct,ut])=>l(ct,ut,O,R))):O;for(let[ct,ut]of V.ranges){let gt=Math.min(ut,H?Math.max(...K.map(([Ut,te])=>l(Ut,te,O,R))):ut);if(gt-ct<1e-4||st-ct<.01)continue;let Nt=ct>.01,Ft=H&&ut>st,zt=(Ut,te)=>Math.min(ut,l(Ut,te,O,R));if(ct<M-1e-6){let Ut=gt>M+1e-6?rm+P:nr+P,te=Ft&&st<M?(he,Ae)=>Math.min(M,zt(he,Ae)):Math.min(gt,M);De(T,K,ct,te,Js.wall,Js.wallTop,{aoFrom:0,bottom:Nt,fold:nr+P,topFold:Ut,skipSide:tt})}gt>M+1e-6&&st>M-1e-6&&De(T,K,Math.max(ct,M),Ft?zt:gt,Js.wall,Js.wallTop,{aoFrom:0,fold:P,bottom:Nt&&ct>=M,skipSide:tt})}}}let C=s.flatMap(R=>R.footprint),y=NS(s,C),E=new Ue;E.p.push(...d.p),E.c.push(...d.c),E.f.push(...d.f);let S=(R,P)=>(_.get(R)??[]).filter(P);for(let R of y.edges){let P=m.get(R.wall);for(let[I,O]of Wc(R,S(R.wall,B=>B.sill<=.005)))E.seg([I[0],.004,I[1]],[O[0],.004,O[1]],im);for(let[I,O]of Wc(R,S(R.wall,B=>B.sill<M&&B.top>M)))E.seg([I[0],M,I[1]],[O[0],M,O[1]],uf,Lc+P);let L=Qs(R.wall,i.height);for(let[I,O]of Wc(R,S(R.wall,B=>B.top>=L-.021))){if(!o&&!R.wall.slope){E.seg([I[0],L,I[1]],[O[0],L,O[1]],er,L<=M+1e-6?nr+P:P);continue}let B=Math.max(1,Math.ceil(Math.hypot(O[0]-I[0],O[1]-I[1])/.3));for(let z=0;z<B;z++){let G=[I[0]+(O[0]-I[0])*z/B,I[1]+(O[1]-I[1])*z/B],H=[I[0]+(O[0]-I[0])*(z+1)/B,I[1]+(O[1]-I[1])*(z+1)/B];if(c(G[0],G[1])&&c(H[0],H[1]))continue;let X=l(G[0],G[1],L,R.wall),j=l(H[0],H[1],L,R.wall);E.seg([G[0],X,G[1]],[H[0],j,H[1]],er,Math.max(X,j)<=M+1e-6?nr+P:P)}}}let w=(R,P)=>l(P[0],P[1],Qs(R,i.height),R);for(let R of y.corners){if(c(R.p[0],R.p[1]))continue;let P=R.walls.reduce((I,O)=>w(O,R.p)>w(I,R.p)+1e-6?O:I,R.wall),L=l(R.p[0],R.p[1],Qs(P,i.height),P);E.segSplit([R.p[0],.004,R.p[1]],[R.p[0],L,R.p[1]],Ai,Math.min(M,L),m.get(P))}for(let R of y.joints){let[P,L]=R.walls,I=[w(P,R.a),w(L,R.a)],O=[w(P,R.b),w(L,R.b)];if(Math.abs(I[0]-I[1])<.01&&Math.abs(O[0]-O[1])<.01)continue;let B=I[1]+O[1]>=I[0]+O[0]?L:P,z=m.get(B),G=Math.max(...I),H=Math.max(...O);E.seg([R.a[0],G,R.a[1]],[R.b[0],H,R.b[1]],er,Math.max(G,H)<=M+1e-6?nr+z:z);for(let[X,j]of[[R.a,I],[R.b,O]]){let nt=Math.min(...j),Y=Math.max(...j);Y-nt>.01&&E.segSplit([X[0],nt,X[1]],[X[0],Y,X[1]],Ai,M,z)}}for(let R of _.values())for(let P of R)P.cont||DS(E,P,M);let F=US(y.edges,i.rooms,_),D=new re;Lm(T,E,i,D);for(let R of r)_f(T,E,R.face,R.field,i.elevation);let A=[];for(let R of i.furniture){if(x0(R.type))continue;let P=T.count,L=E.p.length/6,I=R,O=Ke(i,I);if(_c.has(I.type)){let B=Sc(s,I,i.height,O);I={...I,x:B.x,z:B.z},O=B.y}Nc(T,E,F,I,O),O+I.h>M+.05&&I.type!=="ac_unit"&&(om(T,P,M,hf),sm(E,L,M,hf)),A.push({id:I.id,start:P,end:T.count})}return{floor:h.geometry(),roomTris:f,holes:p,walls:T.geometry(),water:D.geometry(),lines:E.geometry(),shadow:F.geometry(),buckets:g,openings:v,walls2d:s,openRooms:a,wallBuckets:s.map(R=>m.get(R)),furnitureTris:A,roofUnder:o}}function DS(i,t,e){let{info:n}=t,r=n.bucket,o=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],s=l=>l>e+1e-6?r:ne,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(o(c,l,a),o(c,l,t.top),Ai,e,r);i.seg(o(t.s0,l,t.top),o(t.s1,l,t.top),Ai,s(t.top)),t.sill>.01&&i.seg(o(t.s0,l,t.sill),o(t.s1,l,t.sill),Ai,s(t.sill))}for(let l of[t.s0,t.s1])i.seg(o(l,n.faceRoom,t.top),o(l,-n.faceOut,t.top),Ai,s(t.top)),t.sill>.01&&i.seg(o(l,n.faceRoom,t.sill),o(l,-n.faceOut,t.sill),Ai,s(t.sill)),t.sill<e&&t.top>e&&i.seg(o(l,n.faceRoom,e),o(l,-n.faceOut,e),uf,Lc+r)}function Sf(i,t,e,n,r){let o=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],s=i;return Number.isFinite(n)&&(s=$m(s,a=>o(a)-n)),Number.isFinite(r)&&(s=$m(s,a=>r-o(a))),s}function $m(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=t(r),a=t(o);if(s>=0&&e.push(r),s>=0!=a>=0){let l=s/(s-a);e.push([r[0]+(o[0]-r[0])*l,r[1]+(o[1]-r[1])*l])}}return e}var qm=i=>Math.round(i*1e3),ta=i=>`${qm(i[0])},${qm(i[1])}`,Km=(i,t)=>{let e=ta(i),n=ta(t);return e<n?`${e}|${n}`:`${n}|${e}`};function OS(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],o=i[(n+1)%i.length],s=o[0]-r[0],a=o[1]-r[1],l=s*s+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let f=((h[0]-r[0])*s+(h[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*s)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=r;for(let h of c){let f=[r[0]+s*h,r[1]+a*h];ta(f)!==ta(u)&&e.push([u,f]),u=f}e.push([u,o])}return e}function NS(i,t){let e=i.map(u=>({wall:u,edges:OS(u.footprint,t)})),n=new Map,r=new Map;for(let{wall:u,edges:h}of e)for(let[f,d]of h){let p=Km(f,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(u):r.set(p,{a:f,b:d,walls:[u]})}let o=[];for(let u of r.values())u.walls.length===2&&u.walls[0]!==u.walls[1]&&o.push({a:u.a,b:u.b,walls:[u.walls[0],u.walls[1]]});let s=[],a=new Map,l=(u,h,f)=>{let d=ta(u),p=a.get(d);p||a.set(d,p={p:u,wall:h,walls:[],d:[]}),p.d.push(f),p.walls.includes(h)||p.walls.push(h)};for(let{wall:u,edges:h}of e)for(let[f,d]of h){if(n.get(Km(f,d))!==1)continue;let p=Math.hypot(d[0]-f[0],d[1]-f[1]);if(p<1e-4)continue;s.push({a:f,b:d,wall:u});let b=[(d[0]-f[0])/p,(d[1]-f[1])/p];l(f,u,b),l(d,u,b)}let c=[];for(let{p:u,wall:h,walls:f,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:u,wall:h,walls:f});return{edges:s,corners:c,joints:o}}function Wc(i,t){if(!t.length)return[[i.a,i.b]];let e=Xc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Xc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],o=r(i.a),s=r(i.b),a=Math.min(o,s),l=Math.max(o,s),c=[[a,l]];for(let h of t)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let p=[];return h.s0>f&&p.push([f,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let u=h=>{let f=(h-o)/(s-o||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>o<=s?[u(h),u(f)]:[u(f),u(h)])}function US(i,t,e){let n=new re,r=new q(Mf,Mf,Mf),o=new q(1,1,1),s=.002;for(let a of i)for(let[l,c]of Wc(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&qt(p,m.points)))continue;let b=[l[0]+d[0]*Gc,l[1]+d[1]*Gc],g=[c[0]+d[0]*Gc,c[1]+d[1]*Gc];n.tri([l[0],s,l[1]],[b[0],s,b[1]],[g[0],s,g[1]],r,o,o),n.tri([l[0],s,l[1]],[g[0],s,g[1]],[c[0],s,c[1]],r,o,r)}return n}function Jm(i,t){let e=t.furniture.filter(o=>o.type==="stairwell").map(Ji),n=i.filter(o=>o.elevation<t.elevation).sort((o,s)=>s.elevation-o.elevation)[0];if(!n)return e;let r=n.furniture.filter(o=>(g0.has(o.type)||Me(o.type)?.hole)&&n.elevation+o.h>=t.elevation-.3).map(Ji);return[...e,...r]}function Qs(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Xc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Hc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var kS=new q(1516340),BS=new q(527897),wf=new q(1779256),ea=new q(1120808),zS=new q(4163256),jm=new q(5995161),VS=new q(2240842),GS=new q(1318704),HS=.35,ko=.8,WS=.2,Qm=.1;function XS(i,t,e,n){let r=-1/0;for(let o of i.floors)if(!(o.elevation>.3))for(let s of o.outdoor??[])s.points.length<3||s.type==="pool"||s.type==="balcony"||$n(s.type)||!qt(e,s.points)||(r=Math.max(r,o.elevation+Tr(o,s)+wo[s.type]-t.elevation));return r>n?r-n:0}function tg(i,t,e,n=!1){if(i.settings.terrain?.earth===!1||t.elevation>.3)return null;let r=rf(i,t);if(!r)return null;let o=(p,b)=>To(p,b)-t.elevation,s=n&&r.some(([p,b])=>o(p,b)<-an-.03);if(!s&&!of(i,t))return null;let a=t.height,l=-HS,c=(p,b)=>Math.min(a,To(p,b)-t.elevation),u=new re,h=new re,f=new Ue,d=(p,b,g,m,x,_,v,M)=>{let T=[b[0]-p[0],b[2]-p[2]];-T[1]*x[0]+T[0]*x[1]>0?(M.tri(p,b,g,_,_,v),M.tri(p,g,m,_,v,v)):(M.tri(p,g,b,_,v,_),M.tri(p,m,g,_,v,v))};for(let p=0;p<r.length;p++){let b=r[p],g=r[(p+1)%r.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<1e-4)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[x[1],-x[0]],v=[(b[0]+g[0])/2+_[0]*.05,(b[1]+g[1])/2+_[1]*.05];qt(v,r)&&(_=[-_[0],-_[1]]);let M=(S,w=.012)=>[b[0]+x[0]*S+_[0]*w,b[1]+x[1]*S+_[1]*w],T=[];for(let S of e){if(S.opening.type!=="window"||!S.exterior||S.opening.well===!1)continue;let w=S.start[0]+S.axis[0]*(S.width/2)-S.toRoom[0]*S.faceOut,F=S.start[1]+S.axis[1]*(S.width/2)-S.toRoom[1]*S.faceOut,D=(w-b[0])*x[0]+(F-b[1])*x[1],A=(w-b[0])*_[0]+(F-b[1])*_[1];Math.abs(S.axis[0]*x[0]+S.axis[1]*x[1])<.99||A<-.08||A>.6||D<-.05||D>m+.05||W0(i,t,S.exterior,S.sill,[w,F])&&T.push({s0:Math.max(0,D-S.width/2-Qm),s1:Math.min(m,D+S.width/2+Qm),bottom:Math.max(l+.05,S.sill-WS),rim:S.opening.well_rim??0,off:Math.max(0,A)})}let C=new Set([0,m]);for(let S of T)C.add(S.s0),C.add(S.s1);let y=[...C].sort((S,w)=>S-w),E=[];for(let S=0;S<y.length-1;S++){let w=Math.max(1,Math.ceil((y[S+1]-y[S])/.5));for(let F=0;F<w;F++)E.push(y[S]+(y[S+1]-y[S])*F/w)}E.push(m);for(let S=0;S<E.length-1;S++){let w=E[S],F=E[S+1],D=T.find(G=>w>=G.s0-1e-6&&F<=G.s1+1e-6),A=M(w),R=M(F),P=c(A[0],A[1]),L=c(R[0],R[1]),I=D?Math.min(P,D.bottom):P,O=D?Math.min(L,D.bottom):L;if(I>l+.01||O>l+.01){let G=Math.min(I,l),H=Math.min(O,l);d([A[0],G,A[1]],[R[0],H,R[1]],[R[0],Math.max(O,l),R[1]],[A[0],Math.max(I,l),A[1]],_,BS,kS,u)}let B=o(A[0],A[1]),z=o(R[0],R[1]);if(s&&(B<-an-.01||z<-an-.01)&&d([A[0],Math.min(B,-an),A[1]],[R[0],Math.min(z,-an),R[1]],[R[0],-an,R[1]],[A[0],-an,A[1]],_,GS,VS,u),P>l||L>l||s&&(B<-an||z<-an)){let G=s?Math.min(B,Math.max(P,l)):Math.max(P,l),H=s?Math.min(z,Math.max(L,l)):Math.max(L,l);f.seg([A[0],G+.004,A[1]],[R[0],H+.004,R[1]],zS)}}for(let S of T){let w=M(S.s0,S.off),F=M(S.s1,S.off),D=[w[0]+_[0]*ko,w[1]+_[1]*ko],A=[F[0]+_[0]*ko,F[1]+_[1]*ko],R=[(w[0]+F[0]+D[0]+A[0])/4,(w[1]+F[1]+D[1]+A[1])/4],P=XS(i,t,R,c(R[0],R[1])),L=Math.max(S.rim,P>0?P+.02:0),I=X=>c(X[0],X[1])+L,O=S.bottom,B=(X,j)=>[X[0],j,X[1]];h.tri(B(w,O),B(F,O),B(A,O),ea),h.tri(B(w,O),B(A,O),B(D,O),ea);let z=(X,j)=>{h.tri(B(X,O),B(j,O),B(j,I(j)),ea,ea,wf),h.tri(B(X,O),B(j,I(j)),B(X,I(X)),ea,wf,wf)};z(w,D),z(F,A),z(D,A);let G=X=>[X[0],I(X)+.01,X[1]];for(let[X,j]of[[w,F],[F,A],[A,D],[D,w]])f.seg(G(X),G(j),jm);let H=Math.max(3,Math.round((S.s1-S.s0)/.12));for(let X=1;X<H;X++){let j=X/H,nt=[w[0]+(F[0]-w[0])*j,w[1]+(F[1]-w[1])*j];f.seg(G(nt),G([nt[0]+_[0]*ko,nt[1]+_[1]*ko]),jm)}}}return u.count||h.count?{earth:u,wells:h,lines:f}:null}var eg=i=>Math.round(i*1e3)/1e3;function YS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let o=[(n[0]-e[0])/r,(n[1]-e[1])/r],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let h=l.points[(u+1)%l.points.length];return s(c)>.02||s(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function ng(i,t,e,n,r,o=.05){let s=i.rooms.find(f=>f.points.length>=3&&qt([t.x,t.z],f.points));if(!s)return[e,n];let a=s.points,l=un(a)>=0?1:-1,c=Ji({...t}),u=e,h=n;for(let f=0;f<2;f++){let d=Ji({...t,x:u,z:h});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],_=[-x[1]*l,x[0]*l],v=YS(i,s.id,b,g)?r/2:0,M=0;d.forEach((T,C)=>{let y=(T[0]-b[0])*x[0]+(T[1]-b[1])*x[1];if(y<-.01||y>m+.01)return;let E=(T[0]-b[0])*_[0]+(T[1]-b[1])*_[1]-v,S=c[C];(S[0]-b[0])*_[0]+(S[1]-b[1])*_[1]-v<-o||E<M&&(M=E)}),M<-1e-4&&(u-=_[0]*M,h-=_[1]*M)}}return[eg(u),eg(h)]}var $S=500,qS=1e3;function ig(i,t){let e=t-i.timeStamp;return e>qS&&e<6e4}var rg=.12,og=1.35,KS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Yc=class{view={target:new $,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(o,s,a)=>{t.addEventListener(o,s,a),this.listeners.push([o,s])};r("pointerdown",o=>this.onDown(o)),r("pointermove",o=>this.onMove(o)),r("pointerup",o=>this.onUp(o)),r("pointercancel",o=>this.onUp(o)),r("wheel",o=>this.onWheel(o),{passive:!1}),r("contextmenu",o=>o.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(t-c)/u),f=KS(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Tf(this.view.phi+this.velocity.phi,rg,og),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:o,phi:s}=this.view;return this.camera.position.set(n.x+r*Math.sin(s)*Math.sin(o),n.y+r*Math.cos(s),n.z+r*Math.sin(s)*Math.cos(o)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},o=t.theta??r.theta;for(;o-r.theta>Math.PI;)o-=2*Math.PI;for(;o-r.theta<-Math.PI;)o+=2*Math.PI;let s=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:o,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:r,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},$S)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(ig(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let o=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-o.left,this.down.y-o.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let o=e.type==="mouse";if(o&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!o))this.pan(n,r);else{let a=this.el.clientHeight||1,l=-n/a*3.2,c=-r/a*2.4;this.view.theta+=l,this.view.phi=Tf(this.view.phi+c,rg,og),this.velocity={theta:l,phi:c}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let o=this.pinchState();this.pinch&&o&&(this.zoom(this.pinch.dist/Math.max(1,o.dist)),this.pan(o.mid[0]-this.pinch.mid[0],o.mid[1]-this.pinch.mid[1])),this.pinch=o}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top,o=performance.now();o-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,r)):(this.lastTap=o,this.events.tap(n,r))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!ig(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=Tf(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,o=new $(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),s=new $(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(o,-t*r),this.view.target.addScaledVector(s,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Tf(i,t,e){return Math.min(e,Math.max(t,i))}function gi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Kc=5,$c=512,sg=.7,qc=class{projectors=new Map;loader=new br;loggedIds="";depthMaterial=new Ht({colorWrite:!1,side:ee});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,o]of this.projectors)e.has(r)||this.drop(o);for(let[r,o]of e){let s=this.projectors.get(r);if(!s){let a=new $e($c,$c);a.depthTexture=new ai($c,$c),s={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new on(60,16/9,sg,40),target:a,matrix:new Ee,uniforms:{uProjMat:{value:new Ee},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},s.camera.layers.set(Kc),this.projectors.set(r,s)}s.url=o,this.fetch(s)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=ke;let r=n.image;r?.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r?.width,"x",r?.height),t.texture?.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,o){for(let s of this.projectors.values()){let a=s.texture?r(s.id):null;if(s.texture&&!a&&!s.noPoseLogged&&(s.noPoseLogged=!0,console.warn(`NeonPlan lab: ${s.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!a){for(let b of s.overlays.values())b.visible=!1;continue}let l=new Set(n.map(b=>b.key));for(let[b,g]of s.overlays)l.has(b)||(g.parent?.remove(g),g.material.dispose(),s.overlays.delete(b));for(let b of n){let g=s.overlays.get(b.key);(!g||g.parent!==b.parent)&&(g&&(g.parent?.remove(g),g.material.dispose()),g=new vt(b.geometry,this.material(s,b.masks)),g.renderOrder=2.5,g.frustumCulled=!1,b.parent.add(g),s.overlays.set(b.key,g)),g.geometry!==b.geometry&&(g.geometry=b.geometry),g.visible=b.visible}let c=`${a.position.toArray().map(b=>b.toFixed(3))},${a.direction.toArray().map(b=>b.toFixed(3))},${a.fov},${a.reach},${s.aspect.toFixed(3)},${o}`;if(c===s.poseKey)continue;s.poseKey=c;let u=s.camera,h=Math.min(150,Math.max(20,a.fov))*(Math.PI/180);u.fov=2*Math.atan(Math.tan(h/2)/s.aspect)*180/Math.PI,u.aspect=s.aspect,u.far=a.reach,u.near=sg,u.position.copy(a.position),u.lookAt(a.position.clone().add(a.direction)),u.updateProjectionMatrix(),s.uniforms.uNearFar.value=[u.near,u.far],u.updateMatrixWorld(),s.uniforms.uProjMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);let f=[];for(let b of this.projectors.values())for(let g of b.overlays.values())g.visible&&f.push(g);for(let b of f)b.visible=!1;let d=t.getRenderTarget(),p=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(s.target),t.clear(),t.render(e,u),t.setRenderTarget(d),e.overrideMaterial=p;for(let b of f)b.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){for(let e of t.overlays.values())e.parent?.remove(e),e.material.dispose();t.texture?.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Ht({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?gi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(o,s)=>{r?.(o,s),Object.assign(o.uniforms,t.uniforms),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function ag(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function lg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[o,s,a]=[i[r-1],i[r],i[r+1]],l=ag(o,s),c=ag(s,a),u=Math.min(t,l*.45,c*.45),h=[(o[0]-s[0])/l,(o[1]-s[1])/l,(o[2]-s[2])/l],f=[(a[0]-s[0])/c,(a[1]-s[1])/c,(a[2]-s[2])/c];if(u<.005||h[0]*f[0]+h[1]*f[1]+h[2]*f[2]<-.999){n.push(s);continue}let d=[s[0]+h[0]*u,s[1]+h[1]*u,s[2]+h[2]*u],p=[s[0]+f[0]*u,s[1]+f[1]*u,s[2]+f[2]*u];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,_=g*g;n.push([m*d[0]+x*s[0]+_*p[0],m*d[1]+x*s[1]+_*p[1],m*d[2]+x*s[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var cg=new q(7568261),ug=new q(4869974),ZS=new q(3116287),hg=new q(3948872),Ef=Ur([.35,.85,.4]),fg=10;function Ur(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function na(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function dg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Ur(na(i,t));return[e,Ur(na(i,e))]}function Ri(i,t){let e=.5+.5*Math.max(0,t[0]*Ef[0]+t[1]*Ef[1]+t[2]*Ef[2]);return i.clone().multiplyScalar(e)}function Bo(i,t,e,n,r,o=!1){let s=Ur([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=dg(s),c=(u,h)=>{let f=h/fg*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<fg;u++){let h=c(t,u),f=c(t,u+1),d=c(e,u),p=c(e,u+1);i.tri(h.p,p.p,d.p,Ri(r,h.n),Ri(r,p.n),Ri(r,d.n)),i.tri(h.p,f.p,p.p,Ri(r,h.n),Ri(r,f.n),Ri(r,p.n)),o&&(i.tri([...t],f.p,h.p,Ri(r,[-s[0],-s[1],-s[2]])),i.tri([...e],d.p,p.p,Ri(r,s)))}}function JS(i,t,e,n,r,o,s,a){let l=Ur(na(e,n)),c=(h,f,d)=>[t[0]+e[0]*h*r+n[0]*f*o+l[0]*d*s,t[1]+e[1]*h*r+n[1]*f*o+l[1]*d*s,t[2]+e[2]*h*r+n[2]*f*o+l[2]*d*s],u=[];for(let[h,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([h,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[h,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([h,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[h,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([h,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[h,f]of u){let d=Ri(a,h);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function pg(i,t){if(t.points.length<2)return;let e=t.radius,n=lg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[o,s]=[n[r-1],n[r]];if(Math.hypot(s[0]-o[0],s[1]-o[1],s[2]-o[2])<1e-4)continue;let a=o[1]<-.02&&s[1]<-.02?cg.clone().multiplyScalar(.55):cg;Bo(i,o,s,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let o=s=>[[r.p[0]-r.dir[0]*s,r.p[1]-r.dir[1]*s,r.p[2]-r.dir[2]*s],[r.p[0]+r.dir[0]*s,r.p[1]+r.dir[1]*s,r.p[2]+r.dir[2]*s]];if(r.kind==="sleeve"){let[s,a]=o(.03);Bo(i,s,a,e*1.22,ug,!0)}else if(r.kind==="sight"){let[s,a]=o(.08);Bo(i,s,a,e*1.08,t.water?new q(...t.water).multiplyScalar(.9):new q(10475240),!0);for(let l of o(.08)){let[c,u]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Bo(i,c,u,e*1.3,ug,!0)}}else{let[s,a]=o(.055);Bo(i,s,a,e*1.4,hg,!0);let[l]=dg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],u=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Bo(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],u,e*.35,hg,!0);let h=r.open===!1?Ur(na(r.dir,c)):r.dir,f=Ur(na(h,c)),d=[u[0]+h[0]*.045,u[1]+h[1]*.045,u[2]+h[2]*.045];JS(i,d,h,f,.1,.028,.012,ZS)}}}var Af=1.62,Zc=.2,Rf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let o=fi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=o.walls;let s=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=Co(a,e.rooms,e.walls??[]);if(!c)continue;let u=Po(this.walls,a,c);if(!u)continue;let h=u.wall,f=h.b[0]-h.a[0],d=h.b[1]-h.a[1],p=Math.hypot(f,d)||1,b=f/p,g=d/p,m=[h.a[0]+b*u.s,h.a[1]+g*u.s],x=h.left+.45,_=h.right+.45,v=[[m[0]-g*x,m[1]+b*x],[m[0]+g*_,m[1]-b*_]];if(h.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(T=>T.points.length>=3&&qt(v[1],T.points)))continue;let M=s.get(h)??[];M.push([u.s-a.width/2+.05,u.s+a.width/2-.05]),s.set(h,M),this.doors.push({centre:m,p:v})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c);u<1e-6||this.solids.push({a:a.a,u:[l/u,c/u],len:u,left:a.left,right:a.right,gaps:s.get(a)??[]})}}blocked(t,e=Zc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Zc){for(let n of this.obstacles){let r=t[0]-n.c[0],o=t[1]-n.c[1];if(Math.abs(r*n.u[0]+o*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+o*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Zc){for(let n of this.solids){let r=t[0]-n.a[0],o=t[1]-n.a[1],s=r*n.u[0]+o*n.u[1];if(s<-e||s>n.len+e)continue;let a=-r*n.u[1]+o*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>s>l+e*.6&&s<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let o=1;o<=r;o++){let s=o/r;if(this.blocked([t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]))return!1}return!0}roomAt(t){return this.rooms.find(e=>qt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>jS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Zc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),o=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],s=o.length,a=new Array(s).fill(1/0),l=new Array(s).fill(-1),c=new Array(s).fill(!1);a[0]=0;let u=new Map,h=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=u.get(b);return g===void 0&&(g=this.clear(o[d],o[p]),u.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<s;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<s;p++){if(c[p]||p===d)continue;let b=Math.hypot(o[d][0]-o[p][0],o[d][1]-o[p][1]);a[d]+b>=a[p]||h(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let f=[];for(let d=1;d>0;d=l[d])f.unshift(o[d]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let o=Co(r,this.floor.rooms,this.floor.walls??[]);if(!o)continue;let s=Po(this.walls,r,o);if(!s||!s.wall.exterior)continue;let a=s.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,h=l/u,f=c/u,d=[a.a[0]+h*s.s,a.a[1]+f*s.s],p=[d[0]-f*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-f))}}let e=[...this.rooms].sort((r,o)=>mg(o)-mg(r))[0],n=e?this.freeNear(Ei(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),o=Math.sin(e);for(let s=.2;s<n;s+=.15)if(this.blocked([t[0]+r*s,t[1]+o*s],.05))return s;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let o=0;o<24;o++){let s=o/24*Math.PI*2,a=this.sight(t,s);if(e!==null){let l=Math.abs(s-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=s)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function jS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],o=n*n+r*r||1,s=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/o));return Math.hypot(i[0]-(t[0]+n*s),i[1]-(t[1]+r*s))}function mg(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,o]=e[n],[s,a]=e[(n+1)%e.length];t+=r*a-s*o}return Math.abs(t/2)}var Cf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let o=r.start??(()=>{let s=e.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...o},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let s of t.floors)s.mask.standing.value=65535,s.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Af}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,o=this.floorY(),s=Math.cos(r);return this.v.camera.position.set(t,o,e),this.v.camera.lookAt(t+Math.cos(n)*s,o+Math.sin(r),e+Math.sin(n)*s),this.v.controls.view.target.set(t,o-Af,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Ei(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,o=0,s=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(o+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(o-=1),this.keys.has("a")&&(s-=1),this.keys.has("d")&&(s+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(o+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),o||s){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*o-Math.sin(r.yaw)*s)*l,u=(Math.sin(r.yaw)*o+Math.cos(r.yaw)*s)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-r.x,h=c-r.z,f=Math.hypot(u,h),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=u/f*d,r.z+=h/f*d,this.turnTo=Math.atan2(h,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=t?.id??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,o=1-(e-n.top)/n.height*2,{yaw:s,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,h=Math.tan(u/2),f=n.width/n.height,d=Math.cos(a),p=[Math.cos(s)*d,Math.sin(a),Math.sin(s)*d],b=[-Math.sin(s),0,Math.cos(s)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*h*f+m[0]*o*h,p[1]+b[1]*r*h*f+m[1]*o*h,p[2]+b[2]*r*h*f+m[2]*o*h];if(x[1]>=-.02)return null;let _=Af/-x[1];return[l+x[0]*_,c+x[2]*_]}bind(){let t=(s,a,l,c)=>{s.addEventListener(a,l,c),this.listeners.push([s,a,l,!!c?.capture])},e=null;t(this.surface,"pointerdown",s=>{e||(e={x:s.clientX,y:s.clientY,moved:!1,id:s.pointerId},this.surface.setPointerCapture?.(s.pointerId))}),t(this.surface,"pointermove",s=>{if(!e||s.pointerId!==e.id)return;let a=s.clientX-e.x,l=s.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=s.clientX,e.y=s.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=s=>{if(!e||s.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(s.clientX,s.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",s=>{s.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-s.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=s=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s.key.toLowerCase()),o=s=>!!s.composedPath()[0]?.closest?.("input, textarea, select");t(window,"keydown",s=>{!r(s)||o(s)||s.ctrlKey||s.metaKey||s.altKey||(s.preventDefault(),s.stopImmediatePropagation(),this.keys.add(s.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",s=>{r(s)&&(this.keys.delete(s.key.toLowerCase()),s.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function QS(i,t){let e=Me(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Pf(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,o=r?QS(n,r):null;return o?[n,o]:[n]});return{...i,furniture:e}}var gg=8,bg=1024,Ci=6,Jc=class{group=new Te;shadow;target=null;arc=new Te;glow=nw();textures=[];constructor(){this.shadow=new vt(new Gn(1,1),new Ht({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,o,s,a=0){let[l,c,u,h]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],f=Math.min(bg,Math.max(32,Math.ceil((u-l)*gg))),d=Math.min(bg,Math.max(32,Math.ceil((h-c)*gg)));if(!this.target||this.target.width!==f||this.target.height!==d){this.target?.dispose(),this.target=new $e(f,d,{minFilter:Ye,magFilter:Ye,depthBuffer:!1});let T=this.shadow.material;T.map=this.target.texture,T.needsUpdate=!0}let p=new ri,b=T=>{let C=new Float32Array(T.length/2*3);for(let E=0,S=0;E<T.length;E+=2,S+=3)C.set([T[E],-T[E+1],0],S);let y=new Ot;return y.setAttribute("position",new Et(C,3)),y},g=new vt(b(e),new Ht({color:16777215,side:ee})),m=[];for(let T of r)for(let C of nn(T))for(let y of C)m.push(T[y][0],T[y][1]);let x=new vt(b(m),new Ht({color:0,transparent:!0,opacity:0,blending:Fn,side:ee}));x.renderOrder=1,p.add(g,x);let _=new In(l,u,-c,-h,.1,10);_.position.z=1;let v=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,_),t.setRenderTarget(v);for(let T of[g,x])T.geometry.dispose(),T.material.dispose();this.shadow.scale.set(u-l,h-c,1),this.shadow.position.set((l+u)/2,o,(c+h)/2);let M=this.shadow.material;M.opacity=s,M.color.set(a),this.shadow.visible=s>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?En:_e,n=(o,s)=>{let a=ew(t.points.map(c=>c.at),o,t.points.map(c=>tw(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new vt(a,new Ht({vertexColors:!0,transparent:!0,opacity:s*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new si(xg(t.hours.flat()),new wi({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let o=this.sprite(iw(t.light),t.size*5,t.size*5,t.fade,e);o.position.set(...t.sun),this.arc.add(o)}for(let o of t.labels){let s=this.sprite(rw(`${o.rising?"\u2191":"\u2193"} ${o.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,En,!0);s.position.set(...o.at),this.arc.add(s)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:o}=t.ring,s=e[1]+.03,a=(u,h)=>{let f=r+u*Math.PI/180;return[e[0]+Math.sin(f)*h,s,e[2]-Math.cos(f)*h]},l=[];for(let u=0;u<360;u+=3)l.push(...a(u,n),...a(u+3,n));for(let u=0;u<360;u+=15)l.push(...a(u,n),...a(u,n*(u%90===0?.93:.97)));let c=new qe(xg(l),new Ze({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?En:_e,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),o.forEach((u,h)=>{let f=this.sprite(ow(u,h===0,t.light),t.size*1.6,t.size*1.6,t.fade,En,!0);f.position.set(...a(h*90,n*1.07)),f.position.y+=t.size*.6,this.arc.add(f)})}sprite(t,e,n,r,o,s=!1){this.textures.push(t);let a=new ls(new fo({map:t,transparent:!0,opacity:r,blending:o,depthWrite:!1,depthTest:!s}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){for(let t of[...this.arc.children]){this.arc.remove(t);let e=t;e.geometry?.dispose(),e.material.dispose()}for(let t of this.textures)t.dispose();this.textures=[],this.arc.visible=!1}dispose(){this.clearArc(),this.target?.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function xg(i){let t=new Ot;return t.setAttribute("position",new Et(i,3)),t}function tw(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new q(t?13778970:16730666),r=new q(t?14711552:16753978),o=new q(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(o,(e-.4)/.6)}function ew(i,t,e){let n=[],r=[],o=[],s=new $(0,1,0);for(let l=0;l<i.length;l++){let c=new $(...i[l]),u=new $(...i[Math.max(0,l-1)]),f=new $(...i[Math.min(i.length-1,l+1)]).sub(u).normalize(),d=new $().crossVectors(f,s);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new $().crossVectors(d,f).normalize();for(let b=0;b<Ci;b++){let g=b/Ci*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ci;b++){let g=(l-1)*Ci+b,m=(l-1)*Ci+(b+1)%Ci,x=l*Ci+b,_=l*Ci+(b+1)%Ci;o.push(g,x,_,g,_,m)}}let a=new Ot;return a.setAttribute("position",new Et(n,3)),a.setAttribute("color",new Et(r,3)),a.setIndex(o),a}function jc(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function nw(){let[i,t]=jc(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new yn(i)}function iw(i){let[t,e]=jc(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let o=r%2===0?124:92,s=e.createLinearGradient(0,0,0,-o);s.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),s.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-o),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new yn(t)}function rw(i,t){let[e,n]=jc(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),o=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(o,10,r,84,42):n.rect(o,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new yn(e)}function ow(i,t,e){let[n,r]=jc(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new yn(n)}var sw=40;function vg(i,t,e,n,r){let o=[];if(n<=0)return o;let s=1/Math.tan(n*Math.PI/180),a=(c,u,h)=>{let f=Math.min(sw,Math.max(0,u-r)*s);return[c-e[0]*f,h-e[1]*f]},l=(c,u,h)=>o.push(c[0],c[1],u[0],u[1],h[0],h[1]);for(let c of i.floors)for(let u of c.rooms){if(u.outdoor||u.points.length<3)continue;let h=c.elevation+(u.ceiling_height??c.height);if(h<=r)continue;let f=Math.max(r,c.elevation),d=u.points.map(([b,g])=>a(b,f,g)),p=u.points.map(([b,g])=>a(b,h,g));for(let[b,g,m]of nn(u.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<u.points.length;b++){let g=(b+1)%u.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let u=c.floor.elevation+c.base,h=c.solid.p;for(let f=0;f+8<h.length;f+=9)l(a(h[f],u+h[f+1],h[f+2]),a(h[f+3],u+h[f+4],h[f+5]),a(h[f+6],u+h[f+7],h[f+8]))}return o}function yg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let o=0;o<i.length;o+=2)t=Math.min(t,i[o]),n=Math.max(n,i[o]),e=Math.min(e,i[o+1]),r=Math.max(r,i[o+1]);return[t,e,n,r]}function If(i,t){let e=[],n=[],r=[],o=[],s=[];for(let{face:l,field:c}of i){let u=e.length/3,h=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=aw(c.id)%1e3/1e3;for(let b of Or(l,c)){let[g,m,x,_]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[g,0,0],[m,1,0],[x,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[T,C,y]=v[M];e.push(T[0],T[1],T[2]),n.push(C,y),r.push(h,f),o.push(d)}}let p=e.length/3-u;p&&s.push({id:c.id,start:u,count:p})}if(!e.length)return null;let a=new Ot;return a.setAttribute("position",new Et(e,3)),a.setAttribute("uv",new Et(n,2)),a.setAttribute("aCells",new Et(r,2)),a.setAttribute("aPhase",new Et(o,1)),a.setAttribute("aLevel",new Et(new Float32Array(e.length/3),1)),{geometry:a,ranges:s}}function ia(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let o of i.ranges){let s=Math.min(1,Math.max(0,t.get(o.id)??0));n.fill(s,o.start,o.start+o.count),s>.02&&(r=!0)}return e.needsUpdate=!0,r}function Ff(i){let t=new Ht({transparent:!0,blending:_e,depthWrite:!1,side:ee});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function aw(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var lw=16738842,cw=16753198,uw=16769658,hw=9055240;function fw(i){return i+.1}function _g(i,t,e,n){let r=t.rotation*Kt,o=Math.cos(r),s=Math.sin(r),a=t.mirror?-1:1,l=(x,_,v)=>[t.x+a*x*o-v*s,e+_,t.z+a*x*s+v*o],c=(x,_,v,M)=>{i.tri(x,_,v,M),i.tri(x,v,_,M)},u=Mc(t),h=u.x1-u.x0,f=fw(u.y0),d=u.y1-f,p=u.zBack+.012,b=new q(hw);c(l(u.x0+.03,f-.08,p),l(u.x1-.03,f-.08,p),l(u.x1-.03,f+d*.55,p),b),c(l(u.x0+.03,f-.08,p),l(u.x1-.03,f+d*.55,p),l(u.x0+.03,f+d*.55,p),b);let g=Math.max(3,Math.round(h/.11)),m=(u.zBack+u.zFront)/2-.02;for(let x=0;x<g;x++){let _=(x+.5)/g,v=u.x0+.04+_*(h-.08),M=Math.sin(Math.PI*_)*.55+.35,T=.75+.25*Math.sin(n*9+x*1.9)*Math.cos(n*5.3+x*.7),C=Math.min(d-.04,d*.75*M*T),y=h/g*.62,E=Math.sin(n*4+x*2.3)*y*.5;c(l(v-y,f,m),l(v+y,f,m),l(v+E,f+C,m),new q(x%2?lw:cw)),c(l(v-y*.5,f,m+.012),l(v+y*.5,f,m+.012),l(v+E*.8,f+C*.62,m+.012),new q(uw))}}var dw=16747066,Mg=16756848,pw=725279,mw=3426426,gw=2767456,Sg=2765648,wg=4063130,bw=16756768,Tg=16730698,xw=5232895,vw=16771512,zo=.115;function Eg(i,t,e,n,r){let o=t.rotation*Kt,s=Math.cos(o),a=Math.sin(o),l=t.mirror?-1:1,c=(A,R,P)=>[t.x+l*A*s-P*a,e+R,t.z+l*A*a+P*s],u=(A,R,P,L)=>{i.tri(A,R,P,L),i.tri(A,P,R,L)},h=(A,R,P,L,I)=>{u(A,R,P,I),u(A,P,L,I)},f=(A,R,P,L,I,O,B,z=B)=>{let G=new q(B);h(c(A,L,I),c(R,L,I),c(R,L,O),c(A,L,O),new q(z)),h(c(A,P,O),c(R,P,O),c(R,L,O),c(A,L,O),G),h(c(A,P,I),c(R,P,I),c(R,L,I),c(A,L,I),G),h(c(A,P,I),c(A,P,O),c(A,L,O),c(A,L,I),G),h(c(R,P,I),c(R,P,O),c(R,L,O),c(R,L,I),G)},d=A=>.5+.5*Math.sin(r*A),p=(A,R,P)=>new q(A).lerp(new q(R),P).getHex(),b=Math.max(.2,t.w),g=Math.max(.2,t.d),m=Math.max(.3,t.h),x=n.phase==="printing",_=x?Math.sin(r*.9)*g*.07:0,v=Math.min(b,g)/2-.045;f(-v,v,zo,zo+.012,-v+_,v+_,gw,3886976);let M=m-zo-.1,T=n.phase==="done"?1:n.progress!==null?n.progress:x?r*.05%1:0,C=Math.max(0,M*.82*T),y=v*.5;C>.004&&f(-y/2,y/2,zo+.012,zo+.012+C,-y/2+_,y/2+_,dw,Mg);let E=zo+.012+C+.035,S=x?Math.sin(r*2.6)*v*.55:v*.55,w=-v+.02;f(-v,v,E+.02,E+.034,w-.012,w+.012,mw),f(S-.032,S+.032,E-.01,E+.07,w-.03,w+.05,pw,1779520);let F=x||n.phase==="paused";f(S-.008,S+.008,E-.035,E-.01,w+.016,w+.032,F?p(16734740,16760896,d(6)):Sg),x&&f(S-.003,S+.003,E-.04,E-.034,w+.021,w+.027,Mg);let D=n.phase==="printing"?p(1739348,wg,d(3)):n.phase==="paused"?p(9067024,bw,d(2)):n.phase==="done"?xw:n.phase==="failed"?p(9050650,Tg,d(8)):Sg;if(f(-b/2+.05,b/2-.05,m-.085,m-.065,g/2,g/2+.008,D),n.progress!==null&&n.phase!=="idle"&&n.phase!=="offline"){let A=b-.16;f(-A/2,A/2,.02,.034,g/2,g/2+.006,725279),f(-A/2,-A/2+A*n.progress,.02,.034,g/2+.006,g/2+.012,n.phase==="failed"?Tg:wg)}n.light&&f(-v+.02,v-.02,m-.056,m-.052,-v+.02,v-.02,vw)}function Ag(i){return`${i.phase}:${i.progress===null?"-":Math.round(i.progress*100)}:${i.light===null?"-":+i.light}`}var Rg=[.62,.42,.78];function Cg(i){let t=i.state,e=i.color?i.color.map(n=>Math.round(n*255)).join(","):"-";return[i.id,i.floorId,i.points.length,i.points[0]?.join(","),i.y.toFixed(3),i.floorY.toFixed(3),e,+t.heatMode,+t.heating,+t.bubbles,+t.jets,+t.filter,+t.sanitizer,i.unit.x.toFixed(2),i.unit.z.toFixed(2),i.unit.rotation.toFixed(0)].join(":")}function yw(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}function _w(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pg(i,t,e,n,r,o,s,a,l,c){let u=i.reduce((m,x)=>[Math.min(m[0],x[0]),Math.max(m[1],x[0]),Math.min(m[2],x[1]),Math.max(m[3],x[1])],[1/0,-1/0,1/0,-1/0]),h=[],f=[],d=0;for(;h.length<t*3&&d++<t*30;){let m=u[0]+e()*(u[1]-u[0]),x=u[2]+e()*(u[3]-u[2]);qt([m,x],i)&&(h.push(m,n,x),f.push(e(),a[0]+e()*(a[1]-a[0]),s[0]+e()*(s[1]-s[0])))}let p=new Ot;p.setAttribute("position",new Et(h,3)),p.setAttribute("aSeed",new Et(f,3));let b=new Je({uniforms:{uTime:c,uColor:{value:o},uY0:{value:n},uY1:{value:r},uDrift:{value:l},uOpacity:{value:1}},vertexShader:`
      uniform float uTime; uniform float uY0; uniform float uY1; uniform float uDrift;
      attribute vec3 aSeed;
      varying float vAlpha;
      void main() {
        float t = fract(uTime * aSeed.y + aSeed.x);
        vec3 p = position;
        p.y = mix(uY0, uY1, t);
        p.x += sin(uTime * 2.0 + aSeed.x * 40.0) * uDrift * t;
        p.z += cos(uTime * 1.7 + aSeed.x * 30.0) * uDrift * t;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min(36.0, aSeed.z * 110.0 / max(0.5, -mv.z)) * (0.55 + 0.45 * t);
        vAlpha = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.88, 1.0, t));
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float body = smoothstep(0.5, 0.2, d);
        float rim = smoothstep(0.12, 0.42, d) * 0.6;
        gl_FragColor = vec4(uColor, body * (0.3 + rim) * vAlpha * uOpacity);
      }`,transparent:!0,depthWrite:!1,blending:_e}),g=new si(p,b);return g.frustumCulled=!1,g.renderOrder=7,{points:g,handle:{fade:m=>b.uniforms.uOpacity.value=m}}}function Mw(i,t,e,n,r){let o=un(i)>=0?i:[...i].reverse(),s=o.map((g,m)=>{let x=o[(m+1)%o.length];return{p:g,q:x,len:Math.hypot(x[0]-g[0],x[1]-g[1])}}),a=s.reduce((g,m)=>g+m.len,0),l=Math.max(4,Math.min(10,Math.round(a/.9))),c=Math.max(.4,Math.min(1.1,Math.sqrt(n)*.4)),u=t-Math.min(.45,(t-e)*.45),h=[],f=[];for(let g=0;g<l;g++){let m=(g+.5)/l*a,x=s.find(R=>m<=R.len?!0:(m-=R.len,!1));if(!x||x.len<1e-6)continue;let _=m/x.len,v=x.p[0]+(x.q[0]-x.p[0])*_,M=x.p[1]+(x.q[1]-x.p[1])*_,T=-(x.q[1]-x.p[1])/x.len,C=(x.q[0]-x.p[0])/x.len;qt([v+T*.08,M+C*.08],o)||(T=-T,C=-C);let y=-C,E=T,S=(R,P,L,I)=>{h.push(R,P,L),f.push(I)},w=[v-y*.02,u,M-E*.02],F=[v+y*.02,u,M+E*.02],D=[v+T*c+y*.07,u+.1,M+C*c+E*.07],A=[v+T*c-y*.07,u+.1,M+C*c-E*.07];S(...w,0),S(...F,0),S(...D,1),S(...w,0),S(...D,1),S(...A,1)}let d=new Ot;d.setAttribute("position",new Et(h,3)),d.setAttribute("aT",new Et(f,1));let p=new Je({uniforms:{uTime:r,uColor:{value:new q(.75,.95,1)},uOpacity:{value:1}},vertexShader:"attribute float aT; varying float vT; void main() { vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uTime; uniform vec3 uColor; uniform float uOpacity;
      varying float vT;
      void main() {
        float flow = fract(vT * 3.0 - uTime * 2.2);
        float dash = smoothstep(0.0, 0.25, flow) * (1.0 - smoothstep(0.55, 0.8, flow));
        gl_FragColor = vec4(uColor, (0.22 + 0.78 * dash) * (1.0 - vT * 0.85) * uOpacity);
      }`,transparent:!0,depthWrite:!1,blending:_e,side:ee}),b=new vt(d,p);return b.frustumCulled=!1,b.renderOrder=7,{mesh:b,handle:{fade:g=>p.uniforms.uOpacity.value=g}}}function Sw(i,t){if(!i.color)return null;let e=un(i.points)>=0?i.points:[...i.points].reverse(),n=[];for(let[c,u,h]of nn(e)){let f=e[c],d=e[u],p=e[h];n.push(f[0],i.y+.004,f[1],p[0],i.y+.004,p[1],d[0],i.y+.004,d[1])}let r=new Ot;r.setAttribute("position",new Et(n,3));let o=.72,s=new Ht({color:new q(i.color[0],i.color[1],i.color[2]),transparent:!0,opacity:o,depthWrite:!1,side:ee}),a=i.state.heating?1:0;s.onBeforeCompile=c=>{c.uniforms.uTime=t,c.uniforms.uHeat={value:a},c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uHeat;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = diffuseColor.rgb * (1.0 + uHeat * 0.12 * sin(uTime * 3.0)) + uHeat * vec3(0.12, 0.035, 0.0) * (0.5 + 0.5 * sin(uTime * 3.0));`)},s.customProgramCacheKey=()=>"fp3d-spa-water";let l=new vt(r,s);return l.renderOrder=6,{mesh:l,handle:{fade:c=>s.opacity=o*c}}}function Dg(i,t){let e=new Te,n=[];for(let r of i){let o=_w(yw(r.id)),s=r.points,a=Sw(r,t);if(a&&(e.add(a.mesh),n.push(a.handle)),r.state.bubbles){let l=Math.max(30,Math.min(260,Math.round(r.area*35))),c=Pg(s,l,o,r.floorY+.05,r.y,new q(.85,.96,1),[.5,1.4],[.25,.6],.05,t);e.add(c.points),n.push(c.handle)}if(r.state.jets){let l=Mw(s,r.y,r.floorY,r.area,t);e.add(l.mesh),n.push(l.handle)}if(r.state.heating){let l=Pg(s,Math.max(10,Math.min(40,Math.round(r.area*8))),o,r.y,r.y+.5,new q(1,.5,.18),[.5,1],[.1,.25],.08,t);e.add(l.points),n.push(l.handle)}}return e.userData.handles=n,e}function Nf(i,t){for(let e of i.userData.handles??[])e.fade(t)}function Uf(i){i.traverse(t=>{let e=t;e.geometry?.dispose(),e.material?.dispose()})}var ww=1516088,Tw=2504542,Ig=725279,Ew=2767456,Qc=2765648,Lf=16742938,Fg=16764992,Df=3130623,Of=5767072,Lg=13627391;function Og(i,t,e){let n=t.unit,r=t.state,o=n.rotation*Kt,s=Math.cos(o),a=Math.sin(o),l=(w,F,D)=>[n.x+w*s-D*a,n.y+F,n.z+w*a+D*s],c=(w,F,D,A)=>{i.tri(w,F,D,A),i.tri(w,D,F,A)},u=(w,F,D,A,R)=>{c(w,F,D,R),c(w,D,A,R)},h=(w,F,D,A,R,P,L,I=L)=>{let O=new q(L);u(l(w,A,R),l(F,A,R),l(F,A,P),l(w,A,P),new q(I)),u(l(w,D,P),l(F,D,P),l(F,A,P),l(w,A,P),O),u(l(w,D,R),l(F,D,R),l(F,A,R),l(w,A,R),O),u(l(w,D,R),l(w,D,P),l(w,A,P),l(w,A,R),O),u(l(F,D,R),l(F,D,P),l(F,A,P),l(F,A,R),O)},f=w=>.5+.5*Math.sin(e*w),d=(w,F,D)=>new q(w).lerp(new q(F),D).getHex(),[p,b,g]=Rg,m=b/2;h(-p/2,p/2,0,g,-b/2,b/2,ww,Tw),h(-p/2+.04,p/2-.04,.1,g-.06,m,m+.006,Ig),[[r.heatMode,r.heating?d(Lf,Fg,f(5)):Lf],[r.filter,Df],[r.sanitizer,Of],[r.bubbles,Lg],[r.jets,Lg]].forEach(([w,F],D)=>{let A=(D-2)*.095;h(A-.026,A+.026,g-.15,g-.098,m+.006,m+.016,w?F:Qc)});let _=.4,v=.12,M=new q(Ig),T=l(0,_,m+.012);for(let w=0;w<14;w++){let F=w/14*Math.PI*2,D=(w+1)/14*Math.PI*2;c(T,l(Math.cos(F)*v,_+Math.sin(F)*v,m+.012),l(Math.cos(D)*v,_+Math.sin(D)*v,m+.012),M)}let C=r.filter?e*6:.5,y=new q(r.filter?Df:Qc),E=m+.018;for(let w=0;w<3;w++){let F=C+w*Math.PI*2/3,D=l(Math.cos(F)*(v-.012),_+Math.sin(F)*(v-.012),E),A=l(Math.cos(F+.55)*.03,_+Math.sin(F+.55)*.03,E),R=l(Math.cos(F-.55)*.03,_+Math.sin(F-.55)*.03,E);c(D,A,R,y)}h(-p/2+.07,-p/2+.14,.12,.3,m+.006,m+.034,r.sanitizer?d(2787928,Of,f(3)):Qc),h(-p/2+.2,p/2-.06,.12,.17,m+.006,m+.02,r.heating?d(Lf,Fg,f(5)):r.heatMode?8010258:Qc);let S=r.filter||r.sanitizer;[-.14,.14].forEach((w,F)=>{let D=l(w,.14,-m),A=[n.rims[F][0],n.y+.14,n.rims[F][1]],R=A[0]-D[0],P=A[1]-D[1],L=A[2]-D[2],I=Math.hypot(R,P,L);if(I<.05)return;let O=R/I,z=-(L/I)*.022,G=O*.022,H=new q(Ew);if(u([D[0]-z,D[1],D[2]-G],[D[0]+z,D[1],D[2]+G],[A[0]+z,A[1],A[2]+G],[A[0]-z,A[1],A[2]-G],H),u([D[0],D[1]-.022,D[2]],[D[0],D[1]+.022,D[2]],[A[0],A[1]+.022,A[2]],[A[0],A[1]-.022,A[2]],H),!S)return;let X=Math.max(2,Math.min(7,Math.round(I/.5)));for(let j=0;j<X;j++){let nt=((e*.5+j/X)%1+1)%1,Y=F===0?nt:1-nt,V=D[0]+R*Y,K=D[1]+P*Y+.034,et=D[2]+L*Y,tt=new q(r.sanitizer&&(!r.filter||j%2===0)?Of:Df),st=.026;u([V-st,K,et-st],[V+st,K,et-st],[V+st,K,et+st],[V-st,K,et+st],tt),u([V-st,K-st,et],[V+st,K-st,et],[V+st,K+st,et],[V-st,K+st,et],tt)}})}var Aw=(i,t)=>`${i}|${t}`;function ra(i,t,e=!1){let n=[],r=[],o=[];for(let{face:a,field:l}of i)if(!(!e&&l.look!=="fill"))for(let c of Or(a,l)){o.push({key:Aw(l.id,c.cell),start:n.length/3});let[u,h,f,d]=c.corners.map(b=>[b[0]+a.n[0]*.008,b[1]+a.n[1]*.008-t,b[2]+a.n[2]*.008]),p=[[u,0,0],[h,1,0],[f,1,1],[d,0,1]];for(let b of[0,1,2,0,2,3]){let[g,m,x]=p[b];n.push(g[0],g[1],g[2]),r.push(m,x)}}if(!n.length)return null;let s=new Ot;return s.setAttribute("position",new Et(n,3)),s.setAttribute("uv",new Et(r,2)),s.setAttribute("aFill",new Et(new Float32Array(n.length/3),1)),{geometry:s,cells:o}}function Ng(i,t){return i.cells[Math.floor(t/2)]?.key??null}function oa(i,t){let e=i.geometry.getAttribute("aFill"),n=e.array,r=!1;for(let{key:o,start:s}of i.cells){let a=Math.min(1,Math.max(0,t.get(o)??0));n.fill(a,s,s+6),a>.004&&(r=!0)}return e.needsUpdate=!0,r}function kf(){let i=new Ht({transparent:!0,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aFill;
varying float vFill;
varying vec2 vFillUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFill = aFill;
vFillUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vFill;
varying vec2 vFillUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // lit below the level, a thin bright line at the level, nothing above it (and nothing at all at night)
        float fp3dBelow = (1.0 - step(vFill, vFillUv.y)) * step(0.004, vFill);
        float fp3dEdge = (1.0 - smoothstep(0.0, 0.035, abs(vFillUv.y - vFill))) * step(0.004, vFill);
        vec3 fp3dLow = vec3(0.95, 0.5, 0.1);
        vec3 fp3dHigh = vec3(1.0, 0.86, 0.35);
        diffuseColor.rgb = mix(fp3dLow, fp3dHigh, clamp(vFillUv.y / max(vFill, 0.05), 0.0, 1.0)) + vec3(0.35) * fp3dEdge;
        diffuseColor.a *= max(0.78 * fp3dBelow, 0.95 * fp3dEdge);`)},i.customProgramCacheKey=()=>"fp3d-solar-fill",i}var kg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Rw=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,Cw=kg,Pw=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Ug(i,t){let e=[];for(let[r,o,s]of nn(i))for(let a of[r,s,o])e.push(i[a][0],t,i[a][1]);let n=new Ot;return n.setAttribute("position",new Et(e,3)),n}function Bg(i,t){let e=new Te;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,o=(s,a)=>{let l=new vt(Ug(n.points,s),new Je({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:kg,fragmentShader:Rw,transparent:!0,blending:_e,depthWrite:!1,side:ee}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(o(n.floorY+.01,0),o(n.y+.004,1)):o(n.y+.004,0),n.cover>.02){let s=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,u,h]=[Math.min(...s),Math.max(...s),Math.min(...a),Math.max(...a)],f=c-l>=h-u,d=Math.min(1,n.cover),p=f?[[l-.1,u-.1],[l+(c-l)*d,u-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,u-.1],[c+.1,u-.1],[c+.1,u+(h-u)*d],[l-.1,u+(h-u)*d]],b=Fo(n.points,p);if(b.length>=3){let g=new vt(Ug(b,n.y+.03),new Je({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:Cw,fragmentShader:Pw,transparent:!0,side:ee}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<b.length;_++){let v=b[_],M=b[(_+1)%b.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Ot;x.setAttribute("position",new Et(m,3)),e.add(new qe(x,new Ze({color:5995775,transparent:!0,opacity:.6})))}}}return e}function zg(i){for(let t of i.children)t.geometry?.dispose(),t.material?.dispose?.();i.clear()}var Vg=["neon","blueprint","day"];function Gg(i){return Vg.indexOf(i)}var Vo={value:new $(.22,.88,1)},Go={value:0};function Hg(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Iw=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function ln(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,s)=>{n(o,s),o.uniforms.uTheme=t,o.uniforms.uAccent=Vo,o.uniforms.uAccentOn=Go,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${Iw}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function sa(i){return i==="day"?En:_e}var Pi=.012,Fw=.012;function Xg(i,t,e,n,r,o=[],s){let a=[],l=[],c=[],u=[],h=(m,x,_,v,M,T,C)=>{for(let y of[m,x,_,m,_,v])a.push(y[0],y[1],y[2]),l.push(M[0],M[1],M[2]),c.push(T),u.push(C)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let _=m.points.map(w=>w[0]),v=m.points.map(w=>w[1]),M=Math.min(..._),T=Math.min(...v),C=Math.max(..._),y=Math.max(...v),E=Math.max(1,Math.ceil((C-M)/r)),S=Math.max(1,Math.ceil((y-T)/r));for(let w=0;w<E;w++)for(let F=0;F<S;F++){let D=M+w*r,A=T+F*r,R=Math.min(D+r,C),P=Math.min(A+r,y),L=Fo(m.points,[[D,A],[R,A],[R,P],[D,P]]),I=L.length>=3?Math.abs(kw(L)):0;if(I<1e-4)continue;let O=Bw(L);if(!o.some(B=>qt(O,B))){if(I>(R-D)*(P-A)-1e-6){h([D,Pi,A],[D,Pi,P],[R,Pi,P],[R,Pi,A],[0,1,0],x,-1);continue}for(let[B,z,G]of nn(L)){let H=L[B],X=L[G],j=L[z];(j[1]-H[1])*(X[0]-H[0])-(j[0]-H[0])*(X[1]-H[1])<0&&([H,X]=[X,H]),h([H[0],Pi,H[1]],[j[0],Pi,j[1]],[X[0],Pi,X[1]],[X[0],Pi,X[1]],[0,1,0],x,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!$n(m.type));if(d.length){let m=d.flatMap(y=>y.points.map(E=>E[0])),x=d.flatMap(y=>y.points.map(E=>E[1])),_=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),T=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),C=(y,E,S)=>Fm(i,y)-ks(i,y,E,S)+Pi;for(let y=0;y<M;y++)for(let E=0;E<T;E++){let S=_+y*r,w=v+E*r,F,D=[S+r/2,w+r/2];F=d.find(R=>R.type==="pool"&&qt(D,R.points));for(let R=d.length-1;R>=0&&!F;R--)qt(D,d[R].points)&&(F=d[R]);if(!F)continue;let A=(R,P)=>[R,C(F,R,P),P];h(A(S,w),A(S,w+r),A(S+r,w+r),A(S+r,w),[0,1,0],f,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let _=Math.min(i.height,m.height??i.height),v=Math.min(p,_-.02),M=m.b[0]-m.a[0],T=m.b[1]-m.a[1],C=Math.hypot(M,T);if(C<.05)return;let y=[M/C,T/C],E=[-y[1],y[0]],S=e[x],w=Dw(m,y,C,n),F=(L,I)=>L?i.rooms.findIndex(O=>O.id===L):I?f:-1,D=m.slope?{h:Math.min(_,Er(m.slope,m.a[0],m.a[1])),h1:Math.min(_,Er(m.slope,m.b[0],m.b[1]))}:{h:_};b.push({a:m.a,b:m.b,...D,ra:F(m.roomLeft,!1),rb:F(m.roomRight,m.exterior),gaps:w});let A=(L,I,O)=>[I,O,...L.filter(B=>B>I+.005&&B<O-.005)].sort((B,z)=>B-z).filter((B,z,G)=>z===0||B>G[z-1]+.005),R=A([v,(v+_)/2,...w.flatMap(L=>[L.y0+.01,L.y1-.01])],.02,_-.02),P=A(w.flatMap(L=>[L.s0,L.s1]),0,C);for(let L of[1,-1]){let I=L>0?m.roomLeft:m.roomRight,O=I?i.rooms.findIndex(X=>X.id===I):m.exterior?f:-1;if(O<0)continue;let B=(L>0?m.left:m.right)+Fw,z=[E[0]*L,E[1]*L],G=(X,j)=>[m.a[0]+y[0]*X+z[0]*B,j,m.a[1]+y[1]*X+z[1]*B],H=X=>{let j=G(X,0),nt=s?.(j[0],j[2]),Y=m.slope?Er(m.slope,m.a[0]+y[0]*X,m.a[1]+y[1]*X)-.02:1/0;return Math.min(nt==null?1/0:nt-.02,Y)};for(let X=0;X<P.length-1;X++){let j=P[X+1]-P[X],nt=Math.max(1,Math.ceil(j/r));for(let Y=0;Y<nt;Y++){let V=P[X]+j/nt*Y,K=P[X]+j/nt*(Y+1),et=(V+K)/2;for(let tt=0;tt<R.length-1;tt++){let st=R[tt],ct=R[tt+1];if(ct-st<.01)continue;let ut=(st+ct)/2;if(w.some(zt=>et>zt.s0&&et<zt.s1&&ut>zt.y0&&ut<zt.y1))continue;let gt=st>=p-1e-6?S:nr+S,Nt=Math.min(ct,H(V)),Ft=Math.min(ct,H(K));if(!(Nt<=st+.005&&Ft<=st+.005)){if(Nt<st||Ft<st){let zt=V+(K-V)*(st-Nt)/(Ft-Nt);Nt<st?h(G(zt,st),G(K,st),G(K,Ft),G(zt,st),[z[0],0,z[1]],O,gt):h(G(V,st),G(zt,st),G(zt,st),G(V,Nt),[z[0],0,z[1]],O,gt);continue}h(G(V,st),G(K,st),G(K,Ft),G(V,Nt),[z[0],0,z[1]],O,gt)}}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>Yg(M,m)&&Lw(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);_<0||v<0||g.push({id:m.opening.id,a:_,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:g,blockers:b}}function Yg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function Lw(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,o=t.start[0]+t.axis[0]*(t.width/2),s=t.start[1]+t.axis[1]*(t.width/2),a=((o-i.a[0])*e+(s-i.a[1])*n)/r;return a>-.05&&a<r+.05}function Dw(i,t,e,n){let r=[];for(let o of n){if(!Yg(i,o))continue;let s=(o.start[0]-i.a[0])*t[0]+(o.start[1]-i.a[1])*t[1],l=o.axis[0]*t[0]+o.axis[1]*t[1]>0?s:s-o.width;l>e||l+o.width<0||r.push({s0:l,s1:l+o.width,y0:o.sill-.01,y1:o.top+.01})}return r}function Ow(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function Nw(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Wg(i,t,e,n,r,o,s){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=Nw(i),d=1/(1+u/(f*f)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*o+c*s)/h);return i.level*p*(.2+.8*b)*Ow(i.kind,l/h)}function $g(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,p]of[[u.a,u.b],[u.b,u.a]]){let b=[0,0,0];for(let m of t){if(m.room!==d)continue;let x=m.x-u.x,_=m.y-u.y,v=m.z-u.z,M=Math.hypot(x,_,v)||1,T=Wg(m,u.x,u.y,u.z,x/M,_/M,v/M);b[0]+=m.color[0]*T,b[1]+=m.color[1]*T,b[2]+=m.color[2]*T}let g=Math.max(b[0],b[1],b[2]);g<.01||r.push({x:u.x,y:u.y,z:u.z,color:[b[0]/g,b[1]/g,b[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:p})}});let o=new Map;for(let u of r){let h=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),f={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:h};o.set(u.room,[...o.get(u.room)??[],f])}let{pos:s,normal:a,room:l}=i,c=new Float32Array(s.length);for(let u=0;u<l.length;u++){let h=o.get(l[u]);if(!h)continue;let f=u*3,d=0,p=0,b=0;for(let g of h){if(g.walls.length&&Uw(g,g.walls,s[f],s[f+1],s[f+2]))continue;let m=Wg(g,s[f],s[f+1],s[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*m,p+=g.color[1]*m,b+=g.color[2]*m}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-p*e*1.6),c[f+2]=1-Math.exp(-b*e*1.6)}return c}function Uw(i,t,e,n,r){let o=e-i.x,s=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=o*c-s*l;if(Math.abs(u)<1e-9)continue;let h=a.a[0]-i.x,f=a.a[1]-i.z,d=(h*c-f*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let p=(h*s-f*o)/u;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*p))continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function qg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Bf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&qt([t,e],r.points));return n<0?i.rooms.length:n}function Ho(i,t){return i&&t>=0&&t<i.length?i[t]:t}function kw(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function Bw(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var aa={open:0,open2:0,tilt:0,tilt2:0,cover:null},Kg=2043986,Zg=2769520,zw=2242399,zf=1845831,Vw=1450554,Ii=16758087,tu=3662079,Gw=1.2,Hw=1.5,Ww=.5,Xw=1846349,Yw=2572395,$w=1120816,qw=1845831,Jg=5995775,jg=9085695,Wo=Wt(3662079,.08),Kw=.2;function eu(i,t,e,n,r,o,s,a,l,c,u){let h=(d,p,b)=>t(d,p,b),f=[[h(e,r,a),h(n,r,a),h(n,o,a),h(e,o,a),c],[h(e,r,s),h(n,r,s),h(n,o,s),h(e,o,s),Wt(l.getHex(),.6)],[h(e,o,s),h(n,o,s),h(n,o,a),h(e,o,a),l],[h(e,r,s),h(n,r,s),h(n,r,a),h(e,r,a),Wt(l.getHex(),.85)],[h(e,r,s),h(e,o,s),h(e,o,a),h(e,r,a),Wt(l.getHex(),.92)],[h(n,r,s),h(n,o,s),h(n,o,a),h(n,r,a),Wt(l.getHex(),.92)]];for(let[d,p,b,g,m]of f)i.tri(d,p,b,m,m,m,void 0,u),i.tri(d,b,g,m,m,m,void 0,u)}function me(i,t,e,n,r,o,s,a,l,c,u,h){if(a<=u+1e-6)return eu(i,t,e,n,r,o,s,a,l,c,ne);if(s>=u-1e-6)return eu(i,t,e,n,r,o,s,a,l,c,h);eu(i,t,e,n,r,o,s,u,l,c,ne),eu(i,t,e,n,r,o,u,a,l,c,h)}function sr(i,t,e,n,r,o,s,a,l,c,u=0){let h=(f,d,p)=>{let b=v=>u?(s-v)/u:.5,g=t(e,r,f),m=t(n,r,f),x=t(n,r,d),_=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(f),1,b(f),1,b(d)],p),i.tri(g,x,_,a,a,a,[0,b(f),1,b(d),0,b(d)],p)};s<=l+1e-6?h(o,s,ne):o>=l-1e-6?h(o,s,c):(h(o,l,ne),h(l,s,c))}function Zw(i,t,e,n,r,o,s,a,l,c){let u=t(e,r,s),h=t(n,r,s),f=t(n,o,s),d=t(e,o,s),p=0,b=(o-r)/c;i.tri(u,h,f,a,a,a,[0,p,1,p,1,b],l),i.tri(u,f,d,a,a,a,[0,p,1,b,0,b],l)}function Jw(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let o=e*r.axis[0]+n*r.axis[1];if(Math.abs(o)<.999)continue;let s=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(s*n-a*e)>.03)continue;let l=s*e+a*n,c=o>0?l:l-r.width,u=c+r.width;if(Math.min(i.width,u)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let f=i.sill-r.top;if(f>=-.05&&f<=.3)return!0}return!1}function jw(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!Jw(i,t)&&Zi(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function Qg(i,t,e,n,r,o,s,a,l){let c=jw(i,t),u=i.width,h=Math.max(i.sill,.03);c.inside&&me(e,n,-.04,u+.04,r+o,i.faceRoom+.07,h-.03,h,new q(zf),s,a,l),c.outside&&me(e,n,-.03,u+.03,-i.faceOut-.06,r-o,h-.04,h-.02,new q(zf),s,a,l)}function tb(i,t,e){let n=new re,r=new re,o=new re(!0),s=new q(Kg),a=new q(Zg),l=[],c=[],u=[];for(let h of i){let f=n.count,d=r.count,p=o.count,b=t.get(h.opening.id)??aa,g=h.width,{sill:m,top:x,bucket:_}=h,v=(y,E,S)=>[h.start[0]+h.axis[0]*y+h.toRoom[0]*E,S,h.start[1]+h.axis[1]*y+h.toRoom[1]*E],M=(h.faceRoom-h.faceOut)/2,T=h.opening.mark==="closed",C=h.opening.type==="door"&&Zi(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!C||h.opening.type==="garage"){let y=-h.faceOut-.012,E=h.faceRoom+.012,S=h.opening.type==="garage"&&(T?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),w=S?Wt(Ii,.8):new q(Kg),F=S?Wt(Ii,1):new q(Zg);me(n,v,-.045,.02,y,E,0,x+.045,w,F,e,_),me(n,v,g-.02,g+.045,y,E,0,x+.045,w,F,e,_),me(n,v,.02,g-.02,y,E,x-.02,x+.045,w,F,e,_)}if(h.opening.type==="door"){let y=Zi(h.opening,h.exterior),E=M0(y),S=h.opening.swing==="out"?-1:1,w=S>0?h.faceRoom:-h.faceOut,F=h.opening.leaves===2,D=.02,A=g-.02,R=_0(g,y,h.hingeAtStart,h.opening);if(R){let B=-h.faceOut-.012,z=h.faceRoom+.012,G=w-S*(E?.06:.04)/2,H=.06;for(let[X,j]of R.panels)me(n,v,X,X+H,B,z,.02,x-.02,s,a,e,_),me(n,v,j-H,j,B,z,.02,x-.02,s,a,e,_),me(n,v,X+H,j-H,B,z,.02,.12,s,a,e,_),sr(r,v,X+H,j-H,G,.12,x-.02,Wo,e,_);D=R.x0,A=R.x1}let P=F?(A-D)/2-.004:A-D,L=E?.06:.04;E&&(me(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new q(zf),a,e,_),h.exterior&&me(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,x+.1,x+.17,Wt(Ii,.55),Wt(Ii,.85),e,ne));let I=C?[]:[[h.hingeAtStart,b.open]];F&&!C&&I.push([!h.hingeAtStart,b.open2??0]);let O=h.opening.open_angle;for(let[B,z]of I){let G=Math.min(1,Math.max(0,z)),H=y==="sliding"?0:O!=null&&O>0?(b.sensed?G:Math.min(1,G/Ww))*Math.min(170,O)*(Math.PI/180):G*Hw,X=y==="sliding"?G*P:0,j=(ut,gt,Nt)=>{let Ft=ut*Math.cos(H)-gt*Math.sin(H)-X,zt=w+S*(gt*Math.cos(H)+ut*Math.sin(H)+(X?.05:0));return v(B?D+Ft:A-Ft,zt,Nt)},nt=G>.05?ne:_,Y=T?!!b.sensed&&G<.05:G>.9,V=Y?Wt(Ii,.7):new q(E?$w:Xw),K=Y?Wt(Ii,.9):new q(E?qw:Yw);y==="glass"?(me(n,j,0,.05,-L,0,.01,x-.01,V,K,e,nt),me(n,j,P-.05,P,-L,0,.01,x-.01,V,K,e,nt),me(n,j,.05,P-.05,-L,0,.01,.12,V,K,e,nt),me(n,j,.05,P-.05,-L,0,x-.08,x-.01,V,K,e,nt),sr(r,j,.05,P-.05,-L/2,.12,x-.08,Wo,e,nt)):me(n,j,0,P,-L,0,.01,x-.01,V,K,e,nt);for(let ut of[.001,-L-.001])y==="front_glass"?sr(r,j,.12,P-.12,ut,x*.55,x-.18,Wo,e,nt):E&&sr(r,j,.1,.18,ut,.3,x-.3,Wo,e,nt);let et=Math.min(1.05,x*.5),tt=E?.3:.012,st=E?P-.11:P-.16,ct=E?P-.08:P-.05;me(n,j,st,ct,.004,.05,et-tt,et+tt,new q(Jg),new q(jg),e,nt),me(n,j,st,ct,-L-.05,-L-.004,et-tt,et+tt,new q(Jg),new q(jg),e,nt),b.unlocked&&B===h.hingeAtStart&&me(n,j,P-.022,P+.004,-L-.006,.006,.03,x-.03,Wt(tu,.85),Wt(tu,1),e,nt)}}else if(h.opening.type==="garage"){let y=Math.min(1,Math.max(0,b.cover??1)),E=new q(13951231),S=h.faceRoom-.03,w=x*(1-y);y>.01&&sr(o,v,.02,g-.02,S,w,x,E,e,_,.5);let F=(1-y)*x;F>.01&&Zw(o,v,.02,g-.02,S,S+F,x+.03,E,_,.5)}else if(Zi(h.opening,h.exterior)==="glass_wall"){me(n,v,0,.04,M-.025,M+.025,m,x,s,a,e,_),me(n,v,g-.04,g,M-.025,M+.025,m,x,s,a,e,_),me(n,v,.04,g-.04,M-.025,M+.025,m,m+.03,s,a,e,_),me(n,v,.04,g-.04,M-.025,M+.025,x-.04,x,s,a,e,_),Qg(h,i,n,v,M,.025,a,e,_);let S=Math.max(1,Math.round((g-2*.04)/.9)),w=(g-2*.04)/S;for(let F=1;F<S;F++){let D=.04+F*w;me(n,v,D-.02,D+.02,M-.025,M+.025,m+.03,x-.04,s,a,e,_)}for(let F=0;F<S;F++){let D=.04+F*w+(F?.02:0),A=.04+(F+1)*w-(F<S-1?.02:0);sr(r,v,D,A,M,m+.03,x-.04,Wo,e,_)}}else{me(n,v,0,.06,M-.035,M+.035,m,x,s,a,e,_),me(n,v,g-.06,g,M-.035,M+.035,m,x,s,a,e,_),me(n,v,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),s,a,e,_),me(n,v,.06,g-.06,M-.035,M+.035,x-.06,x,s,a,e,_),Qg(h,i,n,v,M,.035,a,e,_);let S=.055,w=m+(m>.05?.06:.03),F=x-.06,D=M+.035,A=M+.035+.06,P=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let L of P){let I=L.open>.02||L.tilt>.02,O=T?!!b.sensed&&!I:I,B=O?Wt(Ii,.75):new q(zw),z=O?Wt(Ii,.95):a,G=L.x0,H=L.x1,X=H-G,j=L.open*Gw*(h.opening.swing==="out"?-1:1),nt=L.tilt*Kw,Y=(K,et,tt)=>{let st=tt-w,ct=et+st*Math.sin(nt),ut=w+st*Math.cos(nt),gt=K*Math.cos(j)-(ct-D)*Math.sin(j);ct=D+(ct-D)*Math.cos(j)+K*Math.sin(j);let Nt=L.atStart?G+gt:H-gt;return v(Nt,ct,ut)},V=Math.abs(j)>.05?ne:_;if(me(n,Y,0,S,D,A,w,F,B,z,e,V),me(n,Y,X-S,X,D,A,w,F,B,z,e,V),me(n,Y,S,X-S,D,A,w,w+S,B,z,e,V),me(n,Y,S,X-S,D,A,F-S,F,B,z,e,V),sr(r,Y,S,X-S,(D+A)/2,w+S,F-S,O?Wt(Ii,.16):Wo,e,V),b.unlocked&&L.atStart===h.hingeAtStart&&me(n,Y,X-.022,X+.004,D-.006,A+.006,w+.02,F-.02,Wt(tu,.85),Wt(tu,1),e,V),Zi(h.opening,h.exterior)==="bars"){let K=(w+F)/2,et=(D+A)/2;me(n,Y,S,X-S,et-.012,et+.012,K-.012,K+.012,B,z,e,V),me(n,Y,X/2-.012,X/2+.012,et-.012,et+.012,w+S,F-S,B,z,e,V)}}}if(b.cover!==null){let y=-h.faceOut,E=x+.2;me(n,v,-.05,g+.05,y-.15,y,x,E,new q(Vw),a,e,_);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let w=x-S*(x-m);sr(o,v,0,g,y-.07,w,x,new q(16777215),e,_,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),u.push({id:h.opening.id,start:p,end:o.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:o.geometry(),frameTris:l,glassTris:c,blindTris:u}}var Qw=.3,eb=2.6;function nb(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),o=i.map(M=>M[1]),s=Math.min(...r),a=Math.max(...r),l=Math.min(...o),c=Math.max(...o),u=c-l>=a-s,h=e*.7071,f=M=>{let T=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...T,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return T.every(y=>qt(y,i))&&!n.some(y=>C.some(E=>qt(E,y)))},d=(M,T)=>f(u?[M,T]:[T,M]),p=(M,T)=>{let C=Math.ceil(Math.hypot(T[0]-M[0],T[1]-M[1])/.05);for(let y=1;y<C;y++)if(!f([M[0]+(T[0]-M[0])*y/C,M[1]+(T[1]-M[1])*y/C]))return!1;return!0},[b,g,m,x]=u?[s,a,l,c]:[l,c,s,a],_=[],v=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let T=null,C=null,y=.05;for(let F=m;F<=x+1e-6;F+=y)if(d(M,F)&&(C??=F),(!d(M,F)||F+y>x+1e-6)&&C!==null){let D=d(M,F)?F:F-y;(!T||D-C>T[1]-T[0])&&(T=[C,D]),C=null}if(!T||T[1]-T[0]<.2)continue;let E=F=>{let[D,A]=F?T:[T[1],T[0]];return[u?[M,D]:[D,M],u?[M,A]:[A,M]]},S=E(v),w=_[_.length-1];if(w&&n.length&&!p(w,S[0])){let F=E(!v);if(!p(w,F[0]))continue;S=F,v=!v}_.push(S[0],S[1]),v=!v}return _}function Gf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let o=r/e*Math.PI*2;return[i[0]+Math.cos(o)*t,i[1]+Math.sin(o)*t]})}var Vf=i=>Math.atan2(Math.sin(i),Math.cos(i));function ib(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],o=n[1]-i.pos[1],s=Math.hypot(r,o);if(s<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Vf(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),eb*e),!0)}let a=Math.atan2(r,o),l=Vf(a-i.heading);if(i.heading=Vf(i.heading+Math.sign(l)*Math.min(Math.abs(l),eb*e)),Math.abs(l)<.35){let c=Math.min(s,Qw*e);i.pos=[i.pos[0]+r/s*c,i.pos[1]+o/s*c]}return!0}function rb(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var tT=66,eT=250;function ob(i,t){return i?t>=3e4?eT:tT:0}function sb(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var On=null,ab=new Map;function cb(i,t=0){let e=new re,n=new Ue,r=Me(i.type);if(r?.light)Uc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Hf(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let o={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Nc(e,n,new re,o,0,!0)}return{buf:e,lines:n}}function nT(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,o=ab.get(r);if(o)return o;e&&Ds(e),On??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),On.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),On.setSize(t,t,!1),On.setClearColor(0,0);let{buf:s,lines:a}=cb(i),l=new ri,c=new vt(s.geometry(),new Ht({vertexColors:!0,color:new q(n,n,n)})),u=new qe(a.geometry(),new Ze({vertexColors:!0,color:new q(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let h=new vn().setFromObject(c),f=h.getCenter(new $),d=new In(-1,1,1,-1,.01,100);d.position.copy(f).add(new $(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let x of[h.min.y,h.max.y])for(let _ of[h.min.z,h.max.z]){let v=new $(m,x,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(v.x),Math.abs(v.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),On.render(l,d);let g=On.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),ab.set(r,g),g}function iT(i,t,e=160,n,r=1.25){let o=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,s=lb.get(o);if(s)return s;n&&Ds(n);let{buf:a,lines:l}=cb(i,t),c=new vt(a.geometry(),new Ht({vertexColors:!0,color:new q(r,r,r)})),u=new qe(l.geometry(),new Ze({vertexColors:!0,color:new q(r*1.8,r*1.8,r*1.8)})),h=new vn().setFromObject(c);if(h.isEmpty())return null;let f=h.min.x,d=h.max.x,p=Math.max(0,h.min.y),b=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-f)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));On??=new Mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),On.setPixelRatio(1),On.setSize(g,m,!1),On.setClearColor(0,0);let x=new ri;x.add(c,u);let _=new In(f,d,b,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),On.render(x,_);let v=On.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:v,x0:f,x1:d,y0:p,y1:b};return lb.set(o,M),M}var lb=new Map;var lI={Group:Te,Mesh:vt,MeshBasicMaterial:Ht,CanvasTexture:yn,Color:q,PlaneGeometry:Gn,BufferGeometry:Ot,Float32BufferAttribute:Et,DoubleSide:ee},hb={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},rT=[.22,.88,1],oT=2.4,fb=1.4,sT=.22,nu=.94,db=140,pb=1.5;function aT(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[o,s]=e[r],[a,l]=e[(r+1)%e.length],c=a-o,u=l-s,h=c*c+u*u||1,f=Math.max(0,Math.min(1,((i-o)*c+(t-s)*u)/h));n=Math.min(n,Math.hypot(i-(o+c*f),t-(s+u*f)))}return n}var Xf=32,lT=500,mb=160,cT=33,gb=.028,uT=.026,hT=.012,fT=.09,se=2767456,dT=2240847,pT=3096944,mT=1911110,gT=1,bb=new Set(["ceiling","downlight","spot","panel","pendant","fan","strip"]),iu=450,xb=125,bT=200,xT=.08,ca={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],fan:[1.3,1.3,.45],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},vT=new q(1714765);function yT(){let i=navigator;return sb(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Yf=class{host;options;renderer;scene=new ri;camera=new on(38,1,.1,400);controls;labels;root=new Te;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new Jc;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;fillLevels=new Map;pickMat=new Ht({visible:!1,side:ee});roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;fans=new Map;fanMat=null;fanLast=0;fanTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Ot,new Ze({color:10471679,transparent:!0,opacity:.4,blending:_e,depthWrite:!1}));snow=new si(new Ot,new wi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new vt(new fs(1,28),new Ht({color:16767370,transparent:!0,opacity:0,blending:_e,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{this.disposed||this.options.onContextLost?.()}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=MT(),this.blindTexture=wT(),this.haloTexture=AT(),this.ground=new vt(new Gn(1,1),new Ht({transparent:!1,blending:_e,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(o=>o.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=ob(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return rb(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ds(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,h0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}planView=null;setPlanView(t){let e=JSON.stringify(t)===JSON.stringify(this.planView);this.planView=t,!e&&this.floors.length&&this.fit(600)}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>yc(u.floor).some(h=>h.id===t)),n=e?yc(e.floor).find(u=>u.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let u=e.floor.elevation+e.ty,[h,f]=Ei(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new $(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[o,s]=Ei(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new $(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new $(o,e.floor.elevation+e.ty+.3,s),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);for(let e of this.floors)e.floor.furniture.some(Eo)&&this.buildFridges(e);this.invalidate()}setDevices(t){this.devices=t,this.syncFans(t),this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let o=r.el;r.icon!==n.icon&&(r.icon=n.icon,o.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,o.querySelector(".fp3d-dev-text").textContent=n.text);let s=n.caption??"";r.caption!==s&&(r.caption=s,o.querySelector(".fp3d-dev-name").textContent=s);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,o.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,o.title=n.name,o.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,o.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,o.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?o.style.setProperty("--fp3d-glow",c):o.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){this.solarLevels=t;let e=!1;for(let n of this.roof?.lives??[])ia(n,t)&&(e=!0);for(let n of this.floors)n.solarLive&&ia(n.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setSolarFill(t){this.fillLevels=t;for(let e of this.roof?.fills??[])oa(e,t);for(let e of this.floors)e.solarFill&&oa(e.solarFill,t);this.invalidate()}setPools(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.points.length}:${r.points[0]?.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(zg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Bg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){let e=n=>n.map(r=>`${r.id}:${r.floorId}:${r.x},${r.z}:${r.level.toFixed(2)}:${r.playing?1:0}:${r.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(n=>n.playing);for(let n of this.floors){let r=n.soundGroup??=(()=>{let c=new Te;return c.renderOrder=6,n.group.add(c),c})();for(let c of[...r.children])r.remove(c),c.geometry?.dispose(),c.material?.dispose?.();let o=t.filter(c=>c.floorId===n.floor.id),s=.03;for(let c of o)if(c.playing)for(let u=0;u<3;u++){let h=new vt(new bs(.92,1,48),new Ht({color:3662079,transparent:!0,opacity:0,blending:_e,depthWrite:!1,side:ee}));h.rotation.x=-Math.PI/2,h.position.set(c.x,s+u*.002,c.z),h.userData={sound:!0,phase:u/3,level:c.level},h.frustumCulled=!1,r.add(h)}let a=[],l=new Set;for(let c of o)for(let u of c.members){let h=o.find(d=>d.id===u);if(!h||h===c)continue;let f=[c.id,h.id].sort().join("|");l.has(f)||(l.add(f),a.push(c.x,s+.02,c.z,h.x,s+.02,h.z))}if(a.length){let c=new Ot;c.setAttribute("position",new Et(a,3));let u=new qe(c,new Ze({color:3662079,transparent:!0,opacity:.45,blending:_e,depthWrite:!1}));u.userData={soundLine:!0},r.add(u)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let o=(e*.45+r.userData.phase)%1,s=r.userData.level,a=.25+o*(.9+1.6*s);r.scale.set(a,a,1),r.material.opacity=(1-o)*(.25+.45*s)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let o=la(r),s=Wf(r.power),a=this.flowPhase.get(o);n.set(o,{speed:s,offset:a?e*(a.speed-s)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let o=[],s=[];for(let c of e){if(!!c.glow!==r)continue;let u=Math.min(1,c.opacity);for(let h of nn(c.points))for(let f of h)o.push(c.points[f][0],c.y,c.points[f][1]),s.push(c.color[0],c.color[1],c.color[2],u)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Ot;l.setAttribute("position",new Et(o,3)),l.setAttribute("color",new Et(s,4)),a.geometry.dispose(),a.geometry=l,a.visible=o.length>0}}}buildPipes(t){let e=this.pipes.filter(o=>o.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new re;for(let o of e)pg(r,o);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=s=>{let a=[],l=(f,d,p,b,g)=>{let m=Math.hypot(p-f,b-d)||1,x=-(b-d)/m*(g/2+s),_=(p-f)/m*(g/2+s);a.push(f+x,d+_,0,p+x,b+_,0,p-x,b-_,0,f+x,d+_,0,p-x,b-_,0,f-x,d-_,0)},u=.14+s;for(let f=0;f<18;f++){let d=f/18*Math.PI*2,p=(f+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*u,1.47+Math.sin(d)*u,0,Math.cos(p)*u,1.47+Math.sin(p)*u,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let h=new Ot;return h.setAttribute("position",new Et(a,3)),h},n=new vt(e(0),new Ht({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:ee})),r=new vt(e(.05),new Ht({color:t,transparent:!0,opacity:.22,blending:_e,depthWrite:!1,side:ee}));n.renderOrder=6,r.renderOrder=5;let o=new Te;return o.add(r,n),o.visible=!1,o}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{l.stopPropagation();let c=this.persons.find(f=>f.id===a);if(!c?.entity)return;let u=l.currentTarget.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(c.entity,u.left+u.width/2-h.left,u.top+u.height/2-h.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let o=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",o);let s=this.figures.get(n.id);if(o&&(!s||s.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!o&&s&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Hg(t),n=e?1:0;n===Go.value&&(!e||Vo.value.equals(new $(...e)))||(Go.value=n,e&&Vo.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Gg(t),ym(t!=="neon"),this.building?.floors.some(o=>o.furniture.some(s=>s.type==="waste_bin"||Em(s.type)))&&this.rebuild();let n=sa(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new q(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ho(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,o=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,o,!1),this.rain.visible=r>0,this.snow.visible=o>0}placeFog(){let t=this.scene.fog;if(!(t instanceof ho))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new $((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(this.weather?.fog??0))}seedParticles(t,e,n){if((t.geometry.getAttribute("position")?.count??0)===e)return;let o=this.weatherBox,s=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=o.x0+Math.random()*(o.x1-o.x0),h=o.y0+Math.random()*(o.y1-o.y0),f=o.z0+Math.random()*(o.z1-o.z0);s.set([u,h,f],c*3),n&&s.set([u,h-.45,f],c*3+3)}t.geometry.dispose();let l=new Ot;l.setAttribute("position",new Et(s,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,o=r.y1-r.y0,s=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let h=l[u+1]-c,f=l[u]+s*n;h<r.y0&&(h+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h,l[u+3]=f-s*.05,l[u+4]=h-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let h=l[u+1]-(.9+.6*e.snow)*n,f=l[u]+(s+Math.sin(c+u)*.4)*n;h<r.y0&&(h+=o,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[u]=f,l[u+1]=h}a.needsUpdate=!0}return!0}placeSky(){let t=this.sun,e=this.weather,n=e?.cloud??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let o=(this.building?.settings.north??0)*Kt,s=(r?t.azimuth+180:t.azimuth)*Kt,a=Math.max(10,Math.abs(t.elevation))*Kt,{center:l,r:c}=this.skyFrame(),u=new $(Math.sin(o+s)*Math.cos(a),Math.sin(a),-Math.cos(o+s)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(u,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new $((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=(t?.settings.north??0)*Kt,o=this.weather?.cloud??0,s=n&&!this.lowQuality&&e.elevation>1&&o<.9&&!this.roomTint,a=s?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${o.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,s?this.drawShadow(t,e,r,o):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,u=c?this.arcFrame():null,h=c&&u?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${u.x.toFixed(2)},${u.z.toFixed(2)},${u.y.toFixed(2)},${u.r.toFixed(2)},${o.toFixed(1)}`:"";if(h===this.arcSig)return;if(this.arcSig=h,!h||!u||!l||!e)return this.sunFx.hideArc();let f=(m,x,_=0)=>{let v=Math.max(0,x)*Kt,M=r+m*Kt;return[u.x+Math.sin(M)*Math.cos(v)*u.r,u.y+Math.sin(v)*u.r+_,u.z-Math.cos(M)*Math.cos(v)*u.r]},d=1-.7*o,p=Date.now(),b=m=>new Date(m).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=u.r*.03;this.sunFx.setArc({points:l.points.map(m=>({at:f(m.azimuth,m.elevation),t:m.t,elevation:m.elevation})),now:p,hours:l.points.filter(m=>m!==l.rise&&m!==l.set&&new Date(m.t).getMinutes()===0).map(m=>f(m.azimuth,m.elevation)),labels:[l.rise,l.set].flatMap(m=>m?[{text:b(m.t),at:f(m.azimuth,m.elevation,g*2.2),rising:m===l.rise}]:[]),sun:e.elevation>0?f(e.azimuth,e.elevation):null,ring:{center:[u.x,u.y,u.z],r:u.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){let t=this.building,e=t?Oo(t):null,n=t?.floors.flatMap(u=>u.rooms.filter(h=>!h.outdoor).flatMap(h=>h.points))??[];if(!e||!n.length)return null;let r=n.map(u=>u[0]),o=n.map(u=>u[1]),[s,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)];return{x:(s+a)/2,z:(l+c)/2,y:e.elevation,r:Math.max(7,Math.hypot(a-s,c-l)*.62)}}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=n?.settings.window_glow===!1||this.options.safeFx?0:this.nightFactor(),o=n&&r>0?Oo(n):null,s=!!o&&Math.abs(t.floor.elevation-o.elevation)<.5,a=new Map;if(s)for(let h of e){let f=a.get(h.room)??[0,0,0,0];f[0]+=h.color[0]*h.level,f[1]+=h.color[1]*h.level,f[2]+=h.color[2]*h.level,f[3]+=h.level,a.set(h.room,f)}let l=[...t.openings.values()].map(h=>(h.cover??0).toFixed(1)).join(","),c=s&&a.size?`${r.toFixed(2)}|${[...a].map(([h,f])=>`${h}:${f.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let u=new re;if(c)for(let h of t.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let f=t.floor.rooms.findIndex(A=>A.id===h.opening.room_id),d=f<0?void 0:a.get(Ho(t.lightZones,f));if(!d||d[3]<.02)continue;let b=1-(t.openings.get(h.opening.id)?.cover??0),g=h.top-h.sill;if(b<.05||g<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),_=new q(d[0]/m*x,d[1]/m*x,d[2]/m*x),v=[-h.toRoom[0],-h.toRoom[1]],M=Math.min(3.5,.8+1.1*h.top),T=(A,R,P)=>{let L=R/M,I=-P*L+A*(h.width+2*P*L);return Sr(t.floor,{x:h.start[0]+h.axis[0]*I+v[0]*(h.faceOut+R),z:h.start[1]+h.axis[1]*I+v[1]*(h.faceOut+R)})},C=T(.5,.05,0),y=qg((A,R)=>T(A,R,.35*M),C,M);if(y<.2)continue;let E=.35*y,S=C+.014,w=(A,R)=>{let P=R/y,L=-E*P+A*(h.width+2*E*P);return[h.start[0]+h.axis[0]*L+v[0]*(h.faceOut+R),S,h.start[1]+h.axis[1]*L+v[1]*(h.faceOut+R)]},F=4,D=[[0,0],[.18,1],[.82,1],[1,0]];for(let A=0;A<F;A++){let R=y*A/F,P=y*(A+1)/F,L=(1-A/F)**2,I=(1-(A+1)/F)**2;for(let O=0;O+1<D.length;O++){let[B,z]=D[O],[G,H]=D[O+1],X=w(B,R),j=w(G,R),nt=w(G,P),Y=w(B,P),V=_.clone().multiplyScalar(L*z),K=_.clone().multiplyScalar(L*H),et=_.clone().multiplyScalar(I*H),tt=_.clone().multiplyScalar(I*z);u.tri(X,j,nt,V,K,et),u.tri(X,nt,Y,V,et,tt)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=u.geometry(),t.spillMesh.visible=u.count>0}drawShadow(t,e,n,r){let o=Oo(t),s=o?.rooms.filter(g=>!g.outdoor&&g.points.length>=3)??[];if(!o||!s.length)return this.sunFx.hideShadow();let a=s.flatMap(g=>g.points.map(m=>m[0])),l=s.flatMap(g=>g.points.map(m=>m[1])),c=o.elevation+Sr(o,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),u=e.azimuth*Kt,h=vg(t,this.roofGeos,[Math.sin(n+u),-Math.cos(n+u)],e.elevation,c),f=yg(h);if(!f)return this.sunFx.hideShadow();let d=o.elevation-c<=.35?o.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-o.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,h,f,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){let r=document.createElement("span");if(r.className="fp3d-pin-name",r.textContent=e||"\u2013",t.replaceChildren(r),n){let o=document.createElement("small");o.textContent=n,t.append(o),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),r=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==r&&(n.textContent=r,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[o,s]of n.openings){let a=t.get(o)??aa,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===s.open&&l.open2===(s.open2??0)&&l.tilt===s.tilt&&l.tilt2===(s.tilt2??0)&&l.cover===s.cover&&!!l.sensed==!!s.sensed&&!!l.unlocked==!!s.unlocked||(n.openings.set(o,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let o=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};o.tl=r.left?1:0,o.tr=r.right?1:0,this.fridges.set(n,o)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;fires=new Map;fireAt=0;printers=new Map;printerSig="";printerAt=0;setPrinters(t){let e=[...t].map(([n,r])=>`${n}=${Ag(r)}`).join("|");if(e!==this.printerSig){this.printerSig=e,this.printers=t;for(let n of this.floors)n.floor.furniture.some(r=>t.has(r.id))&&this.buildFridges(n);this.invalidate()}}get printing(){for(let t of this.printers.values())if(t.phase==="printing")return!0;return!1}spas=[];spaSig="";spaAt=0;setSpas(t){let e=t.map(Cg).join("|");if(e!==this.spaSig){this.spaSig=e,this.spas=t;for(let n of this.floors)this.buildSpaWater(n),(this.spas.some(r=>r.floorId===n.floor.id)||n.fridgeMesh.visible)&&this.buildFridges(n);this.invalidate()}}buildSpaWater(t){t.spaGroup&&(Uf(t.spaGroup),t.group.remove(t.spaGroup),t.spaGroup=void 0);let e=this.spas.filter(n=>n.floorId===t.floor.id);e.length&&(t.spaGroup=Dg(e,this.flowTime),Nf(t.spaGroup,t.o),t.group.add(t.spaGroup))}get spaMoving(){return this.spas.some(t=>t.state.bubbles||t.state.jets||t.animated)}setFires(t){let e=new Set;for(let[n,r]of t)this.fires.get(n)!==r&&e.add(n);for(let n of this.fires.keys())t.has(n)||e.add(n);if(this.fires=t,!!e.size){for(let n of this.floors)n.floor.furniture.some(r=>e.has(r.id))&&this.buildFridges(n);this.invalidate()}}get fireBurning(){for(let t of this.fires.values())if(t)return!0;return!1}setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let o=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};o.unlocked!==r.unlocked&&e.add(n),o.unlocked=r.unlocked,r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,o]of this.awnings){let s=o.to-o.cur;if(Math.abs(s)<.002){s!==0&&(o.cur=o.to,e.add(r));continue}o.cur=o.speed>0?o.cur+Math.sign(s)*Math.min(Math.abs(s),o.speed*t/1e3):o.cur+s*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/mb),n=new Set;for(let[s,a]of this.fridges)for(let[l,c]of[["l","tl"],["r","tr"]]){let u=a[c]-a[l];if(Math.abs(u)<.004){u!==0&&(a[l]=a[c],n.add(s));continue}a[l]+=u*e,n.add(s)}for(let s of this.stepAwnings(t))n.add(s);if(this.fireBurning){let s=performance.now();if(s-this.fireAt>140){this.fireAt=s;for(let[a,l]of this.fires)l&&n.add(a)}}let r=!1;if(this.spas.some(s=>s.animated)){let s=performance.now();if(s-this.spaAt>140){this.spaAt=s;for(let a of this.floors)this.spas.some(l=>l.animated&&l.floorId===a.floor.id)&&(this.buildFridges(a),r=!0)}}let o=!1;if(this.printing){let s=performance.now();if(s-this.printerAt>45){this.printerAt=s;for(let a of this.floors)a.floor.furniture.some(l=>this.printers.get(l.id)?.phase==="printing")&&(this.buildFridges(a),o=!0)}}if(!n.size)return r||o;for(let s of this.floors)s.floor.furniture.some(a=>n.has(a.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new re;for(let n of t.floor.furniture){let r=Eo(n);if(n.type!=="fridge_smart"&&!r)continue;let o=this.fridges.get(n.id),s=r&&this.wallMode==="cut"?t.floor.cut_height:1/0;wm(e,n,Ke(t.floor,n),o?.l??0,o?.r??0,r,s)}for(let n of t.floor.furniture)n.type==="awning"&&Sm(e,n,Ke(t.floor,n),this.awnings.get(n.id)?.cur??0);for(let n of t.floor.furniture){let r=n.type==="printer_3d"?this.printers.get(n.id):void 0;r&&Eg(e,n,Ke(t.floor,n),r,performance.now()/1e3)}for(let n of t.floor.furniture)n.type==="fireplace"&&this.fires.get(n.id)&&_g(e,n,Ke(t.floor,n),performance.now()/1e3);for(let n of this.spas)n.floorId===t.floor.id&&Og(e,n,performance.now()/1e3);for(let n of t.floor.furniture)n.type==="gate"&&Dc(e,n,Ke(t.floor,n),this.awnings.get(n.id)?.cur??0,this.awnings.get(n.id)?.unlocked??null);for(let n of t.floor.furniture){let r=Os(n.type),o=r?Me(n.type):void 0;r&&o&&Cm(e,o,r,n,Ke(t.floor,n),this.awnings.get(n.id)?.cur??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new qc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*Kt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.05,(e.tilt??(o?65:20))*Kt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y);return{position:new $(e.x,a,e.z),direction:new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s)),fov:Math.min(e.fov??(o?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(o?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let o of[n.floorMesh,n.wallMesh])o.layers.enable(Kc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Kc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.fanTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let t of[this.rain,this.snow,this.skyDisc])t.geometry.dispose(),t.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let t of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(t,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values()){t.led.dispose();for(let e of t.own)e.dispose()}this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose();for(let t of this.fans.values())t.mesh.geometry.dispose();this.fans.clear(),this.fanMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&yT();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Mr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=ke,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Yc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.fans.values())t.group.removeFromParent();for(let t of this.floors){t.spaGroup&&Uf(t.spaGroup);for(let e of t.screenPics.values())e.mesh.material.dispose(),e.texture?.dispose();t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))this.retired.push(e);this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let o=document.createElement("span");o.className="fp3d-dev-watt";let s=document.createElement("span");s.className="fp3d-dev-name",e.append(n,r,o,s);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},lT)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),e.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Xg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=vb(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Ho(r,a.ra),a.rb=Ho(r,a.rb)}t.lightSurface=n;let o=new Ot;o.setAttribute("position",new Et(n.pos,3)),o.setAttribute("color",new Et(new Float32Array(n.pos.length),3)),o.setAttribute("fold",new Et(n.fold,1));let s=new pr(new Uint32Array(n.pos.length/3),1);s.setUsage(ch),o.setIndex(s),o.setDrawRange(0,0),o.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=o,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=Me(t.pack);if(!e)return null;let[n,r,o]=t.size??ca.wall;return Pm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let o=n.top??t.floor.height,s=Bf(t.floor,n.x,n.z),a=Ho(t.lightZones,s),[l,,c]=n.size??(n.lamp?ca[n.lamp]:[.3,.3,.3]),u=n.base??0,h={ceiling:[o-.12,"ceiling"],downlight:[o-.03,"spot"],spot:[o-c,"spot"],panel:[o-.05,"ceiling"],pendant:[Math.max(.5,o-c),"pendant"],fan:[Math.max(.5,o-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<gT?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=n.lamp?h[n.lamp]:[n.y,"omni"],p=n.lightY??f,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*Kt,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:u+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*Kt;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(_),y:p+Math.sin(_)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(_),color:b,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(o=>o!==t&&Math.abs(o.floor.elevation-e)<.8&&o.geo.holes.length);if(!n)return[];let r=[];for(let o of n.geo.holes){if(o.length<3)continue;let s=0,a=[0,0,0];for(let u of this.devices){if(u.floorId!==n.floor.id)continue;let h=this.glowOf(u);if(!h)continue;let f=qt([u.x,u.z],o)?0:aT(u.x,u.z,o);if(f>pb)continue;let d=h.level*(1-f/pb);for(let p=0;p<3;p++)a[p]+=h.color[p]*d;s+=d}if(s<.02)continue;let[l,c]=Ei(o);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/s,a[1]/s,a[2]/s],level:Math.min(1,s)*.6,kind:"ceiling",room:Ho(t.lightZones,Bf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(h=>{let f=t.geo.openings.find(p=>p.opening.id===h.id);if(f&&Zi(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),o=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(o===t.glowSig)return;t.glowSig=o;let s=t.glowMesh.geometry,a=s.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,s.setDrawRange(0,0);return}let l=$g(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=s.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}s.index.needsUpdate=!0,s.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:ln(new Ht({vertexColors:!0}),this.themeUniform),pattern:ST(this.patternTexture),wall:ln(gi(new Ht({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:gi(new Ht({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Ht({vertexColors:!0,blending:Ms,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-1}),lines:ln(gi(new Ze({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:gi(new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:ln(gi(new Ht({vertexColors:!0,side:ee}),t),this.themeUniform),glass:gi(new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee}),t),blinds:ln(gi(new Ht({map:this.blindTexture,vertexColors:!0,side:ee}),t),this.themeUniform),water:ln(new Ht({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ee}),this.themeUniform),flow:ET(this.flowTime),pipeLine:TT(this.flowTime),patch:new Ht({vertexColors:!0,transparent:!0,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Ff(this.flowTime),solarFill:kf(),lamps:ln(new Ht({vertexColors:!0}),this.themeUniform),halos:new wi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1}),cones:new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee}),screens:new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee}),earth:ln(new Ht({vertexColors:!0}),this.themeUniform),earthWell:ln(new Ht({vertexColors:!0,side:ee}),this.themeUniform),earthLines:ln(new Ze({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){let t=new Map(this.floors.map(o=>[o.floor.id,{y:o.y,o:o.o}])),e=new Map(this.floors.map(o=>[o.floor.id,o.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((o,s)=>o.elevation-s.elevation);for(let o of n.floors){let s=n.settings.roof?.solar??[],a=Oo(n)?.id===o.id?s.filter(Ut=>Ut.face===yf).map(Ut=>({field:Ut,face:Nm(n,Ut)})):[],l=s.filter(Ut=>Ut.face.startsWith(`wall:${o.id}:`));if(l.length){let Ut=new Map(Om(n,o.id).map(te=>[te.key,te]));for(let te of l){let he=Ut.get(te.face);he&&a.push({field:te,face:he})}}let u=qh(n).some(Ut=>P0(Ut,o.elevation+o.height)&&Zh(Ut,o.elevation))?(Ut,te)=>{let he=I0(n,Ut,te,o.elevation);return he===null?null:he-o.elevation}:void 0,h=Zm(Pf(o,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Jm(n.floors,o),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),p=new Te,b=new vt(h.floor,d.floor),g=new vt(h.shadow,d.shadow);g.renderOrder=1;let m=new vt(h.floor,d.pattern);m.renderOrder=2;let x=new vt(new Ot,d.glow);x.renderOrder=3,x.visible=!1;let _=new vt(new Ot,d.frames),v=new vt(new Ot,d.blinds),M=new vt(new Ot,d.glass);M.renderOrder=4;let T=new vt(new Ot,d.lamps);T.visible=!1;let C=new vt(new Ot,d.cones);C.visible=!1,C.renderOrder=3;let y=new vt(new Ot,d.cones);y.visible=!1,y.renderOrder=3;let E=new si(new Ot,d.halos);E.visible=!1,E.renderOrder=7;let S=new vt(new Ot,d.cones);S.visible=!1,S.renderOrder=7;let w=new vt(new Ot,d.cones);w.visible=!1,w.renderOrder=7;let F=new vt(new Ot,d.lamps);F.visible=!1;let D=new vt(new Ot,d.lamps);D.visible=!1;let A=new vt(new Ot,d.patch);A.visible=!1,A.renderOrder=3;let R=new vt(new Ot,d.patchGlow);R.visible=!1,R.renderOrder=3;let P=new vt(new Ot,d.screens);P.visible=!1,P.renderOrder=5;let L=new vt(new Ot,d.flow);L.renderOrder=5,L.frustumCulled=!1;let I=new vt(new Ot,d.pipeLine),O=new vt(new Ot,d.pipeLine),B=new vt(new Ot,d.pipeLine);for(let Ut of[I,O,B])Ut.renderOrder=4,Ut.frustumCulled=!1,Ut.visible=!1;let z=If(a,o.elevation),G=z?new vt(z.geometry,d.solarLive):null;G&&(G.renderOrder=6,ia(z,this.solarLevels));let H=ra(a,o.elevation),X=H?new vt(H.geometry,d.solarFill):null;X&&(X.renderOrder=6,oa(H,this.fillLevels));let j=ra(a,o.elevation,!0),nt=j?new vt(j.geometry,this.pickMat):null;for(let Ut of[_,v,M])Ut.frustumCulled=!1;let Y=new vt(h.walls,d.glassWall),V=new vt(h.walls,d.wall);Y.renderOrder=6;let K=new vt(h.water,d.water);K.renderOrder=4;let et=Math.min(...n.floors.filter(Ut=>Ut.rooms.length).map(Ut=>Ut.elevation)),tt=tg(n,o,h.openings,o.elevation===et),st=tt?[new vt(tt.earth.geometry(),d.earth),new vt(tt.wells.geometry(),d.earthWell),new qe(tt.lines.geometry(),d.earthLines)]:[];for(let Ut of st)Ut.userData.earth=!0;p.add(b,g,m,x,V,K,new qe(h.lines,d.lines),_,v,M,L,I,O,B,T,C,y,E,S,w,F,D,A,R,P,Y,...G?[G]:[],...X?[X]:[],...nt?[nt]:[],...st),this.root.add(p);let ct=document.createElement("button");ct.className="fp3d-pin fp3d-pin-floor",ct.dataset.floor=o.id;let ut=document.createElement("b");ut.textContent=o.name||"\u2013";let gt=document.createElement("span");gt.textContent=this.floorInfo.get(o.id)??this.options.floorInfo?.(o)??"",ct.append(ut,gt),ct.addEventListener("click",()=>this.options.onFloorTap?.(o.id)),this.labels.append(ct);let Nt=t.get(o.id),Ft=[],zt=null;for(let Ut of yc(o)){let te=document.createElement("button");te.className="fp3d-pin fp3d-pin-room",te.dataset.room=Ut.id,te.dataset.floor=o.id,this.fillRoomPin(te,Ut.name,this.roomInfo.get(Ut.id)),te.addEventListener("click",()=>this.options.onRoomTap?.(o.id,Ut.id)),this.labels.append(te);let[he,Ae]=Ei(Ut.points);if(Ft.push({pin:te,room:Ut,cx:he,cz:Ae}),!Ut.outdoor)for(let[Z,Ie]of Ut.points)zt??={x0:Z,x1:Z,z0:Ie,z1:Ie},zt.x0=Math.min(zt.x0,Z),zt.x1=Math.max(zt.x1,Z),zt.z0=Math.min(zt.z0,Ie),zt.z1=Math.max(zt.z1,Ie)}this.floors.push({floor:o,rank:r.indexOf(o),group:p,geo:h,floorMesh:b,shadowMesh:g,patternMesh:m,glowMesh:x,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:M,blindsMesh:v,flowMesh:L,pipeLineMesh:I,pipeHouseMesh:O,pipeFloorMesh:B,pipeLineSig:"",solarMesh:G,solarLive:z,fillMesh:X,solarFill:H,pickMesh:nt,pickFill:j,lampMesh:T,sunMesh:C,sunSig:"",spillMesh:y,spillSig:"",haloMesh:E,coneMesh:S,trailMesh:w,fridgeMesh:F,pipeMesh:D,pipeSig:"",patchMesh:A,patchGlowMesh:R,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:V,screenMesh:P,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:zt,roomPins:Ft,labelSize:null,materials:d,mask:f,openings:new Map,y:Nt?.y??0,o:Nt?.o??1,ty:0,to:1,appliedO:-1,lightAt:0,label:ct})}this.floorMap=new Map(this.floors.map(o=>[o.floor.id,o]));for(let o of this.floors)this.buildFridges(o),this.buildPipes(o),this.buildPatches(o);this.labelsDirty=!0,this.floorId&&!n.floors.some(o=>o.id===this.floorId)&&(this.floorId=null);for(let o of this.floors){this.buildLamps(o),this.buildScreens(o);let s=e.get(o.floor.id);for(let a of o.geo.openings)o.openings.set(a.opening.id,s?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??aa);this.buildOpenings(o),this.buildFlows(o),o.poolGroup=void 0,this.buildPoolWater(o),o.spaGroup=void 0,this.buildSpaWater(o),this.buildLightSurface(o),this.buildSun(o)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(v=>v.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.fill.dispose(),this.roof.wins.traverse(v=>v.geometry?.dispose()),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Xm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Dr(this.building).map(v=>[v.key,v])),n=this.building.settings.roof?.solar??[],r=Ff(this.flowTime),o=[],s=kf(),a=[],l=[],c=new Te,u=ln(new Ht({vertexColors:!0,transparent:!0,side:ee}),this.themeUniform),h=ln(new Ze({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),f=ln(new Ht({vertexColors:!0,transparent:!0,side:ee,depthWrite:!1}),this.themeUniform),d=new Te,p=ln(new Ht({vertexColors:!0,side:ee}),this.themeUniform),b=ln(new Ht({vertexColors:!0,transparent:!0,opacity:.35,side:ee,depthWrite:!1}),this.themeUniform),g=ln(new Ht({vertexColors:!0,transparent:!0,opacity:.35,side:ee,depthWrite:!1}),this.themeUniform),m=ln(new Ze({vertexColors:!0,transparent:!0,blending:sa(this.theme),depthWrite:!1}),this.themeUniform,!0),x=[],_=t.map(v=>{let M=new Te;M.add(new vt(v.solid.geometry(),u),new qe(v.lines.geometry(),h)),v.glass.count&&M.add(new vt(v.glass.geometry(),f));let T=n.flatMap(w=>{let F=e.get(w.face);return F&&(F.section?v.sections?.includes(F.section):v===t[0])?[{face:F,field:w}]:[]}),C=If(T,v.floor.elevation+v.base);if(C){let w=new vt(C.geometry,r);w.renderOrder=9,M.add(w),o.push(C),ia(C,this.solarLevels)}let y=ra(T,v.floor.elevation+v.base);if(y){let w=new vt(y.geometry,s);w.renderOrder=9,M.add(w),a.push(y),oa(y,this.fillLevels)}let E=ra(T,v.floor.elevation+v.base,!0);if(E){let w=new vt(E.geometry,this.pickMat);M.add(w),l.push({mesh:w,fill:E})}v.winRoof?.solid.count&&M.add(new vt(v.winRoof.solid.geometry(),p),new qe(v.winRoof.lines.geometry(),m)),v.winRoof?.glass.count&&M.add(new vt(v.winRoof.glass.geometry(),g)),M.renderOrder=8,c.add(M);let S=null;(v.win?.solid.count||v.win?.glass.count)&&(S=new Te,S.add(new vt(v.win.solid.geometry(),p),new qe(v.win.lines.geometry(),m)),v.win.glass.count&&S.add(new vt(v.win.glass.geometry(),b)),d.add(S));for(let[w,F]of v.winBelow??[]){if(!F.solid.count&&!F.glass.count)continue;let D=new Te;D.add(new vt(F.solid.geometry(),p),new qe(F.lines.geometry(),m)),F.glass.count&&D.add(new vt(F.glass.geometry(),b)),d.add(D),x.push({floorId:w,win:D})}return{group:M,floorId:v.floor.id,rideId:N0(this.building,v.floor,v.sections??[]),base:v.base,lift:v.lift!==!1,win:S}});c.renderOrder=8,this.scene.add(c),this.scene.add(d),this.roof={group:c,parts:_,below:x,solid:u,lines:h,glass:f,live:r,lives:o,fill:s,fills:a,picks:l,wins:d,winSolid:p,winLines:m,winGlass:b,roofWinGlass:g},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/nu)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),o=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?nu*n:0,s=1-Math.exp(-t/db),a=this.roofO;this.roofO+=(o-this.roofO)*s,Math.abs(o-this.roofO)<.004&&(this.roofO=o),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+this.roofLift()+(l.lift?h*fb:0),l.win&&(l.win.position.y=c.floor.elevation+u.y+l.base+(l.lift?h*fb:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,e.fill.opacity=this.roofO,this.roofO!==a&&this.roofO!==o}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,o=1;e?n.rank>e.rank?(r=5+n.rank,o=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,o=this.floorStack==="single"?0:sT)):r=this.explode?n.rank*oT:0,n.ty=r,n.to=o;let a=e===n?cn:li;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=o),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.solarFill.opacity=t.o,t.spaGroup&&Nf(t.spaGroup,t.o),e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let o=r.mesh.material;o.transparent=t.o<.999,o.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/db);for(let r of this.floors){let o=r.ty-r.y,s=r.to-r.o;if(Math.abs(o)<.004&&Math.abs(s)<.004){(o!==0||s!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=o*n,r.o+=s*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/mb);for(let r of this.floors){let o=!1,s=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??aa,u=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(u(c.open,l.open)&&u(c.open2??0,l.open2??0)&&u(c.tilt,l.tilt)&&u(c.tilt2??0,l.tilt2??0)&&u(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let h={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},f=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?h[d]=p:(h[d]=b+g*n,f=!0)}if(c.cover===null||l.cover===null)h.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?h.cover=c.cover:(h.cover=l.cover+d*n,f=!0)}(h.open!==l.open||h.open2!==(l.open2??0)||h.tilt!==l.tilt||h.tilt2!==(l.tilt2??0)||h.cover!==l.cover||!!h.sensed!=!!l.sensed||!!h.unlocked!=!!l.unlocked)&&(r.openings.set(a,h),o=!0),e||=f,s||=f}if(o){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!s||a-r.lightAt>=bT)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new q(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*xT+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let f=h-e,d=f>iu?.5+.5*Math.sin(f/140):f/iu;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0},${u.ownLook?1:0}`).join(";"),s=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${s[h]?`${s[h].level.toFixed(3)},${s[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new re,h=[],f=[],d=new Map,p=t.floor.height;for(let b of r){let g=b.lamp==="strip"?(b.base??p)>Math.min(t.floor.cut_height,p):b.lamp?bb.has(b.lamp)&&(b.top??p)>Math.min(t.floor.cut_height,p):b.model==="camera_ceiling";if(!b.lamp&&!b.model||g&&this.wallMode==="cut")continue;let m=u.count,x=b.pack?Me(b.pack):void 0,[_,v,M]=b.size??[.3,.3,.3];b.model?b.ownLook||Am(u,b.model,b.x,b.model==="camera_ceiling"?p:b.y,b.z,b.rotation??0):x?Uc(u,x,{x:b.x,z:b.z,rotation:b.rotation??0,w:_,d:v,h:M,mirror:b.mirror},b.base??0,65280):Hf(u,{...b,lamp:b.lamp},b.top??p,65280,b.lamp!=="fan"),d.set(b.furnitureId??b.id,{start:m,end:u.count}),b.pickable!==!1&&h.push({id:b.id,start:m,end:u.count}),b.furnitureId&&f.push({id:b.furnitureId,start:m,end:u.count})}t.lampTris=h,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=n0(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=t.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=s[h],p=d?.55+.45*d.level:0,b=d?new q(...d.color.map(x=>Math.min(1,x*p))):new q(mT),g=n(u.id);g>0&&b.lerp(new q(1,1,1),.7*g);let m=new q(b.getHex());i0(c,t.lampShade,f,[m.r,m.g,m.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Kt,r=this.weather?.cloud??0,o=vb(t.floor,t.geo.openRooms),s=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(l=>(l.cover??0).toFixed(2)).join(",")},${o.join(".")},${this.roofWindowsKey},${JSON.stringify(this.building?.settings.roof?.windows??[])}`:"";if(s===t.sunSig)return;t.sunSig=s;let a=new re;if(e&&e.elevation>2&&r<.97){let l=Math.min(1,e.elevation/12)*(1-.8*r),c=e.elevation*Kt,u=e.azimuth*Kt,h=[Math.sin(n+u),-Math.cos(n+u)],f=1/Math.tan(c);for(let d of t.geo.openings){if(d.opening.type!=="window"||!d.exterior)continue;let p=[-d.toRoom[0],-d.toRoom[1]],b=p[0]*h[0]+p[1]*h[1];if(b<.05)continue;let g=t.openings.get(d.opening.id),m=d.top-(g?.cover??0)*(d.top-d.sill);if(m-d.sill<.05)continue;let x=(w,F)=>{let D=Math.min(7,F*f);return[d.start[0]+d.axis[0]*w+d.toRoom[0]*d.faceRoom-h[0]*D,.02,d.start[1]+d.axis[1]*w+d.toRoom[1]*d.faceRoom-h[1]*D]},_=.14*l*Math.min(1,b*1.5),v=new q(1*_,.82*_,.55*_),M=v.clone().multiplyScalar(.45),T=t.floor.rooms.findIndex(w=>w.id===d.opening.room_id);if(T<0||t.floor.rooms[T].points.length<3)continue;let C=o[T],y=t.floor.rooms.filter((w,F)=>o[F]===C&&w.points.length>=3).map(w=>w.points),E=Math.max(1,Math.ceil(Math.min(7,m*f)/.25)),S=Math.max(1,Math.ceil(d.width/.3));for(let w=0;w<E;w++){let F=d.sill+(m-d.sill)*w/E,D=d.sill+(m-d.sill)*(w+1)/E,A=w/E,R=(w+1)/E,P=v.clone().lerp(M,A),L=v.clone().lerp(M,R);for(let I=0;I<S;I++){let O=d.width*I/S,B=d.width*(I+1)/S,z=x((O+B)/2,(F+D)/2);if(!y.some(nt=>qt([z[0],z[2]],nt)))continue;let G=x(O,F),H=x(B,F),X=x(B,D),j=x(O,D);a.tri(G,H,X,P,P,L),a.tri(G,X,j,P,L,L)}}}this.pushRoofSun(t,a,o,h,c,l)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,o,s){let a=this.building,l=a?.settings.roof?.windows??[];if(!a||!l.length)return;let c=new Map(Dr(a).map(h=>[h.key,h])),u=[r[0]*Math.cos(o),Math.sin(o),r[1]*Math.cos(o)];for(let h of l){let f=c.get(h.face),d=Vc(a,f,h);if(!f||!d||d.floor.id!==t.floor.id)continue;let p=f.n[0]*u[0]+f.n[1]*u[1]+f.n[2]*u[2],[b,g,m,x]=d.corners,_=Math.min(1,this.roofWindows.get(h.id)?.cover??0);if(_>.95)continue;let v=(A,R,P)=>[A[0]+(R[0]-A[0])*P,A[1]+(R[1]-A[1])*P,A[2]+(R[2]-A[2])*P],M=v(x,b,_),T=v(m,g,_),C=t.floor.rooms.findIndex(A=>A.id===d.roomId);if(C<0)continue;let y=t.floor.rooms.filter((A,R)=>n[R]===n[C]&&A.points.length>=3).map(A=>A.points),E=(A,R)=>{let P=(I,O)=>v(v(A[0],A[1],I),v(A[3],A[2],I),O);for(let I=0;I<6;I++)for(let O=0;O<6;O++){let B=P((I+.5)/6,(O+.5)/6);if(!y.some(j=>qt([B[0],B[2]],j)))continue;let z=P(I/6,O/6),G=P((I+1)/6,O/6),H=P((I+1)/6,(O+1)/6),X=P(I/6,(O+1)/6);e.tri(z,G,H,R,R,R),e.tri(z,H,X,R,R,R)}},S=A=>[A[0],.019,A[2]],w=.06*s;if(E([S(b),S(g),S(T),S(M)],new q(.75*w,.85*w,1*w)),p<.05)continue;let F=A=>{let R=Math.min(7,(A[1]-t.floor.elevation)/Math.tan(o));return[A[0]-r[0]*R,.02,A[2]-r[1]*R]},D=.16*s*Math.min(1,p*1.5);E([F(b),F(g),F(T),F(M)],new q(1*D,.84*D,.6*D))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],o=new re,s=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*Kt,_=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),T=(l.fov??(v?360:90))*Kt/2,C=l.motion?new q(.9,.12,.16):new q(.04,.22,.28),y=new q(0,0,0),E=Math.max(4,Math.round(T/.15)),S=.015,w=t.geo.walls2d,F=O=>{let B=O.b[0]-O.a[0],z=O.b[1]-O.a[1],G=B*B+z*z||1,H=Math.max(0,Math.min(1,((l.x-O.a[0])*B+(l.z-O.a[1])*z)/G));return Math.hypot(l.x-(O.a[0]+B*H),l.z-(O.a[1]+z*H))},D=null;for(let O of w)F(O)<.45&&(!D||F(O)<F(D))&&(D=O);let A=O=>{let B=_[0]*Math.cos(O)-_[1]*Math.sin(O),z=_[1]*Math.cos(O)+_[0]*Math.sin(O),G=M;for(let H of w){let X=H.b[0]-H.a[0],j=H.b[1]-H.a[1],nt=B*j-z*X;if(Math.abs(nt)<1e-9)continue;let Y=((H.a[0]-l.x)*j-(H.a[1]-l.z)*X)/nt,V=((H.a[0]-l.x)*z-(H.a[1]-l.z)*B)/nt;H===D&&Y<=.45||Y>.02&&Y<G&&V>=0&&V<=1&&(G=Y)}return G},R=(O,B)=>S+Sr(t.floor,{x:O,z:B}),P=O=>{let B=A(O),z=l.x+(_[0]*Math.cos(O)-_[1]*Math.sin(O))*B,G=l.z+(_[1]*Math.cos(O)+_[0]*Math.sin(O))*B;return[z,R(z,G),G]},L=[l.x,Math.max(R(l.x,l.z),v?-1/0:R(l.x+_[0]*.3,l.z+_[1]*.3)),l.z],I=o.count;for(let O=0;O<E;O++)o.tri(L,P(-T+2*T*(O+1)/E),P(-T+2*T*O/E),C,y,y);s.push({id:l.id,start:I,end:o.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||bb.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[h,f,d]=l.size??ca[l.lamp],p=l.base??0,b=(l.rotation??0)*Kt,g={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,fan:Math.max(.5,u-Math.max(.25,d))+.02,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,_,v=1)=>{n.push(x,g,_),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+h*(.5+x),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*Kt;n.push(l.x+Math.cos(b)*h*x*Math.cos(_),g+Math.sin(_)*h*x,l.z+Math.sin(b)*h*x*Math.cos(_)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else m(l.x+Math.cos(b)*h*x,l.z+Math.sin(b)*h*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(b)*(f/2+.05),l.z+Math.cos(b)*(f/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new q(...c.color.map(C=>C*.09*c.level)),_=new q(0,0,0),v=Math.max(.03,h/2),M=.45+.35*c.level,T=16;for(let C=0;C<T;C++){let y=C/T*Math.PI*2,E=(C+1)/T*Math.PI*2,S=[l.x+Math.cos(y)*v,g,l.z+Math.sin(y)*v],w=[l.x+Math.cos(E)*v,g,l.z+Math.sin(E)*v],F=[l.x+Math.cos(y)*M,.02,l.z+Math.sin(y)*M],D=[l.x+Math.cos(E)*M,.02,l.z+Math.sin(E)*M];o.tri(S,F,D,x,_,_),o.tri(S,D,w,x,_,x)}}}let a=new Ot;a.setAttribute("position",new Et(n,3)),a.setAttribute("color",new Et(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=o.geometry(),t.coneMesh.visible=o.count>0,t.coneTris=s}buildScreens(t){let e=Pf(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),r=(Go.value?Vo.value.toArray().map(s=>Math.round(s*255)).join(","):"")+"|"+e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let o=new re;for(let s of e){let a=this.screens.get(s.id),l=_c.has(s.type)?Sc(t.geo.walls2d,s,t.floor.height,Ke(t.floor,s)):null,c=l?{...s,x:l.x,z:l.z,mount_y:l.y}:s,u=c.rotation*Kt,h=Math.cos(u),f=Math.sin(u),d=(C,y,E)=>[c.x+C*h-E*f,y,c.z+C*f+E*h];if(a.faces){let C=Math.max(.05,c.w)*(c.mirror?-1:1),y=Math.max(.05,c.d),E=Math.max(.005,c.h),S=Ke(t.floor,c);for(let w of a.faces){if(w.part==="lights"){let G=Me(c.type),H=X=>["#e8f4ff","#ff3b4f"].includes(X.color.toLowerCase());if(G&&G.parts.some(H)){let X=new q(...w.color.map(j=>Math.min(1,j*(.4+.6*w.level))));qs(o,G,c,S,X.getHex(),H)}continue}if(w.part==="cabin"){let G=Me(c.type),H=X=>X.color.toLowerCase()==="#13283a"||X.color==="glass";if(G&&G.parts.some(H)){let X=new q(...w.color.map(j=>Math.min(1,j*(.3+.5*w.level))));qs(o,G,c,S,X.getHex(),H);continue}}if(w.part==="burners"&&Me(c.type)){let G=Me(c.type),H=new q(...w.color.map(X=>Math.min(1,X*(.25+.6*w.level))));qs(o,G,c,S,H.getHex(),r0);continue}if(w.part==="burners"){let G=new q(...w.color.map(X=>Math.min(1,X*(.25+.6*w.level)))),H=S+E+.008;for(let[X,j,nt]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let Y=X*Math.abs(C)/.6,V=j*y/.62,K=14;for(let et=0;et<K;et++){let tt=et/K*Math.PI*2,st=(et+1)/K*Math.PI*2;o.tri(d(Y,H,V),d(Y+Math.cos(tt)*nt,H,V+Math.sin(tt)*nt),d(Y+Math.cos(st)*nt,H,V+Math.sin(st)*nt),G)}}continue}if(w.part==="band"||w.part==="cabin"){let G=w.part==="cabin",H=S+E*(G?.6:.42),X=G?S+E*.86:H+.07,j=new q(...w.color.map(K=>Math.min(1,K*(.3+.45*w.level)))),nt=Math.abs(C)/2+(G?.012:.02),Y=y/2+(G?.012:.02),V=[[-nt,-Y],[nt,-Y],[nt,Y],[-nt,Y]];for(let K=0;K<4;K++){let et=V[K],tt=V[(K+1)%4],st=d(et[0]*Math.sign(C),H,et[1]),ct=d(tt[0]*Math.sign(C),H,tt[1]),ut=d(tt[0]*Math.sign(C),X,tt[1]),gt=d(et[0]*Math.sign(C),X,et[1]);o.tri(st,ct,ut,j),o.tri(st,ut,gt,j)}continue}if(w.part==="fill"){let G=Math.min(1,Math.max(0,w.fraction??0)),H=S+E*.06,X=H+E*.88*G,j=.28+.4*w.level,nt=new q(...w.color.map(V=>Math.min(1,V*j))),Y=new q(...w.color.map(V=>Math.min(1,V*(.7+.3*w.level)+.15)));if(G>.01)if(c.variant==="wall"){let V=Math.abs(C),K=y/2+.004,et=[d(-V/2+.04,H,K),d(V/2-.04,H,K),d(V/2-.04,X,K),d(-V/2+.04,X,K)];o.tri(et[0],et[1],et[2],nt),o.tri(et[0],et[2],et[3],nt),o.tri(et[3],et[2],d(V/2-.04,X+.012,K),Y),o.tri(et[3],d(V/2-.04,X+.012,K),d(-V/2+.04,X+.012,K),Y)}else{let V=Math.min(Math.abs(C),y)/2+.012,K=20;for(let et=0;et<K;et++){let tt=et/K*Math.PI*2,st=(et+1)/K*Math.PI*2,ct=[Math.cos(tt)*V,Math.sin(tt)*V],ut=[Math.cos(st)*V,Math.sin(st)*V];o.tri(d(ct[0],H,ct[1]),d(ut[0],H,ut[1]),d(ut[0],X,ut[1]),nt),o.tri(d(ct[0],H,ct[1]),d(ut[0],X,ut[1]),d(ct[0],X,ct[1]),nt),o.tri(d(ct[0],X,ct[1]),d(ut[0],X,ut[1]),d(ut[0],X+.014,ut[1]),Y),o.tri(d(ct[0],X,ct[1]),d(ut[0],X+.014,ut[1]),d(ct[0],X+.014,ct[1]),Y)}}continue}if(w.part==="strata"){let G=w.top??w.color,H=.22+.4*w.level,X=new q(...w.color.map(tt=>Math.min(1,tt*H))),j=new q(...G.map(tt=>Math.min(1,tt*H))),nt=S+E*.06,Y=S+E*.94,V=Math.abs(C)/2+.012,K=y/2+.012,et=20;for(let tt=0;tt<et;tt++){let st=tt/et*Math.PI*2,ct=(tt+1)/et*Math.PI*2,ut=[Math.cos(st)*V,Math.sin(st)*K],gt=[Math.cos(ct)*V,Math.sin(ct)*K];o.tri(d(ut[0],nt,ut[1]),d(gt[0],nt,gt[1]),d(gt[0],Y,gt[1]),X,X,j),o.tri(d(ut[0],nt,ut[1]),d(gt[0],Y,gt[1]),d(ut[0],Y,ut[1]),X,j,j)}continue}if(w.part==="apring"){let G=c.variant==="wall",H=Math.abs(C),X=G?Math.min(H,E)*.3:Math.min(H,y)*.3,j=new q(...w.color.map(K=>Math.min(1,K*(.4+.6*w.level)))),nt=new q(0,0,0),Y=24,V=(K,et)=>G?d(Math.cos(K)*et,S+E/2+Math.sin(K)*et,y/2+.004):d(Math.cos(K)*et,S-.003,Math.sin(K)*et);for(let K=0;K<Y;K++){let et=K/Y*Math.PI*2,tt=(K+1)/Y*Math.PI*2;o.tri(V(et,X*.8),V(et,X),V(tt,X),j),o.tri(V(et,X*.8),V(tt,X),V(tt,X*.8),j),o.tri(V(et,X),V(et,X*1.5),V(tt,X*1.5),j,nt,nt),o.tri(V(et,X),V(tt,X*1.5),V(tt,X),j,nt,j)}continue}if(w.part==="drum"){let G=Math.abs(C),H=Math.min(G*.36,(E-.2)*.42),X=S+(E-.14)/2+.04,j=y/2-.006,nt=new q(...w.color.map(tt=>Math.min(1,tt*(.35+.65*w.level)))),Y=nt.clone().multiplyScalar(.12),V=new q(0,0,0),K=28,et=(tt,st)=>d(Math.cos(tt)*st,X+Math.sin(tt)*st,j);for(let tt=0;tt<K;tt++){let st=tt/K*Math.PI*2,ct=(tt+1)/K*Math.PI*2;o.tri(d(0,X,j),et(st,H*.78),et(ct,H*.78),Y),o.tri(et(st,H*.78),et(st,H),et(ct,H),nt),o.tri(et(st,H*.78),et(ct,H),et(ct,H*.78),nt),o.tri(et(st,H),et(st,H*1.18),et(ct,H*1.18),nt,V,V),o.tri(et(st,H),et(ct,H*1.18),et(ct,H),nt,V,nt)}continue}if(w.part==="gang"){let G=Math.max(1,w.of??1),H=Math.abs(C),X=H/G,j=(-H/2+X*((w.index??0)+.5))*Math.sign(C),nt=y/2+(c.variant==="outdoor"?.02:.008),Y=w.accent?Go.value?Vo.value.toArray():rT:w.color,V=new q(...Y.map(Ft=>Math.min(1,Ft*(.35+.65*w.level)))),K=V.clone().multiplyScalar(.5),et=new q(0,0,0),tt=X*.34,st=S+E*.16,ct=S+E*.84,ut=[d(j-tt,st,nt),d(j+tt,st,nt),d(j+tt,ct,nt),d(j-tt,ct,nt)];o.tri(ut[0],ut[1],ut[2],V),o.tri(ut[0],ut[2],ut[3],V);let gt=.012+.015*w.level,Nt=[d(j-tt-gt,st-gt,nt-.001),d(j+tt+gt,st-gt,nt-.001),d(j+tt+gt,ct+gt,nt-.001),d(j-tt-gt,ct+gt,nt-.001)];for(let Ft=0;Ft<4;Ft++){let zt=(Ft+1)%4;o.tri(ut[Ft],Nt[zt],Nt[Ft],K,et,et),o.tri(ut[Ft],ut[zt],Nt[zt],K,K,et)}continue}if(w.part==="beacon"){let G=new q(...w.color.map(ct=>Math.min(1,ct*(.25+.45*w.level)))),H=new q(0,0,0),X=S+E+.01,j=.6+.6*w.level,nt=Math.min(Math.abs(C),y)*.38;for(let[ct,ut]of[[nt,0],[0,nt]]){let gt=d(-ct,X,-ut),Nt=d(ct,X,ut),Ft=d(ct*.4,X+j,ut*.4),zt=d(-ct*.4,X+j,-ut*.4);o.tri(gt,Nt,Ft,G,G,H),o.tri(gt,Ft,zt,G,H,H)}let Y=Ke(t.floor,{...c,mount_y:0})+.012,V=Math.abs(C)/2+.03,K=y/2+.03,et=.22+.18*w.level,tt=(ct,ut,gt)=>d(ct*(V+gt),Y,ut*(K+gt)),st=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ct=0;ct<4;ct++){let[ut,gt]=st[ct],[Nt,Ft]=st[(ct+1)%4];o.tri(tt(ut,gt,0),tt(Nt,Ft,0),tt(Nt,Ft,et),G,G,H),o.tri(tt(ut,gt,0),tt(Nt,Ft,et),tt(ut,gt,et),G,H,H)}continue}let F=w.part==="right"?.03:-Math.abs(C)/2+.03,D=w.part==="left"?-.03:Math.abs(C)/2-.03,A=S+(w.part==="bottom"?E*.45:E)+.006,R=new q(...w.color.map(G=>Math.min(1,G*(.35+.65*w.level)))),P=new q(0,0,0),L=(G,H,X=A)=>d(G*Math.sign(C),X,H),I=[L(F,-y/2+.03),L(D,-y/2+.03),L(D,y/2-.03),L(F,y/2-.03)];o.tri(I[0],I[2],I[1],R),o.tri(I[0],I[3],I[2],R);let O=w.part==="lid"?.025+.02*w.level:.12+.1*w.level,B=R.clone().multiplyScalar(w.part==="lid"?.7:.5),z=[L(F-O,-y/2-O,A+.004),L(D+O,-y/2-O,A+.004),L(D+O,y/2+O,A+.004),L(F-O,y/2+O,A+.004)];for(let G=0;G<4;G++){let H=(G+1)%4;o.tri(I[G],z[H],z[G],B,P,P),o.tri(I[G],I[H],z[H],B,B,P)}}continue}let p=Me(c.type);if(p&&!p.light&&a.ring&&p.parts.some(C=>C.glow)){let C=new q(...a.color.map(y=>Math.min(1,y*(.45+.55*a.level))));qs(o,p,c,Ke(t.floor,c),C.getHex())}let b=xf(c,t.floor);if(!b)continue;let g=new q(...a.color.map(C=>Math.min(1,C*(.35+.65*a.level)))),m=new q(0,0,0),x=b.z+.004;if(o.tri(d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),g),o.tri(d(b.x0,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x),g),a.plain)continue;let _=.18+.12*a.level,v=g.clone().multiplyScalar(.5),M=[d(b.x0,b.y0,x),d(b.x1,b.y0,x),d(b.x1,b.y1,x),d(b.x0,b.y1,x)],T=[d(b.x0-_,b.y0-_,x+.01),d(b.x1+_,b.y0-_,x+.01),d(b.x1+_,b.y1+_,x+.01),d(b.x0-_,b.y1+_,x+.01)];for(let C=0;C<4;C++){let y=(C+1)%4;o.tri(M[C],T[C],T[y],v,m,m),o.tri(M[C],T[y],M[y],v,m,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=o.geometry(),t.screenMesh.visible=o.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>!!this.screens.get(r)?.picture));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),o.texture?.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let s=this.screens.get(r),a=xf(o,t.floor);if(!a)continue;let l=t.screenPics.get(r);if(!l){let c=new vt(new Gn(1,1),new Ht({color:16777215,transparent:!0}));c.visible=!1,c.renderOrder=5,l={url:s.picture,mesh:c,texture:null},t.screenPics.set(r,l),t.group.add(c);let u=l;new br().load(s.picture,h=>{if(t.screenPics.get(r)!==u){h.dispose();return}h.colorSpace=ke,u.texture=h;let f=u.mesh.material;f.map=h,f.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,a,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}l.mesh.material.color.setScalar(.45+.55*s.level),l.texture&&this.placeScreenPicture(l.mesh,o,a,l.texture)}}placeScreenPicture(t,e,n,r){let o=r.image,s=o?.width&&o?.height?o.width/o.height:16/9,{w:a,h:l}=Tm(n.x1-n.x0,n.y1-n.y0,s),c=e.rotation*Kt,u=(n.x0+n.x1)/2,h=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+u*Math.cos(c)-h*Math.sin(c),(n.y0+n.y1)/2,e.z+u*Math.sin(c)+h*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){this.buildPipeLines(t);let e=this.flows.filter(u=>u.floorId===t.floor.id&&!u.pipe).map(la).join(";"),n=[],r=[],o=[],s=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id||u.pipe)continue;let h=this.flowPhase.get(la(u))??{speed:Wf(u.power),offset:0},f=u.power>.5?Math.min(1,.5+u.power/2500):.22,d=u.color.map(x=>x*f),p=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(p<1e-4)continue;let b=[(u.b[0]-u.a[0])/p,(u.b[1]-u.a[1])/p,(u.b[2]-u.a[2])/p],g=[];if(Math.abs(b[1])<.5){let x=Math.hypot(b[0],b[2])||1;g.push([-b[2]/x,0,b[0]/x])}else g.push([1,0,0],[0,0,1]);let m=this.lowQuality?[[gb*1.4,1]]:[[fT,.25],[gb,1]];for(let[x,_]of m)for(let v of g){let M=x*(u.width??1)/2,T=(y,E)=>[y[0]+v[0]*M*E,y[1]+v[1]*M*E,y[2]+v[2]*M*E],C=[[T(u.a,-1),u.dist,0],[T(u.b,-1),u.dist+p,0],[T(u.b,1),u.dist+p,1],[T(u.a,1),u.dist,1]];for(let y of[0,1,2,0,2,3]){let[E,S,w]=C[y];n.push(E[0],E[1],E[2]),r.push(d[0]*_,d[1]*_,d[2]*_),o.push(S,w),s.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&l.getAttribute("position")?.count===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",s],["flowOffset",a]]){let f=l.getAttribute(u);f.array.set(h),f.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Ot;c.setAttribute("position",new Et(n,3)),c.setAttribute("color",new Et(r,3)),c.setAttribute("uv",new Et(o,2)),c.setAttribute("flowSpeed",new Et(s,1)),c.setAttribute("flowOffset",new Et(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),this.flowPhase.get(la(r))?.speed??0]));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let o=[],s=[],a=[],l=[],c=[];for(let f of e){if((f.house?"house":f.floor?"floor":"all")!==r)continue;let d=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(la(f))??{speed:Wf(f.power),offset:0},b=[(f.b[0]-f.a[0])/d,(f.b[1]-f.a[1])/d,(f.b[2]-f.a[2])/d],g=[];if(Math.abs(b[1])<.5){let v=Math.hypot(b[0],b[2])||1;g.push([-b[2]/v,0,b[0]/v])}else g.push([1,0,0],[0,0,1]);let m=uT*(f.width??1),x=f.power>.5?1:.62,_=[[m+hT*2,[.02,.025,.05],.78,2],[m,f.color.map(v=>v*x),1,0]];for(let[v,M,T,C]of _)for(let y of g){let E=v/2,S=C===0?.002:0,w=(D,A)=>[D[0]+y[0]*E*A,D[1]+y[1]*E*A+S,D[2]+y[2]*E*A],F=[[w(f.a,-1),f.dist,C],[w(f.b,-1),f.dist+d,C],[w(f.b,1),f.dist+d,C+1],[w(f.a,1),f.dist,C+1]];for(let D of[0,1,2,0,2,3]){let[A,R,P]=F[D];o.push(A[0],A[1],A[2]),s.push(M[0],M[1],M[2],T),a.push(R,P),l.push(p.speed),c.push(p.offset)}}}let u=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,h=new Ot;h.setAttribute("position",new Et(o,3)),h.setAttribute("color",new Et(s,4)),h.setAttribute("uv",new Et(a,2)),h.setAttribute("flowSpeed",new Et(l,1)),h.setAttribute("flowOffset",new Et(c,1)),u.geometry.dispose(),u.geometry=h,u.userData.filled=o.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=tb(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color"),n=t.geo.roomTris.map(r=>`${this.roomTint?.get(r.roomId)?.join(",")??""}${r.roomId===this.roomId?"*":""}`).join(";");if(this.highlighted.get(e)!==n){this.highlighted.set(e,n);for(let r of t.geo.roomTris){let o=new q(r.color),s=this.roomTint?.get(r.roomId);s&&o.lerp(new q(...s).multiplyScalar(.6),.9),r.roomId===this.roomId&&o.lerp(vT,s?.3:.75);for(let a=r.start*3;a<r.end*3;a++)e.setXYZ(a,o.r,o.g,o.b)}e.needsUpdate=!0}}for(let t of this.labels.querySelectorAll(".fp3d-pin"))t.classList.toggle("fp3d-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new vn;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[p,b]of d.points)e.expandByPoint(new $(p,f,b)),e.expandByPoint(new $(p,f+h.floor.height,b))}e.isEmpty()&&e.set(new $(-4,0,-4),new $(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new $),r=e.getSize(new $),o=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,o*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=o);let s=this.floorId===null,a=s?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(s||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new $(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}if(this.planView){this.controls.flyTo({target:n,radius:o,phi:this.planView.phi,theta:this.planView.theta},t,!0);return}this.controls.flyTo({target:n,radius:c?l.radius:o,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new vn,e=1/0;for(let s of this.floors){e=Math.min(e,s.floor.elevation+Math.min(0,s.ty));for(let a of s.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c));for(let a of s.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new $(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=RT();let s=this.ground.material;s.map=this.groundTexture,s.needsUpdate=!0}let n=t.getCenter(new $),r=t.getSize(new $),o=Xf*Math.ceil((Math.max(r.x,r.z)+16)/Xf);this.ground.scale.set(o,o,1),this.ground.position.set(n.x,e-an-.02,n.z)}distanceFor(t){let e=this.camera.fov*Kt,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new ys;return r.setFromCamera(new ie(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),s=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(o,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=s(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??ne;if(f!==ne&&Math.floor(f/16)===0)continue}let u=s(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=s(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(!u&&a.face&&a.face.normal.y>.7){let f=vc(c.floor).find(d=>qt([a.point.x,a.point.z],d.points));if(f)return{floorId:c.floor.id,roomId:f.id}}if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),p=f%16,b=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<p)!==0;if(!b){let m=n.ray.direction,x=Math.hypot(m.x,m.z)||1,_=[a.point.x-m.x/x*.3,a.point.z-m.z/x*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&qt(_,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:s(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}pickModule(t,e){let n=[];this.roof&&this.roof.group.visible&&this.roofO>nu*.6&&n.push(...this.roof.picks);for(let o of this.activeFloors())o.pickMesh&&o.pickFill&&n.push({mesh:o.pickMesh,fill:o.pickFill});if(!n.length)return null;let r=this.rayAt(t,e).intersectObjects(n.map(o=>o.mesh),!1);for(let o of r){if(o.faceIndex==null)continue;let s=n.find(c=>c.mesh===o.object)?.fill,a=s?Ng(s,o.faceIndex):null,l=a?a.indexOf("|"):-1;if(a&&l>0)return{fieldId:a.slice(0,l),cell:a.slice(l+1)}}return null}pickSpa(t,e){for(let n of this.activeFloors())for(let r of this.spas){if(r.floorId!==n.floor.id)continue;let o=n.floor.elevation+n.y,s=this.floorPoint(n,t,e,o+r.y);if(s&&qt(s,r.points))return r.id;let a=this.floorPoint(n,t,e,o+r.unit.y+.4);if(a&&Math.hypot(a[0]-r.unit.x,a[1]-r.unit.z)<.5)return r.id}return null}onTap(t,e){if(!this.furnish&&this.spas.length){let r=this.pickSpa(t,e);if(r){this.options.onSpaTap?.(r,t,e);return}}if(!this.furnish){let r=this.pickModule(t,e);if(r){this.options.onSolarTap?.(r.fieldId,r.cell);return}}let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+iu),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),r=this.activeFloors(),o=a=>[a.screenMesh,a.fridgeMesh,...[...a.screenPics.values()].map(l=>l.mesh)],s=r.flatMap(a=>[a.lampMesh,a.wallMesh,...o(a)].filter(l=>l.visible));for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=r.find(h=>h.group===a.object.parent||o(h).includes(a.object));if(!l)continue;if(a.object!==l.lampMesh&&a.object!==l.wallMesh){let h=this.furnitureNear(l,a.point.x,a.point.z);if(h)return{fv:l,id:h,y:a.point.y};continue}let u=(a.object===l.lampMesh?l.lampFurnTris:l.geo.furnitureTris).find(h=>a.faceIndex>=h.start&&a.faceIndex<h.end)?.id;if(u)return{fv:l,id:u,y:a.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let o of t.floor.furniture){let s=o.rotation*Kt,a=e-o.x,l=n-o.z,c=Math.abs(a*Math.cos(s)+l*Math.sin(s))-o.w/2,u=Math.abs(-a*Math.sin(s)+l*Math.cos(s))-o.d/2,h=Math.max(c,u);h<.25&&(!r||h<r.d)&&(r={id:o.id,d:h})}return r?.id??null}floorPoint(t,e,n,r){let o=this.rayAt(e,n),s=r??t.floor.elevation+t.y,a=o.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(s-o.ray.origin.y)/a.y;return l<=0?null:[o.ray.origin.x+a.x*l,o.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){return this.furnitureAt(t,e)?.id??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let s=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=s?null:this.furnitureAt(t,e),l=s??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,t,e)}if(n){let s=this.devices.find(l=>l.id===n)?.furnitureId,a=s?this.floors.find(l=>l.floor.furniture.some(c=>c.id===s)):void 0;return!s||!a?this.grabDevice(n,t,e):this.grabItem(a,s,t,e)}let o=this.furnitureAt(t,e);if(!o){let s=this.pick(t,e);return s&&"entity"in s?this.grabDevice(s.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(o.fv,o.id,t,e,o.y)}grabItem(t,e,n,r,o){let s=t.floor.furniture.find(h=>h.id===e),a=o===void 0?void 0:Math.min(o,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!s||!l)return!1;let c,u=this.rayAt(n,r).ray.direction;if(o!==void 0&&-u.y<.34){let h=this.camera.position,f=this.camera.getWorldDirection(new $),d=Math.hypot(f.x,f.z)||1,p=[f.x/d,f.z/d],b=Math.hypot(l[0]-h.x,l[1]-h.z,(a??0)-h.y),g=this.renderer.domElement.getBoundingClientRect().height||1,m=2*b*Math.tan(this.camera.fov*Math.PI/360)/g;c={x0:n,y0:r,fx:s.x,fz:s.z,right:[-p[1],p[0]],fwd:p,perPx:m,gain:Math.min(2,1/Math.max(.5,-u.y))}}return s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:t.floor.id,id:s.id,offset:[s.x-l[0],s.z-l[1]],x:s.x,z:s.z,moved:!1,plane:a,screen:c},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(t,e,n){let r=this.devices.find(a=>a.id===t),o=r&&this.floorMap.get(r.floorId),s=o&&this.floorPoint(o,e,n);return!r||!o||!s?!1:r.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:o.floor.id,offset:[r.x-s[0],r.z-s[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("fp3d-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let f=this.floorMap.get(n.floorId),d=this.devices.find(g=>g.id===n.id),p=f&&this.floorPoint(f,t,e);if(!f||!d||!p)return;let b=this.building?.settings.grid??.05;n.x=d.x=Math.round((p[0]+n.offset[0])/b)*b,n.z=d.z=Math.round((p[1]+n.offset[1])/b)*b,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,o=r&&this.floorMap.get(r.floorId);if(!r||!o)return;let s=r.screen,a;if(s){let f=(t-s.x0)*s.perPx,d=(e-s.y0)*s.perPx*s.gain;a=[s.fx+s.right[0]*f-s.fwd[0]*d-r.offset[0],s.fz+s.right[1]*f-s.fwd[1]*d-r.offset[1]]}else a=this.floorPoint(o,t,e,r.plane);if(!a)return;let l=this.building?.settings.grid??.05,c=o.floor.furniture.find(f=>f.id===r.id),u=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?ng(o.floor,c,u,h,this.building?.settings.wall_interior??0):[u,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ue,n;for(let r of t){let o=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),s=o?.floor.furniture.find(a=>a.id===r);!o||!s||(n??=o,this.ghostBox(e,o,s,r===this.selectedFurniture?new q(.25,.9,1):new q(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new Ze({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){let o=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),u=Me(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ke(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:Ke(e.floor,n),h=n.rotation*Kt,f=Math.cos(h),d=Math.sin(h),p=(g,m,x)=>[o+g*f-m*d,x,s+g*d+m*f],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let g=0;g<4;g++){let[m,x]=b[g],[_,v]=b[(g+1)%4];t.seg(p(m,x,u+.01),p(_,v,u+.01),r),t.seg(p(m,x,u+c),p(_,v,u+c),r),t.seg(p(m,x,u+.01),p(m,x,u+c),r)}t.seg(p(-n.w/2,n.d/2+.03,u+.02),p(n.w/2,n.d/2+.03,u+.02),new q(1,1,1))}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let o=this.pick(t,e);return!o||!("entity"in o)||this.options.onDeviceSwipe?.(o.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:o.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(m=>m.floor.rooms.some(x=>x.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),o=Math.round(t*r),s=Math.round(e*r),a=new $e(o,s);a.texture.colorSpace=ke;let l=new In(-1,1,1,-1,.1,400),c=this.floors.map(m=>({fv:m,visible:m.group.visible,y:m.y,o:m.o,standing:m.mask.standing.value,glass:m.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(o*s*4),p=document.createElement("canvas");p.width=o,p.height=s;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let m of n){for(let D of this.floors)D.group.visible=D===m;m.y=0,m.o=1,this.applyFloor(m),m.group.visible=!0,m.mask.standing.value=0,m.mask.glass.value=0;let x=m.floor.rooms.flatMap(D=>D.points),_=m.floor.elevation,v=new vn(new $(Math.min(...x.map(D=>D[0]))-.3,_,Math.min(...x.map(D=>D[1]))-.3),new $(Math.max(...x.map(D=>D[0]))+.3,_+Math.min(m.floor.cut_height,m.floor.height),Math.max(...x.map(D=>D[1]))+.3)),M=v.getCenter(new $),T=-.6,C=.8,y=new $(Math.sin(C)*Math.sin(T),Math.cos(C),Math.sin(C)*Math.cos(T));l.position.copy(M).addScaledVector(y,100),l.lookAt(M),l.updateMatrixWorld();let E=.5,S=.5;for(let D of[v.min.x,v.max.x])for(let A of[v.min.y,v.max.y])for(let R of[v.min.z,v.max.z]){let P=new $(D,A,R).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(P.x)),S=Math.max(S,Math.abs(P.y))}let w=o/s;E/S>w?S=E/w:E=S*w,l.left=-E*1.05,l.right=E*1.05,l.top=S*1.05,l.bottom=-S*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,o,s,d);let F=b.createImageData(o,s);for(let D=0;D<s;D++)F.data.set(d.subarray((s-1-D)*o*4,(s-D)*o*4),D*o*4);b.putImageData(F,0,0),g.push({floorId:m.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let m of c)m.fv.y=m.y,m.fv.o=m.o,m.fv.mask.standing.value=m.standing,m.fv.mask.glass.value=m.glass,this.applyFloor(m.fv),m.fv.group.visible=m.visible;this.roof&&(this.roof.group.visible=u,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let o=r.info.mode,s=n.mode==="cleaning"&&o==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(o!=="cleaning"||s||!r.motion.path.length)){let a=n.room?nb(n.room,void 0,void 0,n.obstacles):Gf(n.rest),l=a.length?a:Gf(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!qt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(hb[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let o of r.own)o.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&Me(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Ht({color:hb[t.mode]}),r=this.robotModelKey(t),o=t.model?Me(t.model.type):void 0;if(t.model&&o&&r){let{w:a,d:l,h:c}=t.model,u=new re,{radius:h,top:f}=Rm(u,o,a,l,c),d=new re,p=Math.min(.05,h*.3),b=Math.min(.1,h*.55);De(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],f,f+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Ht({vertexColors:!0});let g=[u.geometry(),d.geometry()],m=new Te;return m.add(new vt(g[0],this.robotMat),new vt(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new re,l=(u,h,f,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*u,Math.sin(g/20*Math.PI*2)*u]);De(a,b,h,f,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Ht({vertexColors:!0});let c=new re;De(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let s=new Te;return s.add(new vt(this.robotGeo,this.robotMat),new vt(this.robotLedGeo,n)),{info:t,motion:e,group:s,led:n,own:[],modelKey:r}}syncFans(t){let e=new Set;for(let n of t){if(n.lamp!=="fan")continue;let r=n.furnitureId??n.id;e.add(r);let[o,,s]=n.size??ca.fan,a=n.top??this.floorMap.get(n.floorId)?.floor.height??2.5,l=o/2,c=this.fans.get(r);if(c&&Math.abs(c.r-l)>.001&&(c.group.removeFromParent(),c.mesh.geometry.dispose(),this.fans.delete(r),c=void 0),!c){let u=new re;_b(u,0,0,0,l,0),this.fanMat??=new Ht({vertexColors:!0});let h=new vt(u.geometry(),this.fanMat),f=new Te;f.add(h),f.rotation.y=-((n.rotation??0)*Kt),c={group:f,mesh:h,r:l,speed:0,floorId:n.floorId,y:0},this.fans.set(r,c)}c.floorId=n.floorId,c.speed=n.fanSpeed??0,c.y=yb(a,s),c.group.position.set(n.x,c.y,n.z)}for(let[n,r]of this.fans)e.has(n)||(r.group.removeFromParent(),r.mesh.geometry.dispose(),this.fans.delete(n));this.fanLast=0}stepFans(t){if(!this.fans.size)return!1;let e=this.fanLast?Math.min(.2,(t-this.fanLast)/1e3):0;this.fanLast=t;let n=!1;for(let r of this.fans.values()){let o=this.floorMap.get(r.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),r.group.visible=!(this.wallMode==="cut"&&r.y>Math.min(o.floor.cut_height,o.floor.height)),!(r.speed<=0)&&(n=!0,r.group.rotation.y-=r.speed*Math.PI*2*e))}return n||(this.fanLast=0),n}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let o=this.floorMap.get(r.info.floorId);o&&(r.group.parent!==o.group&&o.group.add(r.group),e>0?n=ib(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new q(.25-.2*a,.95-.83*a,1-.7*a),r=new q(0,0,0),o=new q(.3,1,.6),s=.02;for(let a of this.floors){let l=new re;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([h,f],d)=>{let p=u.points[d-1];if(p){let b=Math.hypot(h-p[0],f-p[1])||1,g=-(f-p[1])/b*.1,m=(h-p[0])/b*.1;l.tri([p[0]+g,s,p[1]+m],[h+g,s,f+m],[h-g,s,f-m],o,o,o),l.tri([p[0]+g,s,p[1]+m],[h-g,s,f-m],[p[0]-g,s,p[1]-m],o,o,o)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([h,s,f],[h+Math.cos(m)*.35,s,f+Math.sin(m)*.35],[h+Math.cos(g)*.35,s,f+Math.sin(g)*.35],o,r,r)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let h=n(u.age);if(c){let f=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/f*.06,p=(u.x-c.x)/f*.06,b=n(c.age);l.tri([c.x+d,s,c.z+p],[u.x+d,s,u.z+p],[u.x-d,s,u.z-p],b,h,h),l.tri([c.x+d,s,c.z+p],[u.x-d,s,u.z-p],[c.x-d,s,c.z-p],b,h,b)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=(f+1)/12*Math.PI*2;l.tri([u.x,s,u.z],[u.x+Math.cos(p)*.22,s,u.z+Math.sin(p)*.22],[u.x+Math.cos(d)*.22,s,u.z+Math.sin(d)*.22],h,r,r)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*Kt,o=e.model==="camera_ceiling",s=Math.min(1.45,Math.max(.22,(e.tilt??(o?65:20))*Kt)),a=n.floor.elevation+n.ty+(o?n.floor.height-.1:e.y),l=new $(-Math.sin(r)*Math.cos(s),-Math.sin(s),Math.cos(r)*Math.cos(s));return this.controls.flyTo({target:new $(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-s,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+iu;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,o,s){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new $(e,a.floor.elevation+a.ty+r,n),radius:s?.radius??5.5,phi:s?.phi??.78,...s?.theta!==void 0?{theta:s.theta}:{}},900),o){this.flashes.set(o,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(o)}"]`);l?.classList.add("fp3d-dev-found"),setTimeout(()=>l?.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),o=this.stepFloors(e),s=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,_]of this.flashes){let v=this.deviceFloor.get(x);v&&m.add(v),_<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepFans(t),h=this.stepWeather(t),f=r||o||s||a||l,d=[];(r||this.controls.busy)&&d.push("camera"),o&&d.push("floors"),s&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.flowActive&&d.push("flow"),this.soundActive&&d.push("sound"),this.poolActive&&d.push("pool"),this.solarActive&&d.push("solar"),this.fireBurning&&d.push("fire"),this.printing&&d.push("printer"),this.spaMoving&&d.push("spa"),this.effectTick&&d.push("effect"),c&&d.push("robot"),u&&d.push("fan"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||o||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,d),f&&this.invalidate();let p=this.flowActive||this.solarActive||this.fireBurning||this.spaMoving||this.printing||this.soundActive||this.poolActive||c||u||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size?this.decor(this.lowQuality?2*xb:xb):null;if(b!==null&&!this.effectTimer&&!document.hidden){let m=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.fireBurning||this.spaMoving||this.printing||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g||u?this.decor(u?83:0,u?83:void 0):null;!f&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!f&&u&&!this.fanTimer&&(this.fanTimer=setTimeout(()=>{this.fanTimer=void 0,this.invalidate()},50)),!f&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},cT))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,o=Math.hypot(n,r)||1;for(let s of this.floors){let a=this.roomId!==null&&s.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;s.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/o+u[1]*r/o>=.25:a;!l&&f&&(c|=1<<h)}),s.mask.standing.value=l?0:65535,s.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new $,r=this.houseView,o=[];for(let s of this.floors){let a=s.bbox;if(!(r&&s.o>.5&&a)){this.place(s.label,null);continue}let l=null,c=null,u=s.floor.elevation+s.y+s.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,u,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}s.label.hidden&&(s.label.hidden=!1),s.labelSize??={w:s.label.offsetWidth,h:s.label.offsetHeight};let h=s.labelSize.w,f=8+this.labelInset,d=l.x-h-14,p=l.y;d<f&&this.labelInset&&(d=c.x+14,p=c.y),o.push({fv:s,left:Math.max(f,Math.min(t-h-8,d)),y:p,h:s.labelSize.h})}o.sort((s,a)=>a.fv.rank-s.fv.rank);for(let s=1;s<o.length;s++){let a=o[s-1];o[s].y=Math.max(o[s].y,a.y+(a.h+o[s].h)/2+8)}for(let s of o)this.place(s.fv.label,`translate(${s.left}px, ${s.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((s,a)=>{let l=this.floorMap.get(s.floorId);if(this.roomId!==null&&s.room!==this.roomId||s.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(s.views==="house"||s.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}if(s.withRoof&&(!this.roof||this.roofO<nu*.6)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new $(s.p[0],s.p[1]+(l?.y??0)+(s.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),s.p[2]),u=this.camera.position.clone().sub(c),h=u.length();if(s.near!==void 0&&h>s.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=u.normalize().dot(new $(s.n[0],s.n[1],s.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*s.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,f)}),this.updateDevicePins(t,e);for(let s of this.floors){let a=s.to<.99||s.o<.9||r||this.roomId!==null||this.otherFloor(s),l=s.floor.elevation+s.y+.05;for(let c of s.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new $,r=this.houseView;for(let o of this.persons){let s=this.personPins.get(o.id),a=this.floorMap.get(o.floorId),l=this.figures.get(o.id);if(!s)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(s,null),l?.visible&&(l.visible=!1,this.invalidate());continue}let c=this.personAt.get(o.id);if(!c||c.floorId!==o.floorId)c={floorId:o.floorId,x:o.x,z:o.z};else{let f=o.x-c.x,d=o.z-c.z;Math.hypot(f,d)>.02?(c={floorId:o.floorId,x:c.x+f*.12,z:c.z+d*.12},this.labelsDirty=!0,this.invalidate()):c={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,c);let u=a.floor.elevation+a.y;if(l){let f=Math.atan2(this.camera.position.x-c.x,this.camera.position.z-c.z);(!l.visible||l.position.x!==c.x||l.position.y!==u||l.position.z!==c.z||l.rotation.y!==f)&&(l.visible=!0,l.position.set(c.x,u,c.z),l.rotation.y=f,this.invalidate())}n.set(c.x,u+(l?1.85:.9),c.z).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(s,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let s=this.devicePins.get(o.id)?.el;if(!s)continue;let a=this.floorMap.get(o.floorId),l=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!a||r&&!l||a.to<.99||a.o<.9||o.pin===!1||this.otherFloor(a)){this.place(s,null);continue}if(n.set(o.x,a.floor.elevation+a.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(s,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(s)!==u&&(this.pinMode.set(s,u),s.classList.toggle("fp3d-dev-full",u==="full"),s.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(s,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let o=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:o.calls,triangles:o.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=_T(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function _T(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function MT(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(s,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(s,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(s,a,l)=>{e.save(),e.beginPath(),e.rect(s*256,a*256,256,256),e.clip(),l(s*256,a*256),e.restore()};r(0,0,(s,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(s,c,s+256,c,.09);let u=s+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(s,a)=>{for(let l=0;l<7;l++){let c=s+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(s,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(s+c,a,s+c,a+256,.1),n(s,a+c,s+256,a+c,.1)}}),r(1,1,(s,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(s,c,s+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(s+h+.75,c,s+h+.75,c+256/2,.09)}}),r(2,1,(s,a)=>{n(s+.75,a,s+.75,a+256,.08),n(s,a+.75,s+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(s+l*97%256,a+(l*61+l*l%37)%256,2,2)});let o=new yn(t);return o.flipY=!1,o.wrapS=Sn,o.wrapT=Sn,o.anisotropy=4,o.colorSpace=ke,o}function ST(i){let t=new Ht({map:i,transparent:!0,blending:_e,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function wT(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new yn(i);return e.wrapS=dr,e.wrapT=dr,e.colorSpace=ke,e}function la(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function Wf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function TT(i){let t=new Ht({vertexColors:!0,transparent:!0,depthWrite:!1,side:ee,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function ET(i){let t=new Ht({vertexColors:!0,transparent:!0,blending:_e,depthWrite:!1,side:ee});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function vb(i,t){let e=i.rooms.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,o]of t){let s=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===o);if(s<0||a<0)continue;let l=n(s),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,o)=>n(o))}function AT(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new yn(t);return r.colorSpace=ke,r}function RT(){let t=Xf,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let s=0;s<=t;s++){let a=Math.round(s/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let o=new yn(e);return o.anisotropy=4,o.colorSpace=ke,o}function PI(i,t){return new Yf(i,t)}function yb(i,t){return Math.max(.5,i-Math.max(.25,t))+.11}function _b(i,t,e,n,r,o){let a=Math.max(.22,r);for(let l=0;l<4;l++){let c=o+l*Math.PI/2,u=Math.cos(c),h=Math.sin(c),d=[[.12,-.045],[a,-.065],[a,.065],[.12,.045]].map(([p,b])=>[t+p*u-b*h,n+p*h+b*u]);De(i,d,e-.006,e+.006,dT,pT,{aoFrom:0,bottom:!0})}}function Hf(i,t,e,n,r=!0){let[o,s,a]=t.size??ca[t.lamp],l=t.base??0,c=(t.rotation??0)*Kt,u=Math.cos(c),h=Math.sin(c),f=(g,m)=>[t.x+g*u-m*h,t.z+g*h+m*u],d=(g,m,x,_,v,M=14)=>{let T=[];for(let C=0;C<M;C++){let y=C/M*Math.PI*2;T.push([t.x+Math.cos(y)*g,t.z+Math.sin(y)*g])}De(i,T,m,x,_,v,{aoFrom:0,bottom:!0})},p=(g,m,x,_,v,M,T,C=T)=>De(i,[f(g,x),f(m,x),f(m,_),f(g,_)],v,M,T,C,{aoFrom:0,bottom:!0}),b=Math.max(.05,Math.min(o,s)/2);switch(t.lamp){case"ceiling":d(b*.25,e-.04,e,se,se,8),d(b,e-Math.max(.04,a)-.035,e-.04,n,n);break;case"pendant":{let g=Math.max(.4,e-a);d(.06,e-.02,e,se,se,8);let m=t.variant==="globe"?g+2*b:t.variant==="drum"?g+.24:g+.2;if(d(.008,m,e-.02,se,se,5),t.variant==="globe")for(let _=0;_<7;_++){let v=Math.PI*(_/7),M=Math.PI*((_+1)/7);d(b*Math.max(.2,Math.sin((v+M)/2)),g+b-b*Math.cos(v),g+b-b*Math.cos(M),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)d(b*(.25+.75*(4-_)/4),g+.06*_,g+.06*(_+1),n,n,16);else t.variant==="drum"?d(b,g,g+.24,n,n,18):(d(b*.35,g+.14,g+.2,n,n,12),d(b,g,g+.14,n,n,16));break}case"fan":{let g=Math.max(.5,e-Math.max(.25,a));d(.06,e-.03,e,se,se,10),d(.012,g+.16,e-.03,se,se,6),d(.13,g+.07,g+.16,se,se,16),d(.11,g,g+.07,n,n,16),r&&_b(i,t.x,yb(e,a),t.z,o/2,c);break}case"downlight":d(b,e-.012,e,se,se,12),d(b*.7,e-.02,e-.012,n,n,12);break;case"spot":d(b*.6,e-.02,e,se,se,10),d(b,e-Math.max(.06,a),e-.02,se,se,12),d(b*.8,e-Math.max(.06,a)-.008,e-Math.max(.06,a),n,n,12);break;case"panel":p(-o/2,o/2,-s/2,s/2,e-Math.max(.015,a),e,se,se),p(-o/2+.02,o/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,a)-.004,e-Math.max(.015,a),n);break;case"uplight":d(Math.max(.1,b*.6),l,l+.03,se,se),d(.014,l+.03,l+a-.12,se,se,6),d(b,l+a-.14,l+a-.02,se,se),d(b*.92,l+a-.02,l+a,n,n);break;case"bollard":d(b,l,l+a-.14,se,se,10),d(b*.9,l+a-.14,l+a-.03,n,n,10),d(b*1.1,l+a-.03,l+a,se,se,10);break;case"garden":d(.012,l,l+a-.08,se,se,5),d(b,l+a-.08,l+a-.01,se,se,10),d(b*.8,l+a-.01,l+a,n,n,10);break;case"floor":d(Math.max(.1,b*.7),l,l+.03,se,se),d(.014,l+.03,l+a-.28,se,se,6),d(b,l+a-.3,l+a,n,n);break;case"table":d(Math.max(.05,b*.55),l,l+.03,se,se),d(.012,l+.03,l+a-.16,se,se,6),d(b,l+a-.18,l+a,n,n);break;case"wall":{let g=t.base??bc;p(-o/2+.03,o/2-.03,-s/2,-s/2+.02,g,g+a,se),p(-o/2,o/2,-s/2+.02,s/2,g+a*.15,g+a*.85,n);break}case"strip":{let g=Math.max(.02,a),m=t.base!=null?t.base+g:e-.04;if(!t.roll&&!t.upright&&!t.rise){p(-o/2,o/2,-s/2,s/2,m-g,m,n);break}let x=(t.roll??0)*Kt,_=Math.cos(x),v=Math.sin(x),M=t.upright?l+o/2:m-g/2,T=(t.upright?0:t.rise??0)*Kt,C=(F,D,A)=>{let R=F,P=D*_-A*v,L=D*v+A*_;return T&&([R,P]=[R*Math.cos(T)-P*Math.sin(T),R*Math.sin(T)+P*Math.cos(T)]),t.upright&&([R,P]=[-P,R]),[t.x+R*u-L*h,M+P,t.z+R*h+L*u]},y=[C(-o/2,-g/2,-s/2),C(o/2,-g/2,-s/2),C(o/2,-g/2,s/2),C(-o/2,-g/2,s/2),C(-o/2,g/2,-s/2),C(o/2,g/2,-s/2),C(o/2,g/2,s/2),C(-o/2,g/2,s/2)],E=new q(n),S=[t.x,M,t.z],w=(F,D,A,R)=>{let[P,L,I]=[y[F],y[D],y[A]],O=[(L[1]-P[1])*(I[2]-P[2])-(L[2]-P[2])*(I[1]-P[1]),(L[2]-P[2])*(I[0]-P[0])-(L[0]-P[0])*(I[2]-P[2]),(L[0]-P[0])*(I[1]-P[1])-(L[1]-P[1])*(I[0]-P[0])],B=[P[0]-S[0],P[1]-S[1],P[2]-S[2]],z=O[0]*B[0]+O[1]*B[1]+O[2]*B[2]<0,[G,H,X,j]=z?[y[R],y[A],y[D],y[F]]:[y[F],y[D],y[A],y[R]];i.tri(G,H,X,E,E,E),i.tri(G,X,j,E,E,E)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{Rf as FloorMap,Yf as FloorplanViewer,Cf as WalkCamera,PI as createViewer,lI as funLib,iT as furnitureFront,nT as furniturePreview,yT as isLowEnd,_b as pushFanBlades,Hf as pushLampModel};
