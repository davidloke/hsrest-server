var definitions = {
	"applicationInfo" : {
		"type": "object",
		"required": ["applicationID", "userNric", "userName", "industryType", "developmentCategory", "functionalArea", "subFunctionalArea", "applicationStatus"],
		"properties": {
			"applicationID": {
				"type": ["string", "null"]
			},
			"userNric": {
				"type": ["string", "null"]
			},
			"userName": {
				"type": ["string", "null"]
			},
			"industryType": {
				"type": ["string", "null"]
			},
			"developmentCategory": {
				"type": ["string", "null"]
			},
			"functionalArea": {
				"type": ["string", "null"]
			},
			"subFunctionalArea": {
				"type": ["string", "null"]
			},
			"applicationStatus": {
				"type": ["string", "null"]
			}
		}
	},

	"applicationContactInfo" : {
		"required": ["contactPersonName", "contactPersonDesignation", "contactPersonPhone", "contactPersonEmail", "contactPersonSecondaryEmail", "correspondenceAddress", "lofAddresseeName", "lofAddresseeDesignation", "lofAddresseeEmail"],
		"type": "object",
		"properties": {
			"contactPersonName": {
				"type": ["string", "null"]
			},
			"contactPersonDesignation": {
				"type": ["string", "null"]
			},
			"contactPersonPhone": {
				"type": ["string", "null"]
			},
			"contactPersonEmail": {
				"type": ["string", "null"]
			},
			"contactPersonSecondaryEmail": {
				"type": ["string", "null"]
			},
						
			"correspondenceAddress": {
				"$ref": "AddressField"
			},
			"lofAddresseeName": {
				"type": ["string", "null"]
			},
			"lofAddresseeDesignation": {
				"type": ["string", "null"]
			},
			"lofAddresseeEmail": {
				"type": ["string", "null"]
			}
		}
	},

	"applicationLocationDeployed" : {
		"type": "object",
		"required": ["locationDeployedType", "locationDeployedProjectAddress", "locationDeployedAddress"],
		"properties": {
			"locationDeployedType": {
				"type": ["string", "null"]
			},
			"locationDeployedProjectAddress": {
				"type": ["string", "null"]
			},
			"locationDeployedAddress": {
				"$ref": "AddressField"
			}
		}
	},

	"claimInfo" : {
		"type": "object",
		"required": ["applicationID", "officerID", "officerName", "approvedGrantAmount"],
		"properties": {
			"applicationID": {
				"type": ["string", "null"]
			},
			"officerID": {
				"type": ["string", "null"]
			},
			"officerName": {
				"type": ["string", "null"]
			},
			"approvedGrantAmount": {
				"type": ["string", "null"]
			}
		}
	},

	"claimContactInfo" : {
		"type": "object",
		"required": ["contactPersonName", "contactPersonDesignation", "contactPersonPhone", "contactPersonEmail", "contactPersonSecondaryEmail", "correspondenceAddress"],
		"properties": {
			"contactPersonName": {
				"type": ["string", "null"]
			},
			"contactPersonDesignation": {
				"type": ["string", "null"]
			},
			"contactPersonPhone": {
				"type": ["string", "null"]
			},
			"contactPersonEmail": {
				"type": ["string", "null"]
			},
			"contactPersonSecondaryEmail": {
				"type": ["string", "null"]
			},
			
			"correspondenceAddress": {
				"$ref": "AddressField"
			}
		}
	},

	"claimLocationDeployed" : {
		"type": "object",
		"required": ["locationDeployedType", "locationDeployedProjectAddress", "locationDeployedAddress"],
		"properties": {
			"locationDeployedType": {
				"type": ["string", "null"]
			},
			"locationDeployedProjectAddress": {
				"type": ["string", "null"]
			},
			"locationDeployedAddress": {
				"$ref": "AddressField"
			}
		}
	},

	"companyGeneralInfo" : {
		"type": "object",
		"required": ["companyUEN"],
		"properties": {
			"companyUEN": {
				"type": ["string", "null"]
			}
		}
	},

	"projectInfo" : {
		"type": "object",
		"required": ["projectTitle", "startDate", "endDate", "costs"],
		"properties": {
			"projectTitle": {
				"type": ["string", "null"]
			},
			"startDate": {
				"type": ["string", "null"],
				"format": "date-time"
			},
			"endDate": {
				"type": ["string", "null"],
				"format": "date-time"
			},
			"costs": {
				"type": "array",
				"items": {
				"$ref": "CostItem"
				}
			}
		}
	},

	"costItem" : {
		"$id": "CostItem",
		"type": "object",
		"required" : ["type", "vendorName", "vendorUEN", "vendorSgRegisteredCheck"],
		"properties": {
			"type": {
				"type": ["string", "null"]
			},
			"vendorName": {
				"type": ["string", "null"]
			},
			"vendorUEN": {
				"type": ["string", "null"]
			},
			"vendorSgRegisteredCheck": {
				"type": "boolean"
			}
		}
	},

	"contactPerson" : {
		"id": "ContactPerson", 
		"required": ["contactPersonName", "contactPersonDesignation", "contactPersonPhone", "contactPersonEmail", "contactPersonSecondaryEmail"],
		"type": "object",
		"properties": {
			"contactPersonName": {
				"type": ["string", "null"]
			},
			"contactPersonDesignation": {
				"type": ["string", "null"]
			},
			"contactPersonPhone": {
				"type": ["string", "null"]
			},
			"contactPersonEmail": {
				"type": ["string", "null"]
			},
			"contactPersonSecondaryEmail": {
				"type": ["string", "null"]
			}
		}
	},

	"addressField" : {
		"id": "AddressField",
		"type": "object",
		"required":["addressType","foreignAddress1","foreignAddress2", "block", "street", "level", "buildingName", "unit","postalCode"],
		"properties": {
			"addressType": {
				"type": ["string", "null"]
			},
			"foreignAddress1": {
				"type": ["string", "null"]
			},
			"foreignAddress2": {
				"type": ["string", "null"]
			},
			"block": {
				"type": ["string", "null"]
			},
			"street": {
				"type": ["string", "null"]
			},
			"level": {
				"type": ["string", "null"]
			},
			"buildingName": {
				"type": ["string", "null"]
			},
			"unit": {
				"type": ["string", "null"]
			},
			"postalCode": {
				"type": ["string", "null"]
			}
		}
	},


	"entityItemList": {
		"type": "array",
		"items": {
			"type": "object",
			"required": ["entityType", "entityName", "entityID", "certificationNumber", "blacklist", "watchlist"],
			"properties": {
				"entityType": {
					"type": ["string", "null"]
				},
				"entityName": {
					"type": ["string", "null"]
				},
				"entityID": {
					"type": ["string", "null"]
				},
				"certificationNumber": {
					"type": ["string", "null"]
				},
				"blacklist": {
					"type": ["object", "null"],
					"required": ["agencyList", "reason"],
					"properties": {
						"agencyList": {
							"type": "array",
							"items": {
								"type": ["string", "null"]
							},
						},
						"reason": {
							"type": ["string", "null"]
						}
					}
				},
				"watchlist": {
					"type": ["object", "null"],
					"required": ["agencyList", "reason"],
					"properties": {
						"agencyList": {
							"type": "array",
							"items": {
								"type": ["string", "null"]
							},
						},
						"reason": {
							"type": ["string", "null"],
						}
					}
				}
			}
		}
	},
	
	"updateEntity": {
		"type": "object",
		"required": ["entityType", "entityName", "entityID", "certificationNumber", "blacklist", "watchlist"],
		"properties": {
			"entityType": {
				"type": ["string", "null"]
			},
			"entityName": {
				"type": ["string", "null"]
			},
			"entityID": {
				"type": ["string", "null"]
			},
			"certificationNumber": {
				"type": ["string", "null"]
			},
			"blacklist": {
				"type": ["object", "null"],
				"required": ["agencyList", "reason"],
				"properties": {
					"agencyList": {
						"type": "array",
						"items": {
							"type": ["string", "null"]
						},
					},
					"reason": {
						"type": ["string", "null"]
					}
				}
			},
			"watchlist": {
				"type": ["object", "null"],
				"required": ["agencyList", "reason"],
				"properties": {
					"agencyList": {
						"type": "array",
						"items": {
							"type": ["string", "null"]
						},
					},
					"reason": {
						"type": ["string", "null"],
					}
				}
			}
		}
	}
	
	
	/*,
	"watchBlackListEntity" : {
		"type": "object",
		"properties": {
			"entityType": {
				"type": ["string", "null"]
			},
			"entityName": {
				"type": ["string", "null"]
			},
			"entityID": {
				"type": ["string", "null"]
			},
			"certificationNumber": {
				"type": ["string", "null"]
			},
			"blacklist": {
				"type": ["object", "null"],
				"properties": {
					"agencyList": {
						"type": "array",
						"items": {
							"type": ["string", "null"]
						},
					},
					"reason": {
						"type": ["string", "null"]
					}
				}
			},
			"watchlist": {
				"type": ["object", "null"],
				"properties": {
					"agencyList": {
						"type": "array",
						"items": {
							"type": ["string", "null"]
						},
					},
					"reason": {
						"type": ["string", "null"],
					}
				}
			}
		}
	}*/
	
}

module.exports = definitions


//var Ajv = require('ajv');
//var ajv = new Ajv({allErrors: true}); 	

//var validate = ajv.addSchema(AddressField).addSchema(ContactPerson).compile(ApplicationContactInfo);
//var valid = validate({
//"contactPerson": { "contactPersonName": "Doe", "contactPersonEmail": "asdas"},
//"faoobar" : {"abc":"asd"}
//});
//if (!valid) console.log(validate.errors);