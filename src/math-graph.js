let idCount = 0;

function newId(){

	idCount ++;

	return idCount;

}

var MathGraph = {
	createGraph: function(){
		return new Graph();
	},
};

let Procedures = {
	add: ( var1, var2 ) => {
		return var1 + var2;
	},
	sub: (var1, var2 ) => {
		return var1 - var2;
	},
	mul: (var1, var2) => {
		return var1 * var2;
	},
	div: (var1, var2) => {
		return var1 / var2;
	}
};

function Graph(){

	this._variables = {};

	this._procedures =[];

}

Graph.prototype.variable = function( value ){

	var id = newId();

	var variable = new Variable( value, id );

	this._variables[id] = variable;

	return variable;

};

for( let type in Procedures ){

	Graph.prototype[ type ] = function(){
		
		var args = Array.apply(this, arguments);

		var inputIds = args.map( arg => arg._id )

		var outputVariable = this.variable();

		var outputId = outputVariable._id;
	
		this._procedures.push({
			type: type,
			inputIds: inputIds,
			outputId:  outputId
		});

		return outputVariable;
	
	}
}

Graph.prototype.run = function( input={} ){
	

	// init variables
	for(var id in this._variables){

		if( input[id] != null ){

			this._variables[id].value = input[id];

		}
	}

	// calculation
	for(var i in this._procedures){

		var procedure = this._procedures[i];

		var length = procedure.length;

		var procedureFunc = Procedures[ procedure.type ];
			
		var inputList = [];

		for( var j in procedure.inputIds ){

			var id = procedure.inputIds[j];

			inputList[ j ] = this._variables[ id ].value;

		}

		var outputValue = procedureFunc.apply( null, inputList ) ;

		var outputId = procedure.outputId;

		this._variables[ outputId ].value = outputValue;

	}

	return this._variables;

};



function Variable( value, id ){

	this.value = value;

	this._id = id;

}

// when variable is used as hash"s key, this method is called.   
Variable.prototype.toString = function(){

	return this._id;

};

export default MathGraph;