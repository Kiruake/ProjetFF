migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m2ts1p0l",
    "name": "user_participation",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tf9atejylm0v08l")

  // remove
  collection.schema.removeField("m2ts1p0l")

  return dao.saveCollection(collection)
})
