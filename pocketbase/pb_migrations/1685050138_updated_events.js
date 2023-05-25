migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vxedt4q",
    "name": "membre_max",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t4dzwygr",
    "name": "membre_actuel",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // remove
  collection.schema.removeField("1vxedt4q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t4dzwygr",
    "name": "membre",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
