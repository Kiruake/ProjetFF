migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l0bnwzlh",
    "name": "points_defis",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "mgxbhubzt31sxy9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("l0bnwzlh")

  return dao.saveCollection(collection)
})
