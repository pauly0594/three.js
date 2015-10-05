/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

THREE.Light = function Light ( color ) {

	THREE.Object3D.call( this );

	this.type = 'Light';

	this.color = new THREE.Color( color );

};

THREE.Light.prototype = Object.create( THREE.Object3D.prototype );
THREE.Light.prototype.constructor = THREE.Light;

THREE.Light.prototype.copy = function ( source ) {

	THREE.Object3D.prototype.copy.call( this, source );

	this.color.copy( source.color );

	return this;

};

THREE.Light.prototype.toJSON = function ( meta ) {

	var data = THREE.Object3D.prototype.toJSON.call( this, meta );

	data.object.color = this.color.getHex();
	if ( this.groundColor !== undefined ) data.object.groundColor = this.groundColor.getHex();

	if ( this.intensity !== undefined ) data.object.intensity = this.intensity;
	if ( this.distance !== undefined ) data.object.distance = this.distance;
	if ( this.angle !== undefined ) data.object.angle = this.angle;
	if ( this.decay !== undefined ) data.object.decay = this.decay;
	if ( this.exponent !== undefined ) data.object.exponent = this.exponent;

	return data;

};
