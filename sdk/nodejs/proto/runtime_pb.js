/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var proto = { pulumirpc: {} }, global = proto;

var plugin_pb = require('./plugin_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.exportSymbol('proto.pulumirpc.ConstructRequest', null, global);
goog.exportSymbol('proto.pulumirpc.ConstructResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConstructRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.ConstructRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.ConstructRequest.displayName = 'proto.pulumirpc.ConstructRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConstructRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConstructRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConstructRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConstructRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    librarypath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resource: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    args: (f = msg.getArgs()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    opts: (f = msg.getOpts()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConstructRequest}
 */
proto.pulumirpc.ConstructRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConstructRequest;
  return proto.pulumirpc.ConstructRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConstructRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConstructRequest}
 */
proto.pulumirpc.ConstructRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLibrarypath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResource(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setArgs(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConstructRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConstructRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConstructRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConstructRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLibrarypath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResource();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string libraryPath = 1;
 * @return {string}
 */
proto.pulumirpc.ConstructRequest.prototype.getLibrarypath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.ConstructRequest.prototype.setLibrarypath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource = 2;
 * @return {string}
 */
proto.pulumirpc.ConstructRequest.prototype.getResource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.ConstructRequest.prototype.setResource = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.pulumirpc.ConstructRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.pulumirpc.ConstructRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Struct args = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.ConstructRequest.prototype.getArgs = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.ConstructRequest.prototype.setArgs = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.pulumirpc.ConstructRequest.prototype.clearArgs = function() {
  this.setArgs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.ConstructRequest.prototype.hasArgs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Struct opts = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.ConstructRequest.prototype.getOpts = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.ConstructRequest.prototype.setOpts = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.pulumirpc.ConstructRequest.prototype.clearOpts = function() {
  this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.ConstructRequest.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.ConstructResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.ConstructResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.ConstructResponse.displayName = 'proto.pulumirpc.ConstructResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.ConstructResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.ConstructResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.ConstructResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConstructResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    outs: (f = msg.getOuts()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.ConstructResponse}
 */
proto.pulumirpc.ConstructResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.ConstructResponse;
  return proto.pulumirpc.ConstructResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.ConstructResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.ConstructResponse}
 */
proto.pulumirpc.ConstructResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOuts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.ConstructResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.ConstructResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.ConstructResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.ConstructResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOuts();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct outs = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.ConstructResponse.prototype.getOuts = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.ConstructResponse.prototype.setOuts = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.pulumirpc.ConstructResponse.prototype.clearOuts = function() {
  this.setOuts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.ConstructResponse.prototype.hasOuts = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.pulumirpc);
