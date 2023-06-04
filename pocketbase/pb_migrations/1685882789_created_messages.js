migrate((db) => {
  const collection = new Collection({
    "id": "hcxdd2hqh2m6rga",
    "created": "2023-06-04 12:46:29.152Z",
    "updated": "2023-06-04 12:46:29.152Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hkltznxr",
        "name": "chat",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "7cscqaunwe3begv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hcxdd2hqh2m6rga");

  return dao.deleteCollection(collection);
})
