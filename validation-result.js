var protoValidationResult = {
	addError: function(message, subject, criteria, context) {
		this.errors.push({
			message: message,
			context: context.path.join('/'),
			value: subject,
			criteria: criteria
		});
		this.valid = false;
		return this;
	}
};

module.exports = function(instance) {
	return Object.create(protoValidationResult, {
		instance: { enumerable:true, writable:false, value:instance },
		valid: { enumerable:true, writable:true, value:true },
		errors: { enumerable:true, writable:false, value:[] }
	});
};
